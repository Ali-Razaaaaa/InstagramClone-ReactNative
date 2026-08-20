import React, { useState } from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  Image,
  ActivityIndicator,
} from 'react-native';
import { getAuth, signInWithEmailAndPassword, sendPasswordResetEmail } from '@react-native-firebase/auth';
import Icon from 'react-native-vector-icons/MaterialIcons';
import { colors } from '../../theme';
import AppModal from '../../modals/AppModal';
import styles from './style';

export const LoginScreen = ({ navigation }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);
  const [passwordVisible, setPasswordVisible] = useState(false);
  const [emailFocused, setEmailFocused] = useState(false);
  const [passwordFocused, setPasswordFocused] = useState(false);
  const [modal, setModal] = useState({ visible: false, title: '', message: '', type: 'info' });

  const showModal = (title, message, type = 'info') => {
    setModal({ visible: true, title, message, type });
  };

  const closeModal = () => {
    setModal(prev => ({ ...prev, visible: false }));
  };

  const handleLogin = async () => {
    if (!email || !password) {
      showModal('Missing Fields', 'Please enter your email and password.', 'error');
      return;
    }

    setLoading(true);
    try {
      const auth = getAuth();
      await signInWithEmailAndPassword(auth, email.trim(), password);
      navigation.replace('Main');
    } catch (error) {
      console.log('Login error:', error);
      let errorMessage = 'Incorrect email or password.';
      if (error.code === 'auth/invalid-email') {
        errorMessage = 'Invalid email address format.';
      } else if (error.code === 'auth/user-not-found') {
        errorMessage = 'No account found with this email.';
      } else if (error.code === 'auth/wrong-password') {
        errorMessage = 'Incorrect password.';
      } else if (error.code === 'auth/too-many-requests') {
        errorMessage = 'Too many attempts. Please try again later.';
      }
      showModal('Login Failed', errorMessage, 'error');
    } finally {
      setLoading(false);
    }
  };

  const handleForgotPassword = async () => {
    if (!email.trim()) {
      showModal('Email Required', 'Enter your email address above, then tap "Forgot Password" to receive a reset link.', 'info');
      return;
    }

    setLoading(true);
    try {
      const auth = getAuth();
      await sendPasswordResetEmail(auth, email.trim());
      showModal('Email Sent', `A password reset link has been sent to ${email.trim()}. Check your inbox.`, 'success');
    } catch (error) {
      console.log('Forgot password error:', error);
      let errorMessage = 'Could not send reset email. Please try again.';
      if (error.code === 'auth/invalid-email') {
        errorMessage = 'Invalid email address format.';
      } else if (error.code === 'auth/user-not-found') {
        errorMessage = 'No account found with this email.';
      }
      showModal('Reset Failed', errorMessage, 'error');
    } finally {
      setLoading(false);
    }
  };

  const renderLogo = () => (
    <View>
      <Text style={styles.languageText}>English (US)</Text>
      <Image source={require('../../assets/icon.PNG')} style={styles.logo} />
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
      <TouchableOpacity
        style={styles.eyeIcon}
        onPress={() => setPasswordVisible(v => !v)}
        activeOpacity={0.7}
      >
        <Icon
          name={passwordVisible ? 'visibility' : 'visibility-off'}
          size={22}
          color={colors.textSecondary}
        />
      </TouchableOpacity>
    </View>
  );

  const renderActions = () => (
    <View>
      <TouchableOpacity
        style={styles.loginButton}
        onPress={handleLogin}
        disabled={loading}
        activeOpacity={0.85}
      >
        {loading ? (
          <ActivityIndicator color="white" />
        ) : (
          <Text style={styles.loginButtonText}>Log In</Text>
        )}
      </TouchableOpacity>

      <TouchableOpacity onPress={handleForgotPassword} activeOpacity={0.7}>
        <Text style={styles.forgotText}>Forgot password?</Text>
      </TouchableOpacity>

      <View style={styles.dividerRow}>
        <View style={styles.dividerLine} />
        <Text style={styles.dividerText}>OR</Text>
        <View style={styles.dividerLine} />
      </View>

      <TouchableOpacity
        style={styles.createAccountButton}
        onPress={() => navigation.navigate('SignUp')}
        activeOpacity={0.85}
      >
        <Text style={styles.createAccountText}>Create new account</Text>
      </TouchableOpacity>
    </View>
  );

  return (
    <View style={styles.container}>
      {renderLogo()}
      {renderEmailInput()}
      {renderPasswordInput()}
      {renderActions()}

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
