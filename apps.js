// ============================================
// BASE DE DATOS DE APPS - FÁCIL DE ACTUALIZAR
// ============================================

const appsDatabase = [
    {
        id: 1,
        name: 'MT Manager',
        category: 'mods',
        categoryLabel: 'App Mod',
        description: 'Potente gestor de archivos APK con editor integrado. Perfecto para modificar aplicaciones y juegos.',
        // IMAGEN - Pon aquí la URL de tu imagen
        image: 'images/mt-manager.jpg',
        size: '8.5 MB',
        version: '2.15.7',
        downloads: '150K',
        url: 'https://www.mediafire.com/file/qvtjqahtjc5dr7p/MT_Manager_2.15.7-clone.apk/file'
    },
    {
        id: 2,
        name: 'Ishiruka Emulador',
        category: 'games',
        categoryLabel: 'Juegos',
        description: 'Emulador de GameCube y Wii optimizado para Android. Juega tus clásicos favoritos.',
        image: 'images/ishiruka.jpg',
        size: '25 MB',
        version: 'v16',
        downloads: '200K',
        url: 'https://www.mediafire.com/file/o4zfia09jjve16v/Ishiruka_Ishiruka_v16.apk/file'
    },
    {
        id: 3,
        name: 'Car Parking Multiplayer MOD',
        category: 'mods',
        categoryLabel: 'App Mod',
        description: 'Parking multiplayer con coches modificados, dinero infinito y todo premium.',
        image: 'images/car-parking.jpg',
        size: '482 MB',
        version: '4.8.2.13',
        downloads: '500K',
        url: 'https://www.mediafire.com/file/et46cxcu69ehaok/cpm48213modt-Appsfab.net.apk/file'
    },
    {
        id: 4,
        name: 'Resident Evil 4',
        category: 'games',
        categoryLabel: 'Juegos',
        description: 'Resident Evil 4 Wii Edition para Android. Versión completa con saves.',
        image: 'images/resident-evil.jpg',
        size: '4.2 GB',
        version: 'Wii Edition',
        downloads: '100K',
        url: 'https://www.mediafire.com/file/yimnvpsek5d1nl2/Resident_Evil_4_-_Wii_Edition_%2528USA%2529.nkit.7z/file'
    }
];

// ============================================
// CÓMO AÑADIR MÁS APPS (SOLO COPIA Y PEGA ESTO)
// ============================================
/*
EJEMPLO PARA NUEVA APP:

{
    id: 5,  // ← Número siguiente
    name: 'Nombre de la App',
    category: 'games',  // Opciones: games, mods, tutorials, scripts
    categoryLabel: 'Juegos',  // Opciones: Juegos, App Mod, Tutorial, Script
    description: 'Descripción de la app aquí',
    image: 'images/nombre-imagen.jpg',  // ← La imagen en carpeta images/
    size: 'XX MB',
    version: 'v1.0',
    downloads: 'XXK',
    url: 'https://enlace-de-descarga.com/file'
},

// PEGA AQUÍ ARRIBA, ANTES DEL CORCHETE DE CIERRE ]
*/
