import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { useSelector } from 'react-redux';
import AuthRoutes from './auth.routes';
import AppRoutes from './app.routes';
import { IState } from '../store';
import { IUserAuthenticated } from '../store/modules/authentication/types';

const Routes: React.FC = () => {
  const reduxState = useSelector<IState, IUserAuthenticated>(
    state => state.authentication,
  );

  return (
    <NavigationContainer>
      {!reduxState.success ? <AuthRoutes /> : <AppRoutes />}
    </NavigationContainer>
  );
};

export default Routes;
