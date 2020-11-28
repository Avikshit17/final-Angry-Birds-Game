class Stick extends Parent{
    constructor(x,y,h,a){
        super(x,y,20,h)
        Matter.Body.setAngle(this.body,a)
        this.image=loadImage("sprites/wood2.png")
    }
   
}