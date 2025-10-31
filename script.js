const games = {
  "sentient-originals": [
    {
      title: "Sentient Dog Runner",
      author: "Amit Prasad",
      image: "images/dog-runner.jpg",
      description: "🏃 How to Play:\nUse arrow keys to jump and slide to dodge obstacles. Collect coins to unlock upgrades!",
      rating: 4.8,
      link: "#"
    },
    {
      title: "Sentient Pong",
      author: "Amit Prasad",
      image: "images/pong.jpg",
      description: "🎮 How to Play:\nUse your mouse to control the paddle. Don’t let the ball pass your side!",
      rating: 4.5,
      link: "#"
    },
    {
      title: "Sentient Memory Match",
      author: "Amit Prasad",
      image: "images/memory.jpg",
      description: "🧠 How to Play:\nFlip cards and find matching pairs within the time limit.",
      rating: 4.6,
      link: "#"
    },
    {
      title: "Sentient Puzzle Slide",
      author: "Amit Prasad",
      image: "images/puzzle.jpg",
      description: "🧩 How to Play:\nSlide tiles to form the complete image before the timer runs out.",
      rating: 4.7,
      link: "#"
    },
    {
      title: "Sentient Tower",
      author: "Amit Prasad",
      image: "images/tower.jpg",
      description: "🗼 How to Play:\nDefend your tower from waves of enemies using special powers.",
      rating: 4.9,
      link: "#"
    }
  ],
  "dev-games": [
    {
      title: "HAZMOB FPS",
      author: "DevX Studios",
      image: "images/hazmob.jpg",
      description: "🔫 How to Play:\nMove with WASD, shoot with left-click, aim with right-click. Eliminate enemies and win!",
      rating: 4.3,
      link: "#"
    }
  ]
};

// Render Games
function renderGames() {
  for (const category in games) {
    const container = document.getElementById(category);
    games[category].forEach((game) => {
      const card = document.createElement("div");
      card.classList.add("game-card");
      card.innerHTML = `
        <img src="${game.image}" alt="${game.title}">
        <div class="game-info">
          <h3>${game.title}</h3>
          <p>${game.description.split('\n')[0]}</p>
          <p><small>By ${game.author}</small></p>
          <a href="${game.link}" class="play-btn">Play</a>
        </div>
      `;
      card.addEventListener("click", () => openModal(game));
      container.appendChild(card);
    });
  }
}

// Modal Handling
const modal = document.getElementById("modal");
const modalImg = document.getElementById("modal-image");
const modalTitle = document.getElementById("modal-title");
const modalDesc = document.getElementById("modal-desc");
const modalAuthor = document.getElementById("modal-author");
const modalRating = document.getElementById("modal-rating");
const modalPlay = document.getElementById("modal-play");
const closeModalBtn = document.getElementById("close-modal");

function openModal(game) {
  modal.classList.add("show");
  modalImg.src = game.image;
  modalTitle.textContent = game.title;
  modalDesc.textContent = game.description;
  modalAuthor.textContent = game.author;
  modalRating.innerHTML = "⭐".repeat(Math.round(game.rating)) + ` (${game.rating})`;
  modalPlay.href = game.link;
}

closeModalBtn.addEventListener("click", () => modal.classList.remove("show"));
modal.addEventListener("click", (e) => {
  if (e.target === modal) modal.classList.remove("show");
});

renderGames();

// Search
document.getElementById("search").addEventListener("input", (e) => {
  const q = e.target.value.toLowerCase();
  document.querySelectorAll(".game-card").forEach((card) => {
    const title = card.querySelector("h3").textContent.toLowerCase();
    card.style.display = title.includes(q) ? "block" : "none";
  });
});
