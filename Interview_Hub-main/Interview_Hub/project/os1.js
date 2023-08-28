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
            "1": "Alan Kay",
            "2": "Duplicate/Redundant data",
            "3": "SmallTalk",
            "4": "Inheritance",
            "5": "Code reusability",
            "6": "2",
            "7": "Overloading <<",
            "8": "Private",
            "9": "classname()",
            "10": "Inheritance"

            // Add more correct answers here
        };
        return correctAnswers[questionNumber];
    }

    function getNumQuestions() {
        return Object.keys(getCorrectAnswer).length;
    }
});
