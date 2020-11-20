import React from 'react';
import {View, Text} from 'react-native';
import {List, ListItem} from 'native-base';

const Topology = () => {
  return (
    <View>
      <Text>
        A network topology is the geometric arrangement of nodes and cable links
        in a LAN, There are three topology's to think about when you get into
        networks. These are the star, rind, and the bus.
      </Text>
      <List>
        <ListItem>
          <Text>Star</Text>
        </ListItem>
      </List>
      <Text>
        in a star topology each node has a dedicated set of wires connecting it
        to a central network hub. Since all traffic passes through the hub, the
        hub becomes a central point for isolating network problems and gathering
        network statistics.
      </Text>
      <List>
        <ListItem>
          <Text>Ring</Text>
        </ListItem>
      </List>
      <Text>
        a ring topology features a logically closed loop. Data packets travel in
        a single direction around the ring from one network device to the next.
        Each network device acts as a repeater, meaning it regenerates the
        signal
      </Text>
      <List>
        <ListItem>
          <Text>Bus</Text>
        </ListItem>
      </List>
      <Text>
        the bus topology, each node (computer, server, peripheral etc.) attaches
        directly to a common cable. This topology most often serves as the
        backbone for a network. In some instances, such as in classrooms or
        labs, a bus will connect small workgroups
      </Text>
    </View>
  );
};
export default Topology;
