/* This is just grabbing our background canvas and our gif */
const canvas1 = document.getElementById("layer1");
const ctx1 = canvas1.getContext("2d");
const image = document.getElementById("gif");

/* this just creates the "streets" which also have the yellow lines on them and then also creates the sliding rectangles on top to prevent the user from passing */
const canvas = document.getElementById("streets");
const ctx = canvas.getContext("2d");
ctx.beginPath();
ctx.strokeStyle = "yellow";
ctx.lineWidth = 3;
ctx.moveTo(0,70);
ctx.lineTo(1380,70);
ctx.stroke();
ctx.moveTo(0,80);
ctx.lineTo(1380,80);
ctx.stroke();
ctx.moveTo(0,80);
ctx.lineTo(1380,80);
ctx.stroke();
let x = [10, 70, 130, 190, 250];
let xback = [15, 75,135,195,255]
let xpx = [545,605, 665, 725, 785];
let xpxback = [550, 555, , 1190,1125]
let y = [0, 0 , 0, 0, 0];
let yback = [100,100,100,100,100]
let ypx = [345, 345, 345, 345, 345]
let ybackpx = [435,435,435,435,435]
const width = 10;
const height = 50;
const speed = [1,1,1,1,1,1];

function slide (time) {
  for (let i = 0; i < 5; i++) {
    ctx.clearRect(x[i]-speed[i]-1, y[i], width+2, height+2);
    ctx.fillRect(x[i], y[i], width, height);
    x[i] += speed[i];
    xpx[i] += speed[i];
    if (x[i] > canvas.width) {
      x[i] = 0;
      xpx[i] = 535;
    }
  }
  window.requestAnimationFrame(slide);
};
window.requestAnimationFrame(slide);

/* this makes the sliding rectangles go backwards */
function slidebackwards (time) {
  for (let i = 0; i < 5; i++) {
    ctx.clearRect(xback[i]+speed[i]-1, yback[i], width+2, height+2);
    ctx.fillRect(xback[i], yback[i], width, height);
    xback[i] -= speed[i]; // Decrement the x position
    xpxback[i] -= speed[i]; // Update additional x position if needed
    if (xback[i] < -10) {
      xback[i] = canvas.width;
      xpxback[i] = 1380;
    }
  }
  window.requestAnimationFrame(slidebackwards);
};
window.requestAnimationFrame(slidebackwards);

/* this just creates the "streets" which also have the yellow lines on them and then also creates the sliding rectangles on top to prevent the user from passing */
const canvas2 = document.getElementById("street2");
const ctx2 = canvas2.getContext("2d");
ctx2.beginPath();
ctx2.strokeStyle = "yellow";
ctx2.lineWidth = 2;
ctx2.moveTo(0,40);
ctx2.lineTo(1380,40);
ctx2.stroke();
ctx2.moveTo(0,45);
ctx2.lineTo(1380,45);
ctx2.stroke();
ctx2.moveTo(0,100);
ctx2.lineTo(1380,100);
ctx2.stroke();
ctx2.moveTo(0,105);
ctx2.lineTo(1380,105);
ctx2.stroke();
let x2 = [10, 30, 60, 50];
let xpx2 = [545,565,595,585]
let y2 = [0, 60, 0, 120];
let ypx2 = [75, 165, 75, 255]
const width2 = 25;
const height2 = 30;
const speed2 = [1, 1, 1, 1];

function slide2 (time) {
  for (let i = 0; i < 4; i++) {
    ctx2.clearRect(x2[i]-speed2[i]-1, y2[i], width2+2, height2+2);
    ctx2.fillRect(x2[i], y2[i], width2, height2);
    x2[i] += speed2[i];
    xpx2[i] += speed2[i];
    if (x2[i] > canvas2.width){
      x2[i] = 0;
      xpx2[i] = 535;
    }
  }
  window.requestAnimationFrame(slide2);
};
window.requestAnimationFrame(slide2);

/* this just creates the "streets" which also have the yellow lines on them and then also creates the sliding rectangles on top to prevent the user from passing */
const canvas3 = document.getElementById("street3");
const ctx3 = canvas3.getContext("2d");
ctx3.beginPath();
ctx3.strokeStyle = "yellow";
ctx3.lineWidth = 3;
ctx3.moveTo(0,70);
ctx3.lineTo(1380,70);
ctx3.stroke();
ctx3.moveTo(0,80);
ctx3.lineTo(1380,80);
ctx3.stroke();
ctx3.moveTo(0,80);
ctx3.lineTo(1380,80);
ctx3.stroke();
let x3 = [10, 15, 30];
let xpx3 = [545,550,565];
let y3 = [0, 100, 0];
let ypx3 = [-60,-15,-60]
const width3 = 10;
const height3 = 50;
const speed3 = [1,1,1];

function slide3 (time) {
  for (let i = 0; i < 3; i++) {
    ctx3.clearRect(x3[i]-speed3[i]-1, y3[i], width3+2, height3+2);
    ctx3.fillRect(x3[i], y3[i], width3, height3);
    x3[i] += speed3[i];
    xpx3[i] += speed3[i];
    if (x3[i] > canvas3.width) {
      x3[i] = 0;
      xpx3[i] = 535;
    }
  }
  window.requestAnimationFrame(slide3);
};
window.requestAnimationFrame(slide3);

