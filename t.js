const f=require("readline-sync")
var num=f.question("enter the numbers")
if (num>0){
    console.log("it is positive numbers")
}else if (num<0){
    console.log("it is negitive numbers")
}else{
    console.log("it is zero numbers")
}