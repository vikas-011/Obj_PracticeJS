
let classes = ['Class-V', 'Class-VI', 'Class-VII', 'Class-VIII']
let values = [1,2 ,3,4]
// let values = ["1 ♥","2 ♥","3 ♥","4 ♥"]

let obj={};
for(let i=0;i<classes.length;i++){

  obj[classes[i]]=values[i];
}
console.log(obj,"♥")
