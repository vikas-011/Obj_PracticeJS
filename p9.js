function occuranceString(str){
  let obj={};
  for (let i=0;i<str.length;i++){
    if (obj[str[i]]==undefined){
      obj[str[i]]=1;
    }
    else{
      obj[str[i]]++;
    }
  }
  //console.log(obj); //o/p:- { m: 1, a: 2, d: 1, r: 1, s: 1 }
  let bag="";//1
  let sum=0;//2
  for(let key in obj ){
    if(obj[key]==1){
      sum=sum+(obj[key])//2 print total of present only one time of string.
      bag=bag+(key)//1 print string is prestent only one time.
    }
  }
  console.log(sum)//o/p:- 4
  console.log(bag)//o/p:-mdrs
  
  
}
occuranceString("madras")