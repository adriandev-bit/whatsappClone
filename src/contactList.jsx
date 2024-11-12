import React from 'react'

const contactListJSX = ({ contactos, contactoSeleccionado, handleSelectContact }) => ( 
    
    <ul>
    {contactos.map((contacto) => (
             
            <li 
              key={contacto.id} 
              className={`contact-item ${contactoSeleccionado === contacto.id ? 'selected' : ''}`}
              onClick={() => handleSelectContact(contacto.id)}
            >
              <div className="contact-info">
                <div className="profile-pic"></div> {/* Puedes agregar una imagen de perfil aquí */}
                
                <div className="name">{contacto.nombre}</div>
                <div className="ultimaConexion">{contacto.ultimaConexion}</div>
                
              </div>
              {/* <div className="status">En línea</div> */}
            </li>
            
          ))}
          </ul>
       
        );

export default contactListJSX