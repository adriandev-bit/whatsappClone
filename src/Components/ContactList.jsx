import React, { useState, useContext } from 'react';
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

  // Estado para manejar si el input está enfocado o no
  const [isFocused, setIsFocused] = useState(false);

   // Estado para manejar la visibilidad del menú
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // Cambiar el estado cuando el input recibe o pierde el foco
  const handleFocus = () => setIsFocused(true);
  const handleBlur = () => setIsFocused(false);

   // Función para alternar la visibilidad del menú
   const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  return (
    <>
      <div>
        <div className="contact-list-title" >
          <h2>Chats</h2>
          <div className="contact-list-title-icons">
            <span aria-hidden="true" data-icon="new-chat-outline" class=""><svg viewBox="0 0 24 24" height="24" width="24" preserveAspectRatio="xMidYMid meet" class="" fill="none"><title>new-chat-outline</title><path d="M9.53277 12.9911H11.5086V14.9671C11.5086 15.3999 11.7634 15.8175 12.1762 15.9488C12.8608 16.1661 13.4909 15.6613 13.4909 15.009V12.9911H15.4672C15.9005 12.9911 16.3181 12.7358 16.449 12.3226C16.6659 11.6381 16.1606 11.0089 15.5086 11.0089H13.4909V9.03332C13.4909 8.60007 13.2361 8.18252 12.8233 8.05119C12.1391 7.83391 11.5086 8.33872 11.5086 8.991V11.0089H9.49088C8.83941 11.0089 8.33411 11.6381 8.55097 12.3226C8.68144 12.7358 9.09947 12.9911 9.53277 12.9911Z" fill="currentColor"></path><path fill-rule="evenodd" clip-rule="evenodd" d="M0.944298 5.52617L2.99998 8.84848V17.3333C2.99998 18.8061 4.19389 20 5.66665 20H19.3333C20.8061 20 22 18.8061 22 17.3333V6.66667C22 5.19391 20.8061 4 19.3333 4H1.79468C1.01126 4 0.532088 4.85997 0.944298 5.52617ZM4.99998 8.27977V17.3333C4.99998 17.7015 5.29845 18 5.66665 18H19.3333C19.7015 18 20 17.7015 20 17.3333V6.66667C20 6.29848 19.7015 6 19.3333 6H3.58937L4.99998 8.27977Z" fill="currentColor"></path></svg></span>
            {/* Ícono del menú hamburguesa que alterna la visibilidad del menú */}
            <span aria-hidden="true" onClick={toggleMenu} className="menu-icon">
              <svg viewBox="0 0 24 24" height="24" width="24" preserveAspectRatio="xMidYMid meet" class="" version="1.1" x="0px" y="0px" enable-background="new 0 0 24 24">
                <title>menu</title>
                <path fill="currentColor" d="M12,7c1.104,0,2-0.896,2-2c0-1.105-0.895-2-2-2c-1.104,0-2,0.894-2,2 C10,6.105,10.895,7,12,7z M12,9c-1.104,0-2,0.894-2,2c0,1.104,0.895,2,2,2c1.104,0,2-0.896,2-2C13.999,9.895,13.104,9,12,9z M12,15 c-1.104,0-2,0.894-2,2c0,1.104,0.895,2,2,2c1.104,0,2-0.896,2-2C13.999,15.894,13.104,15,12,15z"></path>
              </svg>
            </span>
          </div>
        </div>

        {/* Menú desplegable */}
        {isMenuOpen && (
          <div className="menu-dropdown">
            <ul>
              <li><a href="#Nuevo Grupo">Nuevo Grupo</a></li>
              <li><a href="#Mensajes destacados">Mensajes destacados</a></li>
              <li><a href="#Seleccionar chats">Seleccionar chats</a></li>
              <li><a href="#Cerrar sesion">Cerrar sesion</a></li>
              <li><a href="#Obtener WhatsApp para Windows">Obtener WhatsApp para Windows</a></li>
            </ul>
          </div>
        )}
        <div className="contact-search">
          <div className="contact-search-icon">
            {/* Aquí cambiamos el ícono dependiendo del estado */}
            {isFocused ? (
              <span aria-hidden="true" className="arrow-left">
                {/* Flecha verde hacia la izquierda */}
                <svg viewBox="0 0 24 24" height="24" width="24" preserveAspectRatio="xMidYMid meet" class="" fill="currentColor">
                  <path d="M15,18l-6-6l6-6" stroke="green" strokeWidth="2" fill="none" />
                </svg>
              </span>
            ) : (
              <svg viewBox="0 0 24 24" height="24" width="24" preserveAspectRatio="xMidYMid meet" class="" version="1.1" x="0px" y="0px" enable-background="new 0 0 24 24"><title>search</title><path fill="currentColor" d="M15.009,13.805h-0.636l-0.22-0.219c0.781-0.911,1.256-2.092,1.256-3.386 c0-2.876-2.332-5.207-5.207-5.207c-2.876,0-5.208,2.331-5.208,5.207s2.331,5.208,5.208,5.208c1.293,0,2.474-0.474,3.385-1.255 l0.221,0.22v0.635l4.004,3.999l1.194-1.195L15.009,13.805z M10.201,13.805c-1.991,0-3.605-1.614-3.605-3.605 s1.614-3.605,3.605-3.605s3.605,1.614,3.605,3.605S12.192,13.805,10.201,13.805z"></path></svg>
            )}
          </div>
          <input className="contact-search-input" type="text" placeholder="Buscar" onFocus={handleFocus} onBlur={handleBlur} />
        </div>
        <div className="contact-list-bubbles">
          <span>Todos</span>
          <span>No Leidos</span>
          <span>Favoritos</span>
          <span>Grupos</span>
        </div>
      </div>
      <div className='contact-list'>
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
      </div>
    </>

  );
};

export default ContactList;
