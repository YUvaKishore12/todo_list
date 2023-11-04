import {Image, StyleSheet, View} from 'react-native';
import React from 'react';
import colors from '../../constants/colors';

const ImageBox = () => {
  return (
    <View style={styles.imageComponent}>
      <Image
        style={styles.imageStyles}
        source={require('../../../assets/task.jpg')}
      />
    </View>
  );
};

export default ImageBox;

const styles = StyleSheet.create({
  imageComponent: {
    width: '80%',
    backgroundColor: colors.white,
    height: 150,
    marginTop: 20,
    borderRadius: 20,
  },
  imageStyles: {
    width: '100%',
    height: '100%',
    borderRadius: 20,
    marginBottom: 20,
  },
});
