function mapNumber(range, value){
let obj ={};//empty object
let i = 1;//initialize by 1.
while (i <= range) {//(start form 1<=5 till condition is true)

  obj[i] = value;//key=value
  value++;//value=value+1
  i++;//i+i+1
}
for (let key in obj) { //run a object loop (key:vale).
  console.log(key+"-"+obj[key]) //print as o/p "key" and value(obj[key])
}
}
mapNumber(5, 10)//call the function here!