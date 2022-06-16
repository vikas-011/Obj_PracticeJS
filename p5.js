function identifyPrime(num){
  let factor=0;//already Declare value is not found.
  for (let i=0;i<=num;i++){
    if(num%i==0){

//vale is cpmletely divisible by num(30 is range 1 to 30) here the competely  divisible by num or itself that means the no is prime number other than not a prime number.
     
      factor++;//increase value by 1 
    }
  }
  if(factor==2){//the condition is true yes prime here!
    console.log(num,"is prime")
  }
  else{// otherwise not Prime!
    console.log(num,"is not prime")
  }
}
identifyPrime(11)
