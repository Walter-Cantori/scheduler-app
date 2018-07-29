import colors from './colors';
import metrics from './metrics';

export default {
  container: {
    flex: 1,
    backgroundColor: colors.purpleMain,
    padding: metrics.basePadding,
    alignItems: 'center',
  },
  title: {
    fontSize: metrics.titleSize,
    color: colors.whiteTitles,
    marginTop: 80,
    fontWeight: 'bold',
    marginBottom: 60,
  },
  inputContainer: {
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'center',
    backgroundColor: colors.purpleBack,
    borderRadius: metrics.baseRadius,
    marginBottom: metrics.baseMargin,
    width: '100%',
    height: metrics.buttonHeight,
  },
  input: {
    backgroundColor: colors.purpleBack,
    height: metrics.buttonHeight,
    borderRadius: metrics.baseRadius,
    paddingVertical: metrics.basePadding,
    color: colors.whiteTitles,
    width: '80%',
  },
  Icon: {
    padding: metrics.basePadding / 2,
  },
  button: {
    backgroundColor: colors.green,
    height: metrics.buttonHeight,
    borderRadius: metrics.baseRadius,
    width: '100%',
    alignItems: 'center',
    justifyContent: 'center',
  },
  buttonText: {
    color: colors.white,
    fontSize: metrics.buttonText,
    fontWeight: 'bold',
  },
  linkText: {
    color: colors.purpleLink,
    fontSize: 14,
    fontWeight: 'bold',
  },
};
