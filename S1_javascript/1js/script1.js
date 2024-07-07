//For Loop
for (var i = 0; i < 12; i++) {
  console.log(i);
}

arr = [1, 2, 3, 4, 5];

arr.forEach((element, index) => {
  console.log(element + 2, index);
});

obj = { name: "Vishwajit", age: "24" };

for (var value in obj) {
  console.log(value, obj[value]);
}
