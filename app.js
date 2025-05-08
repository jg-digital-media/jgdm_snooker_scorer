console.log("app.js connected - 08-05-2023 - 17:07");

// Set the points remaining to 147
document.getElementById('points_remaining').textContent = '147';

// Event listener for red ball for player 1
document.addEventListener("DOMContentLoaded", function() {

    // Get elements
    const redBallP1 = document.getElementById("pot---red--one");
    const p1Score = document.getElementById("p1---score");
    const pointsRemaining = document.getElementById("points_remaining");
    const highestBreakP1 = document.getElementById("highest---break--p1");
    const lastBreakP1 = document.getElementById("last---break--p1");
    const redTallyP1 = document.getElementById("tally---potted--red-p1");
    
    // Initialize variables
    let p1CurrentScore = 0;
    let p1CurrentBreak = 0;
    let p1HighestBreak = 0;
    let remainingPoints = 147;
    

    // shoot attempt - red ball - player 1
    redBallP1.addEventListener("click", function() {

        // Add 1 to player 1's score
        p1CurrentScore += 1;
        p1Score.textContent = p1CurrentScore;
        
        // Add 1 to current break
        p1CurrentBreak += 1;
        lastBreakP1.textContent = p1CurrentBreak;
        
        // Update highest break if needed
        if (p1CurrentBreak > p1HighestBreak) {
            p1HighestBreak = p1CurrentBreak;
            highestBreakP1.textContent = p1HighestBreak;
        }
        
        // Reduce points remaining by 1
        remainingPoints -= 1;
        pointsRemaining.textContent = remainingPoints;
        
        // Make the red ball tally visible
        redTallyP1.style.visibility = "visible";
        redTallyP1.style.opacity = "1";
    });

    // TODO: shoot attempt - colour ball Black - player 1

    // TODO: shoot attempt - colour ball Pink - player 1

    // TODO: shoot attempt - colour ball Blue - player 1

    // TODO: shoot attempt - colour ball Brown - player 1

    // TODO: shoot attempt - colour ball Green - player 1

    // TODO: shoot attempt - colour ball Yellow - player 1  

});

/* document.addEventListener("DOMContentLoaded", function() {
    // Get elements
    const pointsRemaining = document.getElementById("points_remaining");
    const playerOneInput = document.getElementById("player_one");
    const playerTwoInput = document.getElementById("player_two");

    // Initial points value
    let totalPoints = 147;

    // Function to update pointsRemaining
    function updatePointsRemaining() {
        // Calculate totalPoints based on player inputs
        totalPoints = 147 - (parseInt(playerOneInput.value) || 0) - (parseInt(playerTwoInput.value) || 0);

        // Ensure totalPoints is not less than 0
        totalPoints = Math.max(totalPoints, 0);

        // Update pointsRemaining element
        pointsRemaining.textContent = totalPoints;

        // Enable inputs regardless of the sum
        playerOneInput.disabled = false;
        playerTwoInput.disabled = false;
    }

    // Event listener for player_one input
    playerOneInput.addEventListener("input", updatePointsRemaining);

    // Event listener for player_two input
    playerTwoInput.addEventListener("input", updatePointsRemaining);
});
 */
