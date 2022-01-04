function preload(){
my_image=loadImage("dog_cat.jfif");
}
function setup(){
canvas=createCanvas(640,420);
canvas.center();
}
function draw(){
image(my_image,0,0,640,420);
fill("red");
text("dog",45,75);
fill("green");
noFill();
stroke("green");
rect(30,60,250,350);
}