function mapCharAndSum(N, K, str) {
  let obj = {};
  let alpha = "abcdefghijklmnopqrstuvwxyz";

  for (let i = 0; i < alpha.length; i++) {
    obj[alpha[i]] = N;
    N++;

  }

  let sum = "";
  for (let j = 0; j < K; j++) {

    sum = sum + obj[str[j]];
  }



  console.log(sum);
}
mapCharAndSum(10,3,"aba")