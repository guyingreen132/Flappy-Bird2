
function preload(){
  customFont = loadFont("flappy.ttf");
    img2 =loadImage("yellowbird-downflap.png")
}

function setup() {
    createCanvas(1000,500);
}

var y=0;
var yv=0;
var pipex=1000;
var pipeY=400;
var score=0;
function draw() {

  if(yv>0) {img2 =loadImage("yellowbird-upflap.png");}
  if(yv<0) {img2 =loadImage("yellowbird-downflap.png");}
  
    clear()
    yv=yv+0.225;
    y=y+yv;
    pipex=pipex-5;
    image(img2,100,y,50,30);
    rect(pipex,pipeY,100,1000);
    rect(pipex,pipeY-200,100,-1000);
      textFont(customFont);
    textSize(17);
    text(score,50,50);
    if(pipex>100&&pipex<140&& y>pipeY) {
window.alert('you lost!');
  window.close();
    }
    
    if(pipex==100) {score=score+1;}
    
        if(pipex>100&&pipex<140&&y<(pipeY-200)) {
window.alert('you lost!');
  window.close();
    }
    
    if(y>500) {
    window.alert('you lost!');
  window.close();
    }
    
    if(pipex<0) {pipex=1000; pipeY=random(400, 100);}
    
}

    function keyPressed() {
 yv=-6;
}
