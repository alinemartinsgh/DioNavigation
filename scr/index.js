import 'react-native-gesture-handler'; // para fazer a captura de gestos e outra funções
import React from 'react';
import { StatusBar } from 'react-native'

import Routes from './routes'

const App = () => {
  return (
    <>
      <StatusBar barStyle="dark-content" backgroundColor="#312E38"/>
      <Routes />
    </>
  )
}
export default App;
