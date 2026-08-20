import { StyleSheet } from 'react-native';
import { colors, spacing } from '../../theme';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.background,
  },
  topBar: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: spacing.lg,
    paddingTop: 50,
    paddingBottom: 10,
    borderBottomWidth: 0.5,
    borderBottomColor: colors.border,
  },
  logoText: {
    color: colors.text,
    fontSize: 28,
    fontFamily: 'serif',
  },
  topBarIcons: {
    flexDirection: 'row',
  },
  iconButton: {
    marginLeft: 18,
  },
  storiesContainer: {
    height: 112,
    marginTop: 6,
  },
  storiesList: {
    paddingLeft: 10,
  },
  divider: {
    height: 0.5,
    backgroundColor: colors.border,
    marginTop: 6,
  },
  attributionContainer: {
    paddingHorizontal: 15,
    paddingVertical: 6,
  },
  attributionText: {
    color: colors.textMuted,
    fontSize: 11,
    textAlign: 'center',
  },
  footerLoader: {
    margin: 20,
  },
  errorContainer: {
    padding: 24,
    alignItems: 'center',
  },
  errorText: {
    color: colors.textSecondary,
    marginBottom: 12,
    textAlign: 'center',
    fontSize: 14,
  },
  retryButton: {
    paddingHorizontal: 24,
    paddingVertical: 10,
    backgroundColor: colors.accent,
    borderRadius: 8,
  },
  retryButtonText: {
    color: colors.text,
    fontWeight: 'bold',
  },
});

export default styles;
