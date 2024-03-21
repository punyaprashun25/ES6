const sum = (a, b,...inputs) =>{
    let sum = 0;
    inputs.forEach((Element)=>{
        sum+=Element;
    })
    return sum;
}
console.log(sum(54,64,6,69,98));
console.log(sum(54,64,6));
console.log(sum(54,64));
console.log(sum(54));