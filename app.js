console.log("app.js connected - 13-05-2023 - 10:41");

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

    //
    const redTallyP1 = document.getElementById("tally---potted--red-p1")
    const blackTallyP1 = document.getElementById("tally---potted--black-p1");
    const pinkTallyP1 = document.getElementById("tally---potted--pink-p1");
    const blueTallyP1 = document.getElementById("tally---potted--blue-p1");
    const brownTallyP1 = document.getElementById("tally---potted--brown-p1");
    const greenTallyP1 = document.getElementById("tally---potted--green-p1");
    let yellowTallyP1 = document.getElementById("tally---potted--yellow-p1");

    // frame buttons (player 1)

    const potUndoOne = document.getElementById("pot---undo--one");
    const potMissOne = document.getElementById("pot---miss--one");
    const potFoulOne = document.getElementById("pot---foul--one");
    const potFoulMissOne = document.getElementById("pot---foulmiss--one");
    const potForfeitOne = document.getElementById("pot---forfeit--one"); 
    
    // Initialize variables
    let p1CurrentScore = 0;
    let p1CurrentBreak = 0;
    let p1HighestBreak = 0;
    let remainingPoints = 147;
    let lastBallWasRed = false; // Track if the last ball potted was a red
    let consecutiveRedCount = 0; // Track consecutive red balls potted
    let totalRedsPotted = 0; // Track total number of reds potted
    let redClickCount = 0; // Separate counter just for red ball clicks
    let shootingForRed = true; // Track whether player is shooting for a red or color

    // Function to check and update remaining points based on game stage
    function updateRemainingPoints(pointsToDeduct) {
        // If we're in the final stage (27 points or less remaining)
        if (remainingPoints <= 27) {
            // In the final stage, we deduct the actual value of the ball
            // Yellow=2, Green=3, Brown=4, Blue=5, Pink=6, Black=7
            remainingPoints -= pointsToDeduct;
        } else {
            // In normal play, we deduct 1 for red and 7 for colors (as they return to the table)
            remainingPoints -= (pointsToDeduct === 1) ? 1 : 7;
        }
        
        // Ensure we don't go below zero
        remainingPoints = Math.max(0, remainingPoints);
        pointsRemaining.textContent = remainingPoints;
    }
    
    // Function to update which balls are enabled/disabled based on game state
    function updateAvailableBalls() {
        // Get all ball elements
        const redBall = document.getElementById("pot---red--one");
        const yellowBall = document.getElementById("pot---yellow--one");
        const greenBall = document.getElementById("pot---green--one");
        const brownBall = document.getElementById("pot---brown--one");
        const blueBall = document.getElementById("pot---blue--one");
        const pinkBall = document.getElementById("pot---pink--one");
        const blackBall = document.getElementById("pot---black--one");
        
        // Array of all color balls
        const colorBalls = [yellowBall, greenBall, brownBall, blueBall, pinkBall, blackBall];
        
        // If there are no points remaining, disable all balls (frame is over)
        if (remainingPoints === 0) {
            redBall.style.pointerEvents = "none";
            redBall.style.opacity = "0.5";
            
            colorBalls.forEach(ball => {
                ball.style.pointerEvents = "none";
                ball.style.opacity = "0.5";
            });
            
            potUndoOne.style.pointerEvents = "none";
            potMissOne.style.pointerEvents = "none";
            potFoulOne.style.pointerEvents = "none";  
            potFoulMissOne.style.pointerEvents = "none";
            potForfeitOne.style.pointerEvents = "none";

            potUndoOne.style.opacity = "0.4";            
            potMissOne.style.opacity = "0.4";            
            potFoulOne.style.opacity = "0.4";            
            potFoulMissOne.style.opacity = "0.4";            
            potForfeitOne.style.opacity = "0.4";   


            console.log("Frame complete - table cleared!");
            return;
        }
        
        if (shootingForRed) {
            // If shooting for red, enable red and disable colors
            if (redClickCount < 15) {
                redBall.style.pointerEvents = "auto";
                redBall.style.opacity = "1";
            } else {
                // If all reds are potted, disable red
                redBall.style.pointerEvents = "none";
                redBall.style.opacity = "0.5";
            }
            
            // Disable all color balls
            colorBalls.forEach(ball => {
                ball.style.pointerEvents = "none";
                ball.style.opacity = "0.5";
            });
        } else {
            // If shooting for color, disable red and enable colors
            redBall.style.pointerEvents = "none";
            redBall.style.opacity = "0.5";
            
            // Enable all color balls
            colorBalls.forEach(ball => {
                ball.style.pointerEvents = "auto";
                ball.style.opacity = "1";
            });
            
            // If in final sequence (all reds potted), handle colors differently
            if (redClickCount >= 15 && remainingPoints <= 27) {
                // In the final sequence, colors must be potted in order
                // Yellow, Green, Brown, Blue, Pink, Black
                
                // Determine which color should be enabled based on remaining points
                if (remainingPoints === 27) {
                    // Only yellow is available (27 points remaining)
                    enableOnlyBall(yellowBall, colorBalls);
                } else if (remainingPoints === 25) {
                    // Only green is available (25 points remaining)
                    enableOnlyBall(greenBall, colorBalls);
                } else if (remainingPoints === 22) {
                    // Only brown is available (22 points remaining)
                    enableOnlyBall(brownBall, colorBalls);
                } else if (remainingPoints === 18) {
                    // Only blue is available (18 points remaining)
                    enableOnlyBall(blueBall, colorBalls);
                } else if (remainingPoints === 13) {
                    // Only pink is available (13 points remaining)
                    enableOnlyBall(pinkBall, colorBalls);
                } else if (remainingPoints === 7) {
                    // Only black is available (7 points remaining)
                    enableOnlyBall(blackBall, colorBalls);
                }
            }
        }
    }

    // Helper function to enable only one ball and disable others
    function enableOnlyBall(ballToEnable, allBalls) {
        allBalls.forEach(ball => {
            if (ball === ballToEnable) {
                ball.style.pointerEvents = "auto";
                ball.style.opacity = "1";
            } else {
                ball.style.pointerEvents = "none";
                ball.style.opacity = "0.5";
            }
        });
    }

    // shoot attempt - red ball - player 1
    redBallP1.addEventListener("click", function() {
        // Check if we've already clicked the red ball 15 times
        if (redClickCount >= 15) {
            console.log("Maximum number of red ball clicks (15) reached");
            return; // Exit the function early
        }
        
        // Increment the red click counter
        redClickCount++;
        
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
        
        // Check if the last ball was also a red
        if (lastBallWasRed) {
            // This is a consecutive red ball
            consecutiveRedCount++;
            // For 2nd red, deduct 7 more (8 total)
            // For 3rd red, deduct 1 more (9 total)
            // For 4th red, deduct 7 more (16 total)
            // And so on...
            updateRemainingPoints(consecutiveRedCount % 2 === 0 ? 7 : 1);
        } else {
            // This is the first red after a color
            consecutiveRedCount = 1;
            updateRemainingPoints(1);
        }
        
        // Set lastBallWasRed to true
        lastBallWasRed = true;
        
        // Now shooting for color
        shootingForRed = false;
        
        // Increment total reds potted
        totalRedsPotted++;
        
        // Make the red ball tally visible
        redTallyP1.style.visibility = "visible";
        redTallyP1.style.opacity = "1";
        
        // Update the red ball tally display
        redTallyP1.textContent = redClickCount;
        
        // Update available balls
        updateAvailableBalls();
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

        // Reduce points remaining appropriately
        updateRemainingPoints(7);
        
        // Set lastBallWasRed to false
        lastBallWasRed = false;

        // Now shooting for red (unless in final sequence)
        if (redClickCount < 15) {
            shootingForRed = true;
        } else if (remainingPoints > 0) {
            // In final sequence, continue with colors
            shootingForRed = false;
        }

        // Check if the game is over
        if (remainingPoints === 0) {
            console.log("Frame complete - table cleared!");
        }
                
        // Make the black ball tally visible
        blackTallyP1.style.visibility = "visible";
        blackTallyP1.style.opacity = "1";
        
        // Increment the blackball tally
        let currentTally = parseInt(blackTallyP1.textContent) || 0;
        currentTally++;
        blackTallyP1.textContent = currentTally;

        // Update available balls
        updateAvailableBalls();
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

        // Reduce points remaining appropriately
        updateRemainingPoints(6);
        
        // Set lastBallWasRed to false
        lastBallWasRed = false;

        // Now shooting for red (unless in final sequence)
        if (redClickCount < 15) {
            shootingForRed = true;
        } else if (remainingPoints > 0) {
            // In final sequence, continue with colors
            shootingForRed = false;
        }
        
        // Make the pink ball tally visible
        pinkTallyP1.style.visibility = "visible";
        pinkTallyP1.style.opacity = "1";
        
        // Increment the pink ball tally
        let currentTally = parseInt(pinkTallyP1.textContent) || 0;
        currentTally++;
        pinkTallyP1.textContent = currentTally;

        // Update available balls
        updateAvailableBalls();
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

        // Reduce points remaining appropriately
        updateRemainingPoints(5);
        
        // Set lastBallWasRed to false
        lastBallWasRed = false;

        // Now shooting for red (unless in final sequence)
        if (redClickCount < 15) {
            shootingForRed = true;
        } else if (remainingPoints > 0) {
            // In final sequence, continue with colors
            shootingForRed = false;
        }
        
        // Make the blue ball tally visible
        blueTallyP1.style.visibility = "visible";
        blueTallyP1.style.opacity = "1";
        
        // Increment the blue ball tally
        let currentTally = parseInt(blueTallyP1.textContent) || 0;
        currentTally++;
        blueTallyP1.textContent = currentTally;

        // Update available balls
        updateAvailableBalls();
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

        // Reduce points remaining appropriately
        updateRemainingPoints(4);

        // Set lastBallWasRed to false
        lastBallWasRed = false;
        
        // Now shooting for red (unless in final sequence)
        if (redClickCount < 15) {
            shootingForRed = true;
        } else if (remainingPoints > 0) {
            // In final sequence, continue with colors
            shootingForRed = false;
        }
                
        // Make the brown ball tally visible
        brownTallyP1.style.visibility = "visible";
        brownTallyP1.style.opacity = "1";
        
        // Increment the brown ball tally
        let currentTally = parseInt(brownTallyP1.textContent) || 0;
        currentTally++;
        brownTallyP1.textContent = currentTally;

        // Update available balls
        updateAvailableBalls();
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

        // Reduce points remaining appropriately
        updateRemainingPoints(3);

        // Set lastBallWasRed to false
        lastBallWasRed = false;
        
        // Now shooting for red (unless in final sequence)
        if (redClickCount < 15) {
            shootingForRed = true;
        } else if (remainingPoints > 0) {
            // In final sequence, continue with colors
            shootingForRed = false;
        }        
                
        // Make the green ball tally visible
        greenTallyP1.style.visibility = "visible";
        greenTallyP1.style.opacity = "1";
        
        // Increment the green ball tally
        let currentTally = parseInt(greenTallyP1.textContent) || 0;
        currentTally++;
        greenTallyP1.textContent = currentTally;

        // Update available balls
        updateAvailableBalls();
    });

    // Yellow ball pot event listener for player 1  
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

        // Reduce points remaining appropriately
        updateRemainingPoints(2);        
        
        // Set lastBallWasRed to false
        lastBallWasRed = false;
        
        // Now shooting for red (unless in final sequence)
        if (redClickCount < 15) {
            shootingForRed = true;
        } else if (remainingPoints > 0) {
            // In final sequence, continue with colors
            shootingForRed = false;
        }
        
        // Make the yellow ball tally visible
        yellowTallyP1.style.visibility = "visible";
        yellowTallyP1.style.opacity = "1";
        
        // Increment the yellow ball tally
        let currentTally = parseInt(yellowTallyP1.textContent) || 0;
        currentTally++;
        yellowTallyP1.textContent = currentTally;
        
        // Update available balls
        updateAvailableBalls();
    });
    
    // Get the reset button
    const resetButton = document.getElementById("reset---app");
    
    // Function to re-rack the table (reset the game)
    function reRackTable() {
        // Reset scores and breaks
        p1CurrentScore = 0;
        p1CurrentBreak = 0;
        p1Score.textContent = "0";
        lastBreakP1.textContent = "0";
        
        // Reset game state variables
        lastBallWasRed = false;
        consecutiveRedCount = 0;
        totalRedsPotted = 0; // Reset total reds potted
        redClickCount = 0; // Reset red click counter
        shootingForRed = true; // Start shooting for red
        
        // Reset points remaining to 147
        remainingPoints = 147;
        pointsRemaining.textContent = "147";
        
        // Reset all ball tallies
        redTallyP1.textContent = "";
        yellowTallyP1.textContent = "";
        greenTallyP1.textContent = "";
        brownTallyP1.textContent = "";
        blueTallyP1.textContent = "";
        pinkTallyP1.textContent = "";
        blackTallyP1.textContent = "";
        
        // Hide all ball tallies
        redTallyP1.style.visibility = "hidden";
        yellowTallyP1.style.visibility = "hidden";
        greenTallyP1.style.visibility = "hidden";
        brownTallyP1.style.visibility = "hidden";
        blueTallyP1.style.visibility = "hidden";
        pinkTallyP1.style.visibility = "hidden";
        blackTallyP1.style.visibility = "hidden";
        
        // Reset player 2's score if needed
        const p2Score = document.getElementById("p2---score");
        if (p2Score) {
            p2Score.textContent = "0";
        }
        
        // Reset player at table indicator
        document.getElementById("player_number").textContent = "1";
        
        console.log("Game reset - table re-racked");
        
        // Update available balls
        updateAvailableBalls();
    }
    
    // Add click event listener to the reset button
    resetButton.addEventListener("click", function(event) {

        event.preventDefault(); // Prevent default link behavior
        // reRackTable();        

        setTimeout(function () {

            location.reload();
        }, 1000); 
    });

    // Set initial available balls
    updateAvailableBalls();
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
