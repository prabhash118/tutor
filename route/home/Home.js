import React from 'react';
import {View, Text, ImageBackground, StyleSheet} from 'react-native';
import {Container} from 'native-base';

import LoginButton from './loginbutton';

const HomeScreen = () => {
  return (
    <Container style={styles.container}>
      <View>
        <ImageBackground
          source={{
            uri:
              'https://images.techhive.com/images/article/2014/09/mobile_phone_data_privacy_security_thinkstock_492795869-100412464-large.jpg',
          }}
          style={styles.image}>
          <Text style={styles.imageText}>Network Tutors</Text>
          <LoginButton />
        </ImageBackground>
      </View>
    </Container>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  container: {
    display: 'flex',
  },

  image: {
    height: '100%',
  },
  imageText: {
    color: '#000000',
    fontSize: 50,
    justifyContent: 'center',
    borderColor: '#000000',
    borderWidth: 3,
    textAlign: 'center',
    marginTop: 400,
  },
});
