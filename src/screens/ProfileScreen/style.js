import { StyleSheet } from 'react-native';
import { colors, radius, spacing } from '../../theme';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.background,
  },
  topBar: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: spacing.md,
    paddingTop: 50,
    paddingBottom: 10,
  },
  topBarLeft: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  usernameText: {
    color: colors.text,
    fontSize: 19,
    fontWeight: 'bold',
    marginHorizontal: 6,
  },
  topBarRight: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  topBarIcon: {
    marginLeft: 14,
  },
  profileHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: spacing.md,
    marginTop: 12,
    marginBottom: 10,
  },
  avatarContainer: {
    position: 'relative',
    marginRight: 24,
  },
  profileAvatar: {
    width: 90,
    height: 90,
    borderRadius: 45,
    borderWidth: 0.5,
    borderColor: colors.border,
  },
  avatarAddBtn: {
    position: 'absolute',
    bottom: 0,
    right: 0,
    backgroundColor: colors.accent,
    borderRadius: 12,
    width: 24,
    height: 24,
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 2,
    borderColor: colors.background,
  },
  statsRow: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-around',
  },
  statItem: {
    alignItems: 'center',
  },
  statNumber: {
    color: colors.text,
    fontWeight: 'bold',
    fontSize: 16,
  },
  statLabel: {
    color: colors.textSecondary,
    fontSize: 12,
    marginTop: 2,
  },
  statTouchable: {
    alignItems: 'center',
  },
  displayName: {
    color: colors.text,
    fontWeight: '600',
    paddingHorizontal: spacing.md,
    marginBottom: 14,
    fontSize: 14,
  },
  actionButtons: {
    flexDirection: 'row',
    paddingHorizontal: spacing.md,
    marginBottom: 18,
    gap: 8,
  },
  editButton: {
    flex: 1,
    backgroundColor: colors.surfaceLight,
    borderRadius: radius.sm,
    height: 34,
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 0.5,
    borderColor: colors.border,
  },
  editButtonText: {
    color: colors.text,
    fontWeight: '600',
    fontSize: 13,
  },
  addPersonButton: {
    backgroundColor: colors.surfaceLight,
    borderRadius: radius.sm,
    width: 38,
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 0.5,
    borderColor: colors.border,
  },
  discoverHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: spacing.md,
    marginBottom: 10,
    alignItems: 'center',
  },
  discoverTitle: {
    color: colors.text,
    fontWeight: '600',
    fontSize: 14,
  },
  seeAll: {
    color: colors.accent,
    fontSize: 13,
  },
  suggestedList: {
    marginBottom: 18,
  },
  suggestedCard: {
    width: 155,
    backgroundColor: colors.surfaceLight,
    borderRadius: radius.lg,
    alignItems: 'center',
    paddingBottom: 14,
    marginRight: 8,
    borderWidth: 0.5,
    borderColor: colors.border,
    overflow: 'hidden',
  },
  dismissBtn: {
    alignSelf: 'flex-end',
    padding: 8,
  },
  suggestedAvatar: {
    width: 72,
    height: 72,
    borderRadius: 36,
    marginBottom: 8,
  },
  suggestedName: {
    color: colors.text,
    fontWeight: '600',
    fontSize: 12,
    textAlign: 'center',
    paddingHorizontal: 8,
  },
  suggestedSubtitle: {
    color: colors.textSecondary,
    fontSize: 11,
    marginBottom: 12,
  },
  followBtn: {
    backgroundColor: colors.accent,
    borderRadius: radius.sm,
    width: 124,
    height: 32,
    justifyContent: 'center',
    alignItems: 'center',
  },
  followingBtn: {
    backgroundColor: colors.surfaceLight,
    borderWidth: 0.5,
    borderColor: colors.border,
  },
  followBtnText: {
    color: colors.text,
    fontSize: 13,
    fontWeight: '600',
  },
  innerTabBar: {
    flexDirection: 'row',
    borderTopWidth: 0.5,
    borderTopColor: colors.border,
    marginTop: 4,
  },
  innerTab: {
    flex: 1,
    alignItems: 'center',
    paddingVertical: 12,
    borderBottomWidth: 1,
    borderBottomColor: 'transparent',
  },
  innerTabActive: {
    borderBottomColor: colors.text,
  },
  tabContent: {
    minHeight: 220,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 24,
  },
  tabContentTitle: {
    color: colors.text,
    fontSize: 16,
    textAlign: 'center',
    marginBottom: 6,
  },
  tabContentSubtitle: {
    color: colors.textSecondary,
    fontSize: 14,
    textAlign: 'center',
    marginBottom: 8,
  },
  tabContentCta: {
    color: colors.accent,
    fontSize: 14,
    fontWeight: '600',
    textAlign: 'center',
  },
  // User posts grid
  postsGrid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
  },
  postGridImage: {
    width: '33.33%',
    aspectRatio: 1,
    borderWidth: 0.5,
    borderColor: colors.background,
  },
});

export default styles;
