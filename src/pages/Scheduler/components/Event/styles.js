import { StyleSheet } from 'react-native';
import { metrics, colors } from '../../../../styles';

const styles = StyleSheet.create({
  outterContainer: {
    width: 380,
    flexDirection: 'row',
    height: 80,
    marginBottom: metrics.basePadding,
  },
  container: {
    height: '100%',
    width: 320,
    backgroundColor: colors.white,
    marginBottom: metrics.basePadding,
    padding: metrics.basePadding,
    borderRadius: metrics.baseRadius,
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginHorizontal: metrics.basePadding,

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
