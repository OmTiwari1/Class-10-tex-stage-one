var weight =[90,100,150,125,30]
function setup() 
{
average()
console.log(weight)
  createCanvas(400,400);
}
function average(){
var sum=weight[0]+weight[1]+weight[2] +weight[3]+weight[4]
var avg=sum/weight.length
console.log(avg)
}

function draw() 
{
background(51);

}