/* This entire section handles the movement of the gif (right, left, up, and down) and also checks for any collisions with the sliding rectangles */
image.style.position = 'absolute';
image.style.left = '680px';  // horizontal position
image.style.top = "480px";   // vertical position

document.addEventListener("keydown", function(event) {
  let left = parseInt(image.style.left, 10);
  let top = parseInt(image.style.top, 10);

  switch(event.key) {
    case "ArrowUp":
      if (top - 45 >= -120){
        image.style.top = `${top - 45}px`;
        for(let i = 0; i < x.length; i++){
          if((xpx[i]+10 >= left && left >= xpx[i] -10 && ypx[i] == top) ||(xpxback[i]+10 <= left && left <= xpxback[i] -10 && ybackpx[i] == top)||(xpx2[i]+20 >= left && left >= xpx2[i] -20 && ypx2[i] == top)||(xpx3[i]+10 >= left && left >= xpx3[i] -10 && ypx3[i] == top)){
            image.style.left = '680px';
            image.style.top = '480px';
          }
        }
        break;
      }
    case "ArrowDown":
      if (top + 45 <= 480){
        image.style.top = `${top + 45}px`;
        for(let i = 0; i < x.length; i++){
          if((xpx[i]+10 >= left && left >= xpx[i] -10 && ypx[i] == top) ||(xpx2[i]+20 >= left && left >= xpx2[i] -20 && ypx2[i] == top)||(xpx3[i]+10 >= left && left >= xpx3[i] -10 && ypx3[i] == top)){
            image.style.left = '680px';
            image.style.top = '480px';
          }
        }
      }
      break;
    case "ArrowLeft":
      if(left - 45 >= 0){
      image.style.left = `${left - 45}px`;
      for(let i = 0; i < x.length; i++){
        if((xpx[i]+10 >= left && left >= xpx[i] -10 && ypx[i] == top) ||(xpx2[i]+20 >= left && left >= xpx2[i] -20 && ypx2[i] == top)||(xpx3[i]+10 >= left && left >= xpx3[i] -10 && ypx3[i] == top)){
          image.style.left = '680px';
          image.style.top = '480px';
        }
      }
      }
      break;
    case "ArrowRight":
      if(left + 45 <= 1380){
        image.style.left = `${left + 45}px`;
        for(let i = 0; i < x.length; i++){
          if((xpx[i]+10 >= left && left >= xpx[i] -10 && ypx[i] == top) ||(xpx2[i]+20 >= left && left >= xpx2[i] -20 && ypx2[i] == top)||(xpx3[i]+10 >= left && left >= xpx3[i] -10 && ypx3[i] == top)){
            image.style.left = '680px';
            image.style.top = '480px';
          }
        }
      }
      break;
  }
  if (moved) {
    let collision = false;
    for(let i = 0; i < x.length; i++){
      if(xpx[i]+10 >= left && left >= xpx[i] -10 && ypx[i] == top){
        image.style.left = '680px';
        image.style.top = '480px';
        collision = true;
        break;  // stop after finding the first collision
      }
    }

    if (collision) {
      confetti();
    }
  }
});

/* This function simply just checks the position of the gif anytime it moves to check if it intersected with any rectangle */
function continuouslyRunningFunction() {
  let left = parseInt(image.style.left, 10);
  let top = parseInt(image.style.top, 10);
  for(let i = 0; i < x.length; i++){
    if((xpx[i]+10 >= left && left >= xpx[i] -10 && ypx[i] == top) ||(xpx2[i]+20 >= left && left >= xpx2[i] -20 && ypx2[i] == top)||(xpx3[i]+10 >= left && left >= xpx3[i] -10 && ypx3[i] == top)){
      image.style.left = '680px';
      image.style.top = '480px';
    }
  }
}

let roundCounter = 1;
let wins = 0;

/* this makes the gif begin at the bottom of the page and work its way up */
function initializeGame() {
  image.style.top = "480px";
  checkPosition();
}

/* checks to see if the gif image reached the top or not and if it did, a special message would be given to the user */
function checkPosition() {
  let interval = setInterval(function() {
    let top = parseInt(image.style.top, 0);
    if (top <= -105) { // check if gif reached the top
      wins++;
      if (wins > 3) { // Reset wins after round 3
        wins = 1; // Reset wins counter
        alert("YAY! You Won!"); // to make the user stop playing and realize they won lmao
        confetti();
      }
      document.getElementById("round-number").textContent = wins; // Update the display with the current round number
      initializeGame(); // Reset position and continue game
    }
  }, 100);
}
initializeGame();

// Call continuouslyRunningFunction() every 1000 milliseconds (1 second)
setInterval(continuouslyRunningFunction, 300);

/* This adds the confetti onto the screen */
function confetti() {
  window.confetti({
      particleCount: 100,
      spread: 70,
      origin: { y: 0.6 }
  });
}

/* this is to play the audio */
function playAudio() {
  var audio = document.getElementById("audio");
  audio.play();
}

/* this is to stop the audio */
function stopAudio() {
  var audio = document.getElementById("audio");
  audio.pause(); 
  audio.currentTime = 0; 
}

/* this is for confetti */
document.getElementsByClassName("confetti")[0].addEventListener("click", () =>{
  confetti();
});
