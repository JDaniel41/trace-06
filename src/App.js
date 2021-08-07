import { useState } from "react";
import IntroScreen from "./components/IntroScreen";
import QuestionCard from "./components/QuestionCard";

function App() {
    const [questionStreak, setQuestionStreak] = useState(0);
    const [questionNum, setQuestionNum] = useState(0);
    const [gameStarted, setGameStarted] = useState(false);

    function answerReceived(responseWasCorrect) {
        console.log(responseWasCorrect);
        if (responseWasCorrect) {
            setQuestionStreak((oldStreak) => oldStreak + 1);
        } else {
            setGameStarted(false);
        }
        setQuestionNum((oldNum) => oldNum + 1);
    }

    function renderNonGameScreen() {
        if (questionNum === 0) {
            return (
                <IntroScreen startGameCallback={() => setGameStarted(true)} />
            );
        } else {
            return (
                <IntroScreen
                    startGameCallback={() => setGameStarted(true)}
                    previousStreak={questionStreak}
                />
            );
        }
    }

    function renderQuestionCard() {
        return (
            <QuestionCard
                questionNum={questionNum}
                answeredCallback={answerReceived}
            />
        );
    }

    function renderHeading() {
        return (
            <div className="fixed bg-white w-screen text-center py-2">
                {gameStarted ? "Current Streak: " + questionStreak : null}
            </div>
        );
    }

    return (
        <div>
            {gameStarted ? renderHeading() : null}
            <div className="flex justify-center h-screen bg-blue-100">
                {gameStarted ? renderQuestionCard() : renderNonGameScreen()}
            </div>
        </div>
    );
}

export default App;
