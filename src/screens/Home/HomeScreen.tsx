import {Text, TouchableOpacity, View} from 'react-native';
import React from 'react';

import Titlebox from '../../components/TitleBox/Titlebox';
import styles from './homeStyles';
import TaskBox from '../../components/TaskBox/TaskBox';
import data from '../../constants/mockData';

import useHome from './useHome';

const HomeScreen = () => {
  const {modalVisible} = useHome();
  console.log(modalVisible);
  return (
    <View style={styles.mainView}>
      <View>
        <Titlebox startingText={'Task '} endingText="  Manager" />
      </View>
      <View style={styles.ToDoView}>
        <TouchableOpacity style={styles.TodoButton}>
          <Text style={styles.TodoText}>To do</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.DoneButton}>
          <Text style={styles.DoneButtonText}>Done</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.taskContainer}>
        <Text style={styles.taskText}>Today</Text>
        {data.map((item, index) => (
          <View key={index}>
            <TaskBox taskName={item.taskName} />
          </View>
        ))}
        <Text style={styles.taskText}>Later</Text>
        {data.map((item, index) => (
          <View key={index}>
            <TaskBox taskName={item.taskName} />
          </View>
        ))}
      </View>
    </View>
  );
};

export default HomeScreen;
