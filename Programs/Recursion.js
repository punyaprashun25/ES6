function sumOfNatural(num)
{
    if(num==0) return 0;
    return num+sumOfNatural(num-1);
}
console.log(sumOfNatural(10));

function factorial(n)
{
    if(n==0 || n==1) return 1;
    return n*factorial(n-1);
}
console.log(factorial(5));
function fib(n)
{
    if(n==0 || n==1) return n;
    return fib(n-1)+fib(n-2);
}

console.log(fib(5));
