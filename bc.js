const readlineSync = require('readline-sync');


function isDiferent(number)
{
  for (let i = 0; i < number.length; i++)
  {
    for (let j = i + 1; j < number.length; j++)
    {
      if (number[i] == number[j])
      {
        return false;
      }
    }
  }
  return true;
}

function randomNumber()
{
  let number;
  do{
    number = (Math.floor(Math.random() * 1000) + 1000).toString();
  }while(!isDiferent(number));

  return number;
}

function check(number, userNumber)
{
  let cow = 0, bull = 0;
  for (let i = 0; i < number.length; i++)
  {
    for (let j = 0; j < number.length; j++)
    {
      if (number[i] == userNumber[j] && i == j) {bull++;}
      if (number[i] == userNumber[j] && i != j) {cow++;}
    }
  }
  console.log('Корів ' + cow + ' Биків ' + bull + '\n');
  return bull;
}

let number = randomNumber();
do
{
  const userNumber = readlineSync.question('Enter the number ');
  var bull = check(number, userNumber);
}while(bull < 4)

console.log('You win');