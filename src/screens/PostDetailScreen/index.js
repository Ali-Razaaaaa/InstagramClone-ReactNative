import React from 'react';
import { View, Text, ScrollView, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import { PostItem } from '../../components/PostItem';
import { colors } from '../../theme';
import styles from './style';

/**
 * PostDetailScreen — full single-post view.
 * Reached by tapping any post image in Home, Search, or Profile grid.
 */
export const PostDetailScreen = ({ route, navigation }) => {
  const { post } = route.params;

  const renderHeader = () => (
    <View style={styles.topBar}>
      <TouchableOpacity style={styles.backBtn} onPress={() => navigation.goBack()} activeOpacity={0.7}>
        <Icon name="arrow-back" size={24} color={colors.text} />
      </TouchableOpacity>
      <Text style={styles.topBarTitle}>Post</Text>
    </View>
  );

  return (
    <View style={styles.container}>
      {renderHeader()}
      <ScrollView contentContainerStyle={styles.scrollContent} showsVerticalScrollIndicator={false}>
        <PostItem post={post} />
      </ScrollView>
    </View>
  );
};
