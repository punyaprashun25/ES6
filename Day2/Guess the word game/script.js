let startBtn = document.getElementById("start");
let quesBox = document.querySelector(".question-box");
let question = document.querySelector(".question");
let inputBox = document.querySelector(".input-box");

let remarkBox = document.querySelector(".remark-box");
let remark = document.querySelector(".remark");

let winRemark = "You're Amazing!! This is the correct answer.";
let lossRemark = "Opps! Wrong answer...Try again";
submit = document.querySelector("#submit");

let questions = [
    {
        question : "yphotn",
        answer : "python"
    },
    {
        question : "hpp",
        answer : "php"

    },
    {
        question : "ubry",
        answer : "ruby"
    },
    {
        question : "plre",
        answer : "perl"

    },
    {
        question : "itfws",
        answer : "swift"

    },
    {
        question : "trus",
        answer : "rust"
    }
];

let randomQues = () =>{
    let index = Math.floor(Math.random()*questions.length);
    return questions[index];
}

startBtn.addEventListener("click", () => {
    let randomQuestion = randomQues();
    quesBox.style.display = "grid";
    inputBox.style.display = "block";
    startBtn.style.display = "none";
    
    submit.style.display = "block";
    question.innerHTML = randomQuestion.question;
    
    submit.addEventListener("click",()=>{
        let answer = document.querySelector("#answer");
        console.log(answer.value, randomQuestion.answer);
        if(answer.value==randomQuestion.answer)
        {
            
            remarkBox.style.display = "grid";
            remark.innerHTML = winRemark;
        }
        
    
    })
    
});