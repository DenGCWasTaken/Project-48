class Form{
    constructor(){
        this.title = createElement('h2');
        this.input = createInput("Name");
        this.button = createButton('RACE')
        this.greeting = createElement('h3');
        this.reset = createButton('reset');
    }

    hide(){
        this.greeting.hide();
        this.button.hide();
        this.input.hide();
        this.title.hide();
        //this.reset.hide();
    }

    display(){
        this.title.html("Knight Game");
        this.title.position(11,0);
        this.input.position(150,60);
        this.button.position(210,90);
        this.reset.position(76.5*width/80, height/40);
        this.button.mousePressed(()=>{
            this.input.hide();
            this.button.hide();
            player.name = this.input.value();
            playerCount+=1;
            player.index = playerCount;
            player.update();
            player.updateCount(playerCount);
            this.greeting.html('Hello ' + player.name + '!');
            this.greeting.position(130,30);
            //gameState = 1;
        })
        this.reset.mousePressed(()=>{
            player.updateCount(0);
            game.update(0);
        })
    }
}