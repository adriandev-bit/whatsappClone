import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom'; // Asegúrate de importar react-router-dom
import App from './App.jsx'; // Importa App.jsx correctamente
import {ContactsContextProvider} from './Context/ContactsContext.jsx';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
    <ContactsContextProvider> {/* Asegúrate de que BrowserRouter esté presente aquí */}
    <App />
  </ContactsContextProvider>
  </BrowserRouter>

);
