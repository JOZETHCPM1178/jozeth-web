/* ============================================================
   ModZone — app.js
   Lógica principal: datos, render, búsqueda, admin, animaciones
   ============================================================ */

'use strict';

/* ─── BASE DE DATOS DE CONTENIDO ─────────────────────────────────────────────
   Para agregar contenido manualmente, simplemente añade un objeto al array
   correspondiente. Campos disponibles:
     id       : (auto) número único
     name     : nombre de la app/juego/script
     category : "apk" | "game" | "script" | "tutorial"
     version  : versión (string)
     emoji    : emoji que representa la app
     desc     : descripción corta
     tags     : array de strings con etiquetas
     download : URL de descarga (MediaFire, etc.)
     playstore: URL de Google Play (o YouTube para tutoriales)
   ─────────────────────────────────────────────────────────────────────────── */
const INITIAL_CONTENT = [
  /* ── APK Apps ── */
  {
    id: 1, category: 'apk',
    name: 'WhatsApp Mod Gold',
    version: 'v9.65',
    emoji: '💬',
    desc: 'WhatsApp modificado con temas exclusivos, mensajes programados, modo anti-ban y privacidad avanzada.',
    tags: ['sin anuncios', 'anti-ban', 'temas', 'premium'],
    download: 'https://mediafire.com/',
    playstore: 'https://play.google.com/store/apps/details?id=com.whatsapp'
  },
  {
    id: 2, category: 'apk',
    name: 'YouTube Premium APK',
    version: 'v19.10.2',
    emoji: '▶️',
    desc: 'YouTube con funciones premium desbloqueadas: sin anuncios, reproducción en segundo plano y descarga de videos.',
    tags: ['sin anuncios', 'fondo', 'premium'],
    download: 'https://mediafire.com/',
    playstore: 'https://play.google.com/store/apps/details?id=com.google.android.youtube'
  },
  {
    id: 3, category: 'apk',
    name: 'Spotify Mod',
    version: 'v8.9.12',
    emoji: '🎵',
    desc: 'Spotify con cuenta premium gratis. Escucha música sin límites, sin anuncios y con calidad de audio máxima.',
    tags: ['premium', 'sin anuncios', 'offline'],
    download: 'https://mediafire.com/',
    playstore: 'https://play.google.com/store/apps/details?id=com.spotify.music'
  },
  {
    id: 4, category: 'apk',
    name: 'Instagram Mod',
    version: 'v300.0.0',
    emoji: '📸',
    desc: 'Instagram con funciones extra: guardar stories, ver perfiles privados, descarga de fotos y videos.',
    tags: ['stories', 'privado', 'descargar'],
    download: 'https://mediafire.com/',
    playstore: 'https://play.google.com/store/apps/details?id=com.instagram.android'
  },
  {
    id: 5, category: 'apk',
    name: 'Netflix Premium Mod',
    version: 'v8.88.0',
    emoji: '🎬',
    desc: 'Netflix desbloqueado con calidad 4K, descargas sin límite y acceso a todos los contenidos premium.',
    tags: ['4K', 'premium', 'sin límite'],
    download: 'https://mediafire.com/',
    playstore: 'https://play.google.com/store/apps/details?id=com.netflix.mediaclient'
  },
  {
    id: 6, category: 'apk',
    name: 'TikTok Sin Marcas',
    version: 'v32.5.1',
    emoji: '🎭',
    desc: 'TikTok modificado sin marca de agua en descargas, sin anuncios y con región desbloqueada.',
    tags: ['sin marca', 'sin anuncios', 'desbloqueado'],
    download: 'https://mediafire.com/',
    playstore: 'https://play.google.com/store/apps/details?id=com.zhiliaoapp.musically'
  },

  /* ── Juegos Mod ── */
  {
    id: 7, category: 'game',
    name: 'Roblox Mod Menu',
    version: 'v2.625.660',
    emoji: '🟥',
    desc: 'Roblox con menú de modificaciones: volar, speed hack, y herramientas exclusivas para explorar mundos.',
    tags: ['fly', 'speed', 'mod menu'],
    download: 'https://mediafire.com/',
    playstore: 'https://play.google.com/store/apps/details?id=com.roblox.client'
  },
  {
    id: 8, category: 'game',
    name: 'Minecraft PE Premium',
    version: 'v1.20.81',
    emoji: '⛏️',
    desc: 'Minecraft Bedrock Edition desbloqueada al completo. Acceso a Marketplace gratis y skins premium.',
    tags: ['premium', 'marketplace', 'gratis'],
    download: 'https://mediafire.com/',
    playstore: 'https://play.google.com/store/apps/details?id=com.mojang.minecraftpe'
  },
  {
    id: 9, category: 'game',
    name: 'Clash of Clans Mod',
    version: 'v16.253.28',
    emoji: '🏰',
    desc: 'Clash of Clans con gemas infinitas, recursos ilimitados y todas las tropas desbloqueadas.',
    tags: ['gemas', 'infinito', 'recursos'],
    download: 'https://mediafire.com/',
    playstore: 'https://play.google.com/store/apps/details?id=com.supercell.clashofclans'
  },
  {
    id: 10, category: 'game',
    name: 'PUBG Mobile Hack',
    version: 'v3.3.0',
    emoji: '🔫',
    desc: 'PUBG con aimbot, wallhack y ESP activables. Usa bajo tu propia responsabilidad.',
    tags: ['aimbot', 'wallhack', 'ESP'],
    download: 'https://mediafire.com/',
    playstore: 'https://play.google.com/store/apps/details?id=com.tencent.ig'
  },
  {
    id: 11, category: 'game',
    name: 'Free Fire Max Mod',
    version: 'v2.106.1',
    emoji: '🔥',
    desc: 'Free Fire con diamantes infinitos, skins desbloqueados y antiban integrado.',
    tags: ['diamantes', 'skins', 'anti-ban'],
    download: 'https://mediafire.com/',
    playstore: 'https://play.google.com/store/apps/details?id=com.dts.freefiremax'
  },
  {
    id: 12, category: 'game',
    name: 'Among Us Mod',
    version: 'v2024.11.26',
    emoji: '🚀',
    desc: 'Among Us desbloqueado: todos los skins, mascotas y sombreros gratis sin comprar.',
    tags: ['skins', 'gratis', 'desbloqueado'],
    download: 'https://mediafire.com/',
    playstore: 'https://play.google.com/store/apps/details?id=com.innersloth.spacemafia'
  },

  /* ── Scripts ── */
  {
    id: 13, category: 'script',
    name: 'Script Roblox Blox Fruits',
    version: 'v5.2',
    emoji: '⚙️',
    desc: 'Script Lua para Blox Fruits: Auto Farm, Auto Quest, Devil Fruit ESP y más funciones automáticas.',
    tags: ['auto farm', 'ESP', 'lua', 'roblox'],
    download: 'https://mediafire.com/',
    playstore: 'https://www.roblox.com/games/2753915549'
  },
  {
    id: 14, category: 'script',
    name: 'Script Pet Simulator 99',
    version: 'v3.1',
    emoji: '🐾',
    desc: 'Auto Farm mascotas raras, Auto Hatch y Dupe de monedas para Pet Simulator 99 en Roblox.',
    tags: ['auto hatch', 'dupe', 'granja'],
    download: 'https://mediafire.com/',
    playstore: 'https://www.roblox.com/games/8737899140'
  },
  {
    id: 15, category: 'script',
    name: 'Bot AutoClicker Python',
    version: 'v1.8',
    emoji: '🖱️',
    desc: 'Bot programado en Python para automatizar clics, formularios y tareas repetitivas en cualquier app.',
    tags: ['python', 'bot', 'automatización'],
    download: 'https://mediafire.com/',
    playstore: 'https://github.com/'
  },
  {
    id: 16, category: 'script',
    name: 'AHK Scripts Pack',
    version: 'v2.0',
    emoji: '🔩',
    desc: 'Colección de 20+ scripts AutoHotKey para gaming: macros, aim assist, rapid fire y más.',
    tags: ['AHK', 'macro', 'gaming'],
    download: 'https://mediafire.com/',
    playstore: 'https://github.com/'
  },

  /* ── Tutoriales ── */
  {
    id: 17, category: 'tutorial',
    name: 'Cómo instalar APKs Mod',
    version: '2024',
    emoji: '📖',
    desc: 'Tutorial completo para instalar APKs modificadas en Android de forma segura y sin errores.',
    tags: ['android', 'instalación', 'básico'],
    download: 'https://www.youtube.com/@JOZETHCPM1',
    playstore: 'https://www.youtube.com/@JOZETHCPM1'
  },
  {
    id: 18, category: 'tutorial',
    name: 'Scripts Roblox: Guía Inicio',
    version: '2024',
    emoji: '🎓',
    desc: 'Aprende a usar scripts en Roblox desde cero: qué es un executor, cómo instalarlo y ejecutarlo.',
    tags: ['roblox', 'executor', 'beginner'],
    download: 'https://www.youtube.com/@JOZETHCPM1',
    playstore: 'https://www.youtube.com/@JOZETHCPM1'
  },
  {
    id: 19, category: 'tutorial',
    name: 'Root Android sin PC',
    version: '2024',
    emoji: '🔓',
    desc: 'Tutorial paso a paso para hacer root a tu dispositivo Android sin necesidad de computadora.',
    tags: ['root', 'android', 'avanzado'],
    download: 'https://www.youtube.com/@JOZETHCPM1',
    playstore: 'https://www.youtube.com/@JOZETHCPM1'
  },
  {
    id: 20, category: 'tutorial',
    name: 'Crear Mods para Juegos',
    version: '2024',
    emoji: '🛠️',
    desc: 'Cómo crear tus propios mods para juegos Android usando herramientas como APKTool y MT Manager.',
    tags: ['modding', 'APKTool', 'avanzado'],
    download: 'https://www.youtube.com/@JOZETHCPM1',
    playstore: 'https://www.youtube.com/@JOZETHCPM1'
  },
];

