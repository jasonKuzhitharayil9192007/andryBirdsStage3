class Chain {



constructor (body1, body2) {
    var options={ //json object
     bodyA:body1,
     bodyB:body2,
     stiffness:0.04,
     length:10
        
    };
this.chain=Constraint.create(options);
World.add(world,this.chain);


}
display(){
    var positionA = this.chain.bodyA.position;
    var positionB = this.chain.bodyB.position;
    strokeWeight(4);
    line(positionA.x,positionA.y,positionB.x,positionB.y);
}

}