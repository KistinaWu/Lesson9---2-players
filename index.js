
// let definedName = prompt('Enter your name?')


// let randomName = ['Zoe', 'Anna', 'Georgia', 'Lily', 'Ella'];
// let pickedRandomName = randomName[Math.floor(Math.random() * 4 + 0)];
// console.log(pickedRandomName)


// if (definedName == ''){
//   console.log('Welcome ' + pickedRandomName + ' to the Number Guessing Game!')
//   }else{
//   console.log('Welcome ' + definedName + ' to the Number Guessing Game!')
//   }



let round = 1;
let pointPlayer1 = 0;
let pointPlayer2 = 0;

random = Math.floor(Math.random() * 20 + 1);

//do all of these below while the total round is up 6, which allows 3 chances for each player to guess the number. 
do{
  guessPlayer1 = prompt('Player1 Enter your guess:')
  if (guessPlayer1 > random) {
      console.log('Enter a smaller number');
      
    } else if (guessPlayer1 < random) {
      console.log('Enter a larger number');
     
    } else {
      console.log('You got it correct');
      pointPlayer1++
      console.log('Player1 Current Point: ' + pointPlayer1);
      break;
    }
    round++

guessPlayer2 = prompt('Player2 Enter your guess:')

  if (guessPlayer2 > random) {
      console.log('Enter a smaller number');
     
    } else if (guessPlayer2 < random) {
      console.log('Enter a larger number');
      
    } else {
      console.log('You got it correct');
      pointPlayer2++
      console.log('Player2 Current Point: ' + pointPlayer2);
      break;
    }
     round++

}while (round <= 6)