/* ─── ESTADO DE LA APLICACIÓN ────────────────────────────────────────────── */
let appState = {
  content: [...INITIAL_CONTENT],  // todos los items
  filtered: [...INITIAL_CONTENT], // items filtrados actualmente
  activeFilter: 'all',            // filtro de categoría activo
  searchQuery: '',                 // texto de búsqueda
  nextId: INITIAL_CONTENT.length + 1,
};

/* ─── UTILIDADES ─────────────────────────────────────────────────────────── */

/**
 * Hace scroll suave a un elemento por su id
 * @param {string} targetId - id del elemento
 */
function smoothScrollTo(targetId) {
  const el = document.getElementById(targetId);
  if (!el) return;
  const navH = parseInt(getComputedStyle(document.documentElement).getPropertyValue('--nav-h'));
  const y = el.getBoundingClientRect().top + window.pageYOffset - navH - 20;
  window.scrollTo({ top: y, behavior: 'smooth' });
}

/**
 * Escapa caracteres HTML para evitar XSS
 * @param {string} str
 * @returns {string}
 */
function escHtml(str) {
  return String(str)
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;');
}

/**
 * Obtiene el texto del botón principal según categoría
 */
function getDownloadLabel(category) {
  if (category === 'tutorial') return '▶️ Ver Tutorial';
  return '⬇️ Descargar';
}

