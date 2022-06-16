function mapCharAndSum(value, sec_lup, alpha) {
  let obj = {};
  let str = "abcdefghijklmnopqrstuvwxyz";

  let i=0;
  while(i<str.length){
    obj[str[i]]=value;
    value++;
    i++;
  }

  console.log(obj)
  let sum = 0;
  let j=0;
  while(j<alpha.length){
    sum=sum+obj[alpha[j]]
    j++;
  }

  console.log(sum)

}
mapCharAndSum(10,3,"rrr")