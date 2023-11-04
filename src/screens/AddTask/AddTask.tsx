/* eslint-disable react-native/no-inline-styles */
import {Text, TextInput, TouchableOpacity, View} from 'react-native';
import React from 'react';
import Titlebox from '../../components/TitleBox/Titlebox';
import styles from '.';

const AddTask = () => {
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
        />
        <TextInput
          placeholder="Add Description"
          placeholderTextColor={'#A99B9B'}
          style={styles.addDescription}
        />
      </View>
      <View style={styles.taskDetailsView}>
        <Text style={styles.taskDetails}>Priority :</Text>
        <View style={styles.priorityTypes}>
          <TouchableOpacity style={styles.lowContainer}>
            <Text style={styles.statusText}>Low</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.mediumContainer}>
            <Text style={styles.statusText}>Medium</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.StatusContainer}>
            <Text style={styles.statusText}>Asap</Text>
          </TouchableOpacity>
        </View>
      </View>
      <View style={styles.taskDetailsView}>
        <Text style={styles.taskDetails}>When :</Text>
      </View>
      <View style={styles.timeContainer}>
        <TouchableOpacity style={styles.todayButton}>
          <Text style={styles.todayText}>Today</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.LaterTextButton}>
          <Text style={styles.LaterText}>Later</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.addbuttonView}>
        <TouchableOpacity style={styles.addButton}>
          <Text style={styles.addButtonText}>Add</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default AddTask;
