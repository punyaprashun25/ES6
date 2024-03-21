let startBtn = document.getElementById("start");
let quesBox = document.querySelector(".question-box");
let question = document.querySelector(".question");
let inputBox = document.querySelector(".input-box");

let remarkBox = document.querySelector(".remark-box");
let remark = document.querySelector(".remark");

let winRemark = "You're Amazing!! This is the correct answer.";
let lossRemark = "Opps! Wrong answer...Try again";
let exitBtn = document.querySelector("#exit");
let submitBtn = document.querySelector("#submit");
let continueButton = document.querySelector("#continue");

let questions = [
    {
        question: "yphotn",
        answer: "python"
    },
    {
        question: "hpp",
        answer: "php"

    },
    {
        question: "ubry",
        answer: "ruby"
    },
    {
        question: "plre",
        answer: "perl"

    },
    {
        question: "itfws",
        answer: "swift"

    },
    {
        question: "trus",
        answer: "rust"
    }
];

let randomQues = () => {
    let index = Math.floor(Math.random() * questions.length);
    return questions[index];
}

startBtn.addEventListener("click", () =>
{
    console.log("1st part")
    let randomQuestion = randomQues();
    question.innerHTML = randomQuestion.question;
    quesBox.style.display = "grid";
    inputBox.style.display = "block";
    startBtn.style.display = "none";
    submitBtn.style.display = "block"
    // submit button event
    submitBtn.addEventListener("click", () => {
        console.log("2nd part")
        let answer = document.querySelector("#answer");
        if (answer.value == randomQuestion.answer) {
            console.log("if block")
            remarkBox.style.display = "grid";
            remark.innerHTML = winRemark;
            submitBtn.style.display = "none";
            continueButton.style.display = "block";
            exitBtn.style.display = "block";
            
            continueButton.addEventListener("click", () => {
                remarkBox.style.display = "none";
                exitBtn.style.display = "none";
                continueButton.style.display = "none"
                submitBtn.style.display = "block"
                answer.value = "";
                randomQuestion = randomQues();
                question.innerHTML = randomQuestion.question;
                
            });
            console.log("After continue button")
            exitBtn.addEventListener("click", () => {
                remarkBox.style.display = "none";
                exitBtn.style.display = "none";
                quesBox.style.display = "none";
                answer.value = "";
                inputBox.style.display = "none";
                continueButton.style.display = "none";
                startBtn.style.display = "block";
            })
            console.log("After exit button");
        }
        else
        {
            remarkBox.style.display = "grid";
            remark.innerHTML = lossRemark;
            submitBtn.style.display = "none";
            continueButton.style.display = "block";
            exitBtn.style.display = "block";

            continueButton.addEventListener("click", () => {
                remarkBox.style.display = "none";
                exitBtn.style.display = "none";
                continueButton.style.display = "none"
                submitBtn.style.display = "block"
                answer.value = "";
                
            });
            console.log("After continue button")
            exitBtn.addEventListener("click", () => {
                remarkBox.style.display = "none";
                exitBtn.style.display = "none";
                quesBox.style.display = "none";
                answer.value = "";
                inputBox.style.display = "none";
                continueButton.style.display = "none";
                startBtn.style.display = "block";
            })
        }
        console.log("After submit button");
    })
    console.log("after start button");
});