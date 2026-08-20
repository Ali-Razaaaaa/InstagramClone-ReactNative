import React from 'react';
import { Modal, View, Text, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import { colors } from '../theme';
import styles from './style';

/**
 * AppModal — base modal used across the app.
 * Replaces all Alert.alert calls.
 *
 * type: 'info' | 'error' | 'success'
 */
const AppModal = ({ visible, title, message, type = 'info', onClose, confirmText = 'OK' }) => {
  const iconName = type === 'error' ? 'error-outline' : type === 'success' ? 'check-circle-outline' : 'info-outline';
  const iconColor = type === 'error' ? colors.danger : type === 'success' ? '#27ae60' : colors.accent;
  const buttonStyle = type === 'error' ? styles.buttonDanger : type === 'success' ? styles.buttonSuccess : styles.button;

  return (
    <Modal visible={visible} transparent animationType="fade" onRequestClose={onClose}>
      <View style={styles.overlay}>
        <View style={styles.card}>
          <View style={styles.iconRow}>
            <Icon name={iconName} size={40} color={iconColor} />
          </View>
          <Text style={styles.title}>{title}</Text>
          <Text style={styles.message}>{message}</Text>
          <TouchableOpacity style={[styles.button, buttonStyle]} onPress={onClose} activeOpacity={0.85}>
            <Text style={styles.buttonText}>{confirmText}</Text>
          </TouchableOpacity>
        </View>
      </View>
    </Modal>
  );
};

export default AppModal;
