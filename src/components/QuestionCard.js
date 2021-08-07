import { useState, useEffect } from "react";
import axios from "axios";
import he from "he";

function QuestionCard({ answeredCallback, questionNum }) {
    const [questionCategory, setQuestionCategory] = useState();
    const [questionDifficulty, setQuestionDifficulty] = useState();
    const [questionText, setQuestionText] = useState();
    const [correctAnswer, setCorrectAnswer] = useState();
    const [questionIsReady, setQuestionIsReady] = useState(false);

    function populateData(question) {
        console.log(question);
        setQuestionCategory(question.category);
        setQuestionDifficulty(question.difficulty);
        setQuestionText(question.question);
        setCorrectAnswer(question.correct_answer);
        setQuestionIsReady(true);
    }

    function displayQuestion() {
        return (
            <div className="shadow-2xl p-5 rounded-lg bg-white text-center">
                <h1 className="text-xl">{questionCategory}</h1>
                <h2 className="text-lg capitalize">{questionDifficulty}</h2>
                <p>{he.decode(questionText)}</p>

                <div className="flex justify-around py-4">
                    <button
                        className="bg-green-600 py-2 px-5 rounded-lg text-white font-bold font-sans"
                        onClick={() =>
                            answeredCallback("True" === correctAnswer)
                        }
                    >
                        True
                    </button>
                    <button
                        className="bg-red-600 py-2 px-5 rounded-lg text-white font-bold"
                        onClick={() =>
                            answeredCallback("False" === correctAnswer)
                        }
                    >
                        False
                    </button>
                </div>
            </div>
        );
    }

    function displayLoadingScreen() {
        return (
            <div className="shadow-2xl p-5 rounded-lg">
                <h1>Loading Question!</h1>
            </div>
        );
    }

    useEffect(() => {
        console.log("Effect Running");
        axios
            .get("https://opentdb.com/api.php?amount=1&type=boolean")
            .then((response) => {
                console.log(response.data);
                populateData(response.data.results[0]);
            })
            .catch((err) => {
                console.log(err);
            });
    }, [questionNum]);

    return (
        <div className="w-1/2 xl:w-3/4 p-5 self-center">
            {questionIsReady ? displayQuestion() : displayLoadingScreen()}
        </div>
    );
}

export default QuestionCard;
