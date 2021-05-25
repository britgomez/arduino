var serial;

var portName = "COM3";

var inMessage = [0, 0];

function setup(){
  createCanvas(400,400);
  
  serial = new p5.SerialPort();
  
  serial.list();
  
  serial.open(portName);
  
  serial.on('list', gotList)

  serial.on('data',gotData);
}

function gotList(thelist){
  for (var i = 0; i < thelist.length; i++){
    console.log(i + " " + thelist[i]);
  }
}

function gotData(){
  var currentString = serial.readLine();
  trim(currentString);
  if (!currentString) return;
  console.log(currentString);
  inMessage = split(currentString, '&');
}


var vred = 255;
var vyellow = 255;
var vgreen = 255;
var r = 255;
var y = 255;
var g = 255;
var img;
var x = -98;
var carMove = false;
//var zx;
//var nx;

function setup() {
  createCanvas(400, 400);
  
  img = loadImage("assets/car.png");
}

function draw() {
  background(113,171,255);
  a = 313;
  b = 40;
  c = 10;
  d = 25;
  e = 260;
  f = 120;
  
  
  function grass() {
  	noStroke();
  	fill(43,127,0);
  	rect(0,225,400,175);
  }
  
  function road() {
    
    stroke(0);
    strokeWeight(1);
  	fill(55);
  	rect(0,280,400,80);
    
    fill(255);
    rect(10,a,b,c);

  	fill(255);
    rect(80,a,b,c);
            
  	fill(255);
    rect(150,a,b,c);
  	
  	fill(255);
    rect(220,a,b,c);
    
  	fill(255);
    rect(290,a,b,c);
    
  	fill(255);
    rect(360,a,b,c);
  }
  
  function stoplight() {
    
    strokeWeight(2);
    fill(100);
    rect(250,165,20,100);
    
    strokeWeight(3);
    fill(237,170,0);
  	rect(235,100,50,100);
    
    strokeWeight(2);
    fill(255);
    
    
    
//red
    fill(vred,r,r);
    ellipse(260,120,25,25);
    
//yellow
    fill(vyellow,vyellow,y);
    ellipse(260,150,25,25);
    
//green
    fill(g,vgreen,g);
    ellipse(260,180,25,25);
    
  }
  
  grass();
  road();
//  clouds();
  stoplight();
  car();
}




  if (inMessage[1] == 1){
     //red (230,0,0)
    vred = 230;
    r = 0;
    
    vyellow = 255;
    y = 255;
    
    vgreen = 255;
    g = 255;
    
    carMove = false;
}
 if (inMessage[0] == 0) {
    //green (0,200,0)
    vgreen = 200;
    g = 0;
    
    vred = 255;
    r = 255;
    
    vyellow = 255;
    y = 255;
    
    carMove = true;
}

function car() {
  //x = -98;
  
  imageMode(CENTER);
  image(img, x, 280, 196, 104); // 4916 × 2605
  
  //x = x + 1
  if (carMove == true) {
    x = x + 1.5
  } else if (carMove == 2) {
    x = x + 0.75
  }
  
  if (x >= 498) {
    x = -98
  }
}
