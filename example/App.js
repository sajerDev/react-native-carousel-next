import React from 'react';
import {
  SafeAreaView,
  Text,
} from 'react-native';

import { Carousel } from "react-native-carousel-next";

const App = () => {
  return (
    <SafeAreaView>
      <Text>Test</Text>
      <Carousel example={"MINE TEST"}/>
    </SafeAreaView>
  );
};

export default App;
