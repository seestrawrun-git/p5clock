let color1 = [35, 103, 161, 50];
let color2 = [204, 146, 114, 100];

var ballSpeed = 5;
var ballX = 0;
var ballY= 0;

function setup() {
createCanvas(400, 400);
angleMode(DEGREES);


}

function draw() {
background(96, 109, 106);
let hr = hour();
let mn = minute();
let sc = second();
let xWidth = ((sc * 2) * 2);



//BKG Stripes
function drawStripe() {
stroke(color1);
rect(0,0, 0, 800);
stroke(204, 125, 88, 50);
rect(10, 0, 0, 800);
stroke(122, 176, 204, 50);
rect(20, 0, 0, 800);
};

function drawStripe2() {
  stroke(color2);
rect(0,0, 0, 800);
stroke(234, 125, 48, 50);
rect(10, 0, 0, 800);
stroke(2, 136, 4, 50);
rect(20, 0, 0, 800);
}

let rectWidth = map(sc, 0, 60, 10, 200);
stroke(255);
rect(200, 200, rectWidth, 0 )
rect(200, 200, -rectWidth, 0);



rect(200, 200, 0, rectWidth )
rect(200, 200, 0, -rectWidth);



push();
translate(200, 200);
rotate(-sc * millis()/500);
drawStripe2();
pop();

//reproducing stripes, moved over and spinning
push();
translate(200, 200);
rotate(sc * millis()/500);
push();
drawStripe();
translate(40, 0);
pop();


pop();

//backgroundCircles
push()
translate(200, 200);
fill(color1);
stroke(color2);
ellipse(0 ,0, xWidth, 100);
fill(color2);
stroke(color1);
ellipse(0,0, 100, xWidth);
pop();



//360 divided by 60 is 6, so each second is 6 degrees further along the circle
sc *= 6;
mn *= 6;
hr *= 30;
push();
translate(200,200);
rotate(-90);
fill(255);
noStroke();
push();
rotate(90);
textSize(18);
text(hr/30 + ":" + mn/6 + ":" + sc/6, 30, 200);
pop();

//background circle seconds
strokeWeight(8);
stroke(255);
noFill();
ellipse(0,0,300);

//filling in seconds circle seconds * 6 degrees
stroke(255, 100, 150);
strokeWeight(4);
arc(0, 0, 300, 300, 0, sc);

//another circle in the middle - seconds
strokeWeight(8);
stroke(225, 150, 3);
ellipse(0, 0, 260);


//the middle circles counterpart - minutes

strokeWeight(4);
stroke(255);
arc(0, 0, 260, 260, 0, mn);

//hours outlines
strokeWeight(8);
stroke(12, 20, 230);
ellipse(0, 0, 220);

//hours indicator
strokeWeight(4);
stroke(255, 255, 191);
arc(0, 0, 220, 220, 0, hr);

//middle triangle pointer
push()
rotate(sc);

triangle(20, 0, 0, 10, 0, 0);
pop();


//other elements
fill(200, 204, 80);
translate(-200, -200);
rect(0,0, 10, 10);
rect(390, 390, 10, 10);

//splatter elements
push();
rotate(0);
stroke(0);
noFill();
ellipse(30, 40, 10, 10);
pop();





}
