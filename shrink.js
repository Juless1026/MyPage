var ballsize = 0;
function setup(){
createCanvas(500,500);
background(255,255,255);
}


function draw(){
fill(random(1,255),random(1,255),random(1,255));
ellipse(mouseX, mouseY, ballsize, ballsize);

if(mouseIsPressed){
ballsize += 1;

  
   
}
else if(ballsize > 0){
ballsize -= 1;
}


}

function keyPressed(){
 if (key == 'r'){
   background(255,255,255);
 }
 if (key == 'e'){
ballsize += 50;
 }
 if (key == 't'){
ballsize -= 50;
 }
}
