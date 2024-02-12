const value = Math.random(0,9)
const number1 = value * 10
console.log(Math.ceil(number1))

// const sentence1 = prompt("enter long sentence")
// const value1 = prompt("enter the word to cheeck for in the sentence")

function check(sentence,value){
if (sentence.includes(value)){
    alert(value+" is in the sentence")
}
else{
    alert(value+" is not in the sentence")
}
} 

// check(sentence1,value1)
const challenge = "30 Days Of JavaScript"
const new_sentence = challenge.replace("JavaScript","Python")
console.log(new_sentence)