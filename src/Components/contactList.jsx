import React from 'react';
import { useNavigate } from 'react-router-dom';

const ContactList = ({ contactos, contactoSeleccionado, handleSelectContact }) => {
  const navigate = useNavigate(); // Usamos el hook useNavigate de React Router

  // Función que se ejecuta al hacer clic en un contacto
  const handleContactClick = (id) => {
    handleSelectContact(id); // Seleccionamos el contacto
    navigate(`/contacto/${id}`); // Navegamos a la página del contacto con su id
  };

  return (
    <ul className='contact-container'>
      {contactos.map((contacto) => (
        <li
          key={contacto.id}
          className={`contact-item ${contactoSeleccionado === contacto.id ? 'selected' : ''}`}
          onClick={() => handleContactClick(contacto.id)} // Usamos la nueva función aquí
        >
          <div className="contact-info">
            <div className='contact-info-profile'>
              <img className="profile-pic" src={contacto.imagen} alt="contactImage" />
              <div className="name">{contacto.nombre}</div>
            </div>
            <div className="ultimaConexion">{contacto.ultimaConexion}</div>
          </div>
        </li>
      ))}
    </ul>
  );
};

export default ContactList;
