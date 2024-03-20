function Factorial(num)
{
    if(num<0) return false;
    let result = 1;
    for(let i = 2; i<=num; i++)
        result*=i;
    return result;
}
// driver code

for(let i = -2; i<10; i++)
{
    console.log(Factorial(i));
}