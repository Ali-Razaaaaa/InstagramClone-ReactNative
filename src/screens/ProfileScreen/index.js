import React, { useState } from 'react';
import { View, Text, Image, ScrollView, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import { useSelector } from 'react-redux';
import { colors } from '../../theme';
import styles from './style';

const suggestedUsers = [
  { id: '1', name: 'MAJU OFFICIAL', avatarUrl: require('../../assets/maju.PNG') },
  { id: '2', name: 'GAMING COM...', avatarUrl: require('../../assets/weishen.PNG') },
  { id: '3', name: 'Memes Official', avatarUrl: require('../../assets/meme.PNG') },
];

export const ProfileScreen = ({ navigation }) => {
  const [followCount, setFollowCount] = useState(0);
  const [followingMap, setFollowingMap] = useState({});
  const [activeTab, setActiveTab] = useState('posts');
  
  // Dynamic user posts count from Redux
  const userPostCount = useSelector(state => state.posts.userPostCount);

  const toggleFollow = (id) => {
    const wasFollowing = followingMap[id];
    setFollowingMap(prev => ({ ...prev, [id]: !wasFollowing }));
    setFollowCount(c => (wasFollowing ? c - 1 : c + 1));
  };

  const renderTopBar = () => (
    <View style={styles.topBar}>
      <View style={styles.topBarLeft}>
        <Icon name="lock-outline" size={16} color={colors.text} />
        <Text style={styles.usernameText}>ali_raza6521</Text>
        <Icon name="keyboard-arrow-down" size={20} color={colors.text} />
      </View>
      <View style={styles.topBarRight}>
        <TouchableOpacity style={styles.topBarIcon} activeOpacity={0.7} onPress={() => navigation.navigate('Add')}>
          <Icon name="add-box" size={28} color={colors.text} />
        </TouchableOpacity>
        <TouchableOpacity style={styles.topBarIcon} onPress={() => navigation.navigate('Drawer')} activeOpacity={0.7}>
          <Icon name="menu" size={30} color={colors.text} />
        </TouchableOpacity>
      </View>
    </View>
  );

  const renderProfileHeader = () => (
    <View style={styles.profileHeader}>
      <View style={styles.avatarContainer}>
        <Image source={require('../../assets/pic.jpeg')} style={styles.profileAvatar} />
        <View style={styles.avatarAddBtn}>
          <Icon name="add" size={14} color={colors.text} />
        </View>
      </View>

      <View style={styles.statsRow}>
        <View style={styles.statItem}>
          <Text style={styles.statNumber}>{userPostCount}</Text>
          <Text style={styles.statLabel}>Posts</Text>
        </View>
        <TouchableOpacity style={styles.statTouchable} onPress={() => navigation.navigate('FollowList', { type: 'Followers' })}>
          <Text style={styles.statNumber}>1.2M</Text>
          <Text style={styles.statLabel}>Followers</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.statTouchable} onPress={() => navigation.navigate('FollowList', { type: 'Following' })}>
          <Text style={styles.statNumber}>{followCount}</Text>
          <Text style={styles.statLabel}>Following</Text>
        </TouchableOpacity>
      </View>
    </View>
  );

  const renderActionButtons = () => (
    <View style={styles.actionButtons}>
      <TouchableOpacity style={styles.editButton} activeOpacity={0.8}>
        <Text style={styles.editButtonText}>Edit Profile</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.editButton} activeOpacity={0.8}>
        <Text style={styles.editButtonText}>Share Profile</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.addPersonButton} activeOpacity={0.8}>
        <Icon name="person-add-alt" size={18} color={colors.text} />
      </TouchableOpacity>
    </View>
  );

  const renderDiscoverPeople = () => (
    <View>
      <View style={styles.discoverHeader}>
        <Text style={styles.discoverTitle}>Discover People</Text>
        <Text style={styles.seeAll}>See All</Text>
      </View>
      <ScrollView horizontal showsHorizontalScrollIndicator={false} style={styles.suggestedList} contentContainerStyle={{ paddingHorizontal: 16 }}>
        {suggestedUsers.map(user => (
          <View key={user.id} style={styles.suggestedCard}>
            <TouchableOpacity style={styles.dismissBtn}>
              <Icon name="close" size={16} color={colors.textSecondary} />
            </TouchableOpacity>
            <Image source={user.avatarUrl} style={styles.suggestedAvatar} />
            <Text style={styles.suggestedName} numberOfLines={1}>{user.name}</Text>
            <Text style={styles.suggestedSubtitle}>Suggested for you</Text>
            <TouchableOpacity
              style={[styles.followBtn, followingMap[user.id] && styles.followingBtn]}
              onPress={() => toggleFollow(user.id)}
              activeOpacity={0.8}
            >
              <Text style={[styles.followBtnText, followingMap[user.id] && { color: colors.text }]}>
                {followingMap[user.id] ? 'Following' : 'Follow'}
              </Text>
            </TouchableOpacity>
          </View>
        ))}
      </ScrollView>
    </View>
  );

  const renderTabs = () => (
    <View style={styles.innerTabBar}>
      <TouchableOpacity style={[styles.innerTab, activeTab === 'posts' && styles.innerTabActive]} onPress={() => setActiveTab('posts')}>
        <Icon name="grid-on" size={24} color={activeTab === 'posts' ? colors.text : colors.textMuted} />
      </TouchableOpacity>
      <TouchableOpacity style={[styles.innerTab, activeTab === 'reels' && styles.innerTabActive]} onPress={() => setActiveTab('reels')}>
        <Icon name="video-library" size={24} color={activeTab === 'reels' ? colors.text : colors.textMuted} />
      </TouchableOpacity>
      <TouchableOpacity style={[styles.innerTab, activeTab === 'tagged' && styles.innerTabActive]} onPress={() => setActiveTab('tagged')}>
        <Icon name="person-pin" size={24} color={activeTab === 'tagged' ? colors.text : colors.textMuted} />
      </TouchableOpacity>
    </View>
  );

  const renderTabContent = () => {
    switch (activeTab) {
      case 'posts':
        return (
          <View style={styles.tabContent}>
            <Text style={styles.tabContentTitle}>Capture The Moment</Text>
            <Text style={styles.tabContentSubtitle}>With a friend</Text>
            <TouchableOpacity onPress={() => navigation.navigate('Add')}>
              <Text style={styles.tabContentCta}>Create Your First Post</Text>
            </TouchableOpacity>
          </View>
        );
      case 'reels':
        return (
          <View style={styles.tabContent}>
            <Text style={styles.tabContentTitle}>Share a moment with the world</Text>
            <TouchableOpacity onPress={() => navigation.navigate('Add')}>
              <Text style={styles.tabContentCta}>Create your first reel</Text>
            </TouchableOpacity>
          </View>
        );
      case 'tagged':
        return (
          <View style={styles.tabContent}>
            <Text style={styles.tabContentTitle}>Photos and videos of you</Text>
            <Text style={styles.tabContentSubtitle}>When people tag you, they'll appear here</Text>
          </View>
        );
    }
  };

  return (
    <ScrollView style={styles.container} showsVerticalScrollIndicator={false}>
      {renderTopBar()}
      {renderProfileHeader()}
      <Text style={styles.displayName}>Ali Raza</Text>
      {renderActionButtons()}
      {renderDiscoverPeople()}
      {renderTabs()}
      {renderTabContent()}
    </ScrollView>
  );
};