/**
 * Obtiene el texto del botón secundario según categoría
 */
function getSecondaryLabel(category) {
  if (category === 'tutorial') return '🎬 YouTube';
  if (category === 'script')   return '🔗 Ver Fuente';
  return '▶️ Google Play';
}

/**
 * Clase CSS para la badge de categoría
 */
function getBadgeClass(category) {
  const map = { apk: '', game: 'game', script: 'script', tutorial: 'tutorial' };
  return map[category] || '';
}

/**
 * Texto legible de la categoría
 */
function getCategoryLabel(category) {
  const map = { apk: 'APK App', game: 'Juego Mod', script: 'Script', tutorial: 'Tutorial' };
  return map[category] || category;
}

/* ─── RENDER DE CARDS ────────────────────────────────────────────────────── */

/**
 * Genera el HTML de una card
 * @param {object} item
 * @returns {string} HTML string
 */
function renderCard(item) {
  const tags = item.tags.map(t => `<span class="tag">${escHtml(t)}</span>`).join('');
  const badgeClass = getBadgeClass(item.category);
  const dlLabel = getDownloadLabel(item.category);
  const secLabel = getSecondaryLabel(item.category);
  const secBtnClass = item.category === 'tutorial' ? 'btn-yt' : 'btn-play';

  return `
    <div class="card" data-id="${item.id}" data-category="${item.category}">
      <div class="card-thumb">
        <span>${item.emoji}</span>
        <span class="card-badge ${badgeClass}">${getCategoryLabel(item.category)}</span>
      </div>
      <div class="card-body">
        <div class="card-title">${escHtml(item.name)}</div>
        <div class="card-version">${escHtml(item.version)}</div>
        <div class="card-desc">${escHtml(item.desc)}</div>
        <div class="card-tags">${tags}</div>
        <div class="card-actions">
          <a href="${escHtml(item.download)}" target="_blank" rel="noopener" class="btn btn-download" onclick="event.stopPropagation()">
            ${dlLabel}
          </a>
          <a href="${escHtml(item.playstore)}" target="_blank" rel="noopener" class="btn ${secBtnClass}" onclick="event.stopPropagation()">
            ${secLabel}
          </a>
        </div>
      </div>
    </div>
  `;
}

