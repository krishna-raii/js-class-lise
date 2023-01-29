// // let speed = 70
// // let message = (speed>=150 ? 'Too Fast' : (speed >=80 ? 'Fast' : 'Ok'))
// // console.log(message)

// // let month = 3;
// // let monthName;
// // switch(month){
// //   case 1: monthName='Jan';
// //   case 2: monthName= 'Feb';
// //   case 3: monthName= 'March';
// //           break;
// //   case 4: monthName= 'April'
// //   default:
// //           monthName = 'Invalid'
// // }
// // console.log(monthName)

// let year = 2020
// let month = 2
// let dayCount

// switch(month){
//   case 1+1:break;
//   case 3:
//   case 5:
//   case 7:
//   case 8:
//   case 10:
//   case 12:
//     dayCount = 31;
//     break;

//   case 4:
//   case 6:
//   case 9:
//   case 11:
//     dayCount = 30;
//     // break;
//   case 2:
//     dayCount = 28
//     break;
//   default:
//     dayCount = -1 // invalid case
// }

// console.log(dayCount)

// let min = 1
// let max = 10

// let secret = Math.floor(Math.random() * (max-min+1)) + min
// let guessess = 0
// let number = 0
// do{
//   let input = prompt(`Please enter a number between ${min} and ${max}`)
//   number = parseInt(input)
//   guessess+=1

//   if(number > secret){
//     console.log("you guess was greater than the secret")
//   }else
//       if(number < secret){
//         console.log("your guess was less than the secret")
//       }else{
//         console.log("Guess correct! You won the game")
//       }

// }while(number!=secret)

// for(initializer; condition; iterator){

// }

//simple for loop
// for(let i=1;i<=10;i++){
//   console.log(i)
// }

//for loop without the initializer 
// let i=1
// for(;i<=5;i++)
//   console.log(i)
// for(;i<=10;i++){
//   console.log(i)
// }

// for loop without the condition
// for(let i=0;;i+=2){
//   if(i>10){
//     break;
//   }
//   console.log(i)

// }

// for loop without any expression
// let j = 1
// for(;;){
//   if(j>10)
//     break;
//   console.log(j)
//   j+=2
// }
// let i
// for(i=0;i<10;i++);
//   console.log(i)

//break statements
// it is used to terminate a loop prematurely

// label statement
//label: statement

// outerForLoop: for(let i=0;i<5;i++){
//   for(let j=0;j<5;j++){
//     console.log(i+","+j)
//     if(i+j == 4)
//       break outerForLoop;
//   }
// }
// continue -> instead of terminating the loop, it jumps
// to the next iteration

for (let i = 0; i < 10; i++) {
  if (i % 2 == 0)
    continue
  console.log(i)
}