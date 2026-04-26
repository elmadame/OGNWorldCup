const API_URL = 'https://script.google.com/macros/s/AKfycbzlMlnCIvUU6xwCTxBuogTqPsF1689oYIl-RV8PFDex9xu7v2oQ81kyiHl8TaFj2YNgrA/exec';
const USER_STORAGE_KEY = 'ogn_album_prod_user';
const BOOSTER_CODE_STORAGE_KEY = 'ogn_album_used_extra_booster_codes_v2';
const LOCAL_EXTRA_COLLECTION_STORAGE_KEY = 'ogn_album_extra_booster_collection_v1';
const EXTRA_BOOSTER_CODES = Object.freeze([
  'OGN-UXUZ-Y7AY-PMMN',
  'OGN-NYEJ-A44T-LQ7T',
  'OGN-9G8Z-BP5A-N559',
  'OGN-FVMP-UC24-ZS84',
  'OGN-5D2L-8FGV-SB4X',
  'OGN-L8X2-A95Y-DS5V',
  'OGN-7PDB-JA74-KYLP',
  'OGN-G2HU-3L6K-F59Y',
  'OGN-YS9L-8T4S-HXFH',
  'OGN-VZX5-24E7-4TJV',
  'OGN-4DHC-SPEP-JZHZ',
  'OGN-CTGW-D94N-3G4Z',
  'OGN-QQY9-P3HM-X4GY',
  'OGN-A6J6-CR7F-4RFS',
  'OGN-N4F9-JZRK-4L8M',
  'OGN-GUAY-D5FC-CU3Y',
  'OGN-R2XQ-82RY-A9DN',
  'OGN-454F-9ARV-272F',
  'OGN-N53B-FQJG-6KWB',
  'OGN-E37T-VCY9-R9YT',
  'OGN-W2MN-U5MN-QGNK',
  'OGN-LDHA-66NR-CZED',
  'OGN-K33Y-Y7K4-CUYE',
  'OGN-CMA5-F498-JHHV',
  'OGN-YNED-9Z3Y-HDKQ',
  'OGN-TEDE-JJH7-XLUG',
  'OGN-WAWH-PST7-GKHF',
  'OGN-XTT9-3XDK-W49A',
  'OGN-J72Q-BFNS-VPB2',
  'OGN-FRL5-BARG-N5NH'
]);

const placeholderSvg = encodeURIComponent(`
<svg xmlns="http://www.w3.org/2000/svg" width="800" height="1100" viewBox="0 0 800 1100">
  <defs>
    <linearGradient id="g" x1="0" y1="0" x2="1" y2="1">
      <stop offset="0%" stop-color="#1B4298"/>
      <stop offset="58%" stop-color="#009DDC"/>
      <stop offset="100%" stop-color="#54b948"/>
    </linearGradient>
  </defs>
  <rect width="800" height="1100" rx="40" fill="url(#g)"/>
  <circle cx="630" cy="190" r="140" fill="#ffffff" fill-opacity="0.14"/>
  <circle cx="230" cy="880" r="160" fill="#ffffff" fill-opacity="0.08"/>
  <text x="400" y="500" fill="#ffffff" font-family="Montserrat, Arial, sans-serif" font-size="96" text-anchor="middle" font-weight="900">OGN</text>
  <text x="400" y="610" fill="#ffffff" font-family="Montserrat, Arial, sans-serif" font-size="34" text-anchor="middle">PHOTO URL PENDING</text>
</svg>`);
const PLACEHOLDER_IMAGE = `data:image/svg+xml;charset=UTF-8,${placeholderSvg}`;

const state = {
  currentUser: null,
  cards: [],
  collection: {},
  stats: { uniqueCount: 0, totalCount: 0, duplicateCount: 0, progressPercent: 0 },
  cooldownUntil: null
};

function byId(id) { return document.getElementById(id); }

function setStatus(message, type = 'ok') {
  const box = byId('statusBox');
  box.className = `status status--${type}`;
  box.textContent = message;
}

function clearStatus() {
  const box = byId('statusBox');
  box.className = 'status status--hidden';
  box.textContent = '';
}

function normalizeBoosterCode(value) {
  return String(value || '').trim().toUpperCase().replace(/\s+/g, '');
}

function getActiveUserEmail() {
  return (state.currentUser?.email || byId('userEmail')?.value || '').trim().toLowerCase();
}

