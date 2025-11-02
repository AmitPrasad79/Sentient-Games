const bgCanvas = document.getElementById("bgCanvas");
const ctx = bgCanvas.getContext("2d");

function resizeBg() {
  bgCanvas.width = window.innerWidth;
  bgCanvas.height = window.innerHeight;
}
window.addEventListener("resize", resizeBg);
resizeBg();

const img = new Image();
img.src = "./images/sentient.png";

let balls = [];
let imageLoaded = false;

img.onload = () => {
  imageLoaded = true;
  console.log("✅ Sentient background image loaded");
};

function createBall() {
  balls.push({
    x: Math.random() * bgCanvas.width,
    y: -50,
    size: Math.random() * 40 + 25,
    speed: Math.random() * 1.2 + 0.4,
    rotation: Math.random() * 360,
    rotationSpeed: Math.random() * 0.6 - 0.3,
    glow: Math.random() * 6 + 4
  });
}

setInterval(() => {
  if (balls.length < 7) createBall();
}, 800);

function drawBall(b) {
  ctx.save();
  ctx.translate(b.x, b.y);
  ctx.rotate((b.rotation * Math.PI) / 180);
  ctx.globalAlpha = 0.85;
  ctx.shadowBlur = b.glow;
  ctx.shadowColor = "#ff9f43";
  ctx.drawImage(img, -b.size / 2, -b.size / 2, b.size, b.size);
  ctx.restore();
}

function update() {
  ctx.clearRect(0, 0, bgCanvas.width, bgCanvas.height);

  if (imageLoaded) {
    for (let b of balls) {
      b.y += b.speed;
      b.rotation += b.rotationSpeed;
      drawBall(b);
    }
    balls = balls.filter(b => b.y < bgCanvas.height + 50);
  }

  requestAnimationFrame(update);
}

update();
