
	let wMax = 1;
let c = 0.0;
let inc;
function setup(){
  createCanvas(windowWidth,windowHeight);
  inc = TWO_PI/25.0;
}
function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}

function draw(){
  background(10);
  translate(width/2,height/2 - 430);
  stroke(255);
  strokeWeight(4);
  noFill();
  
  for(let i=2;i<=20;i++){
    push();
    stroke("white");
      push();
        noStroke();
        fill("blue");
        ellipse((-1 * wMax),i*40,20);
      pop();
      translate(0,i*40);
      line((-1 * wMax),0,wMax,0);
      push();
        noStroke();
        fill("green");
        ellipse(wMax,0,20);
      pop();
    pop();
    wMax = cos((c+i)/3) * 50;
  }
  c+=inc;
}
