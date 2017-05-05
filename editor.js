
//3 arrays will be created 
//coins=coin
//platforms=block
//goal=final block 
//dynamic arrays utilized 

//'name'[20] + 'comments'[140] field -- 


boolean[] keys = {false, false, false};//a,d,spacebar

gameMap edit=new gameMap();

void settings() 
{
  size(400,400)
}
//also runs once at the very start of the program
void setup()
{
  background(color(20,40,50)); //color(r,g,b)
  size(800,800);
  frameRate(60);
  edit=new gameMap(coins, platforms)
}


void draw() 
{
	background();
	edit.draw();
}

//this is the main function. Will loop for ever
void draw()
{
  background(color(20,150,50)); //draw the background, commenting out this line will draw on top of the previous frame
  //coin[] coins= new coin;

 //var input[] dynamic input?
 int c=0;
 int b=0;

  if (mousePressed == true&&(mouseButton==left) {
	  coin[c]=new coin(mouseX, mouseY);
	  c=c+1;
   /*stroke(255); // outline is white
    //black fill 
    fill(0); */ // commenting out changes when pressed 
    //coin creation when pressed
   else if (mousePressed == true&&(mouseButton==right))
   {
	   
	block[b]=new block(mouseX,mouseY,100,50);
	b=b+1;
  } else {
    stroke(0); //outline black
    fill(255);//fill white(/
  }
  rect(mouseX, mouseY, 10, 10); // draw at mouse location, with width and height of 
  
}
class gameMap{
  coin[] coins = {new coin(100,100), new coin(200,200)};
  block[] platformss = {new block(500,600,100,50), new block(200,550,100,50)};
  gameMap(coins, platforms){
    
  }
  
  void draw(){
	  
	  
    //coin colors
    stroke(200);
    fill(color(100,100,0));
    
      //wall colors
    stroke(200);
    fill(100);
    
    
    for (int i=0; i<platforms.length; i++){
      int[] d = platforms[i].getLocation();
      int[] bS = platforms[i].getSize();
      
      rect(d[0], d[1], bS[0], bS[1]);//x,y,xSize,ySize
    }
}}

// coin class
class coin{
  int x = 0;
  int y = 0;
  boolean collected = false;
  coin(int xpos, int ypos){
    x = xpos;
    y = ypos;
  }
}
class block{
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

boolean coinsA=true;
boolean platformA=false;
boolean finalA=false;

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
