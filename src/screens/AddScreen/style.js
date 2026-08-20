import { StyleSheet } from 'react-native';
import { colors, radius, spacing } from '../../theme';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.background,
  },
  topBar: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: spacing.lg,
    paddingTop: 52,
    paddingBottom: 12,
    borderBottomWidth: 0.5,
    borderBottomColor: colors.border,
  },
  topBarTitle: {
    color: colors.text,
    fontSize: 16,
    fontWeight: 'bold',
  },
  shareBtn: {
    color: colors.accent,
    fontSize: 15,
    fontWeight: '600',
  },
  content: {
    flex: 1,
    alignItems: 'center',
    paddingHorizontal: 30,
    paddingTop: 40,
  },
  previewImage: {
    width: '100%',
    height: 300,
    borderRadius: radius.md,
    marginBottom: 20,
    backgroundColor: colors.surfaceLight,
  },
  iconContainer: {
    marginBottom: 20,
  },
  title: {
    color: colors.text,
    fontSize: 22,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  subtitle: {
    color: colors.textSecondary,
    fontSize: 15,
    textAlign: 'center',
    marginBottom: 40,
    lineHeight: 22,
  },
  primaryButton: {
    width: '100%',
    height: 50,
    backgroundColor: colors.accent,
    borderRadius: radius.md,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 12,
  },
  primaryButtonText: {
    color: colors.text,
    fontWeight: 'bold',
    fontSize: 15,
  },
  secondaryButton: {
    width: '100%',
    height: 50,
    backgroundColor: 'transparent',
    borderWidth: 1,
    borderColor: colors.border,
    borderRadius: radius.md,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 12,
  },
  secondaryButtonText: {
    color: colors.textSecondary,
    fontSize: 15,
  },
  captionInput: {
    width: '100%',
    height: 80,
    borderWidth: 1,
    borderColor: colors.border,
    borderRadius: radius.md,
    paddingHorizontal: 14,
    paddingTop: 12,
    color: colors.text,
    fontSize: 15,
    marginBottom: 16,
    backgroundColor: colors.surfaceLight,
    textAlignVertical: 'top',
  },
});

export default styles;
