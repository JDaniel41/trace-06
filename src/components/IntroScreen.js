function IntroScreen({ startGameCallback, previousStreak }) {
    return (
        <div className="h-auto w-1/2 self-center shadow-2xl p-5 rounded-lg bg-white text-center">
            <h1 className="text-center py-2 text-2xl">Welcome to Trivia!</h1>
            <p className="pb-2">
                This game was developed by Jonathan Daniel during the Summer
                2021 Trace Camp. Click here to{" "}
                <a
                    className="underline"
                    href="https://www.linkedin.com/in/jonathandaniel23/"
                >
                    Connect on LinkedIn.
                </a>
            </p>
            <button
                className="text-center pb-2 font-bold"
                onClick={startGameCallback}
            >
                {previousStreak
                    ? "Try to beat your previous streak of " +
                      previousStreak +
                      "!"
                    : "Click Here to start the Game!"}
            </button>
        </div>
    );
}

export default IntroScreen;
