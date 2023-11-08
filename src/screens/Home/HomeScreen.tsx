import {ScrollView, Text, TouchableOpacity, View} from 'react-native';
import React from 'react';

import Titlebox from '../../components/TitleBox/Titlebox';
import styles from './homeStyles';
import TaskBox from '../../components/TaskBox/TaskBox';

import useHome from './useHome';

const HomeScreen = () => {
  const {modalVisible, data} = useHome();
  console.log(modalVisible);
  return (
    <ScrollView style={styles.mainView}>
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

        {data.map((item: {time: string; Title: string; status: string}, id) =>
          item.time === 'Today' ? (
            <View key={id}>
              <TaskBox taskName={item.Title} status={item.status} />
            </View>
          ) : null,
        )}

        <Text style={styles.taskText}>Later</Text>
        {data.map((item: {time: string; Title: string; status: string}, id) =>
          item.time === 'Later' ? (
            <View key={id}>
              <TaskBox taskName={item.Title} status={item.status} />
            </View>
          ) : null,
        )}
      </View>
    </ScrollView>
  );
};

export default HomeScreen;
