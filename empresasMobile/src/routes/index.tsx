import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import AuthRoutes from './auth.routes';
import AppRoutes from './app.routes'
import { useSelector } from 'react-redux';
import { IState } from '../store';

const Routes: React.FC = () => {
    const reduxState = useSelector<IState, IState>(state => state);
    console.log('REDUX>', reduxState);
    return (
      <NavigationContainer>
      { !reduxState.authentication.success ?
        ( <AuthRoutes /> )
        :
        ( <AppRoutes /> )
      }

      </NavigationContainer>
    )
}

export default Routes;
