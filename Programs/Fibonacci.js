function Fibonacci(num)
{
    let a = 0, b = 1;
    if(num<1) return [];
    if(num==1) return [0];
    let result =  [0,1];
    for(let i = 2; i<num; i++)
    {
        result.push(result[i-1]+result[i-2]);
    }
    return result;
}
// driver code

Fibonacci(10).forEach((element)=>{
    console.log(element);
});