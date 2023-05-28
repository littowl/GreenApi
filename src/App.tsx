import React from 'react';
import Main from './pages/Main';
import { ChakraProvider } from '@chakra-ui/react'
import Authorization from './pages/Authorization';
import ContactsPage from './pages/ContactsPage';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { store } from './store';
import { Provider } from 'react-redux';

function App() {
  return (
    <ChakraProvider>
      <BrowserRouter>
      <Provider store={store}>
        <Routes>
          <Route path='/' element = {<Authorization />} />
          <Route path='main' element = {<Main />} />
          <Route path='contacts' element = {<ContactsPage />} />
        </Routes>
      </Provider>
      
        
      </BrowserRouter>
      
    </ChakraProvider>
  );
}

export default App;
