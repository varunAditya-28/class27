class Chain {
constructor(bodyA,bodyB){
  var options={
  bodyA : bodyA,
  bodyB : bodyB,
  length : 250,
  stiffness : 0.7
 } 
 this.chain=Constraint.create(options)
 World.add(world,this.chain)
}

display(){
var ptA = this.chain.bodyA.position;
var ptB = this.chain.bodyB.position;
line(ptA.x,ptA.y,ptB.x,ptB.y)
}

}