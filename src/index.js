import {
  ChakraProvider,
  Button,
  Box
} from '@chakra-ui/react';
import {
  BrowserRouter,
  Routes,
  Route
} from 'react-router-dom';
import React, { StrictMode } from 'react';
import reportWebVitals from './reportWebVitals';
import { overrides } from './utilis/themes/theme'
import Navigator from './components/Navigator/Navigator';

// ------------------------------// ----------------------------- //
// calling react root component in the html index file with id = 'root'
// update for react version 18.00

import ReactDOM from 'react-dom/client';
const rootElement = document.getElementById("root");
const root = ReactDOM.createRoot(rootElement);

// ---------------------------- // ----------------------------- //

root.render(
  <StrictMode>
    <ChakraProvider theme={overrides}>
      <Navigator />
      <BrowserRouter>
        <Routes>
          <Route path='/testcomponents' element={
            <Box
              display={'flex'}
              flexDirection={'column'}
              alignContent={'center'}
              justifyContent={'center'}
              width={'sm'}
              height={'sm'}
              bg={'gray'}>
              <Button variant={'rePensaWhiteButton'} colorScheme={'blue'}>Chakra is Workig</Button></Box>} />
        </Routes>
      </BrowserRouter>
    </ChakraProvider>
  </StrictMode>
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://cra.link/PWA
//serviceWorker.unregister();

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
