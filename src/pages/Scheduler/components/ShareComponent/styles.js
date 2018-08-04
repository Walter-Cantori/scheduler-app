import { StyleSheet } from 'react-native';
import { metrics, colors } from '../../../../styles';

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.blue,
    justifyContent: 'center',
    alignItems: 'center',
    width: 80,
    height: '100%',
    borderRadius: metrics.baseRadius,
    marginRight: metrics.baseMargin,
  },
});

export default styles;
