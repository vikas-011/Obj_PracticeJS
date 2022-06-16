let alpha = "abcdefghijklmnopqrstuvwxyz";
let str = "madam", k=10;

let obj={};

for (let i=0;i<alpha.length;i++){
  obj[alpha[i]]=k;
  k++;
}
let sum=0
for (let j=0;j<str.length;j++){
  sum=sum+obj[str[j]];
}
console.log(sum)