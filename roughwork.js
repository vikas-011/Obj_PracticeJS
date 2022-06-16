function max(){
let obj = {
  a : 25,
  b : 30,
  c : 14,
  d : 32
};


let max = -Infinity;
for(let i in obj)
{
  if(max<obj[i])
  {
    max = obj[i];
  }
}

console.log(max);
};
max()