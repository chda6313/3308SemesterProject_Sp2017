//3 arrays will be created 
//coins=coin
//platforms=block
//goal=final block 
//dynamic arrays utilized 

//'name'[20] + 'comments'[140] field -- 


boolean[] keys = {false, false, false};//b,c,g

//gameMap edit=new gameMap();

//also runs once at the very start of the program
void setup()
{
  background(color(20,40,50)); //color(r,g,b)
  size(800,800);
  frameRate(60);
}


//this is the main function. Will loop for ever
void draw()
{
  background(color(20,150,50)); //draw the background, commenting out this line will draw on top of the previous frame
  //coin[] coins= new coin;

  rect(mouseX, mouseY, 100, 100); // draw at mouse location, with width and height of 
  
}

//keyPressed and keyReleased track keyboard input
//build in functions of processing.js
void keyPressed() {
  if (key=='b') {keys[0]=true;}
  if (key=='c') {keys[1]=true;}
  if (key=='g') {keys[2]=true;}
}
void keyReleased() {
  if (key=='b') {keys[0]=false;}
  if (key=='c') {keys[1]=false;}
  if (key=='g') {keys[2]=false;}
}

void mouseClicked(){
	if (keys[0]){
		//add coin
		fill(255,255,0);
		}
	if (keys[1]){
		//add block
		fill(255,0,255);
		}
	if (keys[2]){
		//change goal
		fill(0,255,255);
		}
	}
