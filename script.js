const games = [
  {
    title: "Sentient Dog Runner",
    desc: "🐕 Run, jump, and dodge obstacles as fast as you can!",
    desc2: `
      <h3>🎮 Gameplay Overview</h3>
      <ul>
        <li>🏃 Use <b>Arrow Keys</b> to jump or slide.</li>
        <li>💰 Collect coins to unlock upgrades.</li>
        <li>🚧 Avoid obstacles or lose a life.</li>
        <li>🎯 Survive as long as you can to set a high score.</li>
      </ul>
    `,
    creator: "0xBalls",
    creatorLink: "https://twitter.com/0xBalls",
    rating: 4.8,
    thumb: "assets/dog-runner.jpg",
    video: "assets/dog-runner-preview.mp4",
    url: "https://sentient-dog-runner.vercel.app"
  },
  {
    title: "Sentient Pong",
    desc: "🏓 Classic pong — beat the AI and claim victory!",
    desc2: `
      <h3>🎮 Gameplay Overview</h3>
      <ul>
        <li>Move paddle using <b>Arrow Keys</b>.</li>
        <li>Prevent the ball from passing your paddle.</li>
        <li>Score 10 points to win!</li>
      </ul>
    `,
    creator: "0xBalls",
    creatorLink: "https://twitter.com/0xBalls",
    rating: 4.6,
    thumb: "assets/pong.jpg",
    video: "assets/pong-preview.mp4",
    url: "https://sentient-pong.vercel.app"
  },
  {
    title: "Sentient Memory Match",
    desc: "🧠 Flip cards and match pairs to win!",
    desc2: `
      <h3>🎮 Gameplay Overview</h3>
      <ul>
        <li>Flip two cards at a time to find identical pairs.</li>
        <li>Clear the board before time runs out.</li>
        <li>Track your score and speed with each match.</li>
      </ul>
    `,
    creator: "0xBalls",
    creatorLink: "https://twitter.com/0xBalls",
    rating: 4.9,
    thumb: "assets/memory.jpg",
    video: "assets/memory-preview.mp4",
    url: "https://sentient-memory-match.vercel.app"
  },
  {
    title: "Sentient Puzzle Slide",
    desc: "🧩 Slide tiles to recreate the original image.",
    desc2: `
      <h3>🎮 Gameplay Overview</h3>
      <ul>
        <li>Slide tiles using mouse or touch to form the full image.</li>
        <li>Preview the image before countdown starts.</li>
        <li>One extra empty tile lets you move tiles easily.</li>
      </ul>
    `,
    creator: "0xBalls",
    creatorLink: "https://twitter.com/0xBalls",
    rating: 4.7,
    thumb: "assets/puzzle-slide.jpg",
    video: "assets/puzzle-preview.mp4",
    url: "https://sentient-memory-match.vercel.app"
  },
  {
    title: "Sentient Tower",
    desc: "🏗️ Your goal is to build a perfectly aligned tower that reaches the golden goal line without missing a block!",
    desc2: `
      <h3>🎮 Gameplay Overview</h3>
      <ul>
        <li>Stack moving blocks as high as possible.</li>
        <li>Reach the <b>goal line</b> to win.</li>
        <li>Miss a block — your tower collapses!</li>
        <li>Choose difficulty: Easy / Medium / Hard.</li>
        <li>Reset or Restart anytime.</li>
        <li>Countdown before each round.</li>
      </ul>
    `,
    creator: "0xBalls",
    creatorLink: "https://twitter.com/0xBalls",
    rating: 4.8,
    thumb: "assets/tower.jpg",
    video: "assets/tower-preview.mp4",
    url: "https://sentient-tower.vercel.app"
  },
  {
    title: "HAZMOB FPS",
    desc: "🔫 Action-packed FPS game. Aim, shoot, and survive!",
    desc2: `
      <h3>🎮 Gameplay Overview</h3>
      <ul>
        <li>Use <b>WASD</b> to move, <b>Mouse</b> to aim.</li>
        <li>Defeat enemies and clear levels.</li>
        <li>Reload and upgrade weapons between rounds.</li>
      </ul>
    `,
    creator: "DevX Studios",
    creatorLink: "https://twitter.com/devxstudios",
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
const modalDesc2 = document.getElementById("modalDesc2");
const playNow = document.getElementById("playNow");
const closeModal = document.getElementById("closeModal");

function renderGames(list = games) {
  originalsContainer.innerHTML = "";
  devContainer.innerHTML = "";

  list.forEach((g, i) => {
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
        <p class="credits">Creator <a href="${g.creatorLink}" target="_blank">${g.creator}</a></p>
        <button class="play-btn">How to Play</button>
      </div>
    `;

    // Hover preview
    const img = card.querySelector("img");
    const vid = card.querySelector("video");
    card.addEventListener("mouseenter", () => {
      img.style.display = "none";
      vid.style.display = "block";
      vid.play().catch(() => {});
    });
    card.addEventListener("mouseleave", () => {
      vid.pause();
      vid.style.display = "none";
      img.style.display = "block";
    });

    // Open modal on click
    card.addEventListener("click", () => openModal(g));
    card.querySelector(".play-btn").addEventListener("click", (e) => {
      e.stopPropagation();
      openModal(g);
    });

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
  modalCreator.href = g.creatorLink;
  modalRating.textContent = `(${g.rating})`;
  modalStars.innerHTML = "⭐".repeat(Math.round(g.rating));
  modalDesc2.innerHTML = g.desc2;
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

// Search
const searchInput = document.getElementById("search");
searchInput.addEventListener("input", (e) => {
  const query = e.target.value.toLowerCase();
  const filtered = games.filter(
    (g) =>
      g.title.toLowerCase().includes(query) ||
      g.desc.toLowerCase().includes(query) ||
      g.creator.toLowerCase().includes(query)
  );
  renderGames(filtered);
});

renderGames();
