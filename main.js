// ============================================
// FUNCIONES PRINCIPALES
// ============================================

// Cargar apps
function loadApps(filter = 'all', searchTerm = '') {
    const grid = document.getElementById('appsGrid');
    if (!grid) return;
    
    let filteredApps = appsDatabase;
    
    // Filtrar por categoría
    if (filter !== 'all') {
        filteredApps = filteredApps.filter(app => app.category === filter);
    }
    
    // Filtrar por búsqueda
    if (searchTerm) {
        filteredApps = filteredApps.filter(app => 
            app.name.toLowerCase().includes(searchTerm.toLowerCase())
        );
    }
    
    // Mostrar resultados
    if (filteredApps.length === 0) {
        grid.innerHTML = `
            <div style="grid-column:1/-1; text-align:center; padding:3rem;">
                <i class="fas fa-search" style="font-size:3rem; color:#9ca3af;"></i>
                <p style="color:#9ca3af; margin-top:1rem;">No se encontraron apps con ese nombre</p>
            </div>
        `;
        return;
    }
    
    grid.innerHTML = filteredApps.map(app => `
        <div class="app-card">
            <img src="${app.image}" alt="${app.name}" class="app-image" 
                 onerror="this.src='https://via.placeholder.com/300x180/1a1a1a/7c3aed?text=${app.name}'">
            <span class="app-category">${app.categoryLabel}</span>
            <h3 class="app-title">${app.name}</h3>
            <p class="app-description">${app.description}</p>
            <div class="app-meta">
                <span><i class="fas fa-weight-hanging"></i> ${app.size}</span>
                <span><i class="fas fa-tag"></i> v${app.version}</span>
                <span><i class="fas fa-download"></i> ${app.downloads}</span>
            </div>
            <a href="${app.url}" class="download-btn" target="_blank" rel="noopener noreferrer">
                <i class="fas fa-download"></i> Descargar
            </a>
        </div>
    `).join('');
}

// Filtrar por categoría
function filterApps(category) {
    // Actualizar botones
    document.querySelectorAll('.category-btn').forEach(btn => {
        btn.classList.remove('active');
    });
    event.target.classList.add('active');
    
    // Obtener término de búsqueda
    const searchTerm = document.getElementById('searchInput')?.value || '';
    
    // Cargar apps filtradas
    loadApps(category, searchTerm);
}

// Buscar apps
function searchApps() {
    const searchTerm = document.getElementById('searchInput').value;
    const activeCategory = document.querySelector('.category-btn.active')?.getAttribute('onclick')?.match(/'([^']+)'/) || ['', 'all'];
    const category = activeCategory[1];
    
    loadApps(category, searchTerm);
}

// Inicializar
document.addEventListener('DOMContentLoaded', () => {
    // Verificar que appsDatabase existe
    if (typeof appsDatabase !== 'undefined') {
        loadApps('all');
    } else {
        document.getElementById('appsGrid').innerHTML = `
            <div style="grid-column:1/-1; text-align:center; padding:3rem; color:#ff4444;">
                <i class="fas fa-exclamation-triangle fa-3x"></i>
                <p>Error: No se pudo cargar la base de datos de apps</p>
            </div>
        `;
    }
    
    // Búsqueda con Enter
    document.getElementById('searchInput')?.addEventListener('keypress', (e) => {
        if (e.key === 'Enter') searchApps();
    });
});
