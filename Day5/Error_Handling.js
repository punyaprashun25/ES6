// try{
//     block of try
// }
// catch ( err ){
//     block of codfe to handle error
// }
// finally{
//     block of code that runs independently
// }

try{
    addEventListener("Welcome guest!");
}
catch(err){
    document.getElementById("demo").innerHTML = err.message; 
}