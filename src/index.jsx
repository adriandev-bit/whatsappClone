import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom'; // Importamos BrowserRouter
import App from './App'; // Importamos el componente principal de la app

// Este es el punto de entrada, donde montamos la aplicación en el DOM
const root = ReactDOM.createRoot(document.getElementById('root')); // Asegúrate de que el id sea 'root'
root.render(
  <BrowserRouter> {/* Envolvemos la aplicación en el BrowserRouter para habilitar el enrutamiento */}
    <App />
  </BrowserRouter>
);
