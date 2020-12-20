
var readline= require("readline-sync")
var chalk= require("chalk")
console.log(chalk.blue("*****************"))
var userName=readline.question(chalk.red("what is your name?"))
console.log(chalk.blue("*****************"))

var dob=readline.question(chalk.red(userName+",what is your date of birth in dd/mm format?"));
console.log(chalk.blue("*****************"))
var date= dob.substr(0,2)

var prime= true;
function primeDetector(date){
  if(date==="01"){
prime = false;
   console.log("yes")
   }
  else{
  for(i=2;i<date;i++){
    if(date%i===0){
   prime = false;
     
     
    break;
    }
  }}
  
}
primeDetector(date)
if(prime){
  console.log(chalk.red(userName+", you are born on a prime date!!!!"))
}
else{
  console.log(chalk.red(userName+", you are not born on a prime date"))
}
console.log(chalk.blue("*****************"))
