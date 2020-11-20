import React from 'react';
import {View, Text, ScrollView} from 'react-native';
import {List, ListItem} from 'native-base';


const BasicIntro = () => {
  return (
    <ScrollView>
      <View>
        <Text>
          A network is any collection of independent computers that communicate
          with one another over a shared network medium. A computer network is a
          collection of two or more connected computers. When these computers
          are joined in a network, people can share files and peripherals such
          as modems, printers, tape backup drives, or CD-ROM drives. When
          networks at multiple locations are connected using services available
          from phone companies, people can send e-mail, share links to the
          global Internet, or conduct video conferences in real time with other
          remote users. When a network becomes open sourced it can be managed
          properly with online collaboration software. As companies rely on
          applications like electronic mail and database management for core
          business operations, computer networking becomes increasingly more
          important.{' '}
        </Text>

        <List>
          <ListItem>
            <Text>Every network includes:</Text>
          </ListItem>
          <ListItem>
            <Text>At least two computers Server or Client workstation. </Text>
          </ListItem>
          <ListItem>
            <Text>Networking Interface Card's (NIC)</Text>
          </ListItem>
          <ListItem>
            <Text>
              A connection medium, usually a wire or cable, although wireless
              communication between networked computers and peripherals is also
              possible.
            </Text>
          </ListItem>
          <ListItem>
            <Text>
              Network Operating system software, such as Microsoft Windows NT or
              2000, Novell NetWare, Unix and Linux.{' '}
            </Text>
          </ListItem>
        </List>
      </View>
    </ScrollView>
  );
};

export default BasicIntro;
