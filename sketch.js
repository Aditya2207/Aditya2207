
var r = 0;
var g = 50;
var b=255;


function setup(){

  createCanvas(1200,400);
}


function draw(){
  r=map(mouseX,0,1000,0,155);
  g =map(mouseX,50,800,100,100);
  b= map(mouseX,0,1200,155,0);
  background(r,g,b);
  fill("blue");
  ellipse(mouseX,100,80,80);
}