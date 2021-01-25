var helicopter, air_,p1,pl1;
var tank, tank_,p2,pl2,explosionanimation,explosion;
var background0;
var start_screen, instructions_screen, play, playimg;
var enemy,enemy1,enemy2,enemy3,enemygroup1,enemygroup2,enemygroup3, enemygroup4,p1bullet,bulletimg1,p2bullet,bulletimg2,select_enemy;
var ground,invisigr,invisiwall;
var gamestate, background00
var bad1,bad2,bad3,bad4;
var p1bullets,p2bullets;
var scorep1, scorep2, p1health, p2health;
var gameover,restart,overimg,resetimg;
var startsound, gamesound;
gamestate=0
scorep1 = 0
scorep2 = 0
p1health = 10
p2health = 10
function preload(){
  air_ = loadAnimation("helicopter-0.png","helicopter-1.png","helicopter-2.png","helicopter-3.png","helicopter-4.png","helicopter-5.png","helicopter-6.png","helicopter-7.png","helicopter-8.png","helicopter-9.png")
  tank_ = loadAnimation("tank-0.png","tank-1.png","tank-2.png","tank-3.png","tank-4.png","tank-5.png","tank-6.png","tank-7.png")
  background0 = loadImage("city0.jpg")
  ground_ = loadImage("ground.png")
  p1 = loadImage("player1.png")
  p2 = loadImage("player2.png")
  start_screen = loadImage("start screen.jpg")
  playimg = loadImage("play.png")
  bulletimg1 = loadImage("bullet.png")
  explosionanimation = loadAnimation("explosion.png")
  bad1 = loadAnimation("villan2-3.png","villan2-4.png","villan2-5.png","villan2-6.png","villan2-7.png","villan2-8.png","villan2-9.png","villan2-10.png","villan2-11.png","villan2-12.png","villan2-13.png","villan2-14.png","villan2-15.png","villan2-16.png","villan2-17.png","villan2-18.png","villan2-19.png","villan2-20.png","villan2-3.png")
  bad2 = loadAnimation("villan4-0.png","villan4-1.png","villan4-2.png","villan4-3.png")
  bad3 = loadAnimation("air villan-0.png","air villan-1.png","air villan-2.png","air villan-3.png","air villan-4.png","air villan-5.png","air villan-6.png","air villan-7.png","air villan-8.png","air villan-9.png","air villan-10.png","air villan-11.png","air villan-12.png","air villan-13.png","air villan-14.png","air villan-15.png","air villan-16.png")
  bad4 = loadAnimation("air 2-0.png","air 2-1.png","air 2-2.png","air 2-3.png","air 2-4.png","air 2-5.png","air 2-6.png","air 2-7.png","air 2-8.png","air 2-9.png","air 2-10.png","air 2-11.png","air 2-12.png","air 2-13.png","air 2-14.png","air 2-15.png")
  bulletimg2 = loadImage("bullet2.png")
  overimg = loadImage("gameover.png")
  resetimg = loadImage("reset.jpg")
  
}
function setup() {
  createCanvas(900, 400);
 
  helicopter = createSprite(100,200)
  helicopter.addAnimation("air",air_)
  helicopter.scale=0.5
  
  tank = createSprite(300,310)
  tank.addAnimation("tank",tank_)
  tank.scale=0.8
  
  ground = createSprite(450,230)
  ground.addImage(ground_)
  ground.scale=1
  invisigr = createSprite(450,380,900,10)
  invisigr.visible=false
  invisiwall = createSprite(450,200,10,400)
  invisiwall.visible=false
  pl1 = createSprite(helicopter.x,helicopter.y-50)
  pl1.addImage(p1)
  pl1.scale=0.5
  
  pl2 = createSprite(tank.x,tank.y-50)
  pl2.addImage(p2)
  pl2.scale=0.5
  
  instructions_screen = createSprite(450,200)
  instructions_screen.addImage(start_screen)
  instructions_screen.visible=false
  
  gameover = createSprite(450,100)
  gameover.addImage(overimg)
  gameover.scale=0.3
  gameover.visible=false
  restart = createSprite(450,250)
  restart.addImage(resetimg)
  restart.scale=0.3
  restart.visible=false
  enemygroup1 = new Group()
  enemygroup3 = new Group()
  enemygroup2 = new Group()
  p1bullets = new Group()
  p2bullets = new Group()
  enemygroup4 = new Group()
  play = createSprite(450,200)
  play.addImage(playimg)
  play.visible=false
}