function getLocalExtraCollectionKey(email) {
  return `${LOCAL_EXTRA_COLLECTION_STORAGE_KEY}:${String(email || 'anonymous').trim().toLowerCase()}`;
}

function readUsedBoosterCodes() {
  try {
    const raw = localStorage.getItem(BOOSTER_CODE_STORAGE_KEY);
    const parsed = raw ? JSON.parse(raw) : [];
    return Array.isArray(parsed) ? parsed : [];
  } catch {
    return [];
  }
}

function markBoosterCodeUsed(code) {
  const normalized = normalizeBoosterCode(code);
  const used = new Set(readUsedBoosterCodes());
  used.add(normalized);
  localStorage.setItem(BOOSTER_CODE_STORAGE_KEY, JSON.stringify([...used]));
}

function readLocalExtraCollection(email) {
  try {
    const raw = localStorage.getItem(getLocalExtraCollectionKey(email));
    const parsed = raw ? JSON.parse(raw) : {};
    return parsed && typeof parsed === 'object' && !Array.isArray(parsed) ? parsed : {};
  } catch {
    return {};
  }
}

function saveLocalExtraCollection(email, collection) {
  localStorage.setItem(getLocalExtraCollectionKey(email), JSON.stringify(collection || {}));
}

function mergeCollections(baseCollection = {}, extraCollection = {}) {
  const merged = { ...(baseCollection || {}) };
  Object.entries(extraCollection || {}).forEach(([cardId, count]) => {
    const safeCount = Number(count) || 0;
    if (safeCount > 0) merged[cardId] = (merged[cardId] || 0) + safeCount;
  });
  return merged;
}

function addCardsToLocalExtraCollection(email, cards) {
  const extraCollection = readLocalExtraCollection(email);
  cards.forEach(card => {
    if (!card?.cardId) return;
    extraCollection[card.cardId] = (extraCollection[card.cardId] || 0) + 1;
  });
  saveLocalExtraCollection(email, extraCollection);
}

function getCardWeight(card) {
  const parsed = Number(card?.weight);
  return Number.isFinite(parsed) && parsed > 0 ? parsed : 1;
}

function pickWeightedCard(cards) {
  const totalWeight = cards.reduce((sum, card) => sum + getCardWeight(card), 0);
  let roll = Math.random() * totalWeight;

  for (const card of cards) {
    roll -= getCardWeight(card);
    if (roll <= 0) return card;
  }

  return cards[cards.length - 1];
}

function generateExtraBoosterCards(count = 3) {
  if (!state.cards.length) throw new Error('Primero carga tu colección para poder abrir un booster extra.');
  return Array.from({ length: count }, () => pickWeightedCard(state.cards));
}

async function openExtraBoosterWithCode() {
  const input = byId('boosterCodeInput');
  const trigger = byId('redeemBoosterCodeBtn');

  try {
    clearStatus();
    const user = state.currentUser || getUserData(true);
    state.currentUser = user;
    saveUserLocally(user);

    const code = normalizeBoosterCode(input?.value);
    if (!code) throw new Error('Ingresa un código de booster extra.');

    if (!EXTRA_BOOSTER_CODES.includes(code)) {
      throw new Error('Código inválido. Revisa mayúsculas, guiones y caracteres.');
    }

    if (readUsedBoosterCodes().includes(code)) {
      throw new Error('Este código ya fue utilizado en este navegador.');
    }

    if (!state.cards.length) {
      await loadCollection({ user, silent: true });
    }

    if (trigger) trigger.disabled = true;

    const boosterCards = generateExtraBoosterCards(3);
    addCardsToLocalExtraCollection(user.email, boosterCards);
    boosterCards.forEach(card => {
      state.collection[card.cardId] = (state.collection[card.cardId] || 0) + 1;
    });

    state.stats = computeStats(state.cards, state.collection);
    updateStats(state.stats);
    renderAlbum();
    animateBoosterReveal(boosterCards);
    markBoosterCodeUsed(code);
    if (input) input.value = '';
    updateCooldown();
    setStatus('Código válido. Booster extra abierto. El cooldown normal se mantiene igual.', 'ok');
  } catch (error) {
    setStatus(error.message, 'error');
  } finally {
    if (trigger) trigger.disabled = false;
  }
}

function getUserData(strict = true) {
  const name = byId('userName').value.trim();
  const email = byId('userEmail').value.trim().toLowerCase();
  if (strict && (!name || !email)) throw new Error('Nombre y correo son obligatorios.');
  return { name, email };
}

