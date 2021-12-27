// const t=require("readline-sync")
// var use=t.question("enter a numbers")
// var use1=t.question("enter the number")
// var symbol=t.question("enert the symbol")
// if (symbol=="*"){
//     console.log(use+use1+symbol)
// }else if (symbol=="+"){
//     console.log(use1+use+symbol)
// }else{
//     console.log("noth")
// }

























// var n=require("readline-sync")
// var num=n.questionInt("enter a number")
// var i=0
// do{
// if(num%2==0){
//   console.log("even number",num)
// }else{
//     console.log("odd number",num)
// }
// i++
// }
// while (i < num.length)









// const n=require("readline-sync");
// var num=n.questionInt("enter number: ");
// let i=2
// var count=0;
// while (i<num) {
//     if (num%i===0){
//     count=count+1
//     }
//     i++;
// }

// if (count===0) {
// console.log("prime number",num)
// }
// else {
// console.log("not prime number",num)
// }



// const n=require("readline-sync")
// var num=n.questionInt("enter a number")
// // let i=2
// var count=0
// var i=0
// do{
//     i++
//     if (i%num===0){
//     count=count+1
//     // i++
//     }
    
// while (i<=num)
// }
// if (count===0){
//     console.log("prime number",num)
// }
// else{
//     console.log("not prime number",num)
// }










// var num=5
// var fact=1
// var i=1
// while (i<=num){
//     fact=fact*i
//     i++
// }
// console.log(fact)





// var n=require("readline-sync")
// var num=n.questionInt("enter a number how many loop:")
// var i=0
// var sum=0
// while (i<num){
//     var num1=n.questionInt("enter a number:")
//     sum+=num1
//     i++
// }
// console.log(sum)









// var i=0
// while (i<10){
//     i++
//     if (i==2 || i==5){
//         continue
//     }
//     console.log(i)
    
// }















// var i=0
// while (i<10){
//     i++
//     console.log(i)
   
// }





// var i=1
// while (i<=100){
//     if (i%7==0){
//         console.log(i)
//     }
//     i++

// }







// const n=require("readline-sync")
// var num=n.question("enter the number:")
// const store=num
// var string="" 
// var i=num.length-1
// while (i>=0){
//     string=string+num[i]
//     i--
// }
// if (store===string){
//     console.log("it's palindrome radar")
// }else{
//     console.log("it's not  palindrome radix")
// }








// var i=1
// var sum=0
// while (i<=10){
//     var n=require("readline-sync")
//     var num=n.questionInt("enter a number:")
//     sum=sum+num
//     i++
// }
// console.log("tatal sum:",sum)




// Then for example 10+16+9+10+56+78+98+43+21+76.. Total










// var i=1
// var sum=0
// while (i<=100){
//     sum=sum+i
//     i++
// }
// console.log(sum)








// const n=require("readline-sync")
// let num=n.question("neter a number tebal:")
// let num1=n.question("number a number kaha se kaha thak:")
// var i=1
// while (i<=num){
//     var j=1
//     while (j<=num1){
//         console.log(i,"*",i,"=",j*i)
//         j++
//     }
//     // console.log("---------")
//     i++
// }









// var n=require("readline-sync")
// var num=-n.questionInt("enter a number:")
//     if (num>0){
//         console.log("positive",num*-1)
//     }
//     else{
//         console.log("negative",num*-1)
//     }





// Notice how the 
// first number is
//  positive, the 
//  second number
// negative, then
// the positive
// number and 
// then the negative
// number. Pattern 
// means positive (+) number, negative (-) number,
// positive (+) number, negative (-) number etc. And
// remember that we can make
// any number negative of any
//  number by multiplying
// it by -1.










// for (let i=1; i<5;i++){
// if (i>0){
//     console.log("positive",i*-1)
// }
// else{
//     console.log("negative",i)
// }
// }







// var i=1
// while (i<=20){
//     if (i%3==0 && i%7==0){
//         console.log("Navgurukul")
//     }
//     else if (i%3==0){
//         console.log("Nav")
//     }
//     else if (i%7==0){
//         console.log("gurukul")
//     }else{
//         console.log(i)
//     }
//     i++
// }






// Write a program where it 
// will do the following things 
// with 1 to 20 numbers:
// When number is divisible by 3 
// print “Nav”
// When number is divisible by 7
//  print “Gurukul”
// The numbers which is divisible by 
// 3 and 7 print “NavGurukul”
// If it is not coming in any case above
//  print number only.








