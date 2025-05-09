console.log("app.js connected - 09-05-2023 - 09:25");

// Set the points remaining to 147
document.getElementById('points_remaining').textContent = '147';

// Event listener for red ball for player 1
document.addEventListener("DOMContentLoaded", function() {

    // Get pot ball elements - player 1
    const redBallP1 = document.getElementById("pot---red--one");
    const blackBallP1 = document.getElementById("pot---black--one");
    const pinkBallP1 = document.getElementById("pot---pink--one");
    const blueBallP1 = document.getElementById("pot---blue--one");
    const brownBallP1 = document.getElementById("pot---brown--one")
    const greenBallP1 = document.getElementById("pot---green--one");
    const yellowBallP1 = document.getElementById("pot---yellow--one");

    const p1Score = document.getElementById("p1---score");
    const pointsRemaining = document.getElementById("points_remaining");
    const highestBreakP1 = document.getElementById("highest---break--p1");
    const lastBreakP1 = document.getElementById("last---break--p1");
    const redTallyP1 = document.getElementById("tally---potted--red-p1")
    const blackTallyP1 = document.getElementById("tally---potted--black-p1");
    const pinkTallyP1 = document.getElementById("tally---potted--pink-p1");
    const blueTallyP1 = document.getElementById("tally---potted--blue-p1");
    const brownTallyP1 = document.getElementById("tally---potted--brown-p1");
    const greenTallyP1 = document.getElementById("tally---potted--green-p1");
    const yellowTallyP1 = document.getElementById("tally---potted--yellow-p1");
    
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
    blackBallP1.addEventListener("click", function() {

        // Add 7 to player 1's score
        p1CurrentScore += 7;
        p1Score.textContent = p1CurrentScore;
        
        // Add 7 to current break
        p1CurrentBreak += 7;
        lastBreakP1.textContent = p1CurrentBreak;
        
        // Update highest break if needed
        if (p1CurrentBreak > p1HighestBreak) {
            p1HighestBreak = p1CurrentBreak;
            highestBreakP1.textContent = p1HighestBreak;
        }
        
        // Reduce points remaining by 7
        remainingPoints -= 7;
        pointsRemaining.textContent = remainingPoints;
        
        // Make the red ball tally visible
        blackTallyP1.style.visibility = "visible";
        blackTallyP1.style.opacity = "1";
    });

    // TODO: shoot attempt - colour ball Pink - player 1    
    pinkBallP1.addEventListener("click", function() {

        // Add 6 to player 1's score
        p1CurrentScore += 6;
        p1Score.textContent = p1CurrentScore;
        
        // Add 6 to current break
        p1CurrentBreak += 6;
        lastBreakP1.textContent = p1CurrentBreak;
        
        // Update highest break if needed
        if (p1CurrentBreak > p1HighestBreak) {
            p1HighestBreak = p1CurrentBreak;
            highestBreakP1.textContent = p1HighestBreak;
        }
        
        // Reduce points remaining by 7
        remainingPoints -= 7;
        pointsRemaining.textContent = remainingPoints;
        
        // Make the red ball tally visible
        pinkTallyP1.style.visibility = "visible";
        pinkTallyP1.style.opacity = "1";
    });


    // TODO: shoot attempt - colour ball Blue - player 1
    blueBallP1.addEventListener("click", function() {

        // Add 5 to player 1's score
        p1CurrentScore += 5;
        p1Score.textContent = p1CurrentScore;
        
        // Add 5 to current break
        p1CurrentBreak += 5;
        lastBreakP1.textContent = p1CurrentBreak;
        
        // Update highest break if needed
        if (p1CurrentBreak > p1HighestBreak) {
            p1HighestBreak = p1CurrentBreak;
            highestBreakP1.textContent = p1HighestBreak;
        }
        
        // Reduce points remaining by 7
        remainingPoints -= 7;
        pointsRemaining.textContent = remainingPoints;
        
        // Make the red ball tally visible
        blueTallyP1.style.visibility = "visible";
        blueTallyP1.style.opacity = "1";
    });

    // TODO: shoot attempt - colour ball Brown - player 1
    brownBallP1.addEventListener("click", function() {

        // Add 4 to player 1's score
        p1CurrentScore += 4;
        p1Score.textContent = p1CurrentScore;
        
        // Add 4 to current break
        p1CurrentBreak += 4;
        lastBreakP1.textContent = p1CurrentBreak;
        
        // Update highest break if needed
        if (p1CurrentBreak > p1HighestBreak) {
            p1HighestBreak = p1CurrentBreak;
            highestBreakP1.textContent = p1HighestBreak;
        }
        
        // Reduce points remaining by 7
        remainingPoints -= 7;
        pointsRemaining.textContent = remainingPoints;
        
        // Make the red ball tally visible
        brownTallyP1.style.visibility = "visible";
        brownTallyP1.style.opacity = "1";
    });

    // TODO: shoot attempt - colour ball Green - player 1
    greenBallP1.addEventListener("click", function() {

        // Add 3 to player 1's score
        p1CurrentScore += 3;
        p1Score.textContent = p1CurrentScore;
        
        // Add 3 to current break
        p1CurrentBreak += 3;
        lastBreakP1.textContent = p1CurrentBreak;
        
        // Update highest break if needed
        if (p1CurrentBreak > p1HighestBreak) {
            p1HighestBreak = p1CurrentBreak;
            highestBreakP1.textContent = p1HighestBreak;
        }
        
        // Reduce points remaining by 7
        remainingPoints -= 7;
        pointsRemaining.textContent = remainingPoints;
        
        // Make the red ball tally visible
        greenTallyP1.style.visibility = "visible";
        greenTallyP1.style.opacity = "1";
    });

    // TODO: shoot attempt - colour ball Yellow - player 1  
    yellowBallP1.addEventListener("click", function() {

        // Add 2 to player 1's score
        p1CurrentScore += 2;
        p1Score.textContent = p1CurrentScore;
        
        // Add 2 to current break
        p1CurrentBreak += 2;
        lastBreakP1.textContent = p1CurrentBreak;
        
        // Update highest break if needed
        if (p1CurrentBreak > p1HighestBreak) {
            p1HighestBreak = p1CurrentBreak;
            highestBreakP1.textContent = p1HighestBreak;
        }
        
        // Reduce points remaining by 7
        remainingPoints -= 7;
        pointsRemaining.textContent = remainingPoints;
        
        // Make the red ball tally visible
        yellowTallyP1.style.visibility = "visible";
        yellowTallyP1.style.opacity = "1";
    });
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
