// ========== VARIABLES GLOBALES ==========
let appsData = []; // Aquí se guardarán las apps después de cargarlas
let filtroActual = 'todos';
let busquedaActual = '';

// ========== CARGAR APPS DESDE EL ARCHIVO JSON ==========
async function cargarApps() {
    try {
        const respuesta = await fetch('data/apps.json');
        const datos = await respuesta.json();
        appsData = datos.apps;
        renderInicio(); // Una vez cargadas, muestra la página
    } catch (error) {
        console.error('Error al cargar las apps:', error);
        document.getElementById('main').innerHTML = `
            <div style="text-align:center; padding:3rem; color:#ff4444;">
                <i class="fas fa-exclamation-triangle fa-3x"></i>
                <p>Error al cargar las aplicaciones. Intenta de nuevo más tarde.</p>
            </div>
        `;
    }
}

// ========== FUNCIÓN PARA MOSTRAR APPS (MODIFICADA) ==========
function mostrarApps() {
    const grid = document.getElementById('grid-apps');
    if (!grid) return;

    // Ahora appsData viene del JSON, no está escrito aquí
    let appsFiltradas = appsData;

    if (filtroActual !== 'todos') {
        appsFiltradas = appsFiltradas.filter(app => app.categoria === filtroActual);
    }

    if (busquedaActual.trim() !== '') {
        const termino = busquedaActual.toLowerCase().trim();
        appsFiltradas = appsFiltradas.filter(app => 
            app.nombre.toLowerCase().includes(termino)
        );
    }

    // ... (el resto del código para generar las tarjetas es IGUAL)
}

// ========== AL INICIAR ==========
document.addEventListener('DOMContentLoaded', () => {
    cargarApps(); // ¡Aquí empieza todo!
});
