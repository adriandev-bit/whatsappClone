// Contact.jsx
import React from 'react';
import { Link } from 'react-router-dom';
import './Contact.css';

const Contact = ({ id, nombre, imagen, ultimaConexion, handleContactClick, isSelected }) => {
  return (
    
    <div>
      

    
    <div >

      <ul className='contact-list'>
        <li
          className={`contact-item ${isSelected ? 'selected' : ''}`}
          onClick={() => handleContactClick(id)}
        >
          <div className="contact-info">
            <div className='contact-info-profile'>
              <img className="profile-pic" src={imagen} alt="contactImage" />
              <div className="name">{nombre}</div>
            </div>
            <div className="ultimaConexion">{ultimaConexion}</div>
          </div>
        </li>
      </ul>

    </div>
    </div>
  );
};

export default Contact;
