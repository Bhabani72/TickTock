var min,hrs,sec;
var secs,mins,hours

function setup() {
  createCanvas(1300,600);
  angleMode(DEGREES);
}

function draw() {
  background("grey"); 
  translate(200,200)
  rotate(-90)
  
  hrs = hour();
  min = minute();
  sec = second();

   secs = map(sec, 0, 60, 0, 360);

   mins = map(min, 0, 60, 0, 360);

   hours = map(hrs % 12, 0, 12, 0, 360);

  push();
  rotate(secs);
  strokeWeight(3);
  stroke("cyan");
  line(0, 0, 100, 0);
  pop();

  push();
  rotate(mins);
  strokeWeight(5);
  stroke("yellow");
  line(0, 0, 75, 0);
  pop();

  push();
  rotate(hours);
  strokeWeight(7);
  stroke("blue");
  line(0, 0, 50, 0);
  pop();

  strokeWeight(7);
  noFill();
  stroke("cyan");
  arc(0, 0, 300, 300, 50, secs);
  stroke("yellow");
  arc(0, 0, 280, 280, 50, mins);
  stroke("blue");
  arc(0, 0, 260, 260, 50, hours);
}


  
 
 

