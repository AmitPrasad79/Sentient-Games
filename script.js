const games = [
  {
    title: "Sentient Dog Runner",
    desc: "🐕 Run, jump, and dodge obstacles as fast as you can!",
    desc2: `
      <h3>🎮 Gameplay Overview</h3>
      <ul>
        <li>Spacebar or Tap anywhere to jump.</li>
        <li>The longer you survive the faster the world moves.</li>
        <li>Avoid obstacles or lose a life.</li>
        <li>Miss a jump and it’s game over.</li>
      </ul>
    `,
    creator: "0xBalls",
    creatorLink: "https://twitter.com/0xBalls",
    rating: 2.8,
    thumb: "assets/dog-runner.jpg",
    video: "assets/dog-runner-preview.mp4",
    url: "https://sentient-dog-runner.vercel.app"
  },
  {
    title: "Sentient Pong",
    desc: "🏓 A modern, playful spin on the classic Pong featuring a sentient ball, sudden-death rounds, and a persistent scoreboard.",
    desc2: `
      <h3>🎮 Gameplay Overview</h3>
      <ul>
        <li>First to score wins in Sudden Death Mode.</li>
        <li>Play against a chill AI opponent.</li>
        <li>Track wins, losses, and total games.</li>
        <li>Use W/S, Arrow Keys, Mouse, or Touch to play.</li>
        <li>Works great on any device like desktop, tablet, or phone.</li>
      </ul>
    `,
    creator: "0xBalls",
    creatorLink: "https://twitter.com/0xBalls",
    rating: 4.6,
    thumb: "assets/pong.png",
    video: "assets/pong-preview.mp4",
    url: "https://sentient-pong.vercel.app"
  },
  {
    title: "Sentient Memory Match",
    desc: "🧠 Flip cards, find pairs, beat the clock, test your sentient brainpower across multiple difficulties.",
    desc2: `
      <h3>🎮 Gameplay Overview</h3>
      <ul>
        <li>Choose a grid size (4×4, 6×6, 8×8, or 10×10).</li>
        <li>Cards shuffle randomly every round.</li>
        <li>Beat the timer by uncovering all pairs.</li>
        <li>Lose if the clock hits zero.</li>
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
        <li>Pick your challenge with 3×3, 4×4, or 5×5 grids.</li>
        <li>Test your memory in Memorize Mode.</li>
        <li>Enjoy a new random image every round.</li>
        <li>Play anywhere with a responsive design made for desktop and mobile.</li>
      </ul>
    `,
    creator: "0xBalls",
    creatorLink: "https://twitter.com/0xBalls",
    rating: 4.7,
    thumb: "assets/puzzle-slide.jpg",
    video: "assets/puzzle-preview.mp4",
    url: "https://sentient-puzzle-slide.vercel.app"
  },
  {
    title: "Sentient Tower",
    desc: "🏗️ Your goal is to build a perfectly aligned tower that reaches the golden goal line without missing a block!",
    desc2: `
      <h3>🎮 Gameplay Overview</h3>
      <ul>
        <li>Stack moving blocks as high as possible.</li>
        <li>Reach the <b>goal line</b> to win.</li>
        <li>If miss a block then your tower collapses!</li>
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
    title: "Dobby the Catcher",
    desc: "In Dobby the Catcher you control a dog with the objective to collect 10 butterflies while navigating obstacles and hazards",
    desc2: `
      <h3>🎮 Gameplay Overview</h3>
      <ul>
        <li>Collect 10 butterflies to win while dodging bees and hazards..</li>
        <li>Use WASD or Arrow Keys to move, P to pause, R to restart.</li>
        <li>Track lives and score as you navigate the field.</li>
        <li>You have 3 lives to collect all 10 butterflies.<li>
        <li>Bees are evil.</li>
      </ul>
    `,
    creator: "0xDexDuck",
    creatorLink: "https://x.com/0xDexDuck",
    rating: 4.5,
    thumb: "assets/dobby-catcher.png",
    video: "assets/dobby-preview.mp4",
    url: "https://sentient-dobby-the-catcher.vercel.app"
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
  document.body.classList.add("modal-open"); // stop background scroll

  // Setup video autoplay (muted for browser autoplay rules)
  modalVideo.src = g.video;
  modalVideo.muted = true;
  modalVideo.load();
  modalVideo.play().catch(() => {});

  // Fill in modal details
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
  document.body.classList.remove("modal-open"); // allow background scroll again
  modalVideo.pause();
  modalVideo.currentTime = 0;
};

window.onclick = (e) => {
  if (e.target === modal) {
    modal.style.display = "none";
    document.body.classList.remove("modal-open");
    modalVideo.pause();
    modalVideo.currentTime = 0;
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
