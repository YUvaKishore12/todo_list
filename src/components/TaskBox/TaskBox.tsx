import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React from 'react';
import colors from '../../constants/colors';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';

type TaskBox = {
  taskName: string;
  status: string;
};

const TaskBox = (props: TaskBox) => {
  const getButtonColor = (status: string) => {
    console.log(status, 'here');
    switch (status) {
      case 'Medium':
        return {backgroundColor: '#236454'};
      case 'Low':
        return {backgroundColor: 'green'};
      case 'Asap':
        return {backgroundColor: 'red'};
      default:
        return {backgroundColor: 'gray'};
    }
  };
  const buttonStyle = getButtonColor(props.status);
  return (
    <View style={styles.mainContainer}>
      <View style={styles.taskContainer}>
        <TouchableOpacity>
          <MaterialIcons
            style={{borderRadius: 40, marginLeft: 10}}
            color={colors.black}
            name="check-box-outline-blank"
            size={30}
          />
        </TouchableOpacity>
        <Text style={styles.taskText}>{props.taskName}</Text>
        <View style={[styles.StatusContainer, buttonStyle]}>
          <Text style={[styles.statusText]}>{props.status}</Text>
        </View>
      </View>
    </View>
  );
};

export default TaskBox;

const styles = StyleSheet.create({
  mainContainer: {
    backgroundColor: colors.white,

    width: '90%',
    marginLeft: 10,
    marginTop: 10,
    height: 60,
    borderRadius: 30,
    borderBlockColor: colors.black,
    borderWidth: 1,
  },
  taskContainer: {
    flexDirection: 'row',
    width: '90%',
    marginLeft: 10,
    height: 60,
    borderRadius: 10,
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  taskButton: {
    width: '100%',
    marginRight: 40,
  },
  taskText: {
    fontSize: 18,
    color: colors.black,
    fontFamily: 'Poppins-Medium',
  },
  StatusContainer: {
    width: 70,
    height: 30,

    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 15,
    marginTop: 5,
  },
  statusText: {
    color: colors.white,
  },
});
