import React from 'react';
import {ScrollView, Text} from 'react-native';
import {List, ListItem} from 'native-base';

const OsiModel = () => {
  return (
    <ScrollView>
      <Text>
        Open System Interconnection (OSI) reference model has become an
        International standard and serves as a guide for networking. This model
        is the best known and most widely used guide to describe networking
        environments. Vendors design network products based on the
        specifications of the OSI model. It provides a description of how
        network hardware and software work together in a layered fashion to make
        communications possible. It also helps with trouble shooting by
        providing a frame of reference that describes how components are
        supposed to function. There are seven to get familiar with and these
        are,
      </Text>

      <List>
        <ListItem>
          <Text>application layer</Text>
        </ListItem>
        <ListItem>
          <Text>presentation layer</Text>
        </ListItem>
        <ListItem>
          <Text>session layer</Text>
        </ListItem>
        <ListItem>
          <Text>transport layer</Text>
        </ListItem>
        <ListItem>
          <Text>network layer</Text>
        </ListItem>
        <ListItem>
          <Text>data-link layer</Text>
        </ListItem>
        <ListItem>
          <Text>physical layer</Text>
        </ListItem>
      </List>
    </ScrollView>
  );
};
export default OsiModel;
