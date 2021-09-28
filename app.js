const quizData = [
    {
        question: "What is the most used programming language in 2019?",
        a: "Java",
        b: "C",
        c: "Python",
        d: "JavaScript",
        correct: "d",
    },
    {
        question: "Who is the President of US?",
        a: "Florin Pop",
        b: "Donald Trump",
        c: "Ivan Saldano",
        d: "Mihai Andrei",
        correct: "b",
    },
    {
        question: "What does HTML stand for?",
        a: "Hypertext Markup Language",
        b: "Cascading Style Sheet",
        c: "Jason Object Notation",
        d: "Helicopters Terminals Motorboats Lamborginis",
        correct: "a",
    },
    {
        question: "What year was JavaScript launched?",
        a: "1996",
        b: "1995",
        c: "1994",
        d: "none of the above",
        correct: "b",
    },
];
const answers = document.querySelectorAll('.answers')
const scoreQuiz =document.getElementById('scoreQuiz')
const a_text =document.getElementById('a_text')
const b_text =document.getElementById('b_text')
const c_text =document.getElementById('c_text')
const d_text =document.getElementById('d_text')
const questionEl=document.getElementById('question')
const submit = document.getElementById('submit')
let currentQuestion = 0;
const answer=undefined;
var score=0;


quiz();


function quiz(){
deselected()


  const currentQuizData = quizData[currentQuestion];
  questionEl.innerText=currentQuizData.question;

  a_text.innerText=currentQuizData.a
  b_text.innerText=currentQuizData.b
  c_text.innerText=currentQuizData.c
  d_text.innerText=currentQuizData.d




}


function deselected(){
    answers.forEach((ans)=>{

       ans.checked=false;
    })


}




function getSelected(){
   
    let answer = undefined;
  answers.forEach((ans)=>{

      if(ans.checked){
        answer = ans.id;
      }
  })

  return answer

}







submit.addEventListener('click',()=>{

    const getAnswer=getSelected();

    if(getAnswer){

        if(getAnswer==quizData[currentQuestion].correct){
            score++
        }


        currentQuestion++;
    
        if(currentQuestion < quizData.length){
            quiz();
    
        }
        else{
            scoreQuiz.innerHTML=`<h1 class="score">You answered correctly <span> ${score} / ${quizData.length} </span> questions.</h1>
            <button onclick="location.reload()">Back</button>
            `

        }
    

    }
    
   
})
