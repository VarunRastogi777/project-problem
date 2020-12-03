class Pig{
    constructor(x,y){
        var options={
            density:1
        }
        this.body=Bodies.rectangle(x,y,50,50,options)
        World.add(world,this.body)
    }
    display(){
     
        push()
        rectMode(CENTER)
        translate(this.body.position.x,this.body.position.y)
        rotate(this.body.angle)
        strokeWeight(7)
        stroke("red")
        rect(0,0,50,50)
        pop()
    
    }
    }
    