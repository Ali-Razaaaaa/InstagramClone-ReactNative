import React from 'react';
import { View, Text, Image, StyleSheet, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import { colors, radius } from '../theme';

export const StoryItem = ({ story }) => {
  return (
    <TouchableOpacity style={styles.container} activeOpacity={0.8}>
      <View style={[styles.ring, !story.isAddStory && styles.activeRing]}>
        <Image source={story.avatarUrl} style={styles.avatar} />
      </View>
      {story.isAddStory && (
        <View style={styles.addIconContainer}>
          <Icon name="add" size={14} color={colors.text} />
        </View>
      )}
      <Text style={styles.name} numberOfLines={1}>
        {story.name}
      </Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    width: 80,
    alignItems: 'center',
    marginRight: 6,
  },
  ring: {
    width: 76,
    height: 76,
    borderRadius: 38,
    padding: 3,
    marginBottom: 6,
    justifyContent: 'center',
    alignItems: 'center',
  },
  activeRing: {
    borderWidth: 2,
    borderColor: colors.storyRing, // Instagram pinkish ring
  },
  avatar: {
    width: 68,
    height: 68,
    borderRadius: 34,
    borderWidth: 2,
    borderColor: colors.background,
  },
  addIconContainer: {
    position: 'absolute',
    bottom: 22,
    right: 4,
    backgroundColor: colors.accent,
    borderRadius: 12,
    width: 24,
    height: 24,
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 2,
    borderColor: colors.background,
  },
  name: {
    color: colors.text,
    fontSize: 11,
    textAlign: 'center',
    width: 76,
  },
});
