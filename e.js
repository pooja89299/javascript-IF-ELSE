const j=require("readline-sync")
var shop=j.question("enter the shop:")
if (shop=="first shop"){
    var product=j.question("enter the product:")
    if (product=="biscuit"){
        console.log("biscuit is  aveble")
}   else if (product=="chocolate"){
    console.log("chocolate is aveble")
}else{
    console.log("take anythning")
}
}else if(shop=="second shop"){
    var item=j.question("enter the item")
    if (item=="chip"){
        console.log("chips is the aveble")
    }else{
        console.log("ok you take anythining")
    }
}else{
    console.log("ok you go to home")
}



