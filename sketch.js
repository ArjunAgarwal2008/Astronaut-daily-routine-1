function setup() {
  createCanvas(800,800);

  astronut=createSprite(500,400,50,100)
  astronut.addAnimation("sleep",sleep)
  astronut.scale=0.1
}

function draw() {
  background(backgroundimg);  
  if (keyDown("UP_ARROW")){
    astronut.addAnimation("gym",gym)
    astronut.changeAnimation("gym")
  }
  if (keyDown("DOWN_ARROW")){
    astronut.addAnimation("eat",eat)
    astronut.changeAnimation("eat")
  }
  if (keyDown("RIGHT_ARROW")){
    astronut.addAnimation("brush",brush)
    astronut.changeAnimation("brush")
  }
  if (keyDown("LEFT_ARROW")){
    astronut.addAnimation("moveing",move)
    astronut.changeAnimation("moveing")
  }
  drawSprites();
}
function preload(){
  bath=loadAnimation("bath1.png")
  brush=loadAnimation("brush.png")
  drink=loadAnimation("drink1.png")
  eat=loadAnimation("eat1.png","eat2.png")
  gym=loadAnimation("gym1.png","gym2.png","gym11.png","gym12.png")
  move=loadAnimation("move.png","move1.png")
  backgroundimg=loadImage("iss.png")
  sleep=loadAnimation("sleep.png")

}