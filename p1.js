function mapAgainum(value)
{
  let obj={};
  let str="abcdefghijklmnopqrstuvwxyz";

  let i=0;
  while(i<str.length){
    obj[str[i]]=value;
    value++;
    i++;
  }
  for(let key in obj){
    console.log(key+"-"+obj[key])
  }
}
mapAgainum(50)