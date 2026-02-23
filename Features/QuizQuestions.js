//shows all quiz questions and answers and contains the function to keep score and to randomise the order

const questions = ["Who was the most listened artist in 2017?", "Who performs the song Lean On from 2015?", "What music developed out of the UK rave scene and Jamaican sound system culture?"]

const answers = ["ed sheeran", "dj snake, major lazer", "jungle"]

const scoreKeeper = () => {
    if (userAnswer.toLowerCase() === answers.toLowerCase()) {
        score++
    }
}

const questionPicker = () => {
    return Math.floor(Math.random() * questions.length) 
}

export default {questions, answers, questionPicker, scoreKeeper}