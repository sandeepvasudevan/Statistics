console.log('**Program to find Armstrong Number**')
let givenArmstrongNum=370;
let num=givenArmstrongNum;
sum_armstrong=0;
console.log("The given number is",givenArmstrongNum);
while(num>0){
    lastDigit=num%10;
    num=parseInt(num/10);
    sum_armstrong=sum_armstrong+(lastDigit**3);
}
if(sum_armstrong===givenArmstrongNum){
    console.log('Given number is an Armstrong Number')
}
else{
    console.log('Given number is not an Armstrong Number')
}


console.log('**Program to find Special Number**')
let givenSpecialNum=145;
let num1=givenSpecialNum;
sum_special=0;
console.log('The given number is',givenSpecialNum)
while(num1>0){
    lastDigit=num1%10;
    sum_special=sum_special+findFactorial(lastDigit);
    num1=parseInt(num1/10);
}
if(sum_special===givenSpecialNum){
    console.log('Given number is a Special Number')
}
else{
    console.log('Given number is not a Special Number')
}

console.log('**Program to print number pattern')
let n = 4;
console.log('Number of rows to be printed',n)
let string = "";
let count = 1;
// External loop
for (let i = 1; i <= n; i++) {
  
  for (let j = 1; j <= i; j++) {
    string += count;
    count++;
  }
  string += "\n";

}
console.log(string);



function findFactorial(numFact){
let givenNumber=numFact;
let counter=givenNumber;
let factorialValue=1
if(givenNumber===0 || givenNumber===1){
    factorialValue;
}
else{
    while(counter!==0){
        factorialValue=factorialValue*(counter);
        counter=counter-1;

    }
}
return factorialValue;
}
