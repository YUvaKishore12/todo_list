import {Text, TextInput, TouchableOpacity, View} from 'react-native';
import React from 'react';
import Titlebox from '../../components/TitleBox/Titlebox';
import styles from '.';
import useAddTask from './useAddTask';

const AddTask = () => {
  const {
    title,
    setTitle,
    description,
    setDescription,
    addTask,
    setValue,
    setTaskTime,
  } = useAddTask();
  return (
    <View style={styles.mainView}>
      <Titlebox startingText={'Add'} endingText={'Task  '} />
      <View style={styles.taskDetailsView}>
        <Text style={styles.taskDetails}>Task Details :</Text>
      </View>
      <View style={styles.AddTitleView}>
        <TextInput
          placeholder="Add Title"
          placeholderTextColor={'#A99B9B'}
          style={styles.addTitle}
          value={title}
          onChangeText={setTitle}
        />
        <TextInput
          placeholder="Add Description"
          placeholderTextColor={'#A99B9B'}
          style={styles.addDescription}
          value={description}
          multiline
          onChangeText={setDescription}
        />
      </View>
      <View style={styles.taskDetailsView}>
        <Text style={styles.taskDetails}>Priority :</Text>
        <View style={styles.priorityTypes}>
          <TouchableOpacity
            onPress={() => setValue('Low')}
            style={styles.lowContainer}>
            <Text style={styles.statusText}>Low</Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => setValue('Medium')}
            style={styles.mediumContainer}>
            <Text style={styles.statusText}>Medium</Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => setValue('Asap')}
            style={styles.StatusContainer}>
            <Text style={styles.statusText}>Asap</Text>
          </TouchableOpacity>
        </View>
      </View>
      <View style={styles.taskDetailsView}>
        <Text style={styles.taskDetails}>When :</Text>
      </View>
      <View style={styles.timeContainer}>
        <TouchableOpacity
          onPress={() => setTaskTime('Today')}
          style={styles.todayButton}>
          <Text style={styles.todayText}>Today</Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => setTaskTime('Later')}
          style={styles.LaterTextButton}>
          <Text style={styles.LaterText}>Later</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.addbuttonView}>
        <TouchableOpacity onPress={addTask} style={styles.addButton}>
          <Text style={styles.addButtonText}>Add</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default AddTask;
