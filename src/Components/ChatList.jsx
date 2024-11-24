// ChatList.jsx
import React from 'react';
import Chat from './Chat';

const ChatList = ({ contactos, contactoSeleccionado }) => {
  // Encontrar el contacto seleccionado
  const contacto = contactos.find((contacto) => contacto.id === contactoSeleccionado);

  // Si no se ha seleccionado un contacto, no mostrar nada o mostrar un mensaje
  if (!contacto) {
    return <p>No se ha seleccionado ningún contacto.</p>;
  }

  return (
    <>
      {/* Mostrar los mensajes del contacto seleccionado */}
      {contacto.mensajes.map((chat) => (
        <Chat 
          key={chat.id}
          chat={chat} // Pasamos el objeto chat al componente Chat
        />
      ))}
    </>
  );
};

export default ChatList;
