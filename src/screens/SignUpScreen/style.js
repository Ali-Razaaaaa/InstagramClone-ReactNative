import { StyleSheet } from 'react-native';
import { colors, radius, spacing } from '../../theme';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.background,
    alignItems: 'center',
    paddingTop: 80,
  },
  languageText: {
    color: colors.textSecondary,
    marginBottom: 20,
    fontSize: 13,
  },
  logo: {
    width: 72,
    height: 72,
    borderRadius: radius.lg,
    marginBottom: 24,
  },
  title: {
    color: colors.text,
    fontSize: 22,
    fontWeight: 'bold',
    marginBottom: 8,
  },
  subtitle: {
    color: colors.textSecondary,
    fontSize: 13,
    textAlign: 'center',
    marginBottom: 24,
    paddingHorizontal: 30,
  },
  inputContainer: {
    width: 345,
    height: 52,
    borderWidth: 1,
    borderColor: colors.border,
    borderRadius: radius.sm,
    marginBottom: 12,
    paddingHorizontal: 14,
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: colors.surfaceLight,
  },
  inputContainerFocused: {
    borderColor: colors.borderFocused,
  },
  input: {
    flex: 1,
    color: colors.text,
    fontSize: 15,
  },
  eyeIcon: {
    padding: 4,
  },
  signUpButton: {
    width: 345,
    height: 50,
    backgroundColor: colors.accent,
    borderRadius: radius.md,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 6,
    marginBottom: 20,
  },
  signUpButtonText: {
    color: colors.text,
    fontWeight: 'bold',
    fontSize: 15,
  },
  loginLinkButton: {
    width: 345,
    height: 50,
    backgroundColor: 'transparent',
    borderWidth: 1,
    borderColor: colors.accent,
    borderRadius: radius.pill,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 40,
  },
  loginLinkText: {
    color: colors.accent,
    fontWeight: '600',
    fontSize: 14,
  },
  metaLogo: {
    width: 60,
    height: 30,
    marginTop: 'auto',
    marginBottom: 24,
    tintColor: colors.textMuted,
  },
});

export default styles;
