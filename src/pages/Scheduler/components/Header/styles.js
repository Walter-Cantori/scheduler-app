import { StyleSheet } from 'react-native';
import { colors, metrics } from '../../../../styles';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    height: 70,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: metrics.basePadding,
  },
  title: {
    color: colors.whiteTitles,
    fontWeight: 'bold',
    fontSize: 20,
  },
  newEvent: {
    alignItems: 'center',
    paddingVertical: 2,
    backgroundColor: colors.green,
    borderRadius: 15,
    width: 25,
    height: 25,
  },
  plus: {
    fontSize: 16,
  },
});

export default styles;
