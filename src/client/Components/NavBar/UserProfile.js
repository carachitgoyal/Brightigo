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
    <Flex alignItems={'center'} textColor={'purple.900'}>
      <Menu>
        <MenuButton
          as={Button}
          rounded={'full'}
          variant={'link'}
          cursor={'pointer'}
          minW={0}
        >
          <Avatar
            size={'md'}
            src={
              'https://images.unsplash.com/photo-1493666438817-866a91353ca9?ixlib=rb-0.3.5&q=80&fm=jpg&crop=faces&fit=crop&h=200&w=200&s=b616b2c5b373a80ffc9636ba24f7a4a9'
            }
          />
        </MenuButton>
        <MenuList>
          <MenuItem
            _hover={{ bgColor: 'purple.800', textColor: 'white' }}
            _focus={{ bgColor: 'purple.800', textColor: 'white' }}
          >
            Dashboard
          </MenuItem>
          <MenuItem
            _focus={{ bgColor: 'purple.800', textColor: 'white' }}
            _hover={{ bgColor: 'purple.800', textColor: 'white' }}
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
            Logout @{props.name}
          </MenuItem>
        </MenuList>
      </Menu>
    </Flex>
  );
};

export default UserProfile;
