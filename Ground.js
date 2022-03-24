class Ground {
    constructor(x,y,image1){
        this.image = image1;
        this.x = x;
        this.y = y;
        this.sprite;
    }

    display(){
        this.sprite = createSprite(this.x,this.y,50,50);
        this.sprite.addImage(this.image);
        car1.collide(this.sprite);
        this.sprite.scale = 2.5;
    }
}