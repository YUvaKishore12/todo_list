import {View} from 'react-native';
import React from 'react';
import Titlebox from '../../components/TitleBox/Titlebox';
import styles from '../Home/homeStyles';

const AddTask = () => {
  return (
    <View style={styles.mainView}>
      <Titlebox startingText={'Add'} endingText={'Task  '} />
    </View>
  );
};

export default AddTask;
