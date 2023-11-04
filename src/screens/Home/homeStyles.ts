import {StyleSheet} from 'react-native';
import colors from '../../constants/colors';

const styles = StyleSheet.create({
  mainView: {
    backgroundColor: colors.white,
    width: '100%',
    height: '100%',
  },
  taskContainer: {
    marginLeft: 20,
  },
  taskText: {
    color: colors.black,
    fontSize: 24,
    fontFamily: 'Poppins-Medium',
    marginLeft: 20,
    marginTop: 30,
  },
  addButton: {
    height: 45,
    width: 45,
    backgroundColor: colors.mainColor,
    borderRadius: 35,
    alignItems: 'center',
    justifyContent: 'center',
  },
  addButtonContainer: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'flex-end',
    marginRight: 30,
  },
  ToDoView: {
    marginLeft: 40,
    width: '70%',
    justifyContent: 'space-between',
    flexDirection: 'row',
    marginTop: 10,
  },
  TodoButton: {
    marginLeft: 20,
    width: 120,
    backgroundColor: colors.black,
    height: 50,
    borderRadius: 20,
    alignItems: 'center',
  },
  TodoText: {
    color: colors.white,
    fontFamily: 'Poppins-Medium',
    fontSize: 24,
    marginTop: 5,
  },
  DoneButton: {
    marginLeft: 40,
    width: 120,
    backgroundColor: colors.white,
    height: 50,
    borderRadius: 20,
    alignItems: 'center',
    borderWidth: 1,
    borderBlockColor: colors.black,
  },
  DoneButtonText: {
    color: colors.black,
    fontFamily: 'Poppins-Medium',
    fontSize: 24,
    marginTop: 5,
  },
});
export default styles;
