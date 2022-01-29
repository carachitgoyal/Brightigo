import React from 'react';

const Reducer = (state, action) => {
  switch (action.type) {
    case 'LOGIN':
      return {
          ...state,
          
      };
    case 'LOGOUT':
      localStorage.clear();
      return {
        ...state,
        isAuthenticated: false,
        user: null,
      };
    default:
      return state;
  }
};

export default Reducer;
