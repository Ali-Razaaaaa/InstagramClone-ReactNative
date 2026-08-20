import React, { useState } from 'react';
import { View, Text, Image, ScrollView, TextInput, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import { getAuth, signOut } from '@react-native-firebase/auth';
import AppModal from '../../modals/AppModal';
import { colors } from '../../theme';
import styles from './style';

const menuItems = [
  { id: 'saved', icon: require('../../assets/Icons/save.png'), label: 'Saved' },
  { id: 'archive', icon: require('../../assets/Icons/Story.png'), label: 'Archive' },
  { id: 'activity', icon: require('../../assets/Icons/player.png'), label: 'Your activity' },
];

export const DrawerScreen = ({ navigation }) => {
  const [search, setSearch] = useState('');
  const [modal, setModal] = useState({ visible: false, title: '', message: '', type: 'info' });

  const showModal = (title, message, type = 'info') => {
    setModal({ visible: true, title, message, type });
  };
  const closeModal = () => setModal(prev => ({ ...prev, visible: false }));

  const handleLogout = async () => {
    try {
      const auth = getAuth();
      await signOut(auth);
      navigation.reset({ index: 0, routes: [{ name: 'Login' }] });
    } catch (error) {
      console.log('Logout error: ', error);
      showModal('Logout Failed', 'An error occurred while logging out.', 'error');
    }
  };

  const renderHeader = () => (
    <>
      <TouchableOpacity style={styles.backRow} onPress={() => navigation.goBack()}>
        <Icon name="arrow-back" size={26} color={colors.text} />
      </TouchableOpacity>
      <Text style={styles.title}>Settings and Privacy</Text>
    </>
  );

  const renderSearch = () => (
    <View style={styles.searchContainer}>
      <Icon name="search" size={20} color={colors.textSecondary} style={{ marginRight: 8 }} />
      <TextInput
        style={styles.searchInput}
        placeholder="Search"
        placeholderTextColor={colors.placeholder}
        value={search}
        onChangeText={setSearch}
      />
    </View>
  );

  const renderAccountsCenter = () => (
    <>
      <View style={styles.accountRow}>
        <Text style={styles.accountLabel}>Your account</Text>
        <Text style={styles.metaLabel}>Meta</Text>
      </View>
      <View style={styles.accountCenter}>
        <Icon name="account-circle" size={36} style={styles.accountIcon} />
        <View style={styles.accountCenterText}>
          <Text style={styles.accountCenterTitle}>Accounts Center</Text>
          <Text style={styles.accountCenterSubtitle}>Passwords, Security, personal details, ad preferences</Text>
        </View>
      </View>
      <View style={styles.learnMoreRow}>
        <Text style={styles.learnMoreText}>Manage connected experiences across Instagram, Facebook, and Messenger.</Text>
        <Text style={styles.learnMoreLink}>Learn More</Text>
      </View>
    </>
  );

  const renderMenu = () => (
    <>
      <Text style={styles.sectionLabel}>How you use Instagram</Text>
      {menuItems.map(item => (
        <TouchableOpacity key={item.id} style={styles.menuItem}>
          <Image source={item.icon} style={styles.menuIcon} />
          <Text style={styles.menuLabel}>{item.label}</Text>
          <Icon name="chevron-right" size={24} color={colors.textMuted} />
        </TouchableOpacity>
      ))}
      <TouchableOpacity style={styles.menuItem}>
        <Icon name="notifications" size={24} style={styles.menuIconNative} />
        <Text style={styles.menuLabel}>Notifications</Text>
        <Icon name="chevron-right" size={24} color={colors.textMuted} />
      </TouchableOpacity>
    </>
  );

  return (
    <View style={styles.container}>
      {renderHeader()}
      <ScrollView showsVerticalScrollIndicator={false}>
        {renderSearch()}
        {renderAccountsCenter()}
        <View style={styles.divider} />
        {renderMenu()}
        <View style={styles.divider} />
        <TouchableOpacity style={styles.logoutButton} onPress={handleLogout} activeOpacity={0.8}>
          <Text style={styles.logoutText}>Log Out</Text>
        </TouchableOpacity>
      </ScrollView>

      <AppModal
        visible={modal.visible}
        title={modal.title}
        message={modal.message}
        type={modal.type}
        onClose={closeModal}
      />
    </View>
  );
};
