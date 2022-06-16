function find(arr) {


  let obj = {}
  for (let i = 0; i < arr.length; i++) {//loop arr.length
    if (obj[arr[i]] == undefined) {
      obj[arr[i]] = 1;
    } else {
      obj[arr[i]]++;
    }

  }
  for (let key in obj) {
    console.log(key, "-", obj[key])
  }
}
find([1, 1, 2, 2, 3, 3, 4, 5])