document.addEventListener("DOMContentLoaded", function() {
    const submitBtn = document.getElementById("submitBtn");
    const scoreContainer = document.getElementById("scoreContainer");
    const scoreDisplay = document.getElementById("score");

    submitBtn.addEventListener("click", function() {
        const examForm = document.getElementById("examForm");
        const formData = new FormData(examForm);
        const answers = {};

        for (const pair of formData.entries()) {
            answers[pair[0]] = pair[1];
        }

        fetch("calculate_score.php", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(answers),
        })
        .then(response => response.json())
        .then(data => {
            // Display the score to the user
            scoreDisplay.textContent = data.score;
            scoreContainer.style.display = "block";
        })
        .catch(error => {
            console.error("Error:", error);
            // Handle error and provide user feedback
        });
    });
});
