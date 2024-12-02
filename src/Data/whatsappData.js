const whatsappData = [
  { 
    id: '1', 
    nombre: 'Lucas', 
    ultimaConexion: obtenerDiaAleatorio(),
    imagen: 'https://randomuser.me/api/portraits/men/1.jpg',
    mensajes: [
      { id: '1', emisor: 'Yo', texto: 'Hola, Lucas!', hora: '22:10', status: 'visto' },
      { id: '2', emisor: 'Lucas', texto: 'Hola, ¿cómo estás?', hora: '22:12', status: 'no-visto' },
      { id: '3', emisor: 'Yo', texto: 'Todo bien, ¿y tú?', hora: '22:14', status: 'visto' },
      { id: '4', emisor: 'Lucas', texto: 'Todo bien, gracias!', hora: '22:16', status: 'no-visto' },
    ]
  },
  { 
    id: '2', 
    nombre: 'Sofía', 
    ultimaConexion: obtenerDiaAleatorio(),
    imagen: 'https://randomuser.me/api/portraits/women/1.jpg',
    mensajes: [
      { id: '1', emisor: 'Yo', texto: 'Hola, Sofía!', hora: '22:10', status: 'visto' },
      { id: '2', emisor: 'Sofía', texto: '¿Qué tal? lorem lorem. ¿Qué tal? lorem lorem?', hora: '22:12', status: 'no-visto' },
      { id: '3', emisor: 'Yo', texto: 'Todo bien, ¿y tú?', hora: '22:14', status: 'visto' },
      { id: '4', emisor: 'Sofía', texto: 'Todo genial, ¿te gustaría salir este fin de semana?', hora: '22:16', status: 'no-visto' },
      { id: '5', emisor: 'Yo', texto: 'Sí, suena bien!', hora: '22:20', status: 'visto' },
    ]
  },
  { 
    id: '3', 
    nombre: 'Mateo', 
    ultimaConexion: obtenerDiaAleatorio(),
    imagen: 'https://randomuser.me/api/portraits/men/2.jpg',
    mensajes: [
      { id: '1', emisor: 'Yo', texto: 'Hola, Mateo!', hora: '22:10', status: 'visto' },
      { id: '2', emisor: 'Mateo', texto: '¿Qué tal todo?', hora: '22:12', status: 'no-visto' },
      { id: '3', emisor: 'Yo', texto: 'Bien, ¿tú?', hora: '22:14', status: 'visto' },
      { id: '4', emisor: 'Mateo', texto: 'Todo tranquilo, ¿te gustaría ver una película este sábado?', hora: '22:16', status: 'no-visto' },
    ]
  },
  { 
    id: '4', 
    nombre: 'Valentina', 
    ultimaConexion: obtenerDiaAleatorio(),
    imagen: 'https://randomuser.me/api/portraits/women/2.jpg',
    mensajes: [
      { id: '1', emisor: 'Yo', texto: 'Hola, Valentina!', hora: '22:10', status: 'visto' },
      { id: '2', emisor: 'Valentina', texto: '¡Hola! ¿Cómo estás?', hora: '22:12', status: 'no-visto' },
      { id: '3', emisor: 'Yo', texto: 'Muy bien, gracias por preguntar. ¿Y tú?', hora: '22:14', status: 'visto' },
      { id: '4', emisor: 'Valentina', texto: 'Todo bien, ¿te gustaría salir el fin de semana?', hora: '22:16', status: 'no-visto' },
    ]
  },
  { 
    id: '5', 
    nombre: 'Carlos', 
    ultimaConexion: obtenerDiaAleatorio(),
    imagen: 'https://randomuser.me/api/portraits/men/3.jpg',
    mensajes: [
      { id: '1', emisor: 'Yo', texto: 'Hola, Carlos!', hora: '22:15', status: 'visto' },
      { id: '2', emisor: 'Carlos', texto: 'Hola, ¿todo bien?', hora: '22:16', status: 'no-visto' },
      { id: '3', emisor: 'Yo', texto: 'Todo tranquilo, ¿y tú?', hora: '22:17', status: 'visto' },
      { id: '4', emisor: 'Carlos', texto: 'Todo perfecto, gracias!', hora: '22:18', status: 'no-visto' },
      { id: '5', emisor: 'Yo', texto: 'Qué bueno!', hora: '22:20', status: 'visto' },
    ]
  },
  { 
    id: '6', 
    nombre: 'Laura', 
    ultimaConexion: obtenerDiaAleatorio(),
    imagen: 'https://randomuser.me/api/portraits/women/3.jpg',
    mensajes: [
      { id: '1', emisor: 'Yo', texto: 'Hola, Laura!', hora: '22:20', status: 'visto' },
      { id: '2', emisor: 'Laura', texto: 'Hola, ¿cómo te va?', hora: '22:22', status: 'no-visto' },
      { id: '3', emisor: 'Yo', texto: 'Bien, ¿y tú?', hora: '22:24', status: 'visto' },
      { id: '4', emisor: 'Laura', texto: 'Todo bien, gracias!', hora: '22:25', status: 'no-visto' },
    ]
  },
  { 
    id: '7', 
    nombre: 'Felipe', 
    ultimaConexion: obtenerDiaAleatorio(),
    imagen: 'https://randomuser.me/api/portraits/men/4.jpg',
    mensajes: [
      { id: '1', emisor: 'Yo', texto: 'Hola, Felipe!', hora: '22:25', status: 'visto' },
      { id: '2', emisor: 'Felipe', texto: '¿Cómo te va?', hora: '22:26', status: 'no-visto' },
      { id: '3', emisor: 'Yo', texto: 'Todo bien, ¿y tú?', hora: '22:27', status: 'visto' },
      { id: '4', emisor: 'Felipe', texto: 'Todo perfecto, gracias!', hora: '22:28', status: 'no-visto' },
    ]
  },
  { 
    id: '8', 
    nombre: 'Ana', 
    ultimaConexion: obtenerDiaAleatorio(),
    imagen: 'https://randomuser.me/api/portraits/women/4.jpg',
    mensajes: [
      { id: '1', emisor: 'Yo', texto: 'Hola, Ana!', hora: '22:30', status: 'visto' },
      { id: '2', emisor: 'Ana', texto: 'Hola, ¿cómo estás?', hora: '22:32', status: 'no-visto' },
      { id: '3', emisor: 'Yo', texto: 'Todo bien, gracias por preguntar.', hora: '22:35', status: 'visto' },
      { id: '4', emisor: 'Ana', texto: 'Todo bien también, gracias!', hora: '22:36', status: 'no-visto' },
    ]
  },
  { 
    id: '9', 
    nombre: 'Carlos', 
    ultimaConexion: obtenerDiaAleatorio(),
    imagen: 'https://randomuser.me/api/portraits/men/3.jpg',
    mensajes: [
      { id: '1', emisor: 'Yo', texto: 'Hola, Carlos!', hora: '22:15', status: 'visto' },
      { id: '2', emisor: 'Carlos', texto: 'Hola, ¿todo bien?', hora: '22:16', status: 'no-visto' },
      { id: '3', emisor: 'Yo', texto: 'Todo tranquilo, ¿y tú?', hora: '22:17', status: 'visto' },
      { id: '4', emisor: 'Carlos', texto: 'Todo perfecto, gracias!', hora: '22:18', status: 'no-visto' },
    ]
  },
  { 
    id: '10', 
    nombre: 'Laura', 
    ultimaConexion: obtenerDiaAleatorio(),
    imagen: 'https://randomuser.me/api/portraits/women/3.jpg',
    mensajes: [
      { id: '1', emisor: 'Yo', texto: 'Hola, Laura!', hora: '22:20', status: 'visto' },
      { id: '2', emisor: 'Laura', texto: 'Hola, ¿cómo te va?', hora: '22:22', status: 'no-visto' },
      { id: '3', emisor: 'Yo', texto: 'Bien, ¿y tú?', hora: '22:24', status: 'visto' },
      { id: '4', emisor: 'Laura', texto: 'Todo bien, gracias!', hora: '22:25', status: 'no-visto' },
    ]
  }
];




// Función para generar un día aleatorio de la semana
function obtenerDiaAleatorio() {
  const diasSemana = ['Domingo', 'Lunes', 'Martes', 'Miércoles', 'Jueves', 'Viernes', 'Sábado'];
  const diaAleatorio = Math.floor(Math.random() * diasSemana.length); // Generar un índice aleatorio entre 0 y 6
  return diasSemana[diaAleatorio];
}




export default whatsappData;
