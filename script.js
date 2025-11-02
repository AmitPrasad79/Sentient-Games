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
        <li>If miss a block then your tower collapses.</li>
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
        <li>Collect 10 butterflies to win while dodging bees and hazards.</li>
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
  },
  {
    title: "Senti TicTacToe",
    desc: "In Senti TicTacToe, you challenge the AI in the ultimate duel of logic and strategy on a futuristic grid.",
    desc2: `
      <h3>🎮 Gameplay Overview</h3>
      <ul>
        <li>Strategize to align three marks (❌ or ⭕) before your opponent.</li>
        <li>The AI adapts it learns and blocks your every move.</li>
        <li>Track score as you navigate the field.</li>
        <li>Clean futuristic visuals with smooth win animations.</li>
      </ul>
    `,
    creator: "rawakinode",
    creatorLink: "https://x.com/rawakinode",
    rating: 4.5,
    thumb: "assets/senti-tictactoe.png",
    video: "assets/tictactoe-preview.mp4",
    url: "https://sentictactoe-game.vercel.app"
  },
  {
    title: "Sentient 2048",
    desc: "In Sentient 2048, you merge digital intelligence blocks to awaken a higher form of consciousness.",
    desc2: `
      <h3>🎮 Gameplay Overview</h3>
      <ul>
        <li>Slide and merge identical number tiles to evolve your Sentient core.</li>
        <li>Use Arrow Keys or Swipe to move tiles in any direction.</li>
        <li>Each merge increases your intelligence level.</li>
        <li>Plan moves carefully, as the grid fills up with every turn.</li>
      </ul>
    `,
    creator: "Barrel",
    creatorLink: "https://x.com/Barrel_9x",
    rating: 4.7,
    thumb: "assets/sentient-2048.png",
    video: "assets/sentient-2048-preview.mp4",
    url: "https://sentient-2048.vercel.app"
  },
  {
    title: "Smart Senti Words",
    desc: "In Smart Senti Words, test your mind by uncovering all the hidden words.",
    desc2: `
      <h3>🎮 Gameplay Overview</h3>
      <ul>
        <li>Find and identify all words that secretly contain the letters.</li>
        <li>Challenge your vocabulary, memory, and observation skills.</li>
        <li>Clean, minimalist design with glowing word effects for each discovery.</li>
      </ul>
    `,
    creator: "Elliottyu",
    creatorLink: "https://x.com/cotantanax",
    rating: 4.3,
    thumb: "assets/smart-senti.png",
    video: "assets/smart-senti-preview.mp4",
    url: "https://smart-senti-words.vercel.app"
  },
  {
    title: "Sky Dodger",
    desc: "In Sky Dodger, navigate your custom ball through the endless skies, dodging falling obstacles and testing your reflexes to the limit.",
    desc2: `
      <h3>🎮 Gameplay Overview</h3>
      <ul>
        <li>Control your ball using <b>Arrow Keys (← →)</b> or <b>A / D</b> to dodge incoming objects.</li>
        <li>Click <b>Restart</b> to begin your sky run and challenge your reaction speed.</li>
        <li>Customize your ball with your own <b>PNG</b> or <b>JPG</b> image for a personal touch.</li>
        <li>Survive as long as possible while the sky grows faster and more chaotic.</li>
        <li>Smooth sky visuals and fluid motion make every run a thrilling escape.</li>
      </ul>
    `,
    creator: "aptos_king",
    creatorLink: "https://x.com/yousufaziz00",
    rating: 4.2,
    thumb: "assets/sky-dodger.png",
    video: "assets/sky-dodger-preview.mp4",
    url: "https://built-a-mini-game-for-sentient-agi.vercel.app"
  },
  {
    title: "Sentient Dobby Maze",
    desc: "In Sentient Dobby Maze, guide Dobby through a neon labyrinth against the clock reach the exit.",
    desc2: `
      <h3>🎮 Gameplay Overview</h3>
      <ul>
        <li>Navigate a shifting maze and reach the exit.</li>
        <li>Use the <b>Arrow Keys</b> (Up / Down / Left / Right) to move Dobby through the corridors.</li>
        <li>Win the game within 60s otherwise you will be out.</li>
      </ul>
    `,
    creator: "prith_boy",
    creatorLink: "https://x.com/prith_boy",
    rating: 4.2,
    thumb: "assets/dobby-maze.png",
    video: "assets/dobby-maze-preview.mp4",
    url: "https://sentient-dobby-maze.vercel.app"
  },
  {
    title: "Sentient Car",
    desc: "In Sentient Car, race through futuristic tracks and reach the finish line before your fuel runs out speed, strategy, and precision decide your fate!",
    desc2: `
      <h3>🎮 Gameplay Overview</h3>
      <ul>
        <li>Control your Sentient-powered car and race against time and fuel limits.</li>
        <li>Use the <b>Arrow Keys</b> to accelerate, brake, and steer through dynamic obstacles.</li>
        <li>Avoid crashes every hit drains fuel faster and slows your momentum.</li>
        <li>Finish the course before the tank hits zero to prove your Sentient driving skills.</li>
      </ul>
    `,
    creator: "Netmeti",
    creatorLink: "https://x.com/Netmeti",
    rating: 4.2,
    thumb: "assets/sentient-car.png",
    video: "assets/sentient-car-preview.mp4",
    url: "https://netmeti.github.io/Dobby-KaitoAl"
  }
];

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
  document.body.classList.add("modal-open"); 

  modalVideo.src = g.video;
  modalVideo.muted = true;
  modalVideo.load();
  modalVideo.play().catch(() => {});

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
  document.body.classList.remove("modal-open"); 
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
