import React, { useState, useEffect  } from 'react';
import './App.css';
import { FaSmile, FaPaperclip, FaMicrophone } from 'react-icons/fa'; // Importa íconos
import whatsappData from './whatsappData';
import ContactList from './contactList';
import ChatList from './chatList';
import ContactDetails from './ContactDetails'; // Si tienes un componente de detalles

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
    evento.preventDefault();
    if (nuevoMensaje.trim() === '') return;

    if (contactoSeleccionado === null) {
      alert('Por favor, selecciona un contacto primero.');
      return;
    }

    const nuevoChat = {
      id: (contactos.find(contacto => contacto.id === contactoSeleccionado).mensajes.length + 1).toString(),
      emisor: 'Yo',
      texto: nuevoMensaje,
      hora: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
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
      <div className="contact-list">
        <h2>Chats</h2>
        <input className="contact-search" type="text" placeholder="Busca un chat o inicia uno nuevo." />
        
        <ContactList
          contactos={contactos}
          contactoSeleccionado={contactoSeleccionado}
          handleSelectContact={handleSelectContact}
        />
      </div>

      {/* Contenedor de chat */}
      {contactoSeleccionado !== null && (
        <div className="chat-container">
          <div className="chat-history">
            <ChatList
              contactos={contactos}
              contactoSeleccionado={contactoSeleccionado}
            />
          </div>

          {/* Barra para enviar mensajes */}
          <div className="send-message">
            <form onSubmit={handleNewMessage}>
              <div className="icon-buttons">
                <button type="button" className="icon-btn"><FaSmile /></button>
                <button type="button" className="icon-btn"><FaPaperclip /></button>
              </div>

              <input
                type="text"
                placeholder="Escribe aquí..."
                value={nuevoMensaje}
                onChange={(evento) => setNuevoMensaje(evento.target.value)}
                required
              />

              <div className="icon-buttons">
                <button type="button" className="icon-btn"><FaMicrophone /></button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}

export default App;
