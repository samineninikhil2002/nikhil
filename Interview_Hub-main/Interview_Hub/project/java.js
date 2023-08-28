document.addEventListener("DOMContentLoaded", function() {
    const submitBtn = document.getElementById("submitBtn");
    const scoreContainer = document.getElementById("scoreContainer");
    const scoreDisplay = document.getElementById("score");

    submitBtn.addEventListener("click", function() {
        const examForm = document.getElementById("examForm");
        const formData = new FormData(examForm);
        let score = 0;

        formData.forEach((value, key) => {
            if (key.startsWith("q")) {
                const questionNumber = key.substring(1);
                const correctAnswer = getCorrectAnswer(questionNumber);
                if (value === correctAnswer) {
                    score++;
                }
            }
        });

        scoreDisplay.textContent = score + " out of " + getNumQuestions();
        scoreContainer.style.display = "block";
    });

    function getCorrectAnswer(questionNumber) {
        const correctAnswers = {
            "1": "Static block, instance block, constructor, and method",
            "2": "60, 30, 0, 20, 0",
            "3": "25",
            "4": "8 times *** and 7 times +++++",
            "5": "for ( int i = 99; i >= 0; i / 9 )",
            "6": "Cimpletd",
            "7": "Three reference variables and two objects are created.",
            "8": "Method is not defined properly",
            "9": "None of the above",
            "10": "A will be printed, and then an exception is thrown."

            // Add more correct answers here
        };
        return correctAnswers[questionNumber];
    }

    function getNumQuestions() {
        return Object.keys(getCorrectAnswer).length;
    }
});
