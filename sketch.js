
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;
function preload()
{
	
}

function setup() {
	createCanvas(1200, 400);


	engine = Engine.create();
	world = engine.world;
	//Create the Bodies Here.

	//row 1.
	block1 =new Block1(425,370,30,40);
	block2 =new Block1(455,370,30,40);
	block3 =new Block1(485,370,30,40);
	block4 =new Block1(515,370,30,40);
	block5 =new Block1(545,370,30,40);
	block6 =new Block1(575,370,30,40);
	block7 =new Block1(605,370,30,40);
	block8 =new Block1(635,370,30,40);
	block9 =new Block1(665,370,30,40);

	//row 2.
	block10 =new Block2(455,330,30,40);
	block11 =new Block2(485,330,30,40);
	block12 =new Block2(515,330,30,40);
	block13 =new Block2(545,330,30,40);
	block14=new Block2(575,330,30,40);
	block15 =new Block2(605,330,30,40);
	block16 =new Block2(635,330,30,40);

	//row 3.
	block17=new Block3(485,290,30,40);
	block18=new Block3(515,290,30,40);
	block19=new Block3(545,290,30,40);
	block20=new Block3(575,290,30,40);
	block21=new Block3(605,290,30,40);

	//row 4.
	block22=new Block4(515,250,30,40);
	block23=new Block4(545,250,30,40);
	block24=new Block4(575,250,30,40);

	//row 5.
	block25=new Block5(545,210,30,40);

	//row 1.
	block26 = new Block1(840,240,30,40);
	block27 = new Block1(870,240,30,40);
	block28 = new Block1(900,240,30,40);
	block29 = new Block1(930,240,30,40);
	block30 = new Block1(960,240,30,40);
	
	//row2.
	block31 = new Block3(870,200,30,40);
	block32 = new Block3(900,200,30,40);
	block33 = new Block3(930,200,30,40);

	//row3.
	block34=new Block2(900,180,30,40);

		  polygon = new Polygon(100,200,100);
		  ground1 = new Ground(550,380,300,10);
		  ground2 = new Ground(900,250,200,10);  
		  slingshot = new SlingShot(polygon.body,{x:110,y:210});

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background("black");
  polygon.display();
  ground1.display(); 
  ground2.display();
  //row 1.
  block1.display();
  block2.display();
block3.display();
  block4.display();
  block5.display();
 block6.display();
  block7.display();
  block8.display();
  block9.display();
  //row 2.
  block10.display();
  block11.display();
 block12.display();
  block13.display();
  block14.display();
  block15.display();
 block16.display()

  //row 3.
  block17.display();
  block18.display();
 block19.display();
 block20.display();
 block21.display();
slingshot.display();

  //row 4.
  block22.display();
  block23.display();
 block24.display();

  //row 5.
block25.display();
  
block26.display();
 block27.display();
 block28.display();
 block29.display();
 block30.display();
 block31.display();
 block32.display();
 block33.display();
 block34.display();
 
  drawSprites();
 
}


function mouseDragged(){
	Matter.Body.setPosition(polygon.body, {x: mouseX , y: mouseY});
  }
  
  
  function mouseReleased(){
	slingshot.fly();
  }

  function keyPressed(){
    if(keyCode === 32){
        slingshot.attach(polygon.body);
    }
}
