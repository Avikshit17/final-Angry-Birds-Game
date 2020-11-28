class Connection{
    constructor(a,b){
        var option={
            bodyA:a.body,
            pointB:b,
            stiffness:0.04,
            length:10
          }
          console.log(b)
         this.body=Constraint.create(option)
         World.add(world,this.body) 
         this.a=a
         this.b=b
         this.sling1=loadImage("sprites/sling1.png")
         this.sling2=loadImage("sprites/sling2.png")
         this.sling3=loadImage("sprites/sling3.png")

    }
    display(){
        image(this.sling1,100,60,40,140)
        image(this.sling2,70,50,40,90)
        if(this.body.bodyA!=null && this.a!=null){
       var a=this.body.bodyA.position
       var b=this.body.pointB
       if(a.x<=110){
        stroke (48,22,8)
        strokeWeight(5)
       line (a.x-10,a.y,b.x-10,b.y)
       line (a.x+10,a.y+10,b.x+20,b.y+10)
       image(this.sling3,a.x-20,a.y-10 ,10,30) 
       }
       else{
        stroke (48,22,8)
        strokeWeight(5)
        line (a.x-10,a.y,b.x-10,b.y)
        line (a.x+10,a.y+10,b.x+20,b.y+10)
        image(this.sling3,a.x+20,a.y-10 ,10,30) 

       }
        }
    }
fly() {
    this.body.bodyA=null
    this.a=null
}
join(bird){
    this.body.bodyA=bird.body
}

}