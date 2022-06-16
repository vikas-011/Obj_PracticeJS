let names = ["Nrupul", "Prateek", "Aman", "Albert", "Yogesh"];
let age_data = [32, 30, 26, 28, 44];

let arr=[];

for(let i=0;i<names.length;i++){
  let obj={}

  obj["name"]=names[i];
  obj["age"]=age_data[i];

  arr.push(obj)
}
// console.log(arr)
let bag="";
for(let j=0;j<arr.length;j++){
  if(arr[j]["age"]>30){
    bag=bag+arr[j]["name"]+" ";
  }
}
console.log(bag)