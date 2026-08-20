import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, FlatList, Image } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import { colors } from '../../theme';
import styles from './style';

const mockUsers = [
  { id: '1', username: 'alex_dev', name: 'Alex Developer', avatarUrl: require('../../assets/men2.PNG'), isFollowing: true },
  { id: '2', username: 'react_native', name: 'React Native', avatarUrl: require('../../assets/instagram.PNG'), isFollowing: false },
  { id: '3', username: 'design_inspo', name: 'UI/UX Inspiration', avatarUrl: require('../../assets/daraz.PNG'), isFollowing: true },
  { id: '4', username: 'memes_daily', name: 'Daily Memes', avatarUrl: require('../../assets/meme.PNG'), isFollowing: false },
];

export const FollowListScreen = ({ route, navigation }) => {
  const { type } = route.params; // 'Followers' or 'Following'
  const [searchQuery, setSearchQuery] = useState('');
  const [users, setUsers] = useState(mockUsers);

  const toggleFollow = (id) => {
    setUsers(prev => prev.map(u => u.id === id ? { ...u, isFollowing: !u.isFollowing } : u));
  };

  const filteredUsers = users.filter(u => 
    u.username.toLowerCase().includes(searchQuery.toLowerCase()) || 
    u.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const renderHeader = () => (
    <View style={styles.topBar}>
      <TouchableOpacity style={styles.backBtn} onPress={() => navigation.goBack()} activeOpacity={0.7}>
        <Icon name="arrow-back" size={24} color={colors.text} />
      </TouchableOpacity>
      <Text style={styles.topBarTitle}>{type}</Text>
    </View>
  );

  const renderSearchBar = () => (
    <View style={styles.searchContainer}>
      <View style={styles.searchBar}>
        <Icon name="search" size={20} color={colors.textSecondary} />
        <TextInput
          style={styles.searchInput}
          placeholder="Search"
          placeholderTextColor={colors.placeholder}
          value={searchQuery}
          onChangeText={setSearchQuery}
        />
      </View>
    </View>
  );

  const renderUser = ({ item }) => (
    <View style={styles.userRow}>
      <Image source={item.avatarUrl} style={styles.avatar} />
      <View style={styles.userInfo}>
        <Text style={styles.username}>{item.username}</Text>
        <Text style={styles.displayName}>{item.name}</Text>
      </View>
      <TouchableOpacity
        style={[styles.followBtn, !item.isFollowing && styles.followBtnActive]}
        onPress={() => toggleFollow(item.id)}
        activeOpacity={0.8}
      >
        <Text style={styles.followBtnText}>
          {item.isFollowing ? 'Following' : 'Follow'}
        </Text>
      </TouchableOpacity>
    </View>
  );

  return (
    <View style={styles.container}>
      {renderHeader()}
      {renderSearchBar()}
      <FlatList
        data={filteredUsers}
        keyExtractor={item => item.id}
        renderItem={renderUser}
        contentContainerStyle={styles.listContent}
        showsVerticalScrollIndicator={false}
      />
    </View>
  );
};
