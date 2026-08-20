import React, { useEffect, useState } from 'react';
import { View, Text, FlatList, TouchableOpacity, ActivityIndicator } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import { FeedService } from '../../services/FeedService';
import { PostItem } from '../../components/PostItem';
import { StoryItem } from '../../components/StoryItem';
import { colors } from '../../theme';
import styles from './style';

export const HomeScreen = ({ navigation }) => {
  const [posts, setPosts] = useState([]);
  const [stories, setStories] = useState([]);
  const [page, setPage] = useState(1);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [hasMore, setHasMore] = useState(true);

  const fetchInitialData = async () => {
    setLoading(true);
    setError(null);
    try {
      const s = await FeedService.getStories();
      setStories(s);
      const p = await FeedService.getPosts(1, 20);
      setPosts(p);
    } catch (e) {
      setError(e.message || 'Failed to load posts');
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchInitialData();
  }, []);

  const loadMore = async () => {
    if (loading || !hasMore || error) return;
    setLoading(true);
    try {
      const nextPage = page + 1;
      const morePosts = await FeedService.getPosts(nextPage, 20);
      if (morePosts.length === 0) {
        setHasMore(false);
      } else {
        setPosts(prev => [...prev, ...morePosts]);
        setPage(nextPage);
      }
    } catch (e) {
      console.warn('Failed to load more:', e);
    } finally {
      setLoading(false);
    }
  };

  const renderTopBar = () => (
    <View style={styles.topBar}>
      <Text style={styles.logoText}>Instagram</Text>
      <View style={styles.topBarIcons}>
        <TouchableOpacity style={styles.iconButton} activeOpacity={0.7}>
          <Icon name="favorite-border" size={26} color={colors.text} />
        </TouchableOpacity>
        <TouchableOpacity style={styles.iconButton} activeOpacity={0.7}>
          <Icon name="send" size={26} color={colors.text} />
        </TouchableOpacity>
      </View>
    </View>
  );

  const renderStories = () => (
    <View style={styles.storiesContainer}>
      <FlatList
        data={stories}
        keyExtractor={item => item.id}
        horizontal
        showsHorizontalScrollIndicator={false}
        renderItem={({ item }) => <StoryItem story={item} />}
        contentContainerStyle={styles.storiesList}
      />
    </View>
  );

  const renderAttribution = () => (
    <View style={styles.attributionContainer}>
      <Text style={styles.attributionText}>Photos by Pexels</Text>
    </View>
  );

  const renderHeader = () => (
    <View>
      {renderTopBar()}
      {renderStories()}
      <View style={styles.divider} />
      {renderAttribution()}
    </View>
  );

  const renderFooter = () => {
    if (loading) {
      return <ActivityIndicator size="small" color={colors.text} style={styles.footerLoader} />;
    }
    if (error && posts.length === 0) {
      return (
        <View style={styles.errorContainer}>
          <Text style={styles.errorText}>{error}</Text>
          <TouchableOpacity style={styles.retryButton} onPress={fetchInitialData} activeOpacity={0.85}>
            <Text style={styles.retryButtonText}>Retry</Text>
          </TouchableOpacity>
        </View>
      );
    }
    return null;
  };

  return (
    <View style={styles.container}>
      <FlatList
        data={posts}
        keyExtractor={(item, index) => `${item.id}-${index}`}
        renderItem={({ item }) => <PostItem post={item} onImagePress={() => navigation.navigate('PostDetail', { post: item })} />}
        ListHeaderComponent={renderHeader}
        ListFooterComponent={renderFooter}
        showsVerticalScrollIndicator={false}
        onEndReached={loadMore}
        onEndReachedThreshold={0.5}
      />
    </View>
  );
};
