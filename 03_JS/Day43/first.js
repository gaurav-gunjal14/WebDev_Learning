// const original_answers = ["Sachin Tendulkar", "West Indies", "10", "Sachin Tendulkar", "11"];

const original_answers = {
    q1: "Sachin Tendulkar",
    q2: "West Indies",
    q3: "10",
    q4: "Sachin Tendulkar",
    q5: "11"
};



const form = document.querySelector("form");
form.addEventListener("submit", (event) => {

    event.preventDefault(); // Prevent the default form submission behavior
    const data = new FormData(form);

    // const answer = Array.from(data.values());
    
    // let result = 0;

    // for(let i=0; i< original_answers.length; i++){
    //     if(answer[i]=== original_answers[i]){
    //         result++;
    //     }
    // }

    let result = 0;

    for(let [key, values] of data.entries()){
        if(values === original_answers[key]){
            result++;
        }
    }
    const out = document.getElementById("out");
    out.innerText = `${result} out of 5`;

})