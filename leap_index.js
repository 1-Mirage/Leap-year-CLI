function islp(num) {
  
    if (num % 400 === 0)
      return true;
  
    if (num % 100 === 0)
      return false;
  
    if (num % 4 === 0)
      return true;
  
    return false;
  }
var readlineSync = require('readline-sync');
const chalk = require('chalk');
var userName = readlineSync.question('May I have your name? ');
console.log(`Welcome ${userName}`);
var dob=readlineSync.question('May I have your date of birth in format dd-mm-yyyy');
var arr=dob.split('-');
if(arr.length!=3)
console.log(chalk.red("Wrong Input"));
else
{
if(islp(Number(arr[2])))
console.log(chalk.green("Yeah your date of birth is a leap year,you can share the result on social media"));

else
console.log(chalk.red("Not a leap year"));
}