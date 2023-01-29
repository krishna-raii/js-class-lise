//print all odd no upto 10
// let count = 1
// while(count<10){
//   console.log(count)
//   count+=2
// }

// do while

// let count = 0
// do {
//   console.log(count)
//   count++
// }while(count<=10)

//the program  will generate a random number between 5 and 10
// the user has to guess the no
// Math.random -> (0,1) = 0.4*10 = 4
// 0.2*10=2+5=7

// 0.1*10=1+5=6
// to generate a random no between min and max

let min = 1
let max = 10

let secret = Math.floor(Math.random() * (max-min+1)) + min
let guessess = 0
let number = 0
do{
  let input = prompt(`Please enter a number between ${min} and ${max}`)
  number = parseInt(input)
  guessess+=1

  if(number > secret){
    console.log("you guess was greater than the secret")
  }else
      if(number < secret){
        console.log("your guess was less than the secret")
      }else{
        console.log("Guess correct! You won the game")
      }
  
}while(number!=secret)

