
// Daniel Shiffman
// https://www.kadenze.com/courses/the-nature-of-code
// http://natureofcode.com/
// Session 2: Array of Particles, multiple forces


var person;

function setup() {
  createCanvas(640, 360);
	person =  new Person();
}

var x;
x= -100;

function keyPressed(){
if (key == ' ') {
	var jump = createVector(0, -7);
  person.applyForce(jump);
}
	
}


function draw() {
background(51);

 
translate(-person.pos.x+50,0) 
  
   var gravity = createVector(0, 0.1);
  person.applyForce(gravity);
  
  
if(mouseIsPressed){
var force = createVector (-0.01,0);	
person.applyForce(force);
}
  
person.update();
person.edges();
person.display();

//Black Block	
fill(0,0,0)	
rect(400, height-50,50,50);

}
