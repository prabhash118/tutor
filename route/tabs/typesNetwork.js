import React from 'react';
import {Text, ScrollView} from 'react-native';
import {List, ListItem} from 'native-base';

const TypeNetwork = () => {
  return (
    <ScrollView>
      <List>
        <ListItem>
          <Text>LANs (Local Area Networks) </Text>
        </ListItem>
        <ListItem>
          <Text>
            A network is any collection of independent computers that
            communicate with one another over a shared network medium. LANs are
            networks usually confined to a geographic area, such as a single
            building or a college campus. LANs can be small, linking as few as
            three computers, but often link hundreds of computers used by
            thousands of people. The development of standard networking
            protocols and media has resulted in worldwide proliferation of LANs
            throughout business and educational organizations.
          </Text>
        </ListItem>
        <ListItem>
          <Text>WANs (Wide Area Networks) </Text>
        </ListItem>
        <ListItem>
          <Text>
            Wide area networking combines multiple LANs that are geographically
            separate. This is accomplished by connecting the different LANs
            using services such as dedicated leased phone lines, dial-up phone
            lines (both synchronous and asynchronous), satellite links, and data
            packet carrier services. Wide area networking can be as simple as a
            modem and remote access server for employees to dial into, or it can
            be as complex as hundreds of branch offices globally linked using
            special routing protocols and filters to minimize the expense of
            sending data sent over vast distances.{' '}
          </Text>
        </ListItem>
        <ListItem>
          <Text>MANs (Metropolitan area Networks) </Text>
        </ListItem>
        <ListItem>
          <Text>The refers to a network of computers with in a City. </Text>
        </ListItem>
        <ListItem>
          <Text>VPN (Virtual Private Network) </Text>
        </ListItem>
        <ListItem>
          <Text>
            VPN uses a technique known as tunneling to transfer data securely on
            the Internet to a remote access server on your workplace network.
            Using a VPN helps you save money by using the public Internet
            instead of making long–distance phone calls to connect securely with
            your private network. There are two ways to create a VPN connection,
            by dialing an Internet service provider (ISP), or connecting
            directly to Internet.{' '}
          </Text>
        </ListItem>
      </List>
    </ScrollView>
  );
};
export default TypeNetwork;
