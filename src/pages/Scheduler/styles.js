import { StyleSheet, Platform } from 'react-native';
import { colors, metrics, common } from '../../styles';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.purpleMain,
    paddingBottom: 20,
  },
  calendar: {
    width: '100%',
    backgroundColor: colors.purpleBack,
  },
  eventList: {
    flex: Platform.OS === 'android' ? 1 : 0,
    height: 450,
    marginTop: metrics.baseMargin,
    paddingVertical: metrics.basePadding,
    backgroundColor: colors.purpleMain,
  },
  dayCalendar: {
    width: '100%',
    backgroundColor: colors.purpleBack,
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
  },
  Icon: {
    ...common.Icon,
  },
  title: {
    fontSize: 16,
    color: colors.whiteTitles,
    fontWeight: 'bold',
  },
});

export default styles;
