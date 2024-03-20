function digitCount(num)
{
    if(num==0) return 1;
    let length  = 0;
    while(num>0)
    {
        num = Math.floor(num/10);
        length++;
    }
    return length;

    // return Math.floor(Math.log10(num)+1);
}
function IsArmstrong(num)
{
    let length = digitCount(num);
    let temp = num;
    let sum = 0;
    while(num>0)
    {
        let digit = num%10;
        sum += Math.pow(digit,length);
        num = Math.floor(num/10);
    }
    if(temp==sum)
        return true;
    else
        return false;
}
function ArmstrongBetween(start, end)
{
    let result = [];
    for(let i = start; i<=end; i++)
    {
        if(IsArmstrong(i))
            result.push(i);
    }
    return result;
}
// driver code
console.log(IsArmstrong(371));
ArmstrongBetween(0,1000).forEach((element)=>{
    console.log(element);
});