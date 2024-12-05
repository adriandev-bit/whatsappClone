import React, { useState, useEffect } from 'react';
import './App.css';
import whatsappData from './Data/whatsappData';
import ContactList from './Components/ContactList';
import ChatList from './Components/ChatList';




function App() {
  const [contactos, setContactos] = useState(whatsappData);
  const [nuevoMensaje, setNuevoMensaje] = useState('');
  const [contactoSeleccionado, setContactoSeleccionado] = useState(null); // Para almacenar el contacto seleccionado




  // Seleccionar el primer contacto por defecto al iniciar
  useEffect(() => {
    if (contactos.length > 0 && contactoSeleccionado === null) {
      setContactoSeleccionado(contactos[0].id); // Establece el primer contacto como seleccionado
    }
  }, [contactos, contactoSeleccionado]);





  const handleNewMessage = (evento) => {
    evento.preventDefault();      //para no refrescar la pagina
    if (nuevoMensaje.trim() === '') return;

    if (contactoSeleccionado === null) {
      alert('Por favor, selecciona un contacto primero.');
      return;
    }

    const nuevoChat = {
      id: (contactos.find(contacto => contacto.id === contactoSeleccionado).mensajes.length + 1).toString(),
      emisor: 'Yo',
      texto: nuevoMensaje,
      hora: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit', hour12: false }), // Usamos hour12: false para formato de 24 horas
      status: 'no-visto'
    };

    const nuevosContactos = contactos.map(contacto => {
      if (contacto.id === contactoSeleccionado) {
        return { ...contacto, mensajes: [...contacto.mensajes, nuevoChat] };
      }
      return contacto;
    });

    setContactos(nuevosContactos);
    setNuevoMensaje(''); // Limpiar el input
  };



  const handleSelectContact = (id) => {
    setContactoSeleccionado(id); // Establece el contacto seleccionado
  };





  return (
    <div className="app-container">
      {/* Contenedor de contactos */}
      <div className="contact-container">
        <ContactList
          contactos={contactos}
          contactoSeleccionado={contactoSeleccionado}
          handleSelectContact={handleSelectContact}
        />
      </div>

      {/* Contenedor de chat */}
      {contactoSeleccionado !== null && (
        <div className="chat-container">
            <ChatList
            contactos={contactos}
            contactoSeleccionado={contactoSeleccionado}
            setContactos={setContactos}
            nuevoMensaje={nuevoMensaje}
            setNuevoMensaje={setNuevoMensaje}
            handleNewMessage={handleNewMessage}
            />

      


        </div>
      )}
    </div>
  );
}

export default App;
