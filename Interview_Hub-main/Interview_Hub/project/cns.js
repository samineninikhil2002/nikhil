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
            "1": "4525",
            "2": "efg",
            "3": "8",
            "4": "X is a four-digit integer.",
            "5": "forever",
            "6": "a = 11, c = 10",
            "7": "13",
            "8": "13",
            "9": "11, 11",
            "10": "102"

            // Add more correct answers here
        };
        return correctAnswers[questionNumber];
    }

    function getNumQuestions() {
        return Object.keys(getCorrectAnswer).length;
    }
});
