import React, { useEffect } from 'react';
import {
  Box,
  Flex,
  Text,
  Button,
  Stack,
  Center,
  useMediaQuery,
} from '@chakra-ui/react';
import { Link, NavigationType, useNavigate } from 'react-router-dom';
import UserProfile from './UserProfile';
import { isAuth } from '../../Helpers/auth';
import { useLocation } from 'react-router';
import Logo from '../Logo';

const NavBar = (props) => {
  const [isOpen, setIsOpen] = React.useState(false);
  const [isSmallScreen] = useMediaQuery('(max-width: 768px)');

  const toggle = () => setIsOpen(!isOpen);
  const location = useLocation();

  useEffect(() => {
    isAuth();
  }, [location.key]);

  return (
    <Center
      bg={'purple.50'}
      borderBottom={{ base: isOpen ? '3px solid black' : '0', md: '0' }}
    >
      <NavBarContainer {...props}>
        <Center display={{ base: 'none', md: 'block' }}>
          <Logo />
        </Center>
        {isAuth() && isSmallScreen ? (
          <UserProfile name={isAuth()?.name} />
        ) : (
          <Link to='/register'>
            <Button
              display={{ base: 'block', md: 'none' }}
              size='md'
              rounded='none'
              color={['primary.500', 'primary.500', 'white', 'white']}
              bg={'purple.800'}
              _hover={{
                bg: '#FAF5FF',
                outline: '2px solid #543B99',
                color: '#543B99',
              }}
            >
              Register
            </Button>
          </Link>
        )}
        <MenuToggle toggle={toggle} isOpen={isOpen} />
        <MenuLinks
          isOpen={isOpen}
          isAuth={isAuth}
          isSmallScreen={isSmallScreen}
        />
      </NavBarContainer>
    </Center>
  );
};

const CloseIcon = () => (
  <svg width='24' viewBox='0 0 18 18' xmlns='http://www.w3.org/2000/svg'>
    <title>Close</title>
    <path
      fill='#543B99'
      d='M9.00023 7.58599L13.9502 2.63599L15.3642 4.04999L10.4142 8.99999L15.3642 13.95L13.9502 15.364L9.00023 10.414L4.05023 15.364L2.63623 13.95L7.58623 8.99999L2.63623 4.04999L4.05023 2.63599L9.00023 7.58599Z'
    />
  </svg>
);

const MenuIcon = () => (
  <svg
    width='24px'
    viewBox='0 0 20 20'
    xmlns='http://www.w3.org/2000/svg'
    fill='#543B99'
  >
    <title>Menu</title>
    <path d='M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z' />
  </svg>
);

const MenuToggle = ({ toggle, isOpen }) => {
  return (
    <Box display={{ base: 'block', md: 'none' }} onClick={toggle}>
      {isOpen ? <CloseIcon /> : <MenuIcon />}
    </Box>
  );
};

const MenuItem = ({ children, isLast, to = '/', ...rest }) => {
  return (
    <Link to={to}>
      <Text display='block' {...rest}>
        {children}
      </Text>
    </Link>
  );
};

const MenuLinks = ({ isOpen, isAuth, isSmallScreen }) => {
  return (
    <Box
      display={{ base: isOpen ? 'block' : 'none', md: 'block' }}
      flexBasis={{ base: '100%', md: 'auto' }}
    >
      <Stack
        spacing={8}
        align={{ base: 'flex-start', md: 'center' }}
        justify={['flex-end', 'flex-end', 'flex-end', 'flex-end']}
        direction={['column', 'column', 'row', 'row']}
        pt={[4, 4, 0, 0]}
        textColor={'purple.900'}
        fontSize={'xl'}
      >
        <MenuItem to='/home'>Home</MenuItem>
        <MenuItem to='/course'>Course </MenuItem>
        {isAuth() ? (
          !isSmallScreen && <UserProfile name={isAuth()?.name} />
        ) : (
          <>
            <MenuItem to='/login'>Login </MenuItem>
            <MenuItem
              to='/register'
              display={{ base: 'none', md: 'block' }}
              isLast
            >
              <Button
                size='lg'
                rounded='0'
                color={'white'}
                bg={'purple.800'}
                _hover={{
                  bg: '#FAF5FF',
                  outline: '2px solid #543B99',
                  color: '#543B99',
                }}
              >
                Register
              </Button>
            </MenuItem>{' '}
          </>
        )}
      </Stack>
    </Box>
  );
};

const NavBarContainer = ({ children, ...props }) => {
  return (
    <Flex
      flexDirection={{ base: 'row-reverse', md: 'row' }}
      as='nav'
      align='center'
      justify='space-between'
      wrap='wrap'
      w='100%'
      maxW={'8xl'}
      mx={'auto'}
      mb={8}
      p={8}
      bg={['primary.500', 'primary.500', 'transparent', 'transparent']}
      color={['white', 'white', 'primary.700', 'primary.700']}
      {...props}
    >
      {children}
    </Flex>
  );
};

export default NavBar;
