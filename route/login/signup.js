import React from 'react';
import {
  View,
  Text,
  ImageBackground,
  StyleSheet,
} from 'react-native';
import {Form, Item, Label, Input, Button, Icon} from 'native-base';

const SignUpScreen = () => {
  return (
    <View>
      <ImageBackground
        source={{
          uri:
            'https://www.whiteheadassoc.com/wp-content/uploads/2018/09/iStock-998993038.jpg',
        }}
        style={styles.backImage}>
        <Icon name="md-chevron-back" />
        <Text style={styles.imageText}>Sign Up</Text>
        <Form>
          <Item floatingLabel>
            <Label>Full Name</Label>
            <Input />
          </Item>
          <Item floatingLabel last>
            <Label>User Name</Label>
            <Input />
          </Item>
          <Item floatingLabel last>
            <Label>Email</Label>
            <Input />
          </Item>
          <Item floatingLabel last>
            <Label>Password</Label>
            <Input />
          </Item>
          <Item floatingLabel last>
            <Label>Confirm Password</Label>
            <Input />
          </Item>
          <Text>Already have account?</Text>
          <Button small primary>
            <Text>Sign In</Text>
          </Button>
          <Button block light>
            <Text>Create an account</Text>
          </Button>
        </Form>
      </ImageBackground>
    </View>
  );
};

export default SignUpScreen;

const styles = StyleSheet.create({
  Container: {
    display: 'flex',
  },

  backImage: {
    height: '100%',
  },
});
