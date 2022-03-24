class Game{
    constructor(){
        //absolutely nothing
    }

    getState(){
        var gameStateRef = database.ref('gameState');
        gameStateRef.on("value", function(data){
            gameState = data.val();
        })
    }

    update(state){
        database.ref('/').update({
            gameState:state
        })
    }

    async start(){
        if (gameState == 0){
            player = new Player();
            var playerCountRef = await database.ref ('playerCount').once("value");
            if(playerCountRef.exists()){
                playerCount = playerCountRef.val();
                player.getCount();
            }
            form = new Form();
            form.display();
        }
        car1 = createSprite(100,200);
        car1.addAnimation("idleRight", knightIdleRight);
        car1.addAnimation("idleLeft", knightIdleLeft);
        car1.addAnimation("jumpingRight", knightJumpingRight);
        car1.addAnimation("jumpingLeft", knightJumpingLeft);
        car1.addAnimation("walkingRight", knightWalkingRight);
        car1.addAnimation("walkingLeft", knightWalkingLeft);
        cars = [car1];

        ground = createSprite(540,8*height/9);
        ground.addImage(groundImage);
        ground.scale = 2.5;

        groundx2 = createSprite(540,10*height/11)
        groundx2.addImage(groundx2Image);
        groundx2.scale = 2.5;

        groundx3 = createSprite(540,12*height/13);
        groundx3.addImage(groundx3Image);
        groundx3.scale = 2.5;

        groundx5 = createSprite(540,14*height/15);
        groundx5.addImage(groundx5Image);
        groundx5.scale = 2.5;

        groundx10 = createSprite(540,16*height/17);
        groundx10.addImage(groundx10Image);
        groundx10.scale = 2.5;

        groundTest.display();
        groundx2Test.display();
        groundx10Test.display();
        car1.collide(groundTest.sprite);

        platform = createSprite(100,100);
        platform.addImage(platformImage);
    }

    play(){
        form.hide();
        Player.getPlayerInfo();
        if(allPlayers !== undefined){
            var index = 0;
            //var x = width/7;
            var y;
            for(var plr in allPlayers){
            index = index+1;
            //x = x+width/7;
            //y = displayHeight-allPlayers[plr].distance;
            //cars[index-1].x = x;
            //cars[index-1].y = y;
                if(index == player.index){
                    cars[index-1].shapeColor = "red";
                    camera.position.x = cars[index-1].x;
                    //camera.position.y = cars[index-1].y;
                }
            }
        }

        car1.collide(ground);
        car1.collide(groundx2);
        car1.collide(groundx3);
        car1.collide(groundx5);
        car1.collide(groundx10);
        car1.collide(platform);

        if(keyDown(UP_ARROW)){
        car1.y = car1.y-40;
        }

        if(keyDown(RIGHT_ARROW)){
            car1.x = car1.x+10;
            console.log(car1.x);
        }

        if(keyDown(LEFT_ARROW)){
            car1.x = car1.x-10;
            console.log(car1.x);
        }

        car1.velocityY = 25;

        //if(keyDown(UP_ARROW) && player.index !== null){
            //player.distance += 10;
            //player.update();
        //}

        if(player.distance > displayHeight*5){
            gameState = 2;
            this.end();
        }
        drawSprites();
    }
    
    end(){
        console.log("GAME OVER!")
    }
}