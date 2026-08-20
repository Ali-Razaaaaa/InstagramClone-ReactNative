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
    paddingHorizontal: spacing.md,
    paddingTop: 50,
    paddingBottom: 12,
    borderBottomWidth: 0.5,
    borderBottomColor: colors.border,
  },
  backBtn: {
    padding: 4,
    marginRight: 16,
  },
  topBarTitle: {
    color: colors.text,
    fontWeight: 'bold',
    fontSize: 16,
  },
  searchContainer: {
    paddingHorizontal: spacing.md,
    paddingVertical: 12,
  },
  searchBar: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: colors.surfaceLight,
    borderRadius: radius.md,
    height: 36,
    paddingHorizontal: 12,
  },
  searchInput: {
    flex: 1,
    color: colors.text,
    marginLeft: 8,
    fontSize: 14,
  },
  listContent: {
    paddingHorizontal: spacing.md,
    paddingBottom: 40,
  },
  userRow: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 16,
  },
  avatar: {
    width: 44,
    height: 44,
    borderRadius: 22,
    marginRight: 12,
    backgroundColor: colors.surfaceLight,
  },
  userInfo: {
    flex: 1,
    justifyContent: 'center',
  },
  username: {
    color: colors.text,
    fontWeight: 'bold',
    fontSize: 14,
    marginBottom: 2,
  },
  displayName: {
    color: colors.textSecondary,
    fontSize: 13,
  },
  followBtn: {
    backgroundColor: colors.surfaceLight,
    borderWidth: 0.5,
    borderColor: colors.border,
    borderRadius: radius.sm,
    paddingHorizontal: 16,
    paddingVertical: 6,
    justifyContent: 'center',
    alignItems: 'center',
  },
  followBtnActive: {
    backgroundColor: colors.accent,
    borderWidth: 0,
  },
  followBtnText: {
    color: colors.text,
    fontWeight: '600',
    fontSize: 13,
  },
});

export default styles;
