import { StyleSheet } from 'react-native';
import { metrics, common, colors } from '../../../../styles';

const styles = StyleSheet.create({
  outterContainer: {
    flex: 1,
    backgroundColor: colors.transparent,
  },
  innerContainer: {
    marginTop: 130,
    marginHorizontal: 20,
    backgroundColor: colors.white,
    height: 450,
    borderRadius: metrics.baseRadius,
    padding: metrics.basePadding,
    alignItems: 'center',
  },
  title: {
    fontSize: metrics.titleSize / 2,
    color: colors.purpleMain,
    marginTop: metrics.baseMargin * 2,
    fontWeight: 'bold',
    marginBottom: metrics.baseMargin * 2,
  },
  inputContainer: {
    ...common.inputContainer,
    backgroundColor: colors.greyInput,
  },
  input: {
    ...common.input,
    backgroundColor: colors.greyInput,
    color: colors.greyInputText,
    fontWeight: 'bold',
  },
  regularInput: {
    ...common.input,
    backgroundColor: colors.greyInput,
    color: colors.greyInputText,
    fontWeight: 'bold',
    width: '100%',
    margin: metrics.baseMargin,
    paddingHorizontal: metrics.basePadding,
  },
  Icon: {
    padding: metrics.basePadding / 2,
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
    color: colors.greyCancelLink,
  },
});

export default styles;
