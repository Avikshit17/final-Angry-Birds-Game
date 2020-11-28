class Parent{
    constructor(x,y,w,h){
        var option={
            restitution:0.8
        }
     this.body=Bodies.rectangle(x,y,w,h,option);
     this.image=loadImage("sprites/base.png")
      World.add(world,this.body);
      this.width=w
      this.height=h
    }  
    display()
    {
        push();
        translate(this.body.position.x,this.body.position.y)
         rotate(this.body.angle)
        imageMode(CENTER);
        image (this.image,0,0,this.width,this.height);  
        pop(); 
    }
}
