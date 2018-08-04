import { StyleSheet } from 'react-native';
import { metrics, colors } from '../../../../styles';

const styles = StyleSheet.create({
  outterContainer: {
    flexDirection: 'row',
    height: 80,
    marginBottom: metrics.basePadding,
    paddingHorizontal: metrics.basePadding,
  },
  container: {
    height: '100%',
    width: '100%',
    backgroundColor: colors.white,
    marginBottom: metrics.basePadding,
    padding: metrics.basePadding,
    borderRadius: metrics.baseRadius,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  delete: {
    marginLeft: -90,
  },
  title: {
    fontWeight: 'bold',
    fontSize: 16,
    marginBottom: metrics.baseMargin / 2,
  },
  location: {
    fontSize: 14,
    fontWeight: 'bold',
    color: colors.grey,
  },
  time: {
    fontSize: 14,
    fontWeight: 'bold',
    color: colors.grey,
  },
});

export default styles;
