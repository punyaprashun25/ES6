function PrimeNumber(num)
{
    if(num<2) return false;
    for(let i = 2; i<num; i++)
    {
        if(num%i==0)    return false;
    }
    return true;
}
// driver code
console.log(PrimeNumber(3));
console.log(PrimeNumber(-2));
console.log(PrimeNumber(1));
console.log(PrimeNumber(0));
console.log(PrimeNumber(2));