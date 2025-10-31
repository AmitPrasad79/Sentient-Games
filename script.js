const games = {
  "sentient-originals": [
    {
      title: "Sentient Dog Runner",
      author: "Amit Prasad",
      image: "images/dog-runner.jpg",
      description: "Dash through obstacles and collect rewards in this fast-paced runner!",
      link: "#"
    },
    {
      title: "Sentient Pong",
      author: "Amit Prasad",
      image: "images/pong.jpg",
      description: "A modern twist on the classic Pong game with smart AI.",
      link: "#"
    },
    {
      title: "Sentient Memory Match",
      author: "Amit Prasad",
      image: "images/memory.jpg",
      description: "Train your memory with beautiful images in this match game.",
      link: "#"
    },
    {
      title: "Sentient Puzzle Slide",
      author: "Amit Prasad",
      image: "images/puzzle.jpg",
      description: "Slide the tiles to complete the picture — test your logic!",
      link: "#"
    },
    {
      title: "Sentient Tower",
      author: "Amit Prasad",
      image: "images/tower.jpg",
      description: "Climb the mysterious Sentient Tower full of surprises.",
      link: "#"
    }
  ],
  "dev-games": [
    {
      title: "HAZMOB FPS",
      author: "DevX Studios",
      image: "images/hazmob.jpg",
      description: "A thrilling first-person shooter experience with multiplayer mode.",
      link: "#"
    }
  ]
};

function renderGames() {
  for (const category in games) {
    const container = document.getElementById(category);
    games[category].forEach(game => {
      const card = document.createElement("div");
      card.classList.add("game-card");
      card.innerHTML = `
        <img src="${game.image}" alt="${game.title}" />
        <div class="game-info">
          <h3>${game.title}</h3>
          <p>${game.description}</p>
          <p><small>By ${game.author}</small></p>
          <a href="${game.link}" class="play-btn">Play</a>
        </div>
      `;
      container.appendChild(card);
    });
  }
}

renderGames();

// 🔍 Search Filter
document.getElementById("search").addEventListener("input", (e) => {
  const query = e.target.value.toLowerCase();
  document.querySelectorAll(".game-card").forEach(card => {
    const title = card.querySelector("h3").textContent.toLowerCase();
    card.style.display = title.includes(query) ? "block" : "none";
  });
});
