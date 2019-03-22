const START = document.getElementById('start');
const PLAY_AGAIN = document.getElementById('playAgain');
const BASKET = document.getElementById('basket');
const GAME = document.getElementById('game');
const GAME_HEIGHT = 400;
const GAME_WIDTH = 400;
const LEFT_ARROW = 37;
const RIGHT_ARROW = 39;
const EGGS = [];
var YOUR_SCORE = 0;

var gameInterval = null;

function positionToInteger(element){
  return parseInt(element.replace('px', ''), 10);
}


function checkCatch(egg){
  const eggTop = positionToInteger(egg.style.top);

  if (eggTop > 350 && eggTop < 360) {
    const basketLeftEdge = positionToInteger(BASKET.style.left);
    const basketRightEdge = basketLeftEdge + 45;
    const eggLeftEdge = positionToInteger(egg.style.left);
    const eggRightEdge = eggLeftEdge + 20;

    if(eggLeftEdge < basketRightEdge && eggRightEdge > basketLeftEdge){
      return true;
    }
  }
}

function createEgg(x){
  const egg = document.createElement('div');
  egg.className = 'egg';
  egg.style.left = `${x}px`;
  var top = 0;

  GAME.appendChild(egg);

  function moveEgg(){
    egg.style.top = `${top}px`;
    if(checkCatch(egg)){
      YOUR_SCORE++;
      egg.remove();
    } else if(top < GAME_HEIGHT){
      top += 2;
      window.requestAnimationFrame(moveEgg);
    } else if(top === GAME_HEIGHT) {
      endGame();
    }
  }
  window.requestAnimationFrame(moveEgg);
  EGGS.push(egg);
  return egg;
}

function endGame(){
  clearInterval(gameInterval);
  EGGS.forEach(function(egg){
    egg.remove();
  });
  document.removeEventListener('keydown', moveBasket);
  PLAY_AGAIN.innerHTML = `You Lose!<br/>You caught ${YOUR_SCORE} eggs!<br/><br/>PLAY AGAIN?`;
  PLAY_AGAIN.style.display = 'inline';
  BASKET.style.left = '180px';
}

function moveBasketLeft() {
  function moveLeft(){
    const left = positionToInteger(BASKET.style.left);
    if(left < 4){
      BASKET.style.left = '0px';
    }
    if(left >= 4){
      BASKET.style.left = `${left - 4}px`;
      window.requestAnimationFrame(moveLeft);
    }
  }
  window.requestAnimationFrame(moveLeft);
}

function moveBasketRight() {
  function moveRight(){
    const right = positionToInteger(BASKET.style.left);

    if(right > GAME_WIDTH - 44){
      BASKET.style.left = `${GAME_WIDTH - 40}px`;
    }
    if(right <= GAME_WIDTH - 44){
      BASKET.style.left = `${right + 4}px`;
      window.requestAnimationFrame(moveRight);
    }
  }
  window.requestAnimationFrame(moveRight);
}

function moveBasket(e){
  if(e.which === RIGHT_ARROW){
    moveBasketRight();
    e.preventDefault();
    e.stopPropagation();
  } else if(e.which === LEFT_ARROW){
    moveBasketLeft();
    e.preventDefault();
    e.stopPropagation();
  }
}

function start(){
  document.addEventListener('keydown', moveBasket);

  YOUR_SCORE = 0;

  START.style.display = 'none';
  PLAY_AGAIN.style.display = 'none';

  gameInterval = setInterval(function(){
    createEgg(Math.floor(Math.random() * (GAME_WIDTH - 20)));
  }, 1000);
}
