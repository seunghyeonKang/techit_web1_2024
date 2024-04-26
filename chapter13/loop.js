for (var i = 0; i < 10; i++) {
  console.log(i);
}
for (var i = 10; i > 0; i--) {
  console.log(i);
}

for (var i = 0; i < 10; i++) {
  for (var j = 0; j < 10; j++) {
    console.log(`i(${i})-j(${j})`);
  }
}

var flag = 10;

while (flag > 0) {
  console.log(flag);
  flag--;
}

do {
  console.log(flag);
  flag--;
} while (flag > 0);
