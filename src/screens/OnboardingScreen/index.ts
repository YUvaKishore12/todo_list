import {StyleSheet} from 'react-native';
import colors from '../../constants/colors';

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    backgroundColor: colors.white,
    justifyContent: 'center', // Center content vertically
  },
  planText: {
    fontFamily: 'Poppins-SemiBold',
    fontSize: 30,
    color: colors.black,
  },
  buttonText: {
    fontFamily: 'Poppins-Medium',
    fontSize: 26,
    color: colors.white,
    marginLeft: 20,
  },
  buttonContainer: {
    alignItems: 'center',
  },
  buttonStyle: {
    width: '80%',
    height: 70,
    backgroundColor: colors.black,
    borderRadius: 20,
    justifyContent: 'center',
    flexDirection: 'row',
    marginTop: 40,
    alignItems: 'center',
  },
  textContainer: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  skipText: {
    fontFamily: 'Poppins-Medium',
    fontSize: 26,
    color: '#9D9393',
  },
  skipContainer: {
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 30,
  },
  animationStyles: {
    width: '80%',
    height: '40%',
    alignItems: 'center',
    justifyContent: 'center',
    marginLeft: 40,
  },
});
export default styles;
