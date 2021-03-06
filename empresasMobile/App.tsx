import React from 'react';
import {View} from 'react-native';
import { Provider } from 'react-redux';
import store from './src/store';
import Routes from './src/routes';
import "intl";
import 'intl/locale-data/jsonp/en-US';

export default function App() {
  return (
    <Provider store={store}>
      <Routes />
    </Provider>
  );
}
