import { StyleSheet, Dimensions } from 'react-native';
import { colors, radius, spacing } from '../../theme';

const { height } = Dimensions.get('window');

const commentModalStyles = StyleSheet.create({
  // The transparent part behind the sheet — tappable to dismiss
  backdrop: {
    flex: 1,
    backgroundColor: 'rgba(0,0,0,0.5)',
  },
  sheet: {
    height: height * 0.65,
    backgroundColor: colors.surface,
    borderTopLeftRadius: radius.xl,
    borderTopRightRadius: radius.xl,
    paddingBottom: 20,
    borderTopWidth: 1,
    borderColor: colors.border,
  },
  handle: {
    width: 36,
    height: 4,
    backgroundColor: colors.border,
    borderRadius: 2,
    alignSelf: 'center',
    marginTop: 10,
    marginBottom: 10,
  },
  headerRow: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: 16,
    paddingBottom: 10,
    borderBottomWidth: 1,
    borderBottomColor: colors.border,
    position: 'relative',
  },
  headerTitle: {
    color: colors.text,
    fontWeight: 'bold',
    fontSize: 15,
  },
  closeBtn: {
    position: 'absolute',
    right: 16,
    padding: 4,
  },
  emojiBar: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    paddingHorizontal: 16,
    paddingVertical: 10,
    borderBottomWidth: 1,
    borderBottomColor: colors.border,
  },
  emoji: {
    fontSize: 24,
  },
  commentsList: {
    flex: 1,
    paddingHorizontal: 14,
  },
  commentItem: {
    flexDirection: 'row',
    alignItems: 'flex-start',
    paddingVertical: 10,
  },
  commentAvatar: {
    marginRight: 10,
    marginTop: 2,
  },
  commentBody: {
    flex: 1,
  },
  commentUser: {
    color: colors.text,
    fontWeight: '600',
    fontSize: 13,
    marginBottom: 2,
  },
  commentText: {
    color: colors.textSecondary,
    fontSize: 13,
    lineHeight: 18,
  },
  likeIcon: {
    marginLeft: 6,
    paddingTop: 2,
  },
  inputRow: {
    flexDirection: 'row',
    alignItems: 'center',
    marginHorizontal: 14,
    marginTop: 8,
    borderWidth: 1,
    borderColor: colors.border,
    borderRadius: radius.pill,
    paddingHorizontal: 14,
    paddingVertical: 8,
    backgroundColor: colors.surfaceLight,
  },
  input: {
    flex: 1,
    color: colors.text,
    fontSize: 14,
    minHeight: 32,
    maxHeight: 80,
  },
  sendBtn: {
    marginLeft: 8,
    padding: 4,
  },
});

export default commentModalStyles;
