import React, { useState, useEffect  } from 'react';
import './App.css';
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
        <div className="contact-list-title" >
        <h2>Chats</h2>
        <div className="contact-list-title-icons">
        <span aria-hidden="true" data-icon="new-chat-outline" class=""><svg viewBox="0 0 24 24" height="24" width="24" preserveAspectRatio="xMidYMid meet" class="" fill="none"><title>new-chat-outline</title><path d="M9.53277 12.9911H11.5086V14.9671C11.5086 15.3999 11.7634 15.8175 12.1762 15.9488C12.8608 16.1661 13.4909 15.6613 13.4909 15.009V12.9911H15.4672C15.9005 12.9911 16.3181 12.7358 16.449 12.3226C16.6659 11.6381 16.1606 11.0089 15.5086 11.0089H13.4909V9.03332C13.4909 8.60007 13.2361 8.18252 12.8233 8.05119C12.1391 7.83391 11.5086 8.33872 11.5086 8.991V11.0089H9.49088C8.83941 11.0089 8.33411 11.6381 8.55097 12.3226C8.68144 12.7358 9.09947 12.9911 9.53277 12.9911Z" fill="currentColor"></path><path fill-rule="evenodd" clip-rule="evenodd" d="M0.944298 5.52617L2.99998 8.84848V17.3333C2.99998 18.8061 4.19389 20 5.66665 20H19.3333C20.8061 20 22 18.8061 22 17.3333V6.66667C22 5.19391 20.8061 4 19.3333 4H1.79468C1.01126 4 0.532088 4.85997 0.944298 5.52617ZM4.99998 8.27977V17.3333C4.99998 17.7015 5.29845 18 5.66665 18H19.3333C19.7015 18 20 17.7015 20 17.3333V6.66667C20 6.29848 19.7015 6 19.3333 6H3.58937L4.99998 8.27977Z" fill="currentColor"></path></svg></span>
        <span aria-hidden="true" data-icon="menu" class=""><svg viewBox="0 0 24 24" height="24" width="24" preserveAspectRatio="xMidYMid meet" class="" version="1.1" x="0px" y="0px" enable-background="new 0 0 24 24"><title>menu</title><path fill="currentColor" d="M12,7c1.104,0,2-0.896,2-2c0-1.105-0.895-2-2-2c-1.104,0-2,0.894-2,2 C10,6.105,10.895,7,12,7z M12,9c-1.104,0-2,0.894-2,2c0,1.104,0.895,2,2,2c1.104,0,2-0.896,2-2C13.999,9.895,13.104,9,12,9z M12,15 c-1.104,0-2,0.894-2,2c0,1.104,0.895,2,2,2c1.104,0,2-0.896,2-2C13.999,15.894,13.104,15,12,15z"></path></svg></span>
        </div>
        </div>
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
                <button type="button" className="icon-btn-smile"><span aria-hidden="true" data-icon="smiley"><svg viewBox="0 0 24 24" height="24" width="24" preserveAspectRatio="xMidYMid meet" class="x23j0i4 xd7y6wv" version="1.1" x="0px" y="0px" enable-background="new 0 0 24 24"><title>smiley</title><path fill="currentColor" d="M9.153,11.603c0.795,0,1.439-0.879,1.439-1.962S9.948,7.679,9.153,7.679 S7.714,8.558,7.714,9.641S8.358,11.603,9.153,11.603z M5.949,12.965c-0.026-0.307-0.131,5.218,6.063,5.551 c6.066-0.25,6.066-5.551,6.066-5.551C12,14.381,5.949,12.965,5.949,12.965z M17.312,14.073c0,0-0.669,1.959-5.051,1.959 c-3.505,0-5.388-1.164-5.607-1.959C6.654,14.073,12.566,15.128,17.312,14.073z M11.804,1.011c-6.195,0-10.826,5.022-10.826,11.217 s4.826,10.761,11.021,10.761S23.02,18.423,23.02,12.228C23.021,6.033,17.999,1.011,11.804,1.011z M12,21.354 c-5.273,0-9.381-3.886-9.381-9.159s3.942-9.548,9.215-9.548s9.548,4.275,9.548,9.548C21.381,17.467,17.273,21.354,12,21.354z  M15.108,11.603c0.795,0,1.439-0.879,1.439-1.962s-0.644-1.962-1.439-1.962s-1.439,0.879-1.439,1.962S14.313,11.603,15.108,11.603z"></path></svg></span></button>
                <button type="button" className="icon-btn-plus"><span aria-hidden="true" data-icon="plus" class="xzwifym"><svg viewBox="0 0 24 24" width="30" preserveAspectRatio="xMidYMid meet" class=""><title>plus</title><path fill="currentColor" d="M19,13h-6v6h-2v-6H5v-2h6V5h2v6h6V13z"></path></svg></span></button>
              </div>

              <input
                type="text"
                placeholder="Escribe aquí..."
                value={nuevoMensaje}
                onChange={(evento) => setNuevoMensaje(evento.target.value)}
                required
              />

              <div className="icon-buttons">
                <button 
                type="button" 
                className="icon-btn-mic-send"
                disable={!nuevoMensaje.trim()}>            
                  {!nuevoMensaje.trim() ? 
                 <span aria-hidden="true" data-icon="ptt" class=""><svg viewBox="0 0 24 24" height="24" width="24" preserveAspectRatio="xMidYMid meet" class="" version="1.1" x="0px" y="0px" enable-background="new 0 0 24 24"><title>ptt</title><path fill="currentColor" d="M11.999,14.942c2.001,0,3.531-1.53,3.531-3.531V4.35c0-2.001-1.53-3.531-3.531-3.531 S8.469,2.35,8.469,4.35v7.061C8.469,13.412,9.999,14.942,11.999,14.942z M18.237,11.412c0,3.531-2.942,6.002-6.237,6.002 s-6.237-2.471-6.237-6.002H3.761c0,4.001,3.178,7.297,7.061,7.885v3.884h2.354v-3.884c3.884-0.588,7.061-3.884,7.061-7.885 L18.237,11.412z"></path></svg></span> 
                  :
                 <span aria-hidden="true" data-icon="send" class=""><svg viewBox="0 0 24 24" height="24" width="24" preserveAspectRatio="xMidYMid meet" class="" version="1.1" x="0px" y="0px" enable-background="new 0 0 24 24"><title>send</title><path fill="currentColor" d="M1.101,21.757L23.8,12.028L1.101,2.3l0.011,7.912l13.623,1.816L1.112,13.845 L1.101,21.757z"></path></svg></span>
                  }
                  </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}

export default App;
