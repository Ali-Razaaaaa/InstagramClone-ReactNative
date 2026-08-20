import React, { useState } from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  Image,
  ActivityIndicator,
  ScrollView,
} from 'react-native';
import { getAuth, createUserWithEmailAndPassword } from '@react-native-firebase/auth';
import Icon from 'react-native-vector-icons/MaterialIcons';
import { colors } from '../../theme';
import AppModal from '../../modals/AppModal';
import styles from './style';

export const SignUpScreen = ({ navigation }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [loading, setLoading] = useState(false);
  const [passwordVisible, setPasswordVisible] = useState(false);
  const [confirmVisible, setConfirmVisible] = useState(false);
  const [emailFocused, setEmailFocused] = useState(false);
  const [passwordFocused, setPasswordFocused] = useState(false);
  const [confirmFocused, setConfirmFocused] = useState(false);
  const [modal, setModal] = useState({ visible: false, title: '', message: '', type: 'info' });

  const showModal = (title, message, type = 'info') => {
    setModal({ visible: true, title, message, type });
  };

  const closeModal = () => {
    setModal(prev => ({ ...prev, visible: false }));
  };

  const handleSignUp = async () => {
    if (!email || !password || !confirmPassword) {
      showModal('Missing Fields', 'Please fill in all fields.', 'error');
      return;
    }

    if (password !== confirmPassword) {
      showModal('Password Mismatch', 'Passwords do not match. Please try again.', 'error');
      return;
    }

    if (password.length < 6) {
      showModal('Weak Password', 'Password must be at least 6 characters.', 'error');
      return;
    }

    setLoading(true);
    try {
      const auth = getAuth();
      await createUserWithEmailAndPassword(auth, email.trim(), password);
      navigation.replace('Main');
    } catch (error) {
      console.log('Sign up error:', error);
      let errorMessage = 'An error occurred. Please try again.';
      if (error.code === 'auth/email-already-in-use') {
        errorMessage = 'An account with this email already exists.';
      } else if (error.code === 'auth/invalid-email') {
        errorMessage = 'Invalid email address format.';
      } else if (error.code === 'auth/weak-password') {
        errorMessage = 'Password is too weak. Use at least 6 characters.';
      }
      showModal('Sign Up Failed', errorMessage, 'error');
    } finally {
      setLoading(false);
    }
  };

  const renderHeader = () => (
    <View style={{ alignItems: 'center' }}>
      <Text style={styles.languageText}>English (US)</Text>
      <Image source={require('../../assets/icon.PNG')} style={styles.logo} />
      <Text style={styles.title}>Create Account</Text>
      <Text style={styles.subtitle}>Sign up to see photos and videos from your friends.</Text>
    </View>
  );

  const renderEmailInput = () => (
    <View style={[styles.inputContainer, emailFocused && styles.inputContainerFocused]}>
      <TextInput
        style={styles.input}
        placeholder="Email address"
        placeholderTextColor={colors.placeholder}
        value={email}
        onChangeText={setEmail}
        autoCapitalize="none"
        keyboardType="email-address"
        onFocus={() => setEmailFocused(true)}
        onBlur={() => setEmailFocused(false)}
      />
    </View>
  );

  const renderPasswordInput = () => (
    <View style={[styles.inputContainer, passwordFocused && styles.inputContainerFocused]}>
      <TextInput
        style={styles.input}
        placeholder="Password"
        placeholderTextColor={colors.placeholder}
        secureTextEntry={!passwordVisible}
        value={password}
        onChangeText={setPassword}
        autoCapitalize="none"
        onFocus={() => setPasswordFocused(true)}
        onBlur={() => setPasswordFocused(false)}
      />
      <TouchableOpacity style={styles.eyeIcon} onPress={() => setPasswordVisible(v => !v)} activeOpacity={0.7}>
        <Icon name={passwordVisible ? 'visibility' : 'visibility-off'} size={22} color={colors.textSecondary} />
      </TouchableOpacity>
    </View>
  );

  const renderConfirmPasswordInput = () => (
    <View style={[styles.inputContainer, confirmFocused && styles.inputContainerFocused]}>
      <TextInput
        style={styles.input}
        placeholder="Confirm password"
        placeholderTextColor={colors.placeholder}
        secureTextEntry={!confirmVisible}
        value={confirmPassword}
        onChangeText={setConfirmPassword}
        autoCapitalize="none"
        onFocus={() => setConfirmFocused(true)}
        onBlur={() => setConfirmFocused(false)}
      />
      <TouchableOpacity style={styles.eyeIcon} onPress={() => setConfirmVisible(v => !v)} activeOpacity={0.7}>
        <Icon name={confirmVisible ? 'visibility' : 'visibility-off'} size={22} color={colors.textSecondary} />
      </TouchableOpacity>
    </View>
  );

  const renderActions = () => (
    <View>
      <TouchableOpacity
        style={styles.signUpButton}
        onPress={handleSignUp}
        disabled={loading}
        activeOpacity={0.85}
      >
        {loading ? (
          <ActivityIndicator color="white" />
        ) : (
          <Text style={styles.signUpButtonText}>Sign Up</Text>
        )}
      </TouchableOpacity>

      <TouchableOpacity
        style={styles.loginLinkButton}
        onPress={() => navigation.navigate('Login')}
        activeOpacity={0.85}
      >
        <Text style={styles.loginLinkText}>Already have an account? Log in</Text>
      </TouchableOpacity>
    </View>
  );

  return (
    <ScrollView contentContainerStyle={styles.container} keyboardShouldPersistTaps="handled">
      {renderHeader()}
      {renderEmailInput()}
      {renderPasswordInput()}
      {renderConfirmPasswordInput()}
      {renderActions()}
      <AppModal
        visible={modal.visible}
        title={modal.title}
        message={modal.message}
        type={modal.type}
        onClose={closeModal}
      />
    </ScrollView>
  );
};
