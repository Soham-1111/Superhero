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