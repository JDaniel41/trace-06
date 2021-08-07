import { useState } from "react";
import QuestionCard from "./components/QuestionCard";

function App() {
    const [questionStreak, setQuestionStreak] = useState(0);

    function answerReceived(responseWasCorrect) {
        console.log(responseWasCorrect);
        if (responseWasCorrect) {
            setQuestionStreak((oldStreak) => oldStreak + 1);
        } else {
            setQuestionStreak(0);
        }
    }

    return (
        <div>
            <p>{questionStreak}</p>
            <QuestionCard answeredCallback={answerReceived} />
        </div>
    );
}

export default App;
