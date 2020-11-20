import React, {Component} from 'react';
import {Container, Header, Tab, Tabs, ScrollableTab} from 'native-base';

import BasicIntro from '../tabs/basicnetwork';
import TypeNetwork from '../tabs/typesNetwork';

import OsiModel from '../tabs/osimodel';
import Topology from '../tabs/topologies';
import NetServer from '../tabs/netServer';

const ScrollTab = () => {
  return (
    <Container>
      <Header hasTabs />
      <Tabs renderTabBar={() => <ScrollableTab />}>
        <Tab heading="What is Computer network">{<BasicIntro />}</Tab>
        <Tab heading="Types of networks">{<TypeNetwork />}</Tab>
        <Tab heading="OSI Models">{<OsiModel />}</Tab>
        <Tab heading="Network Topologies">{<Topology />}</Tab>
        <Tab heading="Types of Servers">{<NetServer />}</Tab>
      </Tabs>
    </Container>
  );
};
export default ScrollTab;
