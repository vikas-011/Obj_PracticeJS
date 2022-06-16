function product(N)
{
  let obj={};
  for (let i=1;i<=N;i++)
  {
    obj[i]=i*i;
  }
  console.log(obj);
}
// product(15)//call Function here!

// Check Whether Key Exist or not
function checkWeatherKeyExistOrNot(){
let obj={
  a:2,
  b:7,
  c:5
}

key='d'
if(obj[key]==undefined)
{
console.log("Key does not exist");
}
else
{
  console.log("key exist")
}
}  
//checkWeatherKeyExistOrNot()//call function here!


//Program to remove a key from object
function programRemoveKeyFromObj(){

  let obj = {
    a : 1,
    b : 2,
    c : 7
}

k=delete obj['a'];
console.log(k);
}
programRemoveKeyFromObj()//Call Function Here!
