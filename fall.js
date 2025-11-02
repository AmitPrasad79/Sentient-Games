const bgCanvas = document.getElementById("bgCanvas");
const ctx = bgCanvas.getContext("2d");

// Style setup
bgCanvas.style.position = "fixed";
bgCanvas.style.top = "0";
bgCanvas.style.left = "0";
bgCanvas.style.width = "100%";
bgCanvas.style.height = "100%";
bgCanvas.style.zIndex = "-2";
bgCanvas.style.pointerEvents = "none";

function resizeBg() {
  bgCanvas.width = window.innerWidth;
  bgCanvas.height = window.innerHeight;
}
window.addEventListener("resize", resizeBg);
resizeBg();

// Load image
const img = new Image();
img.src = "/assets/sentient.png";

let balls = [];

function createBall() {
  balls.push({
    x: Math.random() * bgCanvas.width,
    y: -50,
    size: Math.random() * 50 + 30,
    speed: Math.random() * 1.5 + 0.5,
    rotation: Math.random() * 360,
    rotationSpeed: Math.random() * 0.6 - 0.3,
  });
}

function drawBall(b) {
  ctx.save();
  ctx.translate(b.x, b.y);
  ctx.rotate((b.rotation * Math.PI) / 180);
  ctx.globalAlpha = 0.9;
  ctx.drawImage(img, -b.size / 2, -b.size / 2, b.size, b.size);
  ctx.restore();
}

function update() {
  ctx.clearRect(0, 0, bgCanvas.width, bgCanvas.height);
  for (let b of balls) {
    b.y += b.speed;
    b.rotation += b.rotationSpeed;
    drawBall(b);
  }
  balls = balls.filter(b => b.y < bgCanvas.height + 60);
  requestAnimationFrame(update);
}

// Wait for image to load before starting animation
img.onload = () => {
  setInterval(() => {
    if (balls.length < 8) createBall();
  }, 700);
  update();
};
