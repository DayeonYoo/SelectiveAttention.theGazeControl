let speed=0;
let c=10;
var person;
var x = 0;
//y=height/2
var y= 200;
var w= 100;
var h= 50;

function preload() {
	person1 = createImg("personwalking1.gif");  
 person2 = createImg("personwalking1.gif"); 
   person3 = createImg("personwalking1.gif"); 
  person4 = createImg("personwalking1.gif"); 
}

function setup() {
  createCanvas(800, 800);
 noFill()
  stroke(237, 237, 237);
  strokeWeight(5);
  g=150;
  imageMode(CENTER);
}

function draw() {
  background(82, g, 163);
  g=g+c;
  

 if(g>=150){
    c=-10;
  }
  else if(g<100) 
  {
    c=10;
  }
 
  for(var x1=0; x1<3000; x1=x1+40){
    for (var y1=0; y1<3000; y1=y1+30){
      
ellipse(x1+speed,y1+speed,20,20);
bezier(x1+speed-20,y1+speed,x1+speed-5,y1+speed-20,x1+speed+5,y1+speed-20,x1+speed+20,y1+speed)
      bezier(x1+speed-20,y1+speed,x1+speed-5,y1+speed+20,x1+speed+5,y1+speed+20,x1+speed+20,y1+speed)
}
    speed=speed-0.005;
  }
  
   person1.position(-130, -200);
  person1.size(600,800)
   person2.position(250, -200);
  person2.size(600,800)
person3.position(-130, 200);
  person3.size(600,800)
  person4.position(250, 200);
  person4.size(600,800)
}

