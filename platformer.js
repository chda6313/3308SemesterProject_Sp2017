//Charles Davies

//note, pixels are counted from the top left of the screen.
//this causes some funcy math, most notibly, moving down in the y is actually adding to pixel number
//ex:

//0,0  1,0  2,0  3,0 ----> x-axis
//0,1  1,1  2,1  3,1
//0,2  1,2  2,2  3,2
//  |
//  |
//  V
//  y-axis






color bg = color(0,0,0); // rgb color to use as background
boolean[] keys = {false, false, false};//a,d,spacebar
player p1 = new player(); // init new player
gameMap m1 = new gameMap(); //init new map


//some constants, put out front to easily change in the future
int grav = -2;
int jumpspeed = 10;
int runspeed = 10;
int fallspeed = 50;
int coinSize = 10;

//runs once at the very start of the program
void settings() 
{
  size(800,800);
}
//also runs once at the very start of the program
void setup()
{

  size(800,800);

  background(10);
  frameRate(60);
  
}




//this is the main function. Will loop for ever
void draw()
{
  background(bg); //draw the background, commenting out this line will draw on top of the previous frame
  m1.draw(); //draw the map
  p1.draw(m1);  //draw the player
}

class gameMap{
  wallBlock[] wallBlocks = {new wallBlock(500,600,100,50), new wallBlock(200,550,100,50)};
  coin[] coins = {new coin(100,100), new coin(200,200)};
  wallBlock goal = new wallBlock(700, 400,100,50);//end goal location
  
  gameMap(){
    
  }
  
  void draw(){
    
    //wall colors
    stroke(200);
    fill(100);
    for (int i=0; i<wallBlocks.length; i++){
      int[] d = wallBlocks[i].getLocation();
      int[] bS = wallBlocks[i].getSize();
      
      rect(d[0], d[1], bS[0], bS[1]);//x,y,xSize,ySize
    }
    
    
    
    //coin colors
    stroke(200);
    fill(color(100,100,0));
    
    boolean allCollected = true; // this tracks if all coins are collected for the goal
    for (int i=0; i<coins.length; i++){
      if (!coins[i].collected){ // only draw them if they are not collected
        ellipse(coins[i].x , coins[i].y, coinSize, 1.5*coinSize); //x,y, xradius, yradius
        allCollected = false;
        }
      }
    
    
    //goal color
    stroke(200);
    if (allCollected) {fill(color(0,255,0));}
    else {fill(color(255,0,0));}
    //draw the goal
    rect(goal.location[0], goal.location[1], goal.blockSize[0], goal.blockSize[1]);
  }
}
class coin{//makes a coin.
  int x = 0;
  int y = 0;
  boolean collected = false;
  coin(int xpos, int ypos){
    x = xpos;
    y = ypos;
  }
}


class wallBlock{
  int[] location = {0,0};
  int[] blockSize = {10,10};
  wallBlock(int x, int y, int xSize, int ySize){
    location[0] = x;
    location[1] = y;
    
    blockSize[0] = xSize;
    blockSize[1] = ySize;
  }
  
  int[] getLocation(){
    
    return location;
  }
  int[] getSize(){
    return blockSize;
  }
}


class player{
  //attributes
  int[] location = {0,0};//x,y
  int[] speeds = {0,0}; // makes the game feel more realistic
  color playerColor = color(255,255,255);//rgb color
  
  
  //draws the player
  void draw(gameMap m1) {
    
    //first update the location of the player.
    updateLocation(m1);
    
    //currently just draws a box
    fill(playerColor);//sets fill color (interior of shape)
    stroke(playerColor);//sets stroke color (outline of shape)
    beginShape();//can addd as many vertecies as wanted
      //vertex(x,y)
      vertex(location[0]-5, location[1]); //lower left
      vertex(location[0]+5, location[1]); //lower right
      vertex(location[0]+5, location[1]-20); //upper right
      vertex(location[0]-5, location[1]-20); //upper left
      endShape(CLOSE);//CLOSE draws a line from the last point to the first one as well.
  }
  
  
  
  void updateLocation(gameMap m1)
  {
    //update speeds --this checks for keyboard inputs
    speeds = updateSpeed(speeds);
    
    int lastY = location[1];
    
    //update locations with the new speeds
    location[0] += speeds[0];
    location[1] += speeds[1];
    
    //check for boarder of screen
    if (location[0]<0){location[0] = 0;}
    if (location[0]>width){location[0] = width;}
    
    if (location[1]<0){location[1] = 0;}
    if (location[1]>height){location[1] = height;}
    
    //check for walls
    for (int i=0; i<m1.wallBlocks.length; i++){
      int[] d = m1.wallBlocks[i].getLocation();
      int[] bS = m1.wallBlocks[i].getSize();
      
      if ((location[1]< d[1]+ bS[1] && location[1] > d[1]) &&     lastY <= d[1]       && (location[0] > d[0] && location[0] < d[0] + bS[0])){
        location[1] = d[1];
        speeds[1] = 0;
      }
      
    }
    //check for coins
    for (int i=0; i<m1.coins.length; i++){
      if ((abs(location[0] - m1.coins[i].x) <= coinSize) && (abs(m1.coins[i].y - location[1])) <= 1.5*coinSize){
      m1.coins[i].collected = true;
      }
      else {
      playerColor = color(255,255,255);
      }
    }
    
  }
  
  int[] updateSpeed(int[] oldspeeds) //this function returns an int[], and also takes an int[]
  {
    int[] newspeeds = {0,0};//x,y
    
    //check for keyboard input
    if (keys[0]) { //a
      newspeeds[0] = oldspeeds[0] - 1;} //move <
    if (keys[1]) {//d
      newspeeds[0] = oldspeeds[0] + 1;} //move >
    //check if we are moving too fast
    if (newspeeds[0]>runspeed){ newspeeds[0] = runspeed;}
    if (newspeeds[0]<-runspeed){ newspeeds[0] = -runspeed;}
    
    //add gravity to speed
    newspeeds[1] = oldspeeds[1] - grav; // - because y-axis is flipped
    
    //****TODO****: this currently lets you fly around, fix this
    if (keys[2]){//spacebar
      newspeeds[1] = -jumpspeed; // once again - because y-axis is flipped
    }
    
    //terminal velocity simulator
    if (newspeeds[1] > fallspeed){newspeeds[1] = fallspeed;}
      
    return newspeeds;
  }
  
}



//keyPressed and keyReleased track keyboard input
//build in functions of processing.js
void keyPressed() {
  if (key=='a') {keys[0]=true;}
  if (key=='d') {keys[1]=true;}
  if (key==' ') {keys[2] = true;}
}
void keyReleased() {
  if (key=='a') {keys[0]=false;}
  if (key=='d') {keys[1]=false;}
  if (key==' ') {keys[2]=false;}
}
