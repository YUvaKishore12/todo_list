import {Text, TouchableOpacity, View} from 'react-native';
import React from 'react';
import LottieView from 'lottie-react-native';
import styles from '.';
import {useNavigation} from '@react-navigation/native';
const OnBoardingScreen = () => {
  const navigation = useNavigation();
  const handleHome = () => {
    navigation.navigate('HomeScreen');
  };
  return (
    <View style={styles.mainContainer}>
      <LottieView
        style={styles.animationStyles}
        source={require('../../../assets/onBoarding.json')}
        autoPlay
        loop
      />
      <View style={styles.textContainer}>
        <Text style={styles.planText}>Plan, manage </Text>
        <Text style={styles.planText}>and track tasks</Text>
      </View>
      <View style={styles.buttonContainer}>
        <TouchableOpacity onPress={handleHome} style={styles.buttonStyle}>
          <Text style={styles.buttonText}>Continue </Text>
        </TouchableOpacity>
      </View>
      <View style={styles.skipContainer}>
        <TouchableOpacity>
          <Text style={styles.skipText}>Skip</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default OnBoardingScreen;
