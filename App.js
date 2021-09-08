import React from 'react';
import { Provider } from "react-redux"
import { PersistGate } from 'redux-persist/integration/react'
import { NavigationContainer } from '@react-navigation/native';
import { store, persistor } from "./redux/store";
import Screens from './components/Screens';

export default function App() {
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <NavigationContainer>
          {/* <Mystack /> */}
          <Screens />
        </NavigationContainer>
      </PersistGate>
    </Provider>

  );
}

