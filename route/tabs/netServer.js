import React from 'react';
import {View, Text, ScrollView} from 'react-native';
import {List, ListItem} from 'native-base';

const NetServer = () => {
  return (
    <ScrollView>
      <View>
        <List>
          <ListItem>
            <Text>Device Servers</Text>
          </ListItem>
        </List>
        <Text>
          A device server is defined as a specialized, network-based hardware
          device designed to perform a single or specialized set of server
          functions. It is characterized by a minimal operating architecture
          that requires no per seat network operating system license, and client
          access that is independent of any operating system or proprietary
          protocol. In addition the device server is a "closed box," delivering
          extreme ease of installation, minimal maintenance, and can be managed
          by the client remotely via a Web browser. Print servers, terminal
          servers, remote access servers and network time servers are examples
          of device servers which are specialized for particular functions. Each
          of these types of servers has unique configuration attributes in
          hardware or software that help them to perform best in their
          particular arena.
        </Text>
        <List>
          <ListItem>
            <Text>Print Servers</Text>
          </ListItem>
        </List>
        <Text>
          Print servers allow printers to be shared by other users on the
          network. Supporting either parallel and/or serial interfaces, a print
          server accepts print jobs from any person on the network using
          supported protocols and manages those jobs on each appropriate
          printer.Print servers generally do not contain a large amount of
          memory; printers simply store information in a queue. When the desired
          printer becomes available, they allow the host to transmit the data to
          the appropriate printer port on the server. The print server can then
          simply queue and print each job in the order in which print requests
          are received, regardless of protocol used or the size of the job.
        </Text>
        <List>
          <ListItem>
            <Text>Multiport Device Servers</Text>
          </ListItem>
        </List>
        <Text>
          Devices that are attached to a network through a multiport device
          server can be shared between terminals and hosts at both the local
          site and throughout the network. A single terminal may be connected to
          several hosts at the same time (in multiple concurrent sessions), and
          can switch between them. Multiport device servers are also used to
          network devices that have only serial outputs. A connection between
          serial ports on different servers is opened, allowing data to move
          between the two devices. Given its natural translation ability, a
          multi-protocol multiport device server can perform conversions between
          the protocols it knows, like LAT and TCP/IP. While server bandwidth is
          not adequate for large file transfers, it can easily handle
          host-to-host inquiry/response applications, electronic mailbox
          checking, etc. And it is far more economical than the alternatives of
          acquiring expensive host software and special-purpose converters.
          Multiport device and print servers give their users greater
          flexibility in configuring and managing their networks. Whether it is
          moving printers and other peripherals from one network to another,
          expanding the dimensions of interoperability or preparing for growth,
          multiport device servers can fulfill your needs, all without major
          rewiring.
        </Text>
        <List>
          <ListItem>
            <Text>Access Servers</Text>
          </ListItem>
        </List>
        <Text>
          While Ethernet is limited to a geographic area, remote users such as
          traveling sales people need access to networkbased resources. Remote
          LAN access, or remote access, is a popular way to provide this
          connectivity. Access servers use telephone services to link a user or
          office with an office network. Dial-up remote access solutions such as
          ISDN or asynchronous dial introduce more flexibility. Dial-up remote
          access offers both the remote office and the remote user the economy
          and flexibility of "pay as you go" telephone services. ISDN is a
          special telephone service that offers three channels, two 64 Kbps "B"
          channels for user data and a "D" channel for setting up the
          connection. With ISDN, the B channels can be combined for double
          bandwidth or separated for different applications or users. With
          asynchronous remote access, regular telephone lines are combined with
          modems and remote access servers to allow users and networks to dial
          anywhere in the world and have data access. Remote access servers
          provide connection points for both dial-in and dial-out applications
          on the network to which they are attached. These hybrid devices route
          and filter protocols and offer other services such as modem pooling
          and terminal/printer services. For the remote PC user, one can connect
          from any available telephone jack (RJ45), including those in a hotel
          rooms or on most airplanes.
        </Text>
        <List>
          <ListItem>
            <Text>Network Time Servers</Text>
          </ListItem>
        </List>
        <Text>
          A network time server is a server specialized in the handling of
          timing information from sources such as satellites or radio broadcasts
          and is capable of providing this timing data to its attached network.
          Specialized protocols such as NTP or udp/time allow a time server to
          communicate to other network nodes ensuring that activities that must
          be coordinated according to their time of execution are synchronized
          correctly. GPS satellites are one source of information that can allow
          global installations to achieve constant timing.
        </Text>
      </View>
    </ScrollView>
  );
};
export default NetServer;
