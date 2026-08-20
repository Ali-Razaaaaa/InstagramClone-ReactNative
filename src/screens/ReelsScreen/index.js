import React, { useRef, useState, useCallback, useEffect } from 'react';
import { View, Text, FlatList, Dimensions, TouchableOpacity, Image, StyleSheet } from 'react-native';
import Video from 'react-native-video';
import Icon from 'react-native-vector-icons/MaterialIcons';
import { useDispatch, useSelector } from 'react-redux';
import { toggleLike } from '../../store/likesSlice';
import { ReelsService } from '../../services/ReelsService';
import CommentModal from '../../modals/CommentModal';
import { colors } from '../../theme';
import styles from './style';

const { height } = Dimensions.get('window');

const ReelItem = ({ reel, isActive, onOpenComments }) => {
  const dispatch = useDispatch();
  const [paused, setPaused] = useState(!isActive);
  const [loading, setLoading] = useState(true);

  const isLikedByMe = useSelector(state => state.likes.likedPosts[reel.id] ?? reel.isLikedByMe ?? false);
  const likesCount = useSelector(state => state.likes.likeCounts[reel.id] ?? reel.likes);

  useEffect(() => {
    setPaused(!isActive);
  }, [isActive]);

  const handleToggleLike = () => {
    dispatch(toggleLike({ postId: reel.id, initialCount: reel.likes }));
  };

  const renderVideo = () => (
    <TouchableOpacity style={StyleSheet.absoluteFill} activeOpacity={1} onPress={() => setPaused(p => !p)}>
      <Video
        source={reel.videoUrl}
        style={StyleSheet.absoluteFill}
        resizeMode="cover"
        repeat
        paused={paused}
        onLoad={() => setLoading(false)}
        onBuffer={() => setLoading(true)}
      />
    </TouchableOpacity>
  );

  const renderOverlays = () => (
    <>
      {loading && (
        <View style={styles.loadingOverlay}>
          <Text style={styles.loadingText}>Loading…</Text>
        </View>
      )}
      {paused && !loading && (
        <View style={styles.pausedOverlay} pointerEvents="none">
          <Icon name="play-arrow" size={72} color="rgba(255,255,255,0.7)" />
        </View>
      )}
      <View style={styles.topLabel}>
        <Text style={styles.reelsLabel}>REELS</Text>
      </View>
      <View style={styles.attributionContainer}>
        <Text style={styles.attributionText}>Videos by Pexels</Text>
      </View>
    </>
  );

  const renderRightActions = () => (
    <View style={styles.rightActions}>
      <TouchableOpacity style={styles.actionItem} onPress={handleToggleLike} activeOpacity={0.7}>
        <Icon name={isLikedByMe ? 'favorite' : 'favorite-border'} size={32} color={isLikedByMe ? colors.danger : colors.text} />
        <Text style={styles.actionCount}>{likesCount}</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.actionItem} onPress={() => onOpenComments(reel)} activeOpacity={0.7}>
        <Icon name="chat-bubble-outline" size={30} color={colors.text} style={{ transform: [{ scaleX: -1 }] }} />
        <Text style={styles.actionCount}>{reel.commentsCount || reel.comments.length}</Text>
      </TouchableOpacity>
      <View style={styles.actionItem}>
        <Icon name="send" size={30} color={colors.text} />
        <Text style={styles.actionCount}>Share</Text>
      </View>
      <View style={styles.actionItem}>
        <Icon name="more-vert" size={30} color={colors.text} />
      </View>
    </View>
  );

  const renderBottomInfo = () => (
    <View style={styles.bottomInfo}>
      <View style={styles.profileRow}>
        <Image source={reel.user.avatarUrl} style={styles.avatar} />
        <Text style={styles.username}>{reel.user.name}</Text>
        <TouchableOpacity style={styles.followButton} activeOpacity={0.7}>
          <Text style={styles.followText}>Follow</Text>
        </TouchableOpacity>
      </View>
      <Text style={styles.caption} numberOfLines={2}>{reel.title}</Text>
    </View>
  );

  return (
    <View style={styles.reelContainer}>
      {renderVideo()}
      {renderOverlays()}
      {renderRightActions()}
      {renderBottomInfo()}
    </View>
  );
};

export const ReelsScreen = () => {
  const [reels, setReels] = useState([]);
  const [activeIndex, setActiveIndex] = useState(0);
  const [page, setPage] = useState(1);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [hasMore, setHasMore] = useState(true);

  // Comment Modal state
  const [commentModalVisible, setCommentModalVisible] = useState(false);
  const [activeReelComments, setActiveReelComments] = useState([]);

  const fetchInitial = async () => {
    setLoading(true);
    setError(null);
    try {
      const data = await ReelsService.getReels(1, 10);
      setReels(data);
    } catch (e) {
      setError(e.message || 'Failed to load reels');
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchInitial();
  }, []);

  const loadMore = async () => {
    if (loading || !hasMore || error) return;
    setLoading(true);
    try {
      const nextPage = page + 1;
      const moreReels = await ReelsService.getReels(nextPage, 10);
      if (moreReels.length === 0) {
        setHasMore(false);
      } else {
        setReels(prev => [...prev, ...moreReels]);
        setPage(nextPage);
      }
    } catch (e) {
      console.warn('Failed to load more reels:', e);
    } finally {
      setLoading(false);
    }
  };

  const onViewableItemsChanged = useCallback(({ viewableItems }) => {
    if (viewableItems.length > 0 && viewableItems[0].index !== null) {
      setActiveIndex(viewableItems[0].index);
    }
  }, []);

  const viewabilityConfig = useRef({ itemVisiblePercentThreshold: 60 }).current;

  const handleOpenComments = (reel) => {
    setActiveReelComments(reel.comments || []);
    setCommentModalVisible(true);
  };

  const handleAddComment = (text) => {
    setActiveReelComments(prev => [...prev, { user: 'currentUser', text }]);
    // In a real app, you would also update the reel's comment count in state/API here.
  };

  if (error && reels.length === 0) {
    return (
      <View style={styles.errorContainer}>
        <Text style={styles.errorText}>{error}</Text>
        <TouchableOpacity style={styles.retryButton} onPress={fetchInitial} activeOpacity={0.8}>
          <Text style={styles.retryButtonText}>Retry</Text>
        </TouchableOpacity>
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <FlatList
        data={reels}
        keyExtractor={(item, index) => `${item.id}-${index}`}
        pagingEnabled
        showsVerticalScrollIndicator={false}
        decelerationRate="fast"
        onViewableItemsChanged={onViewableItemsChanged}
        viewabilityConfig={viewabilityConfig}
        onEndReached={loadMore}
        onEndReachedThreshold={0.5}
        getItemLayout={(_, index) => ({
          length: height,
          offset: height * index,
          index,
        })}
        renderItem={({ item, index }) => (
          <ReelItem
            reel={item}
            isActive={index === activeIndex}
            onOpenComments={handleOpenComments}
          />
        )}
      />

      <CommentModal
        visible={commentModalVisible}
        comments={activeReelComments}
        onClose={() => setCommentModalVisible(false)}
        onAddComment={handleAddComment}
      />
    </View>
  );
};
