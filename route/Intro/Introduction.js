import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  ImageBackground,
} from 'react-native';
import ScrollTab from '../HeaderTab/scrollerTab';

const Introduct = () => {
  return (
    <ScrollView>
      <View>
        <ScrollTab />
      </View>
    </ScrollView>
  );
};
export default Introduct;

const styles = StyleSheet.create({
  headingOne: {
    fontSize: 35,
    textAlign: 'right',
  },
  parahOne: {
    fontSize: 15,
    textAlign: 'left',
  },
});
