const games = [
  {
    title: "Sentient Dog Runner",
    desc: "🐕 How to Play: Use arrow keys to jump and slide to dodge obstacles. Collect coins to unlock upgrades!",
    creator: "Amit Prasad",
    rating: 4.8,
    thumb: "assets/dog-runner.jpg",
    video: "assets/dog-runner-preview.mp4",
    url: "https://yourgamehost.com/dog-runner"
  },
  {
    title: "Sentient Pong",
    desc: "🏓 How to Play: Control your paddle and beat the AI by scoring more points!",
    creator: "Amit Prasad",
    rating: 4.6,
    thumb: "assets/pong.jpg",
    video: "assets/pong-preview.mp4",
    url: "https://yourgamehost.com/pong"
  },
  {
    title: "Sentient Memory Match",
    desc: "🧠 How to Play: Match all image pairs before time runs out!",
    creator: "Amit Prasad",
    rating: 4.9,
    thumb: "assets/memory.jpg",
    video: "assets/memory-preview.mp4",
    url: "https://yourgamehost.com/memory"
  },
  {
    title: "Sentient Puzzle Slide",
    desc: "🧩 How to Play: Slide tiles to recreate the original image as fast as possible!",
    creator: "Amit Prasad",
    rating: 4.7,
    thumb: "assets/puzzle-slide.jpg",
    video: "assets/puzzle-preview.mp4",
    url: "https://yourgamehost.com/puzzle-slide"
  },
  {
    title: "Sentient Tower",
    desc: "🏰 How to Play: Defend the tower from waves of enemies with sentient powers!",
    creator: "Amit Prasad",
    rating: 4.8,
    thumb: "assets/tower.jpg",
    video: "assets/tower-preview.mp4",
    url: "https://yourgamehost.com/tower"
  },
  {
    title: "HAZMOB FPS",
    desc: "🔫 How to Play: Move with WASD, aim and shoot enemies to survive rounds!",
    creator: "DevX Studios",
    rating: 4.5,
    thumb: "assets/hazmob.jpg",
    video: "assets/hazmob-preview.mp4",
    url: "https://otherdev.com/hazmob"
  }
];

// DOM elements
const originalsContainer = document.getElementById("sentient-originals");
const devContainer = document.getElementById("dev-games");
const modal = document.getElementById("gameModal");
const modalVideo = document.getElementById("modalVideo");
const modalTitle = document.getElementById("modalTitle");
const modalDesc = document.getElementById("modalDesc");
const modalCreator = document.getElementById("modalCreator");
const modalStars = document.getElementById("modalStars");
const modalRating = document.getElementById("modalRating");
const playNow = document.getElementById("playNow");
const closeModal = document.getElementById("closeModal");

function renderGames() {
  originalsContainer.innerHTML = "";
  devContainer.innerHTML = "";

  games.forEach((g, i) => {
    const card = document.createElement("div");
    card.className = "game-card";
    card.innerHTML = `
      <div class="thumb">
        <img src="${g.thumb}" alt="${g.title}">
        <video class="preview-video" muted loop preload="metadata">
          <source src="${g.video}" type="video/mp4">
        </video>
      </div>
      <div class="game-info">
        <h3>${g.title}</h3>
        <p class="credits">Creator ${g.creator}</p>
        <button class="play-btn">How to Play</button>
      </div>
    `;

    // Hover video preview
    const img = card.querySelector("img");
    const vid = card.querySelector("video");
    card.addEventListener("mouseenter", () => {
      img.style.display = "none";
      vid.style.display = "block";
      vid.play().catch(()=>{});
    });
    card.addEventListener("mouseleave", () => {
      vid.pause();
      vid.style.display = "none";
      img.style.display = "block";
    });

    // Open popup
    card.querySelector(".play-btn").addEventListener("click", () => openModal(g));

    if (i < 5) originalsContainer.appendChild(card);
    else devContainer.appendChild(card);
  });
}

function openModal(g) {
  modal.style.display = "flex";
  modalVideo.src = g.video;
  modalTitle.textContent = g.title;
  modalDesc.textContent = g.desc;
  modalCreator.textContent = g.creator;
  modalRating.textContent = `(${g.rating})`;
  modalStars.innerHTML = "⭐".repeat(Math.round(g.rating));
  playNow.onclick = () => window.open(g.url, "_blank");
}

closeModal.onclick = () => {
  modal.style.display = "none";
  modalVideo.pause();
};

window.onclick = (e) => {
  if (e.target === modal) {
    modal.style.display = "none";
    modalVideo.pause();
  }
};

renderGames();
