// === DATA: edit this to add games ===
const GAMES = [
  // Sentient originals (your 5)
  {
    id: "dog-runner",
    title: "Sentient Dog Runner",
    desc: "Endless runner with pickups and upgrades.",
    dev: "Amit Prasad",
    thumb: "assets/dog-runner.jpg",
    preview: "assets/dog-runner-preview.mp4",
    url: "https://yourgamehost.com/dog-runner"
  },
  {
    id: "pong",
    title: "Sentient Pong",
    desc: "Classic pong remade with modern visuals.",
    dev: "Amit Prasad",
    thumb: "assets/pong.jpg",
    preview: "assets/pong-preview.mp4",
    url: "https://yourgamehost.com/pong"
  },
  {
    id: "memory",
    title: "Sentient Memory Match",
    desc: "Flip tiles and match pairs within time.",
    dev: "Amit Prasad",
    thumb: "assets/memory.jpg",
    preview: "assets/memory-preview.mp4",
    url: "https://yourgamehost.com/memory"
  },
  {
    id: "puzzle-slide",
    title: "Sentient Puzzle Slide",
    desc: "Slide puzzle with custom images and scoring.",
    dev: "Amit Prasad",
    thumb: "assets/puzzle-slide.jpg",
    preview: "assets/puzzle-preview.mp4",
    url: "https://yourgamehost.com/puzzle-slide"
  },
  {
    id: "tower",
    title: "Sentient Tower",
    desc: "Tower defense with unique sentient enemies.",
    dev: "Amit Prasad",
    thumb: "assets/tower.jpg",
    preview: "assets/tower-preview.mp4",
    url: "https://yourgamehost.com/tower"
  },

  // Example of community game
  {
    id: "hazmob",
    title: "HAZMOB FPS",
    desc: "Fast-paced shooter demo by DevX.",
    dev: "DevX Studios",
    thumb: "assets/hazmob.jpg",
    preview: "assets/hazmob-preview.mp4",
    url: "https://otherdev.com/hazmob"
  }
];

// === Render helper ===
function createCard(game) {
  const el = document.createElement('article');
  el.className = 'card';
  el.innerHTML = `
    <div class="thumb" data-game-id="${game.id}">
      <img src="${game.thumb}" alt="${game.title} thumbnail" loading="lazy" />
      <video muted loop playsinline preload="metadata" style="display:none"></video>
      <div class="tag">New</div>
      <a class="card-play" data-game-id="${game.id}">▶ Play</a>
    </div>
    <div class="card-body">
      <h4 class="card-title">${game.title}</h4>
      <div class="card-meta">${game.dev}</div>
    </div>
  `;

  const thumb = el.querySelector('.thumb');
  const img = thumb.querySelector('img');
  const vid = thumb.querySelector('video');

  if (game.preview) {
    vid.src = game.preview;
    vid.style.display = 'none';
  }

  // Hover preview logic
  thumb.addEventListener('mouseenter', async () => {
    if (!vid.src) return;
    img.style.display = 'none';
    vid.style.display = 'block';
    try { await vid.play(); } catch (e) {}
  });
  thumb.addEventListener('mouseleave', () => {
    if (!vid.src) return;
    vid.pause();
    vid.currentTime = 0;
    vid.style.display = 'none';
    img.style.display = 'block';
  });

  // Touch (mobile) support
  thumb.addEventListener('touchstart', (ev) => {
    ev.stopPropagation();
    if (!vid.src) return;
    const playing = !vid.paused;
    if (playing) {
      vid.pause(); vid.style.display = 'none'; img.style.display = 'block';
    } else {
      img.style.display = 'none'; vid.style.display = 'block'; vid.play().catch(() => {});
    }
  });

  // Open modal when clicking card
  el.addEventListener('click', (e) => {
    if (e.target.closest('.card-play')) return;
    openModal(game);
  });

  // Play overlay button
  el.querySelector('.card-play').addEventListener('click', (e) => {
    e.stopPropagation();
    openModal(game, true);
  });

  return el;
}

// === Populate grids ===
const originalsGrid = document.getElementById('originals-grid');
const communityGrid = document.getElementById('community-grid');

function init() {
  const originals = GAMES.slice(0, 5);
  const community = GAMES.slice(5);

  originals.forEach(g => originalsGrid.appendChild(createCard(g)));
  community.forEach(g => communityGrid.appendChild(createCard(g)));

  // Search
  document.getElementById('search').addEventListener('input', (e) => {
    const q = e.target.value.toLowerCase();
    document.querySelectorAll('.card').forEach(card => {
      const t = card.querySelector('.card-title').textContent.toLowerCase();
      card.style.display = t.includes(q) ? '' : 'none';
    });
  });
}

document.addEventListener('DOMContentLoaded', init);

// === Modal logic ===
const modal = document.getElementById('game-modal');
const modalVideo = document.getElementById('modal-video');
const modalThumb = document.getElementById('modal-thumb');
const modalTitle = document.getElementById('modal-title');
const modalDesc = document.getElementById('modal-desc');
const modalDev = document.getElementById('modal-dev');
const modalPlay = document.getElementById('modal-play');
const modalCredits = document.getElementById('modal-credits');
const closeBtn = document.getElementById('modal-close');

function openModal(game, autoplay = false) {
  modal.classList.add('show');
  document.body.style.overflow = 'hidden';

  modalTitle.textContent = game.title;
  modalDesc.textContent = game.desc;
  modalDev.textContent = `By ${game.dev}`;

  modalThumb.style.display = 'none';
  modalVideo.style.display = 'none';
  modalVideo.pause();

  if (game.preview) {
    modalVideo.src = game.preview;
    modalVideo.style.display = 'block';
    modalVideo.muted = true;
    if (autoplay) modalVideo.play().catch(() => {});
  } else {
    modalThumb.src = game.thumb;
    modalThumb.style.display = 'block';
  }

  modalPlay.href = game.url;
  modalCredits.href = game.url;
  modalPlay.setAttribute('target', '_blank');
  modalCredits.setAttribute('target', '_blank');
}

function closeModal() {
  modal.classList.remove('show');
  document.body.style.overflow = '';
  modalVideo.pause();
  modalVideo.src = '';
}

closeBtn.addEventListener('click', closeModal);
modal.addEventListener('click', (e) => {
  if (e.target === modal) closeModal();
});
document.addEventListener('keydown', (e) => {
  if (e.key === 'Escape') closeModal();
});
