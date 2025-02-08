import React from 'react';
import { createRoot } from 'react-dom/client';
import { Provider } from 'react-redux';
import { store } from './app/store';
import App from './App';
import StoreContextProvider from './Context/StoreContext';
// import StoreContextProvider from './Context/StoreContext';

const container = document.getElementById('root');
const root = createRoot(container);

root.render(
 
    <Provider store={store}>
        <StoreContextProvider>
        <App />
        </StoreContextProvider>

 
         

      
     </Provider>
 
);

