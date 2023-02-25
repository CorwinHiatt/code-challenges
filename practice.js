let f0 = 0;
console.log(f0); 

let f1 = 1;
console.log(f1);

for (let i = 2; i < 100; i++) {
  let f = f0 + f1;
  console.log(f);
  f0 = f1;
  f1 = f;
}

console.log(f0)