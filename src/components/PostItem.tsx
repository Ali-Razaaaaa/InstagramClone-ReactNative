import React, { useState } from 'react';
import { View, Text, Image, TouchableOpacity, StyleSheet, Dimensions } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import { useDispatch, useSelector } from 'react-redux';
import { toggleLike } from '../store/likesSlice';
import CommentModal from '../modals/CommentModal';
import { colors, radius, spacing, typography } from '../theme';

const { width } = Dimensions.get('window');

export const PostItem = ({ post, onImagePress }) => {
  const dispatch = useDispatch();
  
  // Get persisted like state from Redux
  const isLikedByMe = useSelector(state => state.likes.likedPosts[post.id] ?? post.isLikedByMe ?? false);
  const likesCount = useSelector(state => state.likes.likeCounts[post.id] ?? post.likes);
  
  const [commentsVisible, setCommentsVisible] = useState(false);
  const [comments, setComments] = useState(
    post.commentsData || [{ user: 'user1', text: 'Amazing! 🔥' }, { user: 'user2', text: 'Love this! ❤️' }]
  );

  const handleLike = () => {
    dispatch(toggleLike({ postId: post.id, initialCount: post.likes }));
  };

  const handleAddComment = (text) => {
    setComments(prev => [...prev, { user: 'currentUser', text }]);
  };

  const renderHeader = () => (
    <View style={styles.header}>
      <Image source={post.user.avatarUrl} style={styles.avatar} />
      <View style={styles.userInfo}>
        <View style={styles.nameRow}>
          <Text style={styles.name}>{post.user.name}</Text>
          {post.user.isVerified && <Icon name="verified" size={15} color={colors.accent} />}
        </View>
        {post.user.location && <Text style={styles.location}>{post.user.location}</Text>}
      </View>
      <TouchableOpacity activeOpacity={0.7}>
        <Icon name="more-horiz" size={24} color={colors.text} />
      </TouchableOpacity>
    </View>
  );

  const renderImage = () => (
    <TouchableOpacity activeOpacity={0.9} onPress={onImagePress}>
      <Image source={post.imageUrl} style={styles.postImage} resizeMode="cover" />
    </TouchableOpacity>
  );

  const renderActions = () => (
    <View style={styles.actions}>
      <View style={styles.actionLeft}>
        <TouchableOpacity onPress={handleLike} style={styles.actionIcon} activeOpacity={0.7}>
          <Icon name={isLikedByMe ? 'favorite' : 'favorite-border'} size={28} color={isLikedByMe ? colors.danger : colors.text} />
        </TouchableOpacity>
        <TouchableOpacity style={styles.actionIcon} onPress={() => setCommentsVisible(true)} activeOpacity={0.7}>
          <Icon name="chat-bubble-outline" size={26} color={colors.text} style={{ transform: [{ scaleX: -1 }] }} />
        </TouchableOpacity>
        <TouchableOpacity style={styles.actionIcon} activeOpacity={0.7}>
          <Icon name="send" size={26} color={colors.text} />
        </TouchableOpacity>
      </View>
      <TouchableOpacity activeOpacity={0.7}>
        <Icon name="bookmark-border" size={28} color={colors.text} />
      </TouchableOpacity>
    </View>
  );

  const renderFooter = () => (
    <View style={styles.footer}>
      <Text style={styles.likesText}>{likesCount} likes</Text>
      
      {post.caption && (
        <Text style={styles.captionText}>
          <Text style={styles.captionUser}>{post.user.name}</Text> {post.caption}
        </Text>
      )}
      
      <TouchableOpacity onPress={() => setCommentsVisible(true)} activeOpacity={0.7}>
        <Text style={styles.viewCommentsText}>View all {comments.length} comments</Text>
      </TouchableOpacity>
    </View>
  );

  return (
    <View style={styles.container}>
      {renderHeader()}
      {renderImage()}
      {renderActions()}
      {renderFooter()}

      <CommentModal
        visible={commentsVisible}
        comments={comments}
        onClose={() => setCommentsVisible(false)}
        onAddComment={handleAddComment}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginBottom: spacing.lg,
    backgroundColor: colors.background,
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: spacing.md,
    paddingVertical: 10,
  },
  avatar: {
    width: 34,
    height: 34,
    borderRadius: 17,
    marginRight: 10,
    backgroundColor: colors.surfaceLight,
    borderWidth: 0.5,
    borderColor: colors.border,
  },
  userInfo: {
    flex: 1,
    justifyContent: 'center',
  },
  nameRow: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  name: {
    color: colors.text,
    fontSize: 14,
    fontWeight: typography.bold,
    marginRight: 4,
  },
  location: {
    color: colors.textSecondary,
    fontSize: 12,
  },
  postImage: {
    width: width,
    height: width, // Square images
    backgroundColor: colors.surfaceLight,
  },
  actions: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: spacing.md,
    paddingTop: 12,
    paddingBottom: 8,
  },
  actionLeft: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  actionIcon: {
    marginRight: 16,
  },
  footer: {
    paddingHorizontal: spacing.md,
  },
  likesText: {
    color: colors.text,
    fontWeight: typography.bold,
    fontSize: 14,
    marginBottom: 6,
  },
  captionText: {
    color: colors.text,
    fontSize: 14,
    lineHeight: 18,
    marginBottom: 6,
  },
  captionUser: {
    fontWeight: typography.bold,
  },
  viewCommentsText: {
    color: colors.textSecondary,
    fontSize: 14,
    marginBottom: 8,
  },
});
