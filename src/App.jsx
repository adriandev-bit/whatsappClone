import React, { useState } from 'react';
import './App.css';
import { FaSmile, FaPaperclip, FaMicrophone, FaPaperPlane } from 'react-icons/fa'; // Importamos los íconos
import whatsappData from "./whatsappData";
import ContactList from "./contactList";
import ChatList from "./chatList";

function App() {

  const [contactos, setContactos] = useState(whatsappData);
  const [nuevoMensaje, setNuevoMensaje] = useState('');
  const [contactoSeleccionado, setContactoSeleccionado] = useState(null); // Estado para el contacto seleccionado

  // Agregar un nuevo mensaje al contacto seleccionado
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

    // Actualizamos los mensajes del contacto seleccionado
    const nuevosContactos = contactos.map(contacto => {
      if (contacto.id === contactoSeleccionado) {
        return { ...contacto, mensajes: [...contacto.mensajes, nuevoChat] };
      }
      return contacto;
    });

    setContactos(nuevosContactos);
    setNuevoMensaje(''); // Limpiamos el input
  };

  const handleSelectContact = (id) => {
    setContactoSeleccionado(id); // Establece el contacto seleccionado
  };



  return (
    <div className="app-container">
      {/* Contenedor de contactos*/}
      <div className="contact-list">
        <h2>Chats</h2>
        <input className='contact-search' type="text" placeholder='Busca un chat o inicia uno nuevo.' />
       
        <ContactList
                    contactos={contactos}
                    contactoSeleccionado={contactoSeleccionado}
                    handleSelectContact={handleSelectContact}
                    
        />
    
      </div>

      {/* Contenedor del chat*/}
      <div className="chat-container">
        <div className="chat-history">
          {/* Filtrar el historial según el contacto seleccionado */}
          <ChatList
                    contactos={contactos}
                    contactoSeleccionado={contactoSeleccionado}
        />
        </div>

        {/* Barra para enviar mensajes */}
        <div className="send-message">
          <form onSubmit={handleNewMessage}>
            <div className="icon-buttons">
              {/* Íconos de carita, clip y micrófono */}
              <button type="button" className="icon-btn"><FaSmile /></button>
              <button type="button" className="icon-btn"><FaPaperclip /></button>
              
            </div>

            {/* Campo de texto para el mensaje */}
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
    </div>
  );
}

export default App;
