import {
  Avatar,
  Button,
  Flex,
  Menu,
  MenuButton,
  MenuDivider,
  MenuItem,
  MenuList,
} from '@chakra-ui/react';
import React from 'react';
import { MdLogout } from 'react-icons/md';
import { useNavigate } from 'react-router-dom';
import { signout } from '../../Helpers/auth';

const UserProfile = (props) => {
  const navigate = useNavigate();
  return (
    <Flex alignItems={'center'} textColor={'purple.900'} zIndex={'100'}>
      <Menu>
        <MenuButton
          as={Button}
          rounded={'full'}
          variant={'link'}
          cursor={'pointer'}
          minW={0}
        >
          <Avatar size={'md'} src={props.profilePicture} />
        </MenuButton>
        <MenuList>
          <MenuItem
            _hover={{ bgColor: 'purple.800', textColor: 'white' }}
            _focus={{ bgColor: 'purple.800', textColor: 'white' }}
            onClick={() => {
              navigate('/dashboard');
            }}
          >
            Dashboard
          </MenuItem>
          <MenuItem
            _focus={{ bgColor: 'purple.800', textColor: 'white' }}
            _hover={{ bgColor: 'purple.800', textColor: 'white' }}
            onClick={() => {
              navigate('/dashboard');
            }}
          >
            Profile
          </MenuItem>
          <MenuDivider />
          <MenuItem
            onClick={() => {
              signout();
              navigate('/login');
            }}
            _focus={{ bgColor: 'purple.800', textColor: 'white' }}
            _hover={{ bgColor: 'purple.800', textColor: 'white' }}
            icon={<MdLogout />}
          >
            Logout
          </MenuItem>
        </MenuList>
      </Menu>
    </Flex>
  );
};

export default UserProfile;
