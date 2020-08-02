class Polygon{
    constructor(x, y, radius, angle) {
        var options = {
            restitution:0.5,
            friction:1.0,
            density:1.0
        }
        this.body = Bodies.circle(x,y,radius,options);
        this.radius = radius
        this.image = loadImage("polygon.png");
        this.visiblity = 255
        World.add(world, this.body);
      }
      display(){
        var angle = this.body.angle;
       
if(this.body.speed<3 ){
  super.display();
}
else{
  World.remove(world,this.body);
  push();
  this.visiblity = this.visiblity-5
  tint(255,this.visiblity);
  image(this.image,this.body.position.x,this.body.position.y);
  pop();
}
      }
}

