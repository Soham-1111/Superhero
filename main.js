canvas= new fabric.Canvas("myCanvas");

block_width=30;
block_height=30;

player_y=10;
player_x=10;

player_img="";

block_img="";

function player_update(){

    fabric.Image.fromURL("player.png", function(Img){
        player_img=Img;
        player_img.scaleToWidth(150);
        player_img.scaleToHeight(140);
        player_img.set({
            top:player_y,
            left:player_x

        });
        canvas.add(player_img);
    })
}

function block_update(getimage){

    fabric.Image.fromURL(getimage, function(Img){
        block_img=Img;
        block_img.scaleToWidth(block_width);
        block_img.scaleToHeight(block_height);
        block_img.set({
            top:player_y,
            left:player_x

        });
        canvas.add(block_img);
    })
}

window.addEventListener("keydown", my_keydown);

function my_keydown(e){
   keypress=e.keyCode;
   if( e.shiftKey ==true && keypress =='80'){
       console.log("p and shift key are pressed");
       block_width= block_width+10;
       block_height= block_height+10;
       document.getElementById("current_width").innerHTML=block_width;
       document.getElementById("current_height").innerHTML=block_height;


   }
   if( e.shiftKey ==true && keypress =='77'){
    console.log("m and shift key are pressed");
    block_width= block_width-10;
    block_height= block_height-10;
    document.getElementById("current_width").innerHTML=block_width;
    document.getElementById("current_height").innerHTML=block_height;


}
 
if(keypress=='38'){
    console.log("up is pressed");
     up();
}
if(keypress=='40'){
    console.log("down is pressed");
     down();
}
if(keypress=='37'){
    console.log("left is pressed");
     left();
}
if(keypress=='39'){
    console.log("right is pressed");
     right();
}
if(keypress=='70'){
    console.log("f is pressed");
     block_update("ironman_face.png");
}
if(keypress=='66'){
    console.log("b is pressed");
     block_update("spiderman_body.png");
}
if(keypress=='76'){
    console.log("l is pressed");
     block_update("hulk_legs.png");
}
if(keypress=='82'){
    console.log("r is pressed");
     block_update("thor_right_hand.png");
}
if(keypress=='72'){
    console.log("h is pressed");
     block_update("captain_america_left_hand.png");
}

}
