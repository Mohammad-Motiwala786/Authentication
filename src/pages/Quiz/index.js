import axios from 'axios'
import React, { useEffect, useState } from 'react'
import Answer from '../../components/Answer'
import Quetions from '../../components/header/Quetions'

const Quiz = ({ onFinish,onResult }) => {
    const [questions, setQuestions] = useState(null);
    const [count, setCount] = useState(0);
    const [score, setScore] = useState(0);

    useEffect(() => {
        const getAPI = () => {
            axios.get("https://opentdb.com/api.php?amount=10&category=18&difficulty=easy&type=multiple")
                .then(res => setQuestions(res.data.results))
                .catch(error => console.log(error));
        }
        if (!questions) {
            getAPI();
        }
        console.log(questions);
    }, [questions, count, score]);
    if (!questions) {
        return (
            <p>Loding ..... </p>
        )
    }
    const answers = [...questions[count].incorrect_answers, questions[count].correct_answer];
    const results = answers.sort(() => Math.random() - 0.5);
    const checkAnswer = (answer) => {
        if (answer === questions[count].correct_answer) {
            setScore(score + 10);
        }
        if (count < questions.length - 1) {
            setCount(count + 1);
        }
        else {
            onFinish(true);
            onResult(score);
        }
    }
    return (
        <>
            <div><Quetions question={questions[count].question} /></div>
            {results.map((answer, index) => {
                return (
                    <>
                        <Answer key={index} answer={answer} onAnswer={(answer) => checkAnswer(answer)} />
                    </>

                )
            })}
        </>
    )
}

export default Quiz