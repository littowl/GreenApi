import React from 'react';
import Main from './pages/Main';
import { ChakraProvider } from '@chakra-ui/react'
import Authorization from './pages/Authorization';

function App() {
  return (
    <ChakraProvider>
      {/* <Authorization /> */}
      <Main />
    </ChakraProvider>
  );
}

export default App;
