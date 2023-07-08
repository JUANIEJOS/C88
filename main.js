
// Create canvas variable
var canvas= new fabric.Canvas("myCanvas");
//Set initial positions for ball and hole images.
ball_x=0;
ball_y=0;
hole_x=600;
hole_y=400;

block_image_width = 5;
block_image_height = 5;

function load_img(){
	fabric.Image.fromURL("GOAL.png", function(Img) {
		hole_obj=Img;
		hole_obj.scaleToWidth(50);
		hole_obj.scaleToHeight(50);
		hole_obj.set({
			top:hole_y,
			left:hole_x
		
		});
		canvas.add(hole_obj);
		console.log("added");
	});
	new_image();
}

function new_image()
{ fabric.Image.fromURL("ball.png", function(Img){
	ball_obj=Img;
		ball_obj.scaleToWidth(50);
		ball_obj.scaleToHeight(50);
		ball_obj.set({
			top:ball_y,
			left:ball_x
		});
		canvas.add(ball_obj);
	});
	if((ball_x==hole_x)&&(ball_y==hole_y)){
		canvas.remove(ball_obj);
		console.log("win");
		document.getElementById("hd3").innerHTML="You have hit the goal!";
		document.getElementById("myCanvas").style.borderColor="red";
	
	}

}

window.addEventListener("keydown", my_keydown);

function my_keydown(e)
{
	keyPressed = e.keyCode;
	console.log(keyPressed);
	
		if(keyPressed == '38')
		{
			up();
			console.log("up");
		}
		if(keyPressed == '40')
		{
			down();
			console.log("down");
		}
		if(keyPressed == '37')
		{
			left();
			console.log("left");
		}
		if(keyPressed == '39')
		{
			right();
			console.log("right");
		}
	}
	
	
	function up()
	{if(ball_y>=0){
		ball_y=ball_y-block_image_height;
		canvas.remove(ball_obj);
		new_image()
		console.log(ball_y);
	}
	}

	function down()
	{if(ball_y<=550){
		ball_y=ball_y+block_image_height;
		canvas.remove(ball_obj);
		new_image() 
		console.log(ball_y)}// Write a code to move ball downward.
	}

	function left()
	{
		if(ball_x >5)
		{ball_x=ball_x-block_image_width;
			canvas.remove(ball_obj);
			new_image() 
			console.log(ball_x);
			// Write a code to move ball left side.
		}
	}

	function right()
	{
		if(ball_x <=750)
		{ball_x=ball_x+block_image_width;
			canvas.remove(ball_obj);
			new_image();
			console.log(ball_x);
			// Write a code to move ball right side.
		}
	}
	
