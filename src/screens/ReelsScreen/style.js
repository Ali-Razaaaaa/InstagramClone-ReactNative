import { StyleSheet, Dimensions } from 'react-native';
import { colors, typography } from '../../theme';

const { width, height } = Dimensions.get('window');

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000',
  },
  reelContainer: {
    width,
    height,
    backgroundColor: '#000',
  },
  loadingOverlay: {
    ...StyleSheet.absoluteFillObject,
    justifyContent: 'center',
    alignItems: 'center',
  },
  loadingText: {
    color: colors.text,
    fontSize: 14,
  },
  pausedOverlay: {
    ...StyleSheet.absoluteFillObject,
    justifyContent: 'center',
    alignItems: 'center',
  },
  topLabel: {
    position: 'absolute',
    top: 45,
    left: 20,
  },
  reelsLabel: {
    color: colors.text,
    fontSize: 22,
    fontWeight: typography.bold,
    letterSpacing: 2,
  },
  attributionContainer: {
    position: 'absolute',
    top: 50,
    right: 20,
  },
  attributionText: {
    color: colors.textSecondary,
    fontSize: 12,
  },
  rightActions: {
    position: 'absolute',
    right: 12,
    bottom: 120, // Moved up to avoid overlapping with bottom nav/caption
    alignItems: 'center',
  },
  actionItem: {
    alignItems: 'center',
    marginBottom: 20,
  },
  actionCount: {
    color: colors.text,
    fontSize: 13,
    marginTop: 4,
    fontWeight: '600',
  },
  bottomInfo: {
    position: 'absolute',
    bottom: 80, // Moved up to avoid overlapping with bottom tabs
    left: 12,
    right: 70,
  },
  profileRow: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 10,
  },
  avatar: {
    width: 36,
    height: 36,
    borderRadius: 18,
    marginRight: 10,
    borderWidth: 1,
    borderColor: colors.text,
  },
  username: {
    color: colors.text,
    fontSize: 15,
    fontWeight: typography.bold,
    marginRight: 12,
  },
  followButton: {
    borderWidth: 1,
    borderColor: colors.text,
    borderRadius: 6,
    paddingHorizontal: 12,
    paddingVertical: 4,
  },
  followText: {
    color: colors.text,
    fontSize: 13,
    fontWeight: '600',
  },
  caption: {
    color: colors.text,
    fontSize: 14,
    lineHeight: 20,
  },
  errorContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  errorText: {
    color: colors.text,
    marginBottom: 16,
    textAlign: 'center',
    fontSize: 15,
  },
  retryButton: {
    paddingHorizontal: 24,
    paddingVertical: 12,
    backgroundColor: colors.accent,
    borderRadius: 8,
  },
  retryButtonText: {
    color: colors.text,
    fontWeight: 'bold',
    fontSize: 15,
  },
});

export default styles;