// for (var i=1;i<=20;i++){
// if (i%3===0 && i%7===0){
// console.log("Navgurukul")
// }
// else if (i%3===0){
// console.log("Nav")
// }
// else if (i%7===0){
// console.log("gurukul")
// }
// else{
// console.log(i)
// }
// }









// const num=require("readline-sync")
// var n=num.questionInt("enter a number")
// var n=5
// var string=""
// var i=1
// while (i<n){
//   var j=1
//   while (j<n){
//   string+=i
//   j++
    
//   }
//   string+="\n"
//   i++
  
// }
//  console.log(string)


// const a=require("readline-sync")
// var b=a.questionInt("enter a number:")
// // var b=5
// var string=""
// for (var i=1;i<=b;i++){
//   for (var j=1; j<=b;j++){
//     string+=i
//   }
//   string+="\n"

// }
// console.log(string) 














// var i=1
// while (i<=5){
//     console.log(i*2)
//     i++
// }





// var i =156;
// while (i<166){
// console.log(i-155);
// i+=1
// }






// var i=1
// while (i<=10){
//     console.log(6*i)
//     i++
// }









// i=65
// while i<=90:
//     print(i,"","=",chr(i))
//     i+=1






// var i=96
// while (i<=95){
//     console.log(i,"","=")
//     i++
// }  











// let n=require("readline-sync");
// let choose_ascii=(n.questionInt("enter number: "));
// var ascii_char=97+choose_ascii
// for (var i=97;i<=ascii_char;i++) {
//     const string=choose_ascii.charCodeAt(i)
//     console.log(string);
//     // console.log()
// }


// i=97
// console.log(charCodeAt(i));

// const string=n.question("enter")
// const result=string.codePointAt(0)
// console.log(result);















// var c=require("readline-sync")
// var loop_time=c.questionInt("enter a loop time:")
// var maxi=0
// var list=[]
// for (var i=1;i<=loop_time;i++){
//     var num=c.questionInt("enter a number:")
//     list.push(num)
// }
// var maxi=list[0]
// for (var j=1;j<=loop_time;j++){

// }
// console.log(maxi)





// const a=require("readline-sync")
// var num1=a.questionInt("enter a number")
// var num2=a.questionInt("enter numbetr")
// var opr=a.question("enter the opr")
// switch (opr){
//     case "+":
//         result=parseFloat(num1)+parseFloat(num2);
//         console.log(`${num1}+${num2}=${result}`)
//         break;
//     case "-":
//         result=parseFloat(num1)-parseFloat(num2);
//         console.log(`${num2}-${num1}=${result}`)
//         break;
//     case "/":
//         result=parseFloat(num1)/parseFloat(num2);
//         console.log(`${num1}/${num2}=${result}`)
//         break;
//     case "*":
//         result=parseFloat(num1)*parseFloat(num2);
//         console.log(`${num2}*${num1}=${result}`)
//         break;

//     default:
//         console.log("nothnig")


// }




// var a=4+5
// console.log(a)








// let firstName = "John";
// let lastName = "Doe";
// let text = `Welcome ${firstName}, ${lastName}!`;
// console.log(text)






// let price = 10;
// let VAT = 0.25;

// let total = `Total: ${(price * (1 + VAT)).toFixed(2)}`;



// var a=require("readline-sync");
// var loop_time=a.questionInt("enter loop time: ");
// var list=[]
// for (var i=1;i<=loop_time;i++){
// var num=a.questionInt("enter number: ")
//     list.push(num)
// console.log(list)

// var max=[0]
// for (var i=1;i<list.length;i++){
// if(list[i]>max){
//     max=list[i]
// }
// }
// }
// console.log(max)









// for(var n=9;n>0;n--){
//     console.log(n)
//  }



//  var i=10
//  while (i>=1){
//     //  i--
//     //  console.log(i)
//      i--
//  }  








// n=int(input("enter the number"))
// l=int(input("enter the number"))
// if n>0:
//     print(n,"*",n,"=",n*n)
//     print("its Positive")
// else:
//     print("Negative",n)




// var n=require("readline-sync")
// var num1=n.questionInt("enter a number1")
// if (num1>0){
//     console.log(num1,"*",num1,"=",num1*num1)
//     console.log("its positive")
// }else{
//     console.log("Negative",num1)
// }



// var a=[1,2,3,4,]
// console.log(a*2)






// var s=require("readline-sync")
// var num=s.quetionInt("enter a number")
// var i=0
// var sum=0
// do{
//     var num1=s.quetionInt("enter a number")
//     sum=sum+num1
//     i++
//     console.log(sum)
// }
// while (i<num)