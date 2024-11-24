const whatsappData = [
  { 
    id: '1', 
    nombre: 'Lucas', // Nombre cambiado a uno inventado
    ultimaConexion: '22:15',
    imagen: 'https://randomuser.me/api/portraits/men/1.jpg', // URL de la imagen real
    mensajes: [
      { id: '1', emisor: 'Yo', texto: 'Hola, Lucas!', hora: '22:10', status: 'visto' },
      { id: '2', emisor: 'Lucas', texto: 'Hola, ¿cómo estás?', hora: '22:12', status: 'no-visto' },
    ]
  },
  { 
    id: '2', 
    nombre: 'Sofía', // Nombre cambiado a uno inventado
    ultimaConexion: '21:45',
    imagen: 'https://randomuser.me/api/portraits/women/1.jpg', // URL de la imagen real
    mensajes: [
      { id: '1', emisor: 'Yo', texto: 'Hola, Sofía!', hora: '22:10', status: 'visto' },
      { id: '2', emisor: 'Sofía', texto: '¿Qué tal? lorem lorem¿Qué tal? lorem lorem¿Qué tal? lorem lorem¿Qué tal? lorem lorem¿Qué tal? lorem lorem', hora: '22:12', status: 'no-visto' },
    ]
  },
  { 
    id: '3', 
    nombre: 'Mateo', // Nombre cambiado a uno inventado
    ultimaConexion: '20:30',
    imagen: 'https://randomuser.me/api/portraits/men/2.jpg', // URL de la imagen real
    mensajes: [
      { id: '1', emisor: 'Yo', texto: 'Hola, Mateo!', hora: '22:10', status: 'visto' },
    ]
  },
  { 
    id: '4', 
    nombre: 'Valentina', // Nombre cambiado a uno inventado
    ultimaConexion: '19:00',
    imagen: 'https://randomuser.me/api/portraits/women/2.jpg', // URL de la imagen real
    mensajes: [
      { id: '1', emisor: 'Yo', texto: 'Hola, Valentina!', hora: '22:10', status: 'visto' },
    ]
  }
];

export default whatsappData;
