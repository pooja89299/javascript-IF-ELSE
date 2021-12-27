var input=require("readline-sync")
const x=require("readline-sync")
var a=x.question("enter the number")
var b=x.question("enter the number")
if(a >b){
    console.log(a," is greater than ",b);
}
else if (b>a) {
    console.log(b," is greater than " ,a);
}else{
    console.log("both are equal")
}