function draw() {
  background(background0);
  edges = createEdgeSprites()
  helicopter.collide(edges)
  tank.collide(edges)
  fill("white")
  textSize(25)
  stroke("black")
  strokeWeight(5)
  text("Player 1 Score: "+scorep1,30,30)
  text("Player 2 Score: "+scorep2,680,30)
  text("Player 1 Health: "+p1health,30,60)
  text("Player 2 Health: "+p2health,680,60)
  helicopter.collide(invisigr)
  helicopter.collide(invisiwall)
  tank.collide(invisiwall)
  if (gamestate === 0){
    instructions_screen.visible=true
    play.visible=true
    if(mousePressedOver(play)){
      gamestate = 1
    }
  }
  if (gamestate === 1){
    instructions_screen.visible=false
    play.visible=false
    ground.velocityX=-5
    if(ground.x<400){
      ground.x=450
    }
    pl1.x=helicopter.x
    pl1.y=helicopter.y-50
    pl2.x=tank.x
    pl2.y=tank.y-50
    
    if(frameCount % 50 === 0){
      enemies()
    }
    if(frameCount % 80 === 0){
      enemies3()
    }
    if(frameCount % 90 === 0){
      enemies1()
    }
    if(frameCount % 75 === 0){
      enemies2()
    }
    if(keyDown("l")){
      helicopter.x=helicopter.x+7
    } else if(keyDown("j")){
      helicopter.x=helicopter.x-7
    } else if(keyDown("i")){
      helicopter.y=helicopter.y-7
    } else if(keyDown("k")){
      helicopter.y=helicopter.y+7
    }
    if(keyDown("right")){
      tank.x=tank.x+5
    } else if(keyDown("left")){
      tank.x=tank.x-5
    } 
    if(keyDown("z")){
      bullets()
    }   
    if(keyDown("enter")){
      bullets2()
    }
    if(enemygroup1.isTouching(tank)){
      p2health=p2health-1
      enemygroup1.destroyEach()
    }
    if(enemygroup3.isTouching(tank)){
      p2health=p2health-1
      enemygroup3.destroyEach()
    }
    if(enemygroup1.isTouching(helicopter)){
      p1health=p1health-3
      enemygroup1.destroyEach()
    }
    if(enemygroup3.isTouching(helicopter)){
      p1health=p1health-3
      enemygroup3.destroyEach()
    }
    if(enemygroup2.isTouching(helicopter)){
      p1health=p1health-1
      enemygroup2.destroyEach()
    }
    if(enemygroup4.isTouching(helicopter)){
      p1health=p1health-1
      enemygroup4.destroyEach()
    }
    if(p1health <= 0||p2health <= 0){
      gamestate = 2
    }
  }
  
  if(gamestate === 2){  
    instructions_screen.visible=false
    play.visible=false
    pl1.visible=false
    pl2.visible=false
    gameover.visible=true
    restart.visible=true
    ground.x=450
    ground.setVelocity(0,0)
    enemygroup1.destroyEach()
    enemygroup2.destroyEach()
    enemygroup3.destroyEach()
    enemygroup4.destroyEach()
    tank.visible=false
    helicopter.visible=false
    if(mousePressedOver(restart)){
       reset()
    }   
  }
  
  drawSprites()
}

function bullets(){
  if(frameCount % 10 === 0){
    p1bullet = createSprite(helicopter.x+50,helicopter.y)
    p1bullet.addImage(bulletimg1)
    p1bullet.scale=0.035
    p1bullet.velocityX=10
    p1bullet.lifetime=30
    p1bullets.add(p1bullet)
    if(p1bullets.isTouching(enemygroup2)){
      p1bullets.destroyEach()
      enemygroup2.destroyEach()
      scorep1 = scorep1+3
    }
     if(p1bullets.isTouching(enemygroup1)){
      p1bullets.destroyEach()
      enemygroup1.destroyEach()
      scorep1 = scorep1+1
    }
     if(p1bullets.isTouching(enemygroup3)){
      p1bullets.destroyEach()
      enemygroup3.destroyEach()
      scorep1 = scorep1+1
    }
     if(p1bullets.isTouching(enemygroup4)){
      p1bullets.destroyEach()
      enemygroup4.destroyEach()
      scorep1 = scorep1+1
    }
  }
}

function bullets2(){
  if(frameCount % 10 === 0){
    p2bullet = createSprite(tank.x+50,tank.y)
    p2bullet.addImage(bulletimg2)
    p2bullet.scale=0.5
    p2bullet.velocityX=10
    p2bullet.lifetime=30
    p2bullets.add(p2bullet)
    if(p2bullets.isTouching(enemygroup1)){
      p2bullets.destroyEach()
      enemygroup1.destroyEach()
      scorep2 = scorep2+6
    }
    if(p2bullets.isTouching(enemygroup3)){
      p2bullets.destroyEach()
      enemygroup3.destroyEach()
      scorep2 = scorep2+6
    }
  }
}
function enemies(){
  enemy = createSprite(900,290)
  enemy.addAnimation("bad",bad1)
  enemy.velocityX=-5
  enemy.lifetime=1000
  enemygroup3.add(enemy)
}

function enemies1(){
  if (frameCount % 90 === 0){
    enemy1 = createSprite(900,290)
    enemy1.addAnimation("bad2",bad2)
    enemy1.velocityX=-10
    enemy1.lifetime=1000
    enemygroup1.add(enemy1)
  } 
}

function enemies2(){
  enemy2 = createSprite(900,Math.round(random(100,200)))
  enemy2.addAnimation("bad3",bad3)
  enemy2.velocityX = -15
  enemy2.lifetime=300
  enemygroup2.add(enemy2)

}

function enemies3(){
  enemy3 = createSprite(900,Math.round(random(100,200)))
  enemy3.addAnimation("bad4",bad4)
  enemy3.velocityX = -10
  enemy3.scale=0.5
  enemy3.lifetime=300
  enemygroup4.add(enemy3)
}
function reset(){
  scorep1=0
  scorep2=0
  p1health=10
  p2health=10
  gamestate = 0
  gameover.visible=false
  restart.visible=false
  tank.visible=true
  helicopter.visible=true
  pl1.visible=true
  pl2.visible=true
}