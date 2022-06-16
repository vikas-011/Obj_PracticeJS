let obj={};
let str="madras";

for(let i=0;i<str.length;i++){
  if (obj[str[i]]==undefined){
    obj[str[i]]=1
  }
  else{
    obj[str[i]]++
  }
}
let count=0;
for(let key in obj){
  if(obj[key]==2){
    count=count+Number(obj[key]);
  }
}
console.log(count)