import React, { useState } from 'react';
import {
  Modal,
  View,
  Text,
  TouchableOpacity,
  TextInput,
  ScrollView,
  KeyboardAvoidingView,
  Platform,
} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import { colors } from '../../theme';
import styles from './style';

const EMOJIS = ['😁', '😍', '🔥', '💗', '👍', '😮'];

/**
 * CommentModal — shown when the user taps the comment icon on any post or reel.
 * Sits above the bottom nav bar, properly sized.
 */
const CommentModal = ({ visible, comments, onClose, onAddComment }) => {
  const [text, setText] = useState('');
  const [inputFocused, setInputFocused] = useState(false);

  const handleSend = () => {
    const trimmed = text.trim();
    if (!trimmed) return;
    onAddComment(trimmed);
    setText('');
  };

  const appendEmoji = emoji => {
    setText(prev => prev + emoji);
  };

  const renderHandle = () => (
    <View style={styles.handle} />
  );

  const renderHeader = () => (
    <View style={styles.headerRow}>
      <Text style={styles.headerTitle}>Comments</Text>
      <TouchableOpacity style={styles.closeBtn} onPress={onClose} activeOpacity={0.7}>
        <Icon name="close" size={22} color={colors.textSecondary} />
      </TouchableOpacity>
    </View>
  );

  const renderEmojiBar = () => (
    <View style={styles.emojiBar}>
      {EMOJIS.map(e => (
        <TouchableOpacity key={e} onPress={() => appendEmoji(e)} activeOpacity={0.7}>
          <Text style={styles.emoji}>{e}</Text>
        </TouchableOpacity>
      ))}
    </View>
  );

  const renderCommentList = () => (
    <ScrollView style={styles.commentsList} showsVerticalScrollIndicator={false}>
      {comments.length === 0 && (
        <Text style={{ color: colors.textMuted, textAlign: 'center', marginTop: 30, fontSize: 14 }}>
          No comments yet. Be the first!
        </Text>
      )}
      {comments.map((c, i) => (
        <View key={i} style={styles.commentItem}>
          <Icon name="account-circle" size={34} color={colors.border} style={styles.commentAvatar} />
          <View style={styles.commentBody}>
            <Text style={styles.commentUser}>{c.user}</Text>
            <Text style={styles.commentText}>{c.text}</Text>
          </View>
          <Icon name="favorite-border" size={16} color={colors.textSecondary} style={styles.likeIcon} />
        </View>
      ))}
    </ScrollView>
  );

  const renderInput = () => (
    <View style={[styles.inputRow, inputFocused && { borderColor: colors.borderFocused }]}>
      <TextInput
        style={styles.input}
        placeholder="Add a comment…"
        placeholderTextColor={colors.placeholder}
        value={text}
        onChangeText={setText}
        onFocus={() => setInputFocused(true)}
        onBlur={() => setInputFocused(false)}
        multiline
        returnKeyType="send"
        onSubmitEditing={handleSend}
      />
      <TouchableOpacity style={styles.sendBtn} onPress={handleSend} activeOpacity={0.7}>
        <Icon name="send" size={24} color={text.trim() ? colors.accent : colors.textMuted} />
      </TouchableOpacity>
    </View>
  );

  return (
    <Modal
      visible={visible}
      transparent
      animationType="slide"
      onRequestClose={onClose}
    >
      <TouchableOpacity style={styles.backdrop} activeOpacity={1} onPress={onClose} />
      <KeyboardAvoidingView
        behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
        style={styles.sheet}
      >
        {renderHandle()}
        {renderHeader()}
        {renderEmojiBar()}
        {renderCommentList()}
        {renderInput()}
      </KeyboardAvoidingView>
    </Modal>
  );
};

export default CommentModal;
