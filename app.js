// task - 1
// let burgerPrice = 220 ;
// let coke
// if( burgerPrice > 500 ){
//     coke = 0 ;
//     console.log("Tomar jonno coke free") ;
// }
// else{
//     coke = 30 ;
//     console.log("Coke Kine Khaa") ;
// }

// coke = burgerPrice > 500 ? 0 : 30 ;
// console.log(coke) ;



// task- 2 
// let height = 1.5748 ;
// let weight = 56 ;
// let BMI = (weight/(height*height)) ;
// console.log(BMI) ;
// if(BMI < 18.5){
//     console.log("underweight") ;
// }
// else if( BMI >= 18.5 && BMI <= 24.9){
//     console.log("Perfect Weight") ;
// }
// else if( BMI >= 18.5 && BMI <= 24.9){
//     console.log("Perfect Weight") ;
// }
// else if( BMI >= 25 && BMI <= 29.9){
//     console.log("Over Weight") ;
// }
// else{
//     console.log("Obese") ;
// }



// task-3
// let score = 95 ;
// let result ;
// if(score >= 90){
//     result = "A" ;
// }
// else if(score <= 89 && score >= 80){
//     result = "B" ;
// }
// else if(score <= 79 && score >= 70){
//     result = "C" ;
// }
// else if(score <= 69 && score >= 60){
//     result = "D" ;
// }
// else{
//     result = "Fail"
// }
// console.log(result) ;



// task - 4 
// let myScore = 95 ;
// let friendScore = 35 ;
// if( myScore > 80 ){

//     if( friendScore > 80 ){
//         console.log("Go to Lunch Together")
//     }
//     else if( friendScore < 80 && friendScore >= 60){
//         console.log("Good luck next time")
//     }
//     else if( friendScore < 60 && friendScore >= 40){
//         console.log("Keep your friend's message unseen")
//     }
//     else{
//         console.log("Block your friend")
//     }

// }
// else{
//     console.log("Go home and sleep") ;
// }



// task - 5 
// let num1 = 4 ;
// let num2 = 40 ;
// let result ;
// if( num1 > num2 ){
// result = num1 * 2 ;
// }
// else{
//     result = num1 + num2 ;
// }
// console.log(result) ;

// result = num1 > num2 ? num1 * 2 : num1 + num2 ;
// console.log("with ternary result = ", result );





// task - 6 
let age = 5 ;
let student = false ;
let ticket = 800 ;
if( age < 10 ){
    ticket = 0 ;
    console.log("Free") ;
}
else if( age >= 60 ){
    // 15% discount 
    let discount = ticket * 15 / 100 ;
    ticket = ticket - discount ;
    console.log("With 15% Discount Ticket = ", ticket ) ;
}
else if( student ){
  // 50% discount 
  let discount = ticket * 50 / 100 ;
  ticket = ticket - discount ;
  console.log("With 50% Discount Ticket = ", ticket ) ;
}
else{
    console.log("No Discount mama, Ticket = ", ticket );
}


