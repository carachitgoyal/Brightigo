import React, { useReducer } from 'react';
import {
  updateUser, //update user in the localstorage
  signout, // Signoutuser by clearing cookie and removing form local storage
  isAuth, // Check if user info is available in local storage and give access to it
  authenticate, // Authenticate user by passing data to cookie and localstorage during signin
  removeLocalStorage,
  setLocalStorage,
  getCookie,
  removeCookie,
  setCookie,
} from '../Helpers/auth';
import userAuthContext from './userAuth-context';
import Reducer from './userAuth-reducer';

const AppState = (props) => {
  const initialState = {
    
  };
  const [state, dispatch] = useReducer(Reducer, initialState);

  return (
    <userAuthContext.Provider
      value={{
        state,
        dispatch,
        updateUser,
        signout,
        isAuth,
        authenticate,
        removeLocalStorage,
        setLocalStorage,
        getCookie,
        removeCookie,
        setCookie,
      }}
    >
      {props.children}
    </userAuthContext.Provider>
  );
};

export default AppState;