function saveUserLocally(user) {
  if (!user?.email || !user?.name) return;
  localStorage.setItem(USER_STORAGE_KEY, JSON.stringify(user));
}

function readStoredUser() {
  try {
    const raw = localStorage.getItem(USER_STORAGE_KEY);
    if (!raw) return null;
    const parsed = JSON.parse(raw);
    if (!parsed?.email || !parsed?.name) return null;
    return parsed;
  } catch {
    return null;
  }
}

function readUserFromQuery() {
  const params = new URLSearchParams(window.location.search);
  const email = (params.get('email') || '').trim().toLowerCase();
  const name = (params.get('name') || '').trim();
  if (!email || !name) return null;
  return { email, name };
}

function prefillUser(user) {
  if (!user) return;
  byId('userName').value = user.name || '';
  byId('userEmail').value = user.email || '';
  state.currentUser = user;
}

function computeStats(cards, collection) {
  const uniqueCount = cards.filter(card => (collection[card.cardId] || 0) > 0).length;
  const totalCount = Object.values(collection).reduce((sum, n) => sum + n, 0);
  const duplicateCount = Object.values(collection).reduce((sum, n) => sum + Math.max(0, n - 1), 0);
  const progressPercent = Math.round((uniqueCount / Math.max(1, cards.length)) * 100);
  return { uniqueCount, totalCount, duplicateCount, progressPercent };
}

function updateStats(stats) {
  byId('uniqueCount').textContent = `${stats.uniqueCount} / 103`;
  byId('totalCount').textContent = stats.totalCount;
  byId('duplicateCount').textContent = stats.duplicateCount;
  byId('progressPercent').textContent = `${stats.progressPercent}%`;
}

function normalizePhoto(url) {
  return url && String(url).trim() ? String(url).trim() : PLACEHOLDER_IMAGE;
}

function renderCardTemplate(card, ownedCount = 0) {
  const owned = ownedCount > 0;
  const number = String(card.number).padStart(3, '0');
  const displayName = owned ? (card.name || `OGN Card ${number}`) : 'Carta pendiente';
  const displayTeam = owned ? (card.team || 'OGN Team') : '';
  return `
    <article class="card-template ${owned ? '' : 'is-missing'}">
      <div class="card-template__shell">
        <div class="card-template__top">
          <div class="card-template__number">#${number}</div>
          <div class="card-template__team">${card.team || 'OGN'}</div>
        </div>
        <div class="card-template__brand">OGN</div>
        <div class="card-template__photo">
          <img src="${normalizePhoto(card.photoUrl)}" alt="${card.name || 'OGN card'}" loading="lazy" referrerpolicy="no-referrer" />
        </div>
        <div class="card-template__bottom">
          <div class="card-template__name">${displayName}</div>
          <div class="card-template__meta">
            <span>${displayTeam}</span>
            <span>${card.cardId}</span>
          </div>
        </div>
      </div>
      ${owned ? `<div class="card-template__count">Obtenida · x${ownedCount}</div>` : `<div class="card-template__pending">No obtenida</div>`}
    </article>
  `;
}

function renderAlbum() {
  const query = byId('searchInput').value.trim().toLowerCase();
  const ownershipFilter = byId('ownershipFilter').value;
  const filtered = state.cards.filter(card => {
    const ownedCount = state.collection[card.cardId] || 0;
    const matchesOwnership = ownershipFilter === 'all' || (ownershipFilter === 'owned' && ownedCount > 0) || (ownershipFilter === 'missing' && ownedCount === 0);
    const haystack = `${card.cardId} ${card.number} ${card.name || ''} ${card.team || ''}`.toLowerCase();
    return matchesOwnership && (!query || haystack.includes(query));
  });

  byId('albumGrid').innerHTML = filtered.map(card => renderCardTemplate(card, state.collection[card.cardId] || 0)).join('');
}

function updateCooldown() {
  const btn = byId('openBoosterBtn');
  const text = byId('cooldownText');
  if (!state.currentUser) {
    text.textContent = 'Cargar usuario';
    btn.disabled = true;
    return;
  }
  const target = state.cooldownUntil ? new Date(state.cooldownUntil).getTime() : 0;
  const now = Date.now();
  if (!target || now >= target) {
    text.textContent = 'Disponible ahora';
    btn.disabled = false;
    return;
  }
  const diff = target - now;
  const totalSeconds = Math.floor(diff / 1000);
  const h = Math.floor(totalSeconds / 3600);
  const m = Math.floor((totalSeconds % 3600) / 60);
  const s = totalSeconds % 60;
  text.textContent = `${h}h ${String(m).padStart(2, '0')}m ${String(s).padStart(2, '0')}s`;
  btn.disabled = true;
}
setInterval(updateCooldown, 1000);

