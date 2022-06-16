function mapSymbols(value) {
  let str = "!@#$%^&*";
  let obj = {};
  for (let i = 0; i < str.length; i++) {
    obj[str[i]] = value;
    value = value + 2;
  }
  for (let key in obj) {
    console.log(key + "-" + obj[key])
  }
}
mapSymbols(10)