
let n1 = 0, n2 = 1, nt;

console.log('Fibonacci Series:');

for (let i = 1; i <= 10; i++) {
    console.log(n1);
    nt = n1 + n2;
    n1 = n2;
    n2 = nt;
}