/**
 * HTML para cuando no hay resultados
 */
function renderEmpty(msg = 'No se encontraron resultados') {
  return `
    <div class="empty-state">
      <div class="empty-state-icon">🔍</div>
      <div class="empty-state-text">${msg}</div>
    </div>
  `;
}

/**
 * Actualiza los 4 grids de contenido filtrando por categoría y búsqueda
 */
function renderAllGrids() {
  const grids = {
    apk:      document.getElementById('apkGrid'),
    game:     document.getElementById('gamesGrid'),
    script:   document.getElementById('scriptsGrid'),
    tutorial: document.getElementById('tutorialsGrid'),
  };

  const q = appState.searchQuery.toLowerCase().trim();
  const activeFilter = appState.activeFilter;

  Object.entries(grids).forEach(([cat, grid]) => {
    // Si hay filtro de categoría activo y no coincide, ocultar sección completa
    const section = document.getElementById(
      cat === 'apk' ? 'apk' :
      cat === 'game' ? 'games' :
      cat === 'script' ? 'scripts' : 'tutorials'
    );

    if (activeFilter !== 'all' && activeFilter !== cat) {
      if (section) section.style.display = 'none';
      return;
    }
    if (section) section.style.display = '';

    const items = appState.content.filter(item => {
      if (item.category !== cat) return false;
      if (!q) return true;
      return (
        item.name.toLowerCase().includes(q) ||
        item.desc.toLowerCase().includes(q) ||
        item.tags.some(t => t.toLowerCase().includes(q))
      );
    });

    if (items.length === 0) {
      grid.innerHTML = renderEmpty(q ? `Sin resultados para "${escHtml(q)}"` : 'No hay contenido aún.');
    } else {
      grid.innerHTML = items.map(renderCard).join('');
      // Asignar animaciones con delay escalonado
      grid.querySelectorAll('.card').forEach((card, i) => {
        card.style.animationDelay = `${i * 0.06}s`;
      });
      // Click en card → abrir modal
      grid.querySelectorAll('.card').forEach(card => {
        card.addEventListener('click', () => openModal(parseInt(card.dataset.id)));
      });
    }
  });
}

/* ─── MODAL DE DETALLE ───────────────────────────────────────────────────── */

/**
 * Abre el modal con el detalle de un item
 * @param {number} id
 */
function openModal(id) {
  const item = appState.content.find(x => x.id === id);
  if (!item) return;

  const dlLabel = getDownloadLabel(item.category);
  const secLabel = getSecondaryLabel(item.category);
  const secBtnClass = item.category === 'tutorial' ? 'btn-yt' : 'btn-play';
  const tags = item.tags.map(t => `<span class="tag">${escHtml(t)}</span>`).join('');

  document.getElementById('modalBody').innerHTML = `
    <div class="modal-hero">${item.emoji}</div>
    <div class="modal-title">${escHtml(item.name)}</div>
    <div class="modal-version">Versión ${escHtml(item.version)} · ${getCategoryLabel(item.category)}</div>
    <div class="modal-tags">${tags}</div>
    <p class="modal-desc">${escHtml(item.desc)}</p>
    <div class="modal-actions">
      <a href="${escHtml(item.download)}" target="_blank" rel="noopener" class="btn btn-download">
        ${dlLabel}
      </a>
      <a href="${escHtml(item.playstore)}" target="_blank" rel="noopener" class="btn ${secBtnClass}">
        ${secLabel}
      </a>
    </div>
  `;

  document.getElementById('modalOverlay').classList.add('open');
  document.body.style.overflow = 'hidden';
}

/**
 * Cierra el modal
 */
function closeModal() {
  document.getElementById('modalOverlay').classList.remove('open');
  document.body.style.overflow = '';
}

/* ─── BUSCADOR ───────────────────────────────────────────────────────────── */

