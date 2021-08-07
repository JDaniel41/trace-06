import { useState, useEffect } from "react";
import axios from "axios";

function QuestionCard({ answeredCallback }) {
    const [questionCategory, setQuestionCategory] = useState();
    const [questionDifficulty, setQuestionDifficulty] = useState();
    const [questionText, setQuestionText] = useState();
    const [correctAnswer, setCorrectAnswer] = useState();

    function populateData(question) {
        console.log(question);
        setQuestionCategory(question.category);
        setQuestionDifficulty(question.difficulty);
        setQuestionText(question.question);
        setCorrectAnswer(question.correct_answer);
    }

    useEffect(() => {
        axios
            .get("https://opentdb.com/api.php?amount=1&type=boolean")
            .then((response) => {
                console.log(response.data);
                populateData(response.data.results[0]);
            })
            .catch((err) => {
                console.log(err);
            });
    }, []);

    return (
        <div>
            <h1>{questionCategory}</h1>
            <h2>{questionDifficulty}</h2>
            <p>{questionText}</p>

            <div>
                <button
                    onClick={() => answeredCallback("True" === correctAnswer)}
                >
                    True
                </button>
                <button
                    onClick={() => answeredCallback("True" === correctAnswer)}
                >
                    False
                </button>
            </div>
        </div>
    );
}

export default QuestionCard;
