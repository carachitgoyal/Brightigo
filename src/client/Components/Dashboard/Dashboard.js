import React from 'react';
import {
  Box,
  Flex,
  Text,
  Button,
  Stack,
  Center,
  Container,
  Tabs,
  TabList,
  TabPanels,
  Tab,
  TabPanel,
} from '@chakra-ui/react';
import DashboardHome from './Home';
import Profile from './Profile';

const Dashboard = () => {
  return (
    <Container w={'full'} maxW={'8xl'}>
      <Stack direction={{ base: 'column', md: 'row' }} h={'100vh'} w={'full'}>
        {/*mobile and tablet displays */}
        <Tabs
          colorScheme={'purple'}
          orientation={'horizontal'}
          display={{ base: 'flex', md: 'none' }}
          flexDir={'column'}
        >
          <TabList
            borderWidth={'0'}
            alignSelf={'center'}
            mb={'1rem'}
            w={'full'}
            justifyContent={['space-between', 'space-evenly']}
          >
            <Tab fontSize={'xl'}>Home</Tab>
            <Tab fontSize={'xl'}>Profile</Tab>
            <Tab fontSize={'xl'}>Settings</Tab>
          </TabList>

          <TabPanels>
            <TabPanel>
              <DashboardHome />
            </TabPanel>
            <TabPanel>
              <Profile />
            </TabPanel>
            <TabPanel>
              <p>three!</p>
            </TabPanel>
          </TabPanels>
        </Tabs>

        {/*bigger screens*/}
        <Tabs
          colorScheme={'purple'}
          orientation={'vertical'}
          display={{ base: 'none', md: 'flex' }}
        >
          <TabList borderWidth={'0'} pt={'3rem'}>
            <Tab fontSize={'2xl'} my={'1rem'}>
              Home
            </Tab>
            <Tab fontSize={'2xl'} mb={'1rem'}>
              Profile
            </Tab>
            <Tab fontSize={'2xl'} mb={'1rem'}>
              Settings
            </Tab>
          </TabList>

          <TabPanels>
            <TabPanel>
              <DashboardHome />
            </TabPanel>
            <TabPanel>
              <Profile />
            </TabPanel>
            <TabPanel>
              <p>three!</p>
            </TabPanel>
          </TabPanels>
        </Tabs>
      </Stack>
    </Container>
  );
};

export default Dashboard;
