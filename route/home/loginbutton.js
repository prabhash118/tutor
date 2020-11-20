import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {Button} from 'native-base';
import {useNavigation} from '@react-navigation/native';
import SignUpScreen from '../login/signup';

const LoginButton = () => {
  const navigation = useNavigation();
  return (
    <View>
      <Button
        rounded
        info
        style={styles.signups}
        onPress={() => navigation.navigate('SignUpScreen')}>
        <Text>SignUp</Text>
      </Button>

      <Button rounded style={styles.signfree}>
        <Text>SignUp Free</Text>
      </Button>
    </View>
  );
};
export default LoginButton;

const styles = StyleSheet.create({
  signups: {
    justifyContent: 'center',
  },
  signfree: {
    justifyContent: 'center',
  },
});
