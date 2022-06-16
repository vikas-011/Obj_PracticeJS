// Concatenate all character which appear once
function concatenateAllCharAppearOnce(str){
  let obj={};
  for(let i=0;i<str.length;i++){
    if(obj[str[i]]== undefined){
      obj[str[i]]=1
    }
    else{
      obj[str[i]]++;

    }
  }
  let strCount="";
  for(let key in obj){
    if(obj[key]==1){
      strCount=strCount+key;
    }
  }
  console.log(strCount)
}
concatenateAllCharAppearOnce("madras")