let str="madras"
let obj={};

for(let i=0;i<str.length;i++){
  if (obj[str[i]]==undefined){
    obj[str[i]]=1;
    
  }
  else{
    obj[str[i]]++;
  }
}

// let bag=""
for(let key in obj){
  // if(obj[key]==1){
  // bag=bag+key
   console.log(key,':',obj[key]);
}
  

