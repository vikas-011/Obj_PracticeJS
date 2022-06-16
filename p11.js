// Find the key which has maximum value in an object

function findMaxValue() {
  let obj = {
    a: 25,
    b: 14,
    c: 23,
    d: 52
  };
  let max_pad = -Infinity;
  for (let key in obj) {
    if (obj[key]>max_pad) {
      max_pad = obj[key]
    }
   
  }
   console.log(max_pad)
}
findMaxValue()
