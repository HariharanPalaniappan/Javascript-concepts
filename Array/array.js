let x = [1, 2, 3, 4, [5, 6], 7, 8];
let y = [];
x.forEach((val, key) => {
  if (typeof val === "object") {
    val.forEach((element, test) => {
      let z = val[test];
      y.push(z);
    });
  } else {
    y.push(val);
  }
});
console.log(y);