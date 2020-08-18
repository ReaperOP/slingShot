var ground;
var stand;

function setup() {
  createCanvas(800,400);
 ground = new Ground(400, 200, 50, 50);
stand = new Ground(700,100,10,100)

polygon = bodies.circle(50,200,20)
World.add(world,polygon);
slingShot = new SlingShot(this.polygon,{x:100, y:200})

box1 = creteSprite(700,90,30,30)
box2 = createSprite(720,90,30,30)
box3 = createSprite(740,90,30,30)
box4 = createSprite()
box5 = createSprite()
box6 = CreateSprite()
}

function draw() {
  background(255,255,255); 
  ground.display(); 
  stand.display();

  box1.display()
  box2.display()
  box3.display()
  box4.display()
  box5.display()
  box6.display()

  drawSprites()                                                            
}
function mouseReleased(){
SlingShot.fly();
}

function mouseDragged(){
  Matter.Body.setPosition(polygon.body,{x:mouseX , y:mouseY})
}
function keyPressed(){
  if(keyCode=== 32){
    slingShot.attach(this.Polygon)
  }
}