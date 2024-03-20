function IsPrime(num)
{
    if(num<2) return false;
    for(let i = 2; i<num; i++)
    {
        if(num%i==0)    return false;
    }
    return true;
}
function PrimeBet(start, end)
{
    let result = [];
    for(let  i = start; i<=end; i++)
    {
        if(IsPrime(i))
            result.push(i);
    }
    return result;
}
// driver code
PrimeBet(0,100).forEach((Element)=>{
    console.log(Element);
})