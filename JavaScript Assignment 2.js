
console.log('**Program to find the type of triangle**')
let s1 =2;
let s2= 3;
let s3= 4;


if (s1 === s2 && s2 === s3 && s3 === s1) {
    console.log('The given triangle is Equilateral Triangle');
}
else if
    (s1 === s2 || s2 === s3 || s3 === s1) {
        console.log('The given trinagle is Iscoceles Triangle');
    }
else {
        console.log('The given triangle is Scalene Triangle');
    }


console.log('**Program to find the student grade**');
let studentMark=69;
console.log('The mark of the student is',+studentMark);
switch(true){
    case studentMark>90:
        console.log('Grade S');
        break;
    case studentMark>80:
        console.log('Grade A');
        break;
    case studentMark>70:
        console.log('Grade B');
        break;
    case studentMark>60:
        console.log('Grade C');
        break;
    case studentMark>50:
        console.log('Grade D');
        break;
    case studentMark>40:
        console.log('Grade E');
        break;
    case studentMark<40:
        console.log('Student has failed')    
    default:
        console.log('Invalid Marks')   
        break; 
}

console.log('**Program to find the sum of 3 and 5 within 1000**');
maxNum=1000;
let sum=0;
for(i=0;i<maxNum;i++){
    if(i%3===0 || i%5===0){
        sum=sum+i;
    }
}
console.log('The sum of numbers multiple of 3 & 5 within %i is %i',maxNum,sum);


console.log('**Program to find the factorial of numbers within a given range**');
let lowerLimit = 2;
let upperLimit = 20;
findPrimeNumbers(lowerLimit,upperLimit);

function findPrimeNumbers(lowerLimit,upperLimit){
console.log('Upper Limit', upperLimit);
console.log('Lower Limit', lowerLimit);
let counter=1;
for (let i = lowerLimit; i <= upperLimit; i++) {
    flag = 0;
    if(i===0 || i===1){
        continue;
    }
    for(let j=2;j<i;j++){
        if(i%j===0){
            flag=1;
            break;
            //console.log(i);
        }
    }
    if(flag===0){
        console.log("Prime number "+counter+" is ",i)
        counter++;
        findFactorial(i);
    }
}
}

function findFactorial(numFact){
    //console.log('**Program to find the factorial of a given number invoked**')
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
    console.log('The factorial of',givenNumber,'is',factorialValue)
    return factorialValue;
    }


