let N=15;
let obj={};
for(let i=1;i<=N;i++){
  obj[i]=i*i
}
for(let key in obj){
  console.log(key,":",obj[key])
}