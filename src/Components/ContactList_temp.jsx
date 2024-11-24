// ContactList.jsx
import React, { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { ContactsContext } from '../Context/ContactsContext';
import Contact from './Contact';

const ContactList = ({ contactoSeleccionado, handleSelectContact }) => {
  const navigate = useNavigate();
  const { contacts_state } = useContext(ContactsContext); // Obtener contactos desde el contexto

  // Función que se ejecuta al hacer clic en un contacto
  const handleContactClick = (id) => {
    handleSelectContact(id); // Seleccionamos el contacto
    navigate(`/contacto/${id}`); // Navegamos a la página del contacto con su id
  };

  return (
    <>
      {contacts_state.map((contacto) => (
        <Contact
          key={contacto.id}
          id={contacto.id}
          nombre={contacto.nombre}
          imagen={contacto.imagen}
          ultimaConexion={contacto.ultimaConexion}
          handleContactClick={handleContactClick}
          isSelected={contactoSeleccionado === contacto.id}
        />
      ))}
    </>
  );
};

export default ContactList;
