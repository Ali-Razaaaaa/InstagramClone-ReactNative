import { StyleSheet } from 'react-native';
import { colors, radius, spacing } from '../../theme';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.background,
    paddingTop: 40,
  },
  backRow: {
    paddingHorizontal: spacing.lg,
    paddingBottom: 10,
    paddingTop: 10,
  },
  title: {
    color: colors.text,
    fontSize: 20,
    fontWeight: 'bold',
    paddingHorizontal: spacing.md,
    marginBottom: 12,
  },
  searchContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: colors.surfaceLight,
    borderRadius: radius.md,
    marginHorizontal: spacing.md,
    paddingHorizontal: 12,
    height: 42,
    marginBottom: 16,
    borderWidth: 0.5,
    borderColor: colors.border,
  },
  searchInput: {
    flex: 1,
    color: colors.text,
    fontSize: 14,
  },
  accountRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: spacing.md,
    marginBottom: 10,
  },
  accountLabel: { color: colors.text, fontWeight: 'bold' },
  metaLabel: { color: colors.textSecondary },
  accountCenter: {
    flexDirection: 'row',
    alignItems: 'flex-start',
    paddingHorizontal: spacing.md,
    marginBottom: 8,
  },
  accountIcon: { marginRight: 12, marginTop: 2, color: colors.text },
  accountCenterText: { flex: 1 },
  accountCenterTitle: { color: colors.text, fontWeight: 'bold', marginBottom: 4 },
  accountCenterSubtitle: { color: colors.textSecondary, fontSize: 12, lineHeight: 16 },
  learnMoreRow: {
    paddingHorizontal: spacing.md,
    marginBottom: 14,
  },
  learnMoreText: { color: colors.textSecondary, fontSize: 13, marginBottom: 4 },
  learnMoreLink: { color: colors.accent, fontSize: 13, fontWeight: '600' },
  divider: {
    height: 1,
    backgroundColor: colors.border,
    marginVertical: 12,
  },
  sectionLabel: {
    color: colors.textMuted,
    paddingHorizontal: spacing.md,
    marginBottom: 8,
    fontSize: 13,
    fontWeight: '600',
    textTransform: 'uppercase',
  },
  menuItem: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: spacing.md,
    paddingVertical: 14,
  },
  menuIcon: {
    width: 24,
    height: 24,
    marginRight: 14,
    tintColor: colors.text,
  },
  menuIconNative: { marginRight: 14, color: colors.text },
  menuLabel: { flex: 1, color: colors.text, fontSize: 15 },
  logoutButton: {
    backgroundColor: 'transparent',
    borderWidth: 1,
    borderColor: colors.danger,
    borderRadius: radius.pill,
    height: 44,
    width: 160,
    alignSelf: 'center',
    justifyContent: 'center',
    alignItems: 'center',
    marginVertical: 24,
  },
  logoutText: {
    color: colors.danger,
    fontWeight: 'bold',
    fontSize: 15,
  },
});

export default styles;