async function apiGet(query) {
  const res = await fetch(`${API_URL}?${query}`);
  return await res.json();
}

async function apiPost(payload) {
  const res = await fetch(API_URL, {
    method: 'POST',
    headers: { 'Content-Type': 'text/plain;charset=utf-8' },
    body: JSON.stringify(payload)
  });
  return await res.json();
}

function createFlipSlots(cards) {
  return cards.map((card, index) => `
    <div class="reveal-slot">
      <div class="flip-card" id="flipCard${index}">
        <div class="flip-card__face flip-card__face--back"></div>
        <div class="flip-card__face flip-card__face--front">
          ${renderCardTemplate(card, state.collection[card.cardId] || 1)}
        </div>
      </div>
    </div>
  `).join('');
}

function animateBoosterReveal(cards) {
  const root = byId('boosterReveal');
  root.innerHTML = createFlipSlots(cards);
  cards.forEach((_, index) => {
    setTimeout(() => {
      const slot = byId(`flipCard${index}`);
      if (slot) slot.classList.add('is-flipped');
    }, 650 + (index * 340));
  });
}

async function loadCollection(options = {}) {
  try {
    if (!options.silent) clearStatus();
    const user = options.user || getUserData(true);
    state.currentUser = user;
    saveUserLocally(user);

    const data = await apiGet(`action=getCollection&email=${encodeURIComponent(user.email)}&name=${encodeURIComponent(user.name)}`);
    if (!data.success) throw new Error(data.message || 'No fue posible cargar la colección.');

    state.cards = data.cards || [];
    const localExtraCollection = readLocalExtraCollection(user.email);
    state.collection = mergeCollections(data.collection || {}, localExtraCollection);
    state.stats = computeStats(state.cards, state.collection);
    state.cooldownUntil = data.cooldownUntil || null;
    updateStats(state.stats);
    renderAlbum();
    updateCooldown();
    if (!options.silent) setStatus('Colección cargada desde producción.', 'ok');
  } catch (error) {
    setStatus(error.message, 'error');
  }
}

async function openBooster() {
  const pack = byId('openBoosterBtn');
  try {
    clearStatus();
    const user = state.currentUser || getUserData(true);
    state.currentUser = user;
    saveUserLocally(user);
    pack.classList.add('is-opening');

    const data = await apiPost({ action: 'openBooster', email: user.email, name: user.name });
    if (!data.success) throw new Error(data.message || 'No fue posible abrir el booster.');

    setTimeout(() => {
      state.cards = data.cards || state.cards;
      const localExtraCollection = readLocalExtraCollection(user.email);
      state.collection = mergeCollections(data.collection || state.collection, localExtraCollection);
      state.stats = computeStats(state.cards, state.collection);
      state.cooldownUntil = data.cooldownUntil || null;
      updateStats(state.stats);
      renderAlbum();
      animateBoosterReveal(data.boosterCards || []);
      updateCooldown();
      setStatus('Booster abierto correctamente en producción.', 'ok');
      pack.classList.remove('is-opening');
    }, 850);
  } catch (error) {
    pack.classList.remove('is-opening');
    setStatus(error.message, 'error');
  }
}

function bootstrapProductionUser() {
  const queryUser = readUserFromQuery();
  const storedUser = readStoredUser();
  const chosenUser = queryUser || storedUser;
  if (!chosenUser) {
    renderAlbum();
    updateCooldown();
    return;
  }
  prefillUser(chosenUser);
  saveUserLocally(chosenUser);
  loadCollection({ user: chosenUser, silent: true });
}

byId('loadCollectionBtn').addEventListener('click', () => loadCollection());
byId('openBoosterBtn').addEventListener('click', openBooster);
byId('redeemBoosterCodeBtn').addEventListener('click', openExtraBoosterWithCode);
byId('boosterCodeInput').addEventListener('keydown', event => {
  if (event.key === 'Enter') openExtraBoosterWithCode();
});
byId('searchInput').addEventListener('input', renderAlbum);
byId('ownershipFilter').addEventListener('change', renderAlbum);

updateStats(state.stats);
renderAlbum();
bootstrapProductionUser();
