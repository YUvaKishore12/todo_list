import {View} from 'react-native';

import React, {useEffect, useState} from 'react';
import MyTabs from './Bottomtab';
import AsyncStorageWrapper from '../helpers/AsyncStorageHelper';

import OnboardingStack from './OnBoardingStack';

const HAS_LAUNCHED = 'HAS_LAUNCHED';
const NavigationFlow = () => {
  const [hasLaunched, setHasLaunched] = useState(false);
  useEffect(() => {
    const getData = async () => {
      const haslaunched = await AsyncStorageWrapper.getItem(HAS_LAUNCHED);
      if (haslaunched) {
        setHasLaunched(true);
      } else {
        await AsyncStorageWrapper.setItem(HAS_LAUNCHED, 'true');
      }
    };
    getData().catch(error => {
      console.log(error);
    });
  }, []);
  return (
    <View style={{flex: 1}}>
      {hasLaunched ? <MyTabs /> : <OnboardingStack />}
    </View>
  );
};

export default NavigationFlow;
