class Bird extends Parent{
    constructor(x,y){
       super(x,y,50,50)
       this.image=loadImage("sprites/bird.png")
       this.image2=loadImage("sprites/smoke.png")
       this.arr=[]
       this.v=255
    }
    display()
    {
       // this.body.position.x=mouseX
       // this.body.position.y=mouseY

        super.display()
        if(this.body.position.x>100 && this.body.velocity.x>10){
            this.arr.push([this.body.position.x,this.body.position.y])
        }
       for(var i=0;i<this.arr.length;i=i+1)
       {
         push ()
         tint (255,this.v)
         image(this.image2,this.arr[i][0],this.arr[i][1])  
         this.v=this.v-0.05
         pop ()
       }
    }
}