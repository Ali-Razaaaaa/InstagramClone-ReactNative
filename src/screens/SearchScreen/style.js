import { StyleSheet, Dimensions } from 'react-native';
import { colors, spacing } from '../../theme';

const { width } = Dimensions.get('window');
export const GRID_ITEM_SIZE = (width - 6) / 3;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.background,
  },
  searchBarContainer: {
    paddingHorizontal: 12,
    paddingTop: 52,
    paddingBottom: 10,
  },
  searchBar: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: colors.surfaceLight,
    borderRadius: 12,
    paddingHorizontal: 12,
    height: 42,
    borderWidth: 1,
    borderColor: colors.border,
  },
  searchBarFocused: {
    borderColor: colors.borderFocused,
  },
  searchIcon: {
    marginRight: 8,
  },
  searchInput: {
    flex: 1,
    color: colors.text,
    fontSize: 15,
  },
  clearBtn: {
    padding: 4,
  },
  // Top feature row
  topRow: {
    flexDirection: 'row',
    height: GRID_ITEM_SIZE * 2 + 2,
    paddingHorizontal: 2,
    marginBottom: 2,
  },
  topLeft: {
    flex: 2,
    marginRight: 2,
  },
  topLeftImage: {
    width: '100%',
    height: '100%',
  },
  topRight: {
    flex: 1,
  },
  topHalfImage: {
    flex: 1,
    width: '100%',
  },
  halfSpacer: {
    height: 2,
  },
  // Grid
  grid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    paddingHorizontal: 2,
    gap: 2,
  },
  gridItem: {
    width: GRID_ITEM_SIZE,
    height: GRID_ITEM_SIZE,
    backgroundColor: colors.surfaceLight,
  },
  // Loading / Error
  loaderContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingTop: 60,
  },
  errorText: {
    color: colors.textSecondary,
    textAlign: 'center',
    marginTop: 20,
    fontSize: 14,
  },
  retryButton: {
    marginTop: 12,
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
