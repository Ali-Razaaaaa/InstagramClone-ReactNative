import { StyleSheet } from 'react-native';
import { colors, radius, spacing } from '../../theme';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.background,
    alignItems: 'center',
    paddingTop: 100,
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
    marginBottom: 60,
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
  loginButton: {
    width: 345,
    height: 50,
    backgroundColor: colors.accent,
    borderRadius: radius.md,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 6,
    marginBottom: 16,
  },
  loginButtonText: {
    color: colors.text,
    fontWeight: 'bold',
    fontSize: 15,
  },
  forgotText: {
    color: colors.accent,
    marginBottom: 40,
    fontSize: 13,
  },
  dividerRow: {
    flexDirection: 'row',
    alignItems: 'center',
    width: 345,
    marginBottom: 20,
  },
  dividerLine: {
    flex: 1,
    height: 1,
    backgroundColor: colors.border,
  },
  dividerText: {
    color: colors.textMuted,
    marginHorizontal: 12,
    fontSize: 12,
  },
  createAccountButton: {
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
  createAccountText: {
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
