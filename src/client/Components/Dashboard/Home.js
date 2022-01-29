import React from 'react';
import { isAuth } from '../../Helpers/auth';

const DashboardHome = () => {
  const { email, name } = isAuth();
  return <div>Welcome Back {name}</div>;
};

export default DashboardHome;
