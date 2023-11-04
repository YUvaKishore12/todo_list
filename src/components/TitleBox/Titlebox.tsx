import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import colors from '../../constants/colors';

type TitleProps = {
  startingText: string;
  endingText: string;
};
const Titlebox = (props: TitleProps) => {
  return (
    <View style={styles.mainContainer}>
      <View style={styles.titleContainer}>
        <Text style={styles.titleText}>{props.startingText}</Text>
        <Text style={styles.endingText}>{props.endingText}</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  mainContainer: {
    alignItems: 'center',
  },
  titleContainer: {
    width: '50%',
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  titleText: {
    color: colors.black,
    fontSize: 30,
    marginTop: 30,
    fontFamily: 'Poppins-SemiBold',
  },
  endingText: {
    color: colors.white,
    fontSize: 30,
    marginTop: 30,
    fontFamily: 'Poppins-SemiBold',
    borderColor: colors.black,
    textShadowOffset: {
      width: 0.1,
      height: 0.1,
    },
    textShadowColor: colors.black,
    textShadowRadius: 5,
  },
});
export default Titlebox;
