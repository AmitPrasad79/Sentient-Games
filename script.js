document.addEventListener("DOMContentLoaded", () => {
  const modal = document.getElementById("gameModal");
  const modalTitle = document.getElementById("modalTitle");
  const modalDesc = document.getElementById("modalDesc");
  const modalCreator = document.getElementById("modalCreator");
  const modalRating = document.getElementById("modalRating");
  const modalStars = document.getElementById("modalStars");
  const modalVideo = document.getElementById("modalVideo");
  const closeModal = document.getElementById("closeModal");

  const games = [
    {
      title: "Sentient Dog Runner",
      desc: "Use arrow keys to jump and slide to dodge obstacles. Collect coins to unlock upgrades!",
      creator: "Amit Prasad",
      rating: "4.8",
      stars: 5,
      video: "videos/dog-runner.mp4",
      link: "#"
    },
    {
      title: "Sentient Pong",
      desc: "Play against smart AI and test your reflexes in this modern Pong remake.",
      creator: "Amit Prasad",
      rating: "4.7",
      stars: 4,
      video: "videos/pong.mp4",
      link: "#"
    },
    {
      title: "Sentient Memory Match",
      desc: "Train your memory with beautiful cards — match pairs and score high!",
      creator: "Amit Prasad",
      rating: "4.9",
      stars: 5,
      video: "videos/memory.mp4",
      link: "#"
    },
    {
      title: "Sentient Puzzle Slide",
      desc: "Slide tiles to complete the image — test your logic and patience!",
      creator: "Amit Prasad",
      rating: "4.6",
      stars: 4,
      video: "videos/puzzle.mp4",
      link: "#"
    }
  ];

  // Handle hover to play preview video
  const cards = document.querySelectorAll(".game-card");
  cards.forEach((card, i) => {
    const img = card.querySelector("img");
    const video = document.createElement("video");
    video.src = games[i].video;
    video.muted = true;
    video.loop = true;
    video.classList.add("preview-video");

    card.addEventListener("mouseenter", () => {
      img.style.display = "none";
      card.appendChild(video);
      video.play();
    });

    card.addEventListener("mouseleave", () => {
      video.pause();
      video.remove();
      img.style.display = "block";
    });

    // On click — open popup modal
    const btn = card.querySelector(".play-btn");
    btn.addEventListener("click", () => {
      modal.classList.add("active");
      modalTitle.textContent = games[i].title;
      modalDesc.textContent = games[i].desc;
      modalCreator.textContent = `Created by ${games[i].creator}`;
      modalRating.textContent = `(${games[i].rating})`;

      // Create stars
      modalStars.innerHTML = "";
      for (let s = 0; s < games[i].stars; s++) {
        const star = document.createElement("span");
        star.textContent = "⭐";
        modalStars.appendChild(star);
      }

      // Set modal video
      modalVideo.src = games[i].video;
      modalVideo.play();
    });
  });

  // Close modal
  closeModal.addEventListener("click", () => {
    modal.classList.remove("active");
    modalVideo.pause();
  });
});
