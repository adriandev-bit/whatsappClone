const whatsappData = [
    { 
      id: '1', 
      nombre: 'Juan', 
      ultimaConexion: '22:15',
      mensajes: [
        { id: '1', emisor: 'Yo', texto: 'Hola, Juan!', hora: '22:10', status: 'visto' },
        { id: '2', emisor: 'Juan', texto: 'Hola, ¿cómo estás?', hora: '22:12', status: 'no-visto' },
      ]
    },
    { 
      id: '2', 
      nombre: 'Ana', 
      ultimaConexion: '21:45',
      mensajes: [
        { id: '1', emisor: 'Yo', texto: 'Hola, Ana!', hora: '22:10', status: 'visto' },
        { id: '2', emisor: 'Ana', texto: '¿Qué tal?', hora: '22:12', status: 'no-visto' },
      ]
    },
    { 
      id: '3', 
      nombre: 'Carlos', 
      ultimaConexion: '20:30',
      mensajes: [
        { id: '1', emisor: 'Yo', texto: 'Hola, Carlos!', hora: '22:10', status: 'visto' },
      ]
    },
    { 
      id: '4', 
      nombre: 'María', 
      ultimaConexion: '19:00',
      mensajes: [
        { id: '1', emisor: 'Yo', texto: 'Hola, María!', hora: '22:10', status: 'visto' },
      ]
    }
  ];

  export default whatsappData;