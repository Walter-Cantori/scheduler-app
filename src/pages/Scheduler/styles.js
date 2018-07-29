import { StyleSheet } from 'react-native';
import { colors, metrics } from '../../styles';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.purpleMain,
  },
  calendar: {
    height: 300,
    width: '100%',
    backgroundColor: colors.purpleBack,
  },
  eventList: {
    flex: 1,
    marginTop: metrics.baseMargin,
    paddingVertical: metrics.basePadding,
  },
});

export default styles;
