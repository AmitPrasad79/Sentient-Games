const bgCanvas = document.getElementById("bgCanvas");
const ctx = bgCanvas.getContext("2d");

function resizeBg() {
  bgCanvas.width = window.innerWidth;
  bgCanvas.height = window.innerHeight;
}
window.addEventListener("resize", resizeBg);
resizeBg();

const img = new Image();
img.src = "assets/sentient.png"; // ✅ Use your GamesHub asset path

let balls = [];

function createBall() {
  balls.push({
    x: Math.random() * bgCanvas.width,
    y: -50,
    size: Math.random() * 50 + 35, // bigger for wide screens
    speed: Math.random() * 1.5 + 0.5,
    rotation: Math.random() * 360,
    rotationSpeed: Math.random() * 1.2 - 0.6,
  });
}

setInterval(() => {
  if (balls.length < 10) createBall();
}, 600);

function drawBall(b) {
  ctx.save();
  ctx.translate(b.x, b.y);
  ctx.rotate((b.rotation * Math.PI) / 180);
  ctx.globalAlpha = 0.85;
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
  balls = balls.filter(b => b.y < bgCanvas.height + 50);
  requestAnimationFrame(update);
}

update();
