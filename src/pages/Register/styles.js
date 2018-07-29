import { StyleSheet } from 'react-native';
import { metrics, common } from '../../styles';

const styles = StyleSheet.create({
  container: {
    ...common.container,
  },
  title: {
    ...common.title,
  },
  inputContainer: {
    ...common.inputContainer,
  },
  input: {
    ...common.input,
  },
  Icon: {
    ...common.Icon,
  },
  button: {
    ...common.button,
    marginBottom: metrics.baseMargin,
  },
  buttonText: {
    ...common.buttonText,
  },
  linkText: {
    ...common.linkText,
  },
});

export default styles;
