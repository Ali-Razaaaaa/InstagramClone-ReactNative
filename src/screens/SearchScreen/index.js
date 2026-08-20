import React, { useState, useEffect, useCallback } from 'react';
import {
  View,
  Text,
  TextInput,
  Image,
  ScrollView,
  TouchableOpacity,
  ActivityIndicator,
} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import { PexelsClient } from '../../api/PexelsClient';
import { colors } from '../../theme';
import styles, { GRID_ITEM_SIZE } from './style';

export const SearchScreen = ({ navigation }) => {
  const [query, setQuery] = useState('');
  const [photos, setPhotos] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [searchFocused, setSearchFocused] = useState(false);

  const fetchPhotos = useCallback(async (searchQuery = '') => {
    setLoading(true);
    setError(null);
    try {
      let data;
      if (searchQuery.trim()) {
        data = await PexelsClient.get(`/search?query=${encodeURIComponent(searchQuery)}&per_page=25&orientation=square`);
      } else {
        data = await PexelsClient.get('/curated?per_page=25');
      }
      setPhotos(data.photos || []);
    } catch (e) {
      setError(e.message || 'Failed to load images');
    } finally {
      setLoading(false);
    }
  }, []);

  useEffect(() => {
    fetchPhotos();
  }, [fetchPhotos]);

  // Debounced search
  useEffect(() => {
    const timer = setTimeout(() => {
      fetchPhotos(query);
    }, 600);
    return () => clearTimeout(timer);
  }, [query, fetchPhotos]);

  const renderSearchBar = () => (
    <View style={styles.searchBarContainer}>
      <View style={[styles.searchBar, searchFocused && styles.searchBarFocused]}>
        <Icon name="search" size={20} color={colors.textSecondary} style={styles.searchIcon} />
        <TextInput
          style={styles.searchInput}
          placeholder="Search"
          placeholderTextColor={colors.placeholder}
          value={query}
          onChangeText={setQuery}
          onFocus={() => setSearchFocused(true)}
          onBlur={() => setSearchFocused(false)}
          returnKeyType="search"
        />
        {query.length > 0 && (
          <TouchableOpacity style={styles.clearBtn} onPress={() => setQuery('')} activeOpacity={0.7}>
            <Icon name="close" size={18} color={colors.textSecondary} />
          </TouchableOpacity>
        )}
      </View>
    </View>
  );

  const renderTopRow = () => {
    if (photos.length < 3) return null;
    return (
      <View style={styles.topRow}>
        <View style={styles.topLeft}>
          <Image source={{ uri: photos[0].src.large }} style={styles.topLeftImage} resizeMode="cover" />
        </View>
        <View style={styles.topRight}>
          <Image source={{ uri: photos[1].src.medium }} style={styles.topHalfImage} resizeMode="cover" />
          <View style={styles.halfSpacer} />
          <Image source={{ uri: photos[2].src.medium }} style={styles.topHalfImage} resizeMode="cover" />
        </View>
      </View>
    );
  };

  const renderGrid = () => {
    const gridPhotos = photos.slice(3);
    return (
      <View style={styles.grid}>
        {gridPhotos.map((photo, i) => (
          <TouchableOpacity
            key={photo.id || i}
            activeOpacity={0.9}
            onPress={() => navigation.navigate('PostDetail', {
              post: {
                id: photo.id.toString(),
                user: { name: photo.photographer, avatarUrl: { uri: photo.src.small }, isVerified: false },
                imageUrl: { uri: photo.src.large2x || photo.src.large },
                likes: Math.floor(Math.random() * 800) + 10,
                comments: Math.floor(Math.random() * 40) + 1,
                isLikedByMe: false,
              }
            })}
          >
            <Image source={{ uri: photo.src.medium }} style={styles.gridItem} resizeMode="cover" />
          </TouchableOpacity>
        ))}
      </View>
    );
  };

  const renderContent = () => {
    if (loading) {
      return (
        <View style={styles.loaderContainer}>
          <ActivityIndicator size="large" color={colors.text} />
        </View>
      );
    }

    if (error) {
      return (
        <View style={styles.loaderContainer}>
          <Text style={styles.errorText}>{error}</Text>
          <TouchableOpacity style={styles.retryButton} onPress={() => fetchPhotos(query)} activeOpacity={0.85}>
            <Text style={styles.retryButtonText}>Retry</Text>
          </TouchableOpacity>
        </View>
      );
    }

    return (
      <ScrollView showsVerticalScrollIndicator={false}>
        {renderTopRow()}
        {renderGrid()}
      </ScrollView>
    );
  };

  return (
    <View style={styles.container}>
      {renderSearchBar()}
      {renderContent()}
    </View>
  );
};
