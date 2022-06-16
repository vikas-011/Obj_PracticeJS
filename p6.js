function appearOnce(N, arr){
  let obj={};
  for (let i=0;i<N;i++)
  {
    if (obj[arr[i]]==undefined)
    {
      obj[arr[i]]=1
    }
    else
    {
      obj[arr[i]]++;
    }
  }
  console.log(obj)
let sum=0;
  for(let key in obj)
  {
  if(obj[key]==1){
    sum=sum+Number(key);
  }  
  }
  console.log(sum)
}
appearOnce(7,[1,2,4,2,4,5,1])