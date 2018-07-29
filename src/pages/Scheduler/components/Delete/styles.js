import { StyleSheet } from 'react-native';
import { metrics, colors } from '../../../../styles';

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.red,
    justifyContent: 'center',
    alignItems: 'center',
    width: 80,
    height: '100%',
    borderRadius: metrics.baseRadius,
    marginLeft: metrics.baseMargin,
  },
});

export default styles;
