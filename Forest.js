
var WIDTH = 900;
var HEIGHT = 700;

function drawTree( x){
var Color = random(0,255);
var Height = random(50,250);
fill(94,2,2);
rect(x,300,25,Height);


var NumTri = random(2,5);
var DrawnTri = 0;
var y = 300;
while (DrawnTri < NumTri){
  Color = random(0,255);
  fill(0,Color,0);
triangle(x-20,y,x + 56,y,x + 13,y-100);
 y = y - 25;
 DrawnTri = DrawnTri + 1;
}

}


function draw(){
  
}


function setup(){
  createCanvas(900, 700);
  var treeP=0;
  while (treeP<WIDTH){
   treeP=treeP+100; 
   drawTree(treeP);
  }
}