function initSearch() {
  const input = document.getElementById('globalSearch');
  const clearBtn = document.getElementById('searchClear');
  const pills = document.querySelectorAll('.pill');

  // Búsqueda en tiempo real con pequeño debounce
  let debounceTimer;
  input.addEventListener('input', () => {
    clearTimeout(debounceTimer);
    debounceTimer = setTimeout(() => {
      appState.searchQuery = input.value;
      clearBtn.style.opacity = input.value ? '1' : '0';
      renderAllGrids();
    }, 200);
  });

  // Limpiar búsqueda
  clearBtn.addEventListener('click', () => {
    input.value = '';
    appState.searchQuery = '';
    clearBtn.style.opacity = '0';
    renderAllGrids();
    input.focus();
  });

  // Pills de categoría
  pills.forEach(pill => {
    pill.addEventListener('click', () => {
      pills.forEach(p => p.classList.remove('active'));
      pill.classList.add('active');
      appState.activeFilter = pill.dataset.filter;
      renderAllGrids();
      // Scroll a la sección relevante
      if (appState.activeFilter !== 'all') {
        const sectionMap = { apk: 'apk', game: 'games', script: 'scripts', tutorial: 'tutorials' };
        const sectionId = sectionMap[appState.activeFilter];
        if (sectionId) smoothScrollTo(sectionId);
      }
    });
  });
}

/* ─── PANEL DE ADMIN ─────────────────────────────────────────────────────── */

function initAdmin() {
  const submitBtn = document.getElementById('adminSubmit');
  const clearBtn  = document.getElementById('adminClear');
  const feedback  = document.getElementById('adminFeedback');

  function showFeedback(msg, type) {
    feedback.textContent = msg;
    feedback.className = `admin-feedback ${type}`;
    setTimeout(() => { feedback.className = 'admin-feedback'; }, 3500);
  }

  function clearForm() {
    ['adminName','adminVersion','adminEmoji','adminDesc','adminDownload','adminPlayStore','adminTags']
      .forEach(id => { document.getElementById(id).value = ''; });
    document.getElementById('adminCategory').value = 'apk';
  }

  submitBtn.addEventListener('click', () => {
    // Recoger valores
    const name     = document.getElementById('adminName').value.trim();
    const category = document.getElementById('adminCategory').value;
    const version  = document.getElementById('adminVersion').value.trim() || 'v1.0';
    const emoji    = document.getElementById('adminEmoji').value.trim() || '📦';
    const desc     = document.getElementById('adminDesc').value.trim();
    const download = document.getElementById('adminDownload').value.trim() || '#';
    const playstore= document.getElementById('adminPlayStore').value.trim() || '#';
    const tagsRaw  = document.getElementById('adminTags').value.trim();
    const tags     = tagsRaw ? tagsRaw.split(',').map(t => t.trim()).filter(Boolean) : [];

    // Validación mínima
    if (!name) return showFeedback('⚠️ El nombre es obligatorio.', 'error');
    if (!desc) return showFeedback('⚠️ La descripción es obligatoria.', 'error');

    // Crear nuevo item
    const newItem = {
      id: appState.nextId++,
      name, category, version, emoji, desc, tags, download, playstore
    };

    appState.content.push(newItem);
    renderAllGrids();
    clearForm();
    showFeedback('✅ Contenido agregado exitosamente.', 'success');

    // Scroll a la sección correspondiente
    const sectionMap = { apk: 'apk', game: 'games', script: 'scripts', tutorial: 'tutorials' };
    setTimeout(() => smoothScrollTo(sectionMap[category] || 'apk'), 500);
  });

  clearBtn.addEventListener('click', clearForm);
}

/* ─── NAVBAR ─────────────────────────────────────────────────────────────── */

function initNavbar() {
  const navbar    = document.getElementById('navbar');
  const hamburger = document.getElementById('hamburger');
  const navLinks  = document.getElementById('navLinks');

  // Scroll → cambiar estilo navbar + botón subir
  window.addEventListener('scroll', () => {
    navbar.classList.toggle('scrolled', window.scrollY > 50);
    document.getElementById('scrollTop').classList.toggle('visible', window.scrollY > 400);
  }, { passive: true });

  // Hamburger menu (móvil)
  hamburger.addEventListener('click', () => {
    hamburger.classList.toggle('open');
    navLinks.classList.toggle('open');
  });

  // Cerrar m
