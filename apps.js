// ============================================
// BASE DE DATOS DE APPS - ACTUALIZACIÓN FÁCIL
// ============================================

const appsDatabase = [
    {
        id: 1,
        name: 'MT Manager',
        category: 'mods',
        categoryLabel: '📦 App Mod',
        description: 'Potente gestor de archivos APK con editor integrado. Perfecto para modificar aplicaciones y juegos.',
        image: 'https://via.placeholder.com/300x180/1a1a1a/7c3aed?text=MT+Manager',
        size: '8.5 MB',
        version: '2.15.7',
        downloads: '150K',
        url: 'https://www.mediafire.com/file/qvtjqahtjc5dr7p/MT_Manager_2.15.7-clone.apk/file'
    },
    {
        id: 2,
        name: 'Ishiruka Emulador',
        category: 'games',
        categoryLabel: '🎮 Juegos',
        description: 'Emulador de GameCube y Wii optimizado para Android. Juega tus clásicos favoritos.',
        image: 'https://via.placeholder.com/300x180/1a1a1a/7c3aed?text=Ishiruka',
        size: '25 MB',
        version: 'v16',
        downloads: '200K',
        url: 'https://www.mediafire.com/file/o4zfia09jjve16v/Ishiruka_Ishiruka_v16.apk/file'
    },
    {
        id: 3,
        name: 'Car Parking Multiplayer MOD',
        category: 'mods',
        categoryLabel: '📦 App Mod',
        description: 'Parking multiplayer con coches modificados, dinero infinito y todo premium.',
        image: 'https://via.placeholder.com/300x180/1a1a1a/7c3aed?text=Car+Parking',
        size: '482 MB',
        version: '4.8.2.13',
        downloads: '500K',
        url: 'https://www.mediafire.com/file/et46cxcu69ehaok/cpm48213modt-Appsfab.net.apk/file'
    },
    {
        id: 4,
        name: 'Resident Evil 4',
        category: 'games',
        categoryLabel: '🎮 Juegos',
        description: 'Resident Evil 4 Wii Edition para Android. Versión completa con saves.',
        image: 'https://via.placeholder.com/300x180/1a1a1a/7c3aed?text=Resident+Evil+4',
        size: '4.2 GB',
        version: 'Wii Edition',
        downloads: '100K',
        url: 'https://www.mediafire.com/file/yimnvpsek5d1nl2/Resident_Evil_4_-_Wii_Edition_%2528USA%2529.nkit.7z/file'
    }
];

// ============================================
// INSTRUCCIONES PARA AÑADIR NUEVAS APPS:
// ============================================
/*
1. COPIA este formato:
{
    id: 5,
    name: 'Nombre App',
    category: 'games', // Opciones: games, mods, tutorials, scripts
    categoryLabel: '🎮 Juegos', // Elige el ícono que quieras
    description: 'Descripción',
    image: 'URL de la imagen',
    size: 'XX MB',
    version: 'v1.0',
    downloads: 'XXK',
    url: 'enlace de descarga'
},

2. PÉGALO ANTES del último CORCHETE de cierre ]
*/
