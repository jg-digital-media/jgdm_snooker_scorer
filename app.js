console.log("app.js connected - 23-05-2025 - 12:32");

// Set the points remaining to 147
document.getElementById('points_remaining').textContent = '147';

// Initialize variables
let p1CurrentScore = 0;
let p2CurrentScore = 0;
let p1CurrentBreak = 0;
let p2CurrentBreak = 0;
let p1HighestBreak = 0;
let p2HighestBreak = 0;
let remainingPoints = 147;
let lastBallWasRed = false;
let consecutiveRedCount = 0;
let totalRedsPotted = 0;
let redClickCount = 0;
let shootingForRed = true;
let tempRedTally = 0;
let multiRedShotCount = 0;
let currentPlayer = 1;

// Define global references to DOM elements
let playerNumber, player1Table, player2Table, missP1, missP2, pointsRemaining;
let redBallP1, yellowBallP1, greenBallP1, brownBallP1, blueBallP1, pinkBallP1, blackBallP1;
let redTallyP1, yellowTallyP1, greenTallyP1, brownTallyP1, blueTallyP1, pinkTallyP1, blackTallyP1;
let lastBreakP1, highestBreakP1, p1Score, applyRedTallyP1;
let lastBreakP2, highestBreakP2, p2Score, applyRedTallyP2;

// Function to disable all interactive elements when the frame is over
function endFrame() {
    console.log("Ending frame - disabling all interactive elements");
    
    // Disable all elements with pointer events
    const allInteractiveElements = document.querySelectorAll("*");
    allInteractiveElements.forEach(element => {
        // Check if this is a potentially interactive element
        const tagName = element.tagName.toLowerCase();
        if (tagName === 'button' || tagName === 'a' || tagName === 'input' || 
            tagName === 'select' || tagName === 'textarea' || 
            element.id.includes('pot') || element.id.includes('tally') || 
            element.id.includes('apply') || element.id.includes('miss')) {
            
            // Disable the element
            element.style.pointerEvents = "none";
            
            // Reduce opacity for visual feedback, but only if it's a game control
            if (element.id.includes('pot') || element.id.includes('tally') || 
                element.id.includes('apply') || element.id.includes('miss')) {
                element.style.opacity = "0.5";
            }
            
            console.log(`Disabled element: ${element.id || element.tagName}`);
        }
    });
    
    // Specifically disable player break elements
    const playerBreaksP1 = document.getElementById("player---breaks--p1");
    const playerBreaksP2 = document.getElementById("player---breaks--p2");
    
    if (playerBreaksP1) {
        playerBreaksP1.style.pointerEvents = "none";
        playerBreaksP1.style.opacity = "0.5";
        console.log("Disabled player 1 breaks element");
    }
    
    if (playerBreaksP2) {
        playerBreaksP2.style.pointerEvents = "none";
        playerBreaksP2.style.opacity = "0.5";
        console.log("Disabled player 2 breaks element");
    }
    
    // Hide all apply buttons
    const applyButtons = document.querySelectorAll('[id^="apply_tally"]');
    applyButtons.forEach(button => {
        button.style.visibility = "hidden";
        button.style.opacity = "0";
        console.log(`Hidden apply button: ${button.id}`);
    });
    
    // Determine the winner
    const winner = p1CurrentScore > p2CurrentScore ? 1 : (p2CurrentScore > p1CurrentScore ? 2 : "Tie");
    console.log(`Winner: ${winner === "Tie" ? "Tie" : "Player " + winner}`);
    
    // Create a frame complete message with winner information
    const frameOverMessage = document.createElement("div");
    frameOverMessage.textContent = winner === "Tie" ? 
        "Frame Complete - It's a Tie!" : 
        `Frame Complete - Player ${winner} Wins!`;
    
    // Add score information
    const scoreInfo = document.createElement("div");
    scoreInfo.textContent = `Player 1: ${p1CurrentScore} | Player 2: ${p2CurrentScore}`;
    scoreInfo.style.marginTop = "10px";
    scoreInfo.style.fontSize = "18px";
    frameOverMessage.appendChild(scoreInfo);
    
    // Add highest break information
    const breakInfo = document.createElement("div");
    breakInfo.textContent = `Highest Breaks - Player 1: ${p1HighestBreak} | Player 2: ${p2HighestBreak}`;
    breakInfo.style.marginTop = "5px";
    breakInfo.style.fontSize = "16px";
    frameOverMessage.appendChild(breakInfo);
    
    // Add a new frame button
    const newFrameButton = document.createElement("button");
    newFrameButton.textContent = "Start New Frame";
    newFrameButton.style.marginTop = "15px";
    newFrameButton.style.padding = "10px 20px";
    newFrameButton.style.fontSize = "16px";
    newFrameButton.style.backgroundColor = "#4CAF50";
    newFrameButton.style.color = "white";
    newFrameButton.style.border = "none";
    newFrameButton.style.borderRadius = "5px";
    newFrameButton.style.cursor = "pointer";
    newFrameButton.onclick = function() {
        location.reload(); // Reload the page to start a new frame
    };
    frameOverMessage.appendChild(newFrameButton);
    
    // Style the message
    frameOverMessage.style.position = "fixed";
    frameOverMessage.style.top = "50%";
    frameOverMessage.style.left = "50%";
    frameOverMessage.style.transform = "translate(-50%, -50%)";
    frameOverMessage.style.backgroundColor = "rgba(0, 0, 0, 0.9)";
    frameOverMessage.style.color = "white";
    frameOverMessage.style.padding = "30px";
    frameOverMessage.style.borderRadius = "10px";
    frameOverMessage.style.fontSize = "24px";
    frameOverMessage.style.textAlign = "center";
    frameOverMessage.style.zIndex = "1000";
    frameOverMessage.style.boxShadow = "0 0 20px rgba(255, 255, 255, 0.3)";
    
    // Only add the message if it doesn't already exist
    if (!document.getElementById("frame-over-message")) {
        frameOverMessage.id = "frame-over-message";
        document.body.appendChild(frameOverMessage);
    }
    
    console.log("Frame complete - all elements disabled");
}

// Function to update which balls are enabled/disabled based on game state
function updateAvailableBalls() {
    console.log("Updating available balls");
    console.log(`Current player: ${currentPlayer}, Shooting for red: ${shootingForRed}`);
    console.log(`Red count: ${redClickCount}, Remaining points: ${remainingPoints}`);
    
    // If there are no points remaining, end the frame
    if (remainingPoints === 0) {
        console.log("No points remaining - ending frame");
        endFrame();
        return;
    } else {
        // Remove the frame over message if it exists
        const existingMessage = document.getElementById("frame-over-message");
        if (existingMessage) {
            existingMessage.remove();
        }
    }
    
    // Get all ball elements for both players
    const redBallP1 = document.getElementById("pot---red--one");
    const yellowBallP1 = document.getElementById("pot---yellow--one");
    const greenBallP1 = document.getElementById("pot---green--one");
    const brownBallP1 = document.getElementById("pot---brown--one");
    const blueBallP1 = document.getElementById("pot---blue--one");
    const pinkBallP1 = document.getElementById("pot---pink--one");
    const blackBallP1 = document.getElementById("pot---black--one");
    
    const redBallP2 = document.getElementById("pot---red--two");
    const yellowBallP2 = document.getElementById("pot---yellow--two");
    const greenBallP2 = document.getElementById("pot---green--two");
    const brownBallP2 = document.getElementById("pot---brown--two");
    const blueBallP2 = document.getElementById("pot---blue--two");
    const pinkBallP2 = document.getElementById("pot---pink--two");
    const blackBallP2 = document.getElementById("pot---black--two");
    
    // Get all tally elements for both players
    const redTallyP1 = document.getElementById("tally---potted--red-p1");
    const yellowTallyP1 = document.getElementById("tally---potted--yellow-p1");
    const greenTallyP1 = document.getElementById("tally---potted--green-p1");
    const brownTallyP1 = document.getElementById("tally---potted--brown-p1");
    const blueTallyP1 = document.getElementById("tally---potted--blue-p1");
    const pinkTallyP1 = document.getElementById("tally---potted--pink-p1");
    const blackTallyP1 = document.getElementById("tally---potted--black-p1");
    
    const redTallyP2 = document.getElementById("tally---potted--red-p2");
    const yellowTallyP2 = document.getElementById("tally---potted--yellow-p2");
    const greenTallyP2 = document.getElementById("tally---potted--green-p2");
    const brownTallyP2 = document.getElementById("tally---potted--brown-p2");
    const blueTallyP2 = document.getElementById("tally---potted--blue-p2");
    const pinkTallyP2 = document.getElementById("tally---potted--pink-p2");
    const blackTallyP2 = document.getElementById("tally---potted--black-p2");
    
    // Get miss buttons
    const missP1 = document.getElementById("pot---miss--one");
    const missP2 = document.getElementById("pot---miss--two");
    
    // Arrays of all color balls and tallies for both players
    const colorBallsP1 = [yellowBallP1, greenBallP1, brownBallP1, blueBallP1, pinkBallP1, blackBallP1];
    const colorTalliesP1 = [yellowTallyP1, greenTallyP1, brownTallyP1, blueTallyP1, pinkTallyP1, blackTallyP1];
    
    const colorBallsP2 = [yellowBallP2, greenBallP2, brownBallP2, blueBallP2, pinkBallP2, blackBallP2];
    const colorTalliesP2 = [yellowTallyP2, greenTallyP2, brownTallyP2, blueTallyP2, pinkTallyP2, blackTallyP2];
    
    // Get the apply buttons
    const applyRedTallyP1 = document.getElementById("apply_tally---red--p1");
    const applyRedTallyP2 = document.getElementById("apply_tally---red--p2");
    
    // Get the current player's balls and tallies
    const currentPlayerRedBall = currentPlayer === 1 ? redBallP1 : redBallP2;
    const currentPlayerRedTally = currentPlayer === 1 ? redTallyP1 : redTallyP2;
    const currentPlayerColorBalls = currentPlayer === 1 ? colorBallsP1 : colorBallsP2;
    const currentPlayerColorTallies = currentPlayer === 1 ? colorTalliesP1 : colorTalliesP2;
    const currentPlayerApplyButton = currentPlayer === 1 ? applyRedTallyP1 : applyRedTallyP2;
    
    // Get the inactive player's balls and tallies
    const inactivePlayerRedBall = currentPlayer === 1 ? redBallP2 : redBallP1;
    const inactivePlayerRedTally = currentPlayer === 1 ? redTallyP2 : redTallyP1;
    const inactivePlayerColorBalls = currentPlayer === 1 ? colorBallsP2 : colorBallsP1;
    const inactivePlayerColorTallies = currentPlayer === 1 ? colorTalliesP2 : colorTalliesP1;
    const inactivePlayerApplyButton = currentPlayer === 1 ? applyRedTallyP2 : applyRedTallyP1;
    
    // Disable all balls and tallies for the inactive player
    if (inactivePlayerRedBall) {
        inactivePlayerRedBall.style.pointerEvents = "none";
        inactivePlayerRedBall.style.opacity = "0.5";
    }
    if (inactivePlayerRedTally) {
        inactivePlayerRedTally.style.pointerEvents = "none";
        inactivePlayerRedTally.style.opacity = "0.5";
    }
    if (inactivePlayerApplyButton) {
        inactivePlayerApplyButton.style.visibility = "hidden";
        inactivePlayerApplyButton.style.opacity = "0";
    }
    
    inactivePlayerColorBalls.forEach((ball, index) => {
        if (ball) {
            ball.style.pointerEvents = "none";
            ball.style.opacity = "0.5";
        }
        if (inactivePlayerColorTallies[index]) {
            inactivePlayerColorTallies[index].style.pointerEvents = "none";
            inactivePlayerColorTallies[index].style.opacity = "0.5";
        }
    });
    
    console.log(`Current player red ball:`, currentPlayerRedBall);
    console.log(`Current player apply button:`, currentPlayerApplyButton);
    
    // Apply game-state-specific restrictions for the current player
    if (shootingForRed) {
        console.log("Shooting for red - enabling red ball, disabling colors");
        
        // If shooting for red, enable red and disable colors
        if (redClickCount < 15) {
            if (currentPlayerRedBall) {
                currentPlayerRedBall.style.pointerEvents = "auto";
                currentPlayerRedBall.style.opacity = "1";
                console.log("Red ball enabled");
            }
            if (currentPlayerRedTally) {
                currentPlayerRedTally.style.pointerEvents = "auto";
                currentPlayerRedTally.style.opacity = "1";
                console.log("Red tally enabled");
            }
            
            // If there's only one red left, hide the apply button
            if (redClickCount === 14 && currentPlayerApplyButton) {
                currentPlayerApplyButton.style.visibility = "hidden";
                currentPlayerApplyButton.style.opacity = "0";
                console.log("Last red - hiding apply button");
            }
        } else {
            // If all reds are potted, disable red
            if (currentPlayerRedBall) {
                currentPlayerRedBall.style.pointerEvents = "none";
                currentPlayerRedBall.style.opacity = "0.5";
                console.log("All reds potted - disabling red ball");
            }
            if (currentPlayerRedTally) {
                currentPlayerRedTally.style.pointerEvents = "none";
                currentPlayerRedTally.style.opacity = "0.5";
                console.log("All reds potted - disabling red tally");
            }
            
            // Hide the apply button
            if (currentPlayerApplyButton) {
                currentPlayerApplyButton.style.visibility = "hidden";
                currentPlayerApplyButton.style.opacity = "0";
                console.log("All reds potted - hiding apply button");
            }
        }
        
        // Disable all color balls and tallies
        currentPlayerColorBalls.forEach((ball, index) => {
            if (ball) {
                ball.style.pointerEvents = "none";
                ball.style.opacity = "0.5";
            }
            if (currentPlayerColorTallies[index]) {
                currentPlayerColorTallies[index].style.pointerEvents = "none";
                currentPlayerColorTallies[index].style.opacity = "0.5";
            }
        });
        console.log("All color balls and tallies disabled");
    } else {
        console.log("Shooting for color - disabling red ball, enabling colors");
        
        // If shooting for color, disable red and enable colors
        if (currentPlayerRedBall) {
            currentPlayerRedBall.style.pointerEvents = "none";
            currentPlayerRedBall.style.opacity = "0.5";
            console.log("Red ball disabled");
        }
        if (currentPlayerRedTally) {
            currentPlayerRedTally.style.pointerEvents = "none";
            currentPlayerRedTally.style.opacity = "0.5";
            console.log("Red tally disabled");
        }
        
        // Hide the apply button when shooting for color
        if (currentPlayerApplyButton) {
            currentPlayerApplyButton.style.visibility = "hidden";
            currentPlayerApplyButton.style.opacity = "0";
            console.log("Shooting for color - hiding apply button");
        }
        
        // If in final sequence (all reds potted), handle colors differently
        if (redClickCount >= 15 && remainingPoints <= 27) {
            console.log("In final color sequence");
            
            // In the final sequence, colors must be potted in order
            // Yellow, Green, Brown, Blue, Pink, Black
            
            // Determine which color should be enabled based on remaining points
            if (remainingPoints === 27) {
                // Only yellow is available (27 points remaining)
                console.log("Enabling yellow (27 points remaining)");
                enableOnlyBallAndTally(0, currentPlayerColorBalls, currentPlayerColorTallies);
            } else if (remainingPoints === 25) {
                // Only green is available (25 points remaining)
                console.log("Enabling green (25 points remaining)");
                enableOnlyBallAndTally(1, currentPlayerColorBalls, currentPlayerColorTallies);
            } else if (remainingPoints === 22) {
                // Only brown is available (22 points remaining)
                console.log("Enabling brown (22 points remaining)");
                enableOnlyBallAndTally(2, currentPlayerColorBalls, currentPlayerColorTallies);
            } else if (remainingPoints === 18) {
                // Only blue is available (18 points remaining)
                console.log("Enabling blue (18 points remaining)");
                enableOnlyBallAndTally(3, currentPlayerColorBalls, currentPlayerColorTallies);
            } else if (remainingPoints === 13) {
                // Only pink is available (13 points remaining)
                console.log("Enabling pink (13 points remaining)");
                enableOnlyBallAndTally(4, currentPlayerColorBalls, currentPlayerColorTallies);
            } else if (remainingPoints === 7) {
                // Only black is available (7 points remaining)
                console.log("Enabling black (7 points remaining)");
                enableOnlyBallAndTally(5, currentPlayerColorBalls, currentPlayerColorTallies);
            }
        } else {
            // During normal play, enable all color balls and tallies
            console.log("Normal play - enabling all color balls and tallies");
            currentPlayerColorBalls.forEach((ball, index) => {
                if (ball) {
                    ball.style.pointerEvents = "auto";
                    ball.style.opacity = "1";
                }
                if (currentPlayerColorTallies[index]) {
                    currentPlayerColorTallies[index].style.pointerEvents = "auto";
                    currentPlayerColorTallies[index].style.opacity = "1";
                }
            });
        }
    }
    
    // Always ensure the miss button for the current player is enabled
    const missButton = document.getElementById(`pot---miss--${currentPlayer === 1 ? 'one' : 'two'}`);
    if (missButton) {
        missButton.style.pointerEvents = "auto";
        missButton.style.opacity = "1";
        console.log(`Miss button for player ${currentPlayer} enabled`);
    }
}

// Helper function to enable only one ball and tally and disable others
function enableOnlyBallAndTally(index, allBalls, allTallies) {
    allBalls.forEach((ball, i) => {
        if (ball) {
            if (i === index) {
                ball.style.pointerEvents = "auto";
                ball.style.opacity = "1";
            } else {
                ball.style.pointerEvents = "none";
                ball.style.opacity = "0.5";
            }
        }
    });
    
    allTallies.forEach((tally, i) => {
        if (tally) {
            if (i === index) {
                tally.style.pointerEvents = "auto";
                tally.style.opacity = "1";
            } else {
                tally.style.pointerEvents = "none";
                tally.style.opacity = "0.5";
            }
        }
    });
}

// Function to disable all buttons for a specific player
function disablePlayerButtons(playerNum) {
    console.log(`Disabling all buttons for player ${playerNum}`);
    
    // Disable all elements with IDs containing the player number
    const allPlayerElements = document.querySelectorAll(`[id*="p${playerNum}"], [id*="${playerNum === 1 ? 'one' : 'two'}"]`);
    allPlayerElements.forEach(element => {
        element.style.pointerEvents = "none";
        element.style.opacity = "0.5";
        console.log(`Disabled element: ${element.id}`);
    });
    
    // Specifically disable all tally elements
    const tallyElements = document.querySelectorAll(`[id^="tally"][id*="p${playerNum}"]`);
    tallyElements.forEach(element => {
        element.style.pointerEvents = "none";
        element.style.opacity = "0.5";
        console.log(`Disabled tally element: ${element.id}`);
    });
    
    // Specifically disable all pot elements
    const potElements = document.querySelectorAll(`[id^="pot"][id*="${playerNum === 1 ? 'one' : 'two'}"]`);
    potElements.forEach(element => {
        element.style.pointerEvents = "none";
        element.style.opacity = "0.5";
        console.log(`Disabled pot element: ${element.id}`);
    });
    
    // Specifically disable the apply button
    const applyButton = document.getElementById(`apply_tally---red--p${playerNum}`);
    if (applyButton) {
        applyButton.style.pointerEvents = "none";
        applyButton.style.opacity = "0";
        applyButton.style.visibility = "hidden";
        console.log(`Disabled apply button: ${applyButton.id}`);
    }
}

// Function to enable all buttons for a specific player
function enablePlayerButtons(playerNum) {
    console.log(`Enabling buttons for player ${playerNum}`);
    
    // Enable all elements with IDs containing the player number
    const allPlayerElements = document.querySelectorAll(`[id*="p${playerNum}"], [id*="${playerNum === 1 ? 'one' : 'two'}"]`);
    allPlayerElements.forEach(element => {
        element.style.pointerEvents = "auto";
        element.style.opacity = "1";
        console.log(`Enabled element: ${element.id}`);
    });
    
    // The updateAvailableBalls function will handle specific game-state restrictions
}

// Function to switch players
function switchPlayer(newPlayer) {
    console.log(`Switching to player ${newPlayer}`);
    currentPlayer = newPlayer;
    
    // Update player number display
    playerNumber.textContent = currentPlayer.toString();
    
    if (currentPlayer === 1) {
        // Player 1 is at the table
        player1Table.style.visibility = "visible";
        player1Table.style.opacity = "1";
        player2Table.style.visibility = "hidden";
        player2Table.style.opacity = "0";
        
        // Disable all player 2 elements
        disablePlayerButtons(2);
        
        // Enable player 1 elements (updateAvailableBalls will handle specific restrictions)
        enablePlayerButtons(1);
    } else {
        // Player 2 is at the table
        player1Table.style.visibility = "hidden";
        player1Table.style.opacity = "0";
        player2Table.style.visibility = "visible";
        player2Table.style.opacity = "1";
        
        // Disable all player 1 elements
        disablePlayerButtons(1);
        
        // Enable player 2 elements (updateAvailableBalls will handle specific restrictions)
        enablePlayerButtons(2);
    }
    
    // Determine what ball to shoot for based on game state
    if (redClickCount < 15) {
        // If there are reds left, always shoot for red first
        shootingForRed = true;
        console.log("Reds available - shooting for red");
    } else if (remainingPoints <= 27) {
        // In the final color sequence
        shootingForRed = false;
        console.log("Final color sequence - shooting for colors in order");
    }
    
    // Update available balls based on game state
    updateAvailableBalls();
    
    // Force a direct update to all tally elements for the inactive player
    const inactivePlayer = currentPlayer === 1 ? 2 : 1;
    const inactiveTallies = document.querySelectorAll(`[id^="tally"][id*="p${inactivePlayer}"]`);
    inactiveTallies.forEach(tally => {
        tally.style.pointerEvents = "none";
        tally.style.opacity = "0.5";
        console.log(`Forced disable of inactive tally: ${tally.id}`);
    });
}

// Wait for DOM to be fully loaded before adding event listeners
document.addEventListener("DOMContentLoaded", function() {
    // Initialize player elements
    playerNumber = document.getElementById("player_number");
    player1Table = document.getElementById("player---1--table");
    player2Table = document.getElementById("player---2--table");
    
    // Set initial player at table
    playerNumber.textContent = "1";
    player1Table.style.visibility = "visible";
    player1Table.style.opacity = "1";
    player2Table.style.visibility = "hidden";
    player2Table.style.opacity = "0";
    
    // Initially disable all player 2 buttons
    disablePlayerButtons(2);
    
    // Enable miss button for player 1, disable for player 2
    missP1 = document.getElementById("tally---potted--miss-p1");
    missP2 = document.getElementById("tally---potted--miss-p2");
    missP1.style.pointerEvents = "auto";
    missP1.style.opacity = "1";
    missP2.style.pointerEvents = "none";
    missP2.style.opacity = "0.5";
    
    // Get pot ball elements - player 1
    redBallP1 = document.getElementById("pot---red--one");
    blackBallP1 = document.getElementById("pot---black--one");
    pinkBallP1 = document.getElementById("pot---pink--one");
    blueBallP1 = document.getElementById("pot---blue--one");
    brownBallP1 = document.getElementById("pot---brown--one")
    greenBallP1 = document.getElementById("pot---green--one");
    yellowBallP1 = document.getElementById("pot---yellow--one");

    p1Score = document.getElementById("p1---score");
    pointsRemaining = document.getElementById("points_remaining");
    highestBreakP1 = document.getElementById("highest---break--p1");
    lastBreakP1 = document.getElementById("last---break--p1");

    //
    redTallyP1 = document.getElementById("tally---potted--red-p1")
    blackTallyP1 = document.getElementById("tally---potted--black-p1");
    pinkTallyP1 = document.getElementById("tally---potted--pink-p1");
    blueTallyP1 = document.getElementById("tally---potted--blue-p1");
    brownTallyP1 = document.getElementById("tally---potted--brown-p1");
    greenTallyP1 = document.getElementById("tally---potted--green-p1");
    yellowTallyP1 = document.getElementById("tally---potted--yellow-p1");

    // frame buttons (player 1)

    const potUndoOne = document.getElementById("pot---undo--one");
    const potMissOne = document.getElementById("pot---miss--one");
    const potFoulOne = document.getElementById("pot---foul--one");
    const potFoulMissOne = document.getElementById("pot---foulmiss--one");
    const potForfeitOne = document.getElementById("pot---forfeit--one"); 
    
    // Get the apply button for red ball tally
    applyRedTallyP1 = document.getElementById("apply_tally---red--p1");
    
    // Hide the apply button by default
    applyRedTallyP1.style.visibility = "hidden";
    applyRedTallyP1.style.opacity = "0";
    
    // Function to calculate and update points remaining
    function updatePointsRemaining() {
        // If we're in the final color sequence (all reds potted)
        if (redClickCount >= 15) {
            // Check if we just potted the last color after the last red
            if (lastBallWasRed === false && shootingForRed === true) {
                // We've just potted the last color after the last red
                // Set to exactly 27 points for the final sequence
                remainingPoints = 27;
                pointsRemaining.textContent = remainingPoints;
            }
        } else {
            // During normal play with reds on the table
            // Calculate based on red balls potted and multi-red shots
            
            // Start with 147 points
            // Each red+color combination removes 8 points (1+7)
            
            // Calculate how many red+color combinations have been completed
            let redColorCombosCompleted = redClickCount;
            
            // Each regular combo reduces by 8 points
            let pointsReduced = redColorCombosCompleted * 8;
            
            // If we're currently shooting for a color (after potting a red)
            // we need to account for the red already potted
            if (!shootingForRed && lastBallWasRed) {
                pointsReduced -= 7; // We've counted the red (1) but not the color (7) yet
            }
            
            // Calculate remaining points
            remainingPoints = 147 - pointsReduced;
            pointsRemaining.textContent = remainingPoints;
        }
    }
    
    // shoot attempt - red ball - player 1
    redBallP1.addEventListener("click", function() {
        // Check if we've already clicked the red ball 15 times in total
        if (redClickCount + tempRedTally >= 15) {
            console.log("Maximum number of red ball clicks (15) reached");
            return; // Exit the function early
        }
        
        // Increment temporary tally
        tempRedTally++;
        
        // Make the red ball tally visible and update display
        redTallyP1.style.visibility = "visible";
        redTallyP1.style.opacity = "1";
        
        // Show the current tally plus the existing count
        redTallyP1.textContent = redClickCount + tempRedTally;
        
        // Make the apply button visible
        applyRedTallyP1.style.visibility = "visible";
        applyRedTallyP1.style.opacity = "1";
    });

    // Apply button event listener
    applyRedTallyP1.addEventListener("click", function(event) {
        event.preventDefault(); // Prevent default link behavior
        
        // Only proceed if there are reds to apply
        if (tempRedTally === 0) {
            return;
        }
        
        // Check if this is a multi-red shot (more than 1 red)
        let isMultiRedShot = tempRedTally > 1;
        
        // Add points to player's score (1 point per red)
        p1CurrentScore += tempRedTally;
        p1Score.textContent = p1CurrentScore;
        
        // Add to current break
        p1CurrentBreak += tempRedTally;
        lastBreakP1.textContent = p1CurrentBreak;
        
        // Update highest break if needed
        if (p1CurrentBreak > p1HighestBreak) {
            p1HighestBreak = p1CurrentBreak;
            highestBreakP1.textContent = p1HighestBreak;
        }
        
        // If this is a multi-red shot, track the extra reds
        if (isMultiRedShot) {
            // Each extra red means one less red+color combo
            // This affects the final calculation to ensure we end with 27 points
            multiRedShotCount += (tempRedTally - 1);
        }
        
        // Update red click count (add the temporary tally)
        redClickCount += tempRedTally;
        
        // Set lastBallWasRed to true
        lastBallWasRed = true;
        
        // Now shooting for color
        shootingForRed = false;
        
        // Update points remaining based on number of reds potted
        // Each red reduces remaining points by 1
        remainingPoints -= tempRedTally;
        pointsRemaining.textContent = remainingPoints;
        
        // Reset temporary tally
        tempRedTally = 0;
        
        // Hide the apply button since we're now shooting for a color
        this.style.visibility = "hidden";
        this.style.opacity = "0";
        
        // Update available balls
        updateAvailableBalls();
    });

    // Yellow ball event listener
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
        
        // Set lastBallWasRed to false
        lastBallWasRed = false;
        
        // Check if we're in the final color sequence
        if (redClickCount >= 15 && remainingPoints <= 27) {
            // We're in the final sequence
            // Deduct the actual value
            remainingPoints -= 2;
            pointsRemaining.textContent = remainingPoints;
            
            // Stay in color sequence mode
            shootingForRed = false;
        } else if (redClickCount >= 15) {
            // This is the last color after the last red
            // Set to exactly 27 points for the final sequence
            remainingPoints = 27;
            pointsRemaining.textContent = remainingPoints;
            
            // Now we're in the final sequence
            shootingForRed = false;
        } else {
            // Normal play - now shooting for red
            shootingForRed = true;
            
            // Update points remaining
            updatePointsRemaining();
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

    // Green ball event listener
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
        
        // Set lastBallWasRed to false
        lastBallWasRed = false;
        
        // Check if we're in the final color sequence
        if (redClickCount >= 15 && remainingPoints <= 27) {
            // We're in the final sequence
            // Deduct the actual value
            remainingPoints -= 3;
            pointsRemaining.textContent = remainingPoints;
            
            // Stay in color sequence mode
            shootingForRed = false;
        } else if (redClickCount >= 15) {
            // This is the last color after the last red
            // Set to exactly 27 points for the final sequence
            remainingPoints = 27;
            pointsRemaining.textContent = remainingPoints;
            
            // Now we're in the final sequence
            shootingForRed = false;
        } else {
            // Normal play - now shooting for red
            shootingForRed = true;
            
            // Update points remaining
            updatePointsRemaining();
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

    // Brown ball event listener
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
        
        // Set lastBallWasRed to false
        lastBallWasRed = false;
        
        // Check if we're in the final color sequence
        if (redClickCount >= 15 && remainingPoints <= 27) {
            // We're in the final sequence
            // Deduct the actual value
            remainingPoints -= 4;
            pointsRemaining.textContent = remainingPoints;
            
            // Stay in color sequence mode
            shootingForRed = false;
        } else if (redClickCount >= 15) {
            // This is the last color after the last red
            // Set to exactly 27 points for the final sequence
            remainingPoints = 27;
            pointsRemaining.textContent = remainingPoints;
            
            // Now we're in the final sequence
            shootingForRed = false;
        } else {
            // Normal play - now shooting for red
            shootingForRed = true;
            
            // Update points remaining
            updatePointsRemaining();
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

    // Blue ball event listener
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
        
        // Set lastBallWasRed to false
        lastBallWasRed = false;
        
        // Check if we're in the final color sequence
        if (redClickCount >= 15 && remainingPoints <= 27) {
            // We're in the final sequence
            // Deduct the actual value
            remainingPoints -= 5;
            pointsRemaining.textContent = remainingPoints;
            
            // Stay in color sequence mode
            shootingForRed = false;
        } else if (redClickCount >= 15) {
            // This is the last color after the last red
            // Set to exactly 27 points for the final sequence
            remainingPoints = 27;
            pointsRemaining.textContent = remainingPoints;
            
            // Now we're in the final sequence
            shootingForRed = false;
        } else {
            // Normal play - now shooting for red
            shootingForRed = true;
            
            // Update points remaining
            updatePointsRemaining();
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

    // Pink ball event listener
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
        
        // Set lastBallWasRed to false
        lastBallWasRed = false;
        
        // Check if we're in the final color sequence
        if (redClickCount >= 15 && remainingPoints <= 27) {
            // We're in the final sequence
            // Deduct the actual value
            remainingPoints -= 6;
            pointsRemaining.textContent = remainingPoints;
            
            // Stay in color sequence mode
            shootingForRed = false;
        } else if (redClickCount >= 15) {
            // This is the last color after the last red
            // Set to exactly 27 points for the final sequence
            remainingPoints = 27;
            pointsRemaining.textContent = remainingPoints;
            
            // Now we're in the final sequence
            shootingForRed = false;
        } else {
            // Normal play - now shooting for red
            shootingForRed = true;
            
            // Update points remaining
            updatePointsRemaining();
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

    // Black ball event listener
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
        
        // Set lastBallWasRed to false
        lastBallWasRed = false;
        
        // Check if we're in the final color sequence
        if (redClickCount >= 15 && remainingPoints <= 27) {
            // We're in the final sequence
            // Deduct the actual value
            remainingPoints -= 7;
            pointsRemaining.textContent = remainingPoints;
            
            // Stay in color sequence mode
            shootingForRed = false;
        } else if (redClickCount >= 15) {
            // This is the last color after the last red
            // Set to exactly 27 points for the final sequence
            remainingPoints = 27;
            pointsRemaining.textContent = remainingPoints;
            
            // Now we're in the final sequence
            shootingForRed = false;
        } else {
            // Normal play - now shooting for red
            shootingForRed = true;
            
            // Update points remaining
            updatePointsRemaining();
        }
        
        // Make the black ball tally visible
        blackTallyP1.style.visibility = "visible";
        blackTallyP1.style.opacity = "1";
        
        // Increment the black ball tally
        let currentTally = parseInt(blackTallyP1.textContent) || 0;
        currentTally++;
        blackTallyP1.textContent = currentTally;
        
        // Update available balls
        updateAvailableBalls();
    });
    
    // Get the reset button
    const resetButton = document.getElementById("reset---app");
    
    // Function to re-rack the table (reset the game)
    function reRackTable() {
        // Reset scores and breaks
        p1CurrentScore = 0;
        p2CurrentScore = 0;
        p1CurrentBreak = 0;
        p2CurrentBreak = 0;
        p1HighestBreak = 0;
        p2HighestBreak = 0;
        
        // Reset score displays
        document.getElementById("p1---score").textContent = "0";
        document.getElementById("p2---score").textContent = "0";
        document.getElementById("last---break--p1").textContent = "0";
        const lastBreakP2 = document.getElementById("last---break--p2");
        if (lastBreakP2) {
            lastBreakP2.textContent = "0";
        }
        
        // Reset game state variables
        lastBallWasRed = false;
        consecutiveRedCount = 0;
        totalRedsPotted = 0;
        redClickCount = 0;
        shootingForRed = true;
        multiRedShotCount = 0;
        tempRedTally = 0;
        
        // Reset points remaining to 147
        remainingPoints = 147;
        pointsRemaining.textContent = "147";
        
        // Reset to player 1
        currentPlayer = 1;
        switchPlayer(1);
        
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
        
        // Reset temporary tally
        tempRedTally = 0;
        
        // Hide the apply button
        applyRedTallyP1.style.visibility = "hidden";
        applyRedTallyP1.style.opacity = "0";
        
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

    // Add event listeners for miss buttons
    missP1.addEventListener("click", function() {
        console.log("Player 1 miss button clicked");
        
        // If player was shooting for a color (not in final sequence), reduce points
        if (!shootingForRed && redClickCount < 15) {
            // Reduce points by 7 (maximum possible color value)
            remainingPoints -= 7;
            pointsRemaining.textContent = remainingPoints;
            console.log(`Reduced remaining points to ${remainingPoints} (missed color)`);
        }
        
        // Reset current break for player 1
        p1CurrentBreak = 0;
        lastBreakP1.textContent = "0";
        console.log("Reset player 1 current break");
        
        // Force player 2 to shoot for red if there are reds left
        if (redClickCount < 15) {
            shootingForRed = true;
            console.log("Player 2 will shoot for red (reds available)");
        } else if (remainingPoints <= 27) {
            // In the final color sequence
            shootingForRed = false;
            console.log("Player 2 will shoot for next color in sequence");
        }
        
        // Disable all player 1 elements
        disablePlayerButtons(1);
        
        // Switch to player 2
        switchPlayer(2);
        
        // Force a direct update to all tally elements for player 1
        const player1Tallies = document.querySelectorAll('[id^="tally"][id*="p1"]');
        player1Tallies.forEach(tally => {
            tally.style.pointerEvents = "none";
            tally.style.opacity = "0.5";
            console.log(`Forced disable of player 1 tally: ${tally.id}`);
        });
    });
    
    missP2.addEventListener("click", function() {
        console.log("Player 2 miss button clicked");
        
        // Only deduct points if player was shooting for a color (not in final sequence)
        if (!shootingForRed && redClickCount < 15) {
            // Reduce points by 7 (maximum possible color value)
            remainingPoints -= 7;
            pointsRemaining.textContent = remainingPoints;
            console.log(`Reduced remaining points to ${remainingPoints} (missed color)`);
        }
        
        // Reset current break for player 2
        p2CurrentBreak = 0;
        const lastBreakP2 = document.getElementById("last---break--p2");
        if (lastBreakP2) {
            lastBreakP2.textContent = "0";
        }
        console.log("Reset player 2 current break");
        
        // Force player 1 to shoot for red if there are reds left
        if (redClickCount < 15) {
            shootingForRed = true;
            console.log("Player 1 will shoot for red (reds available)");
        } else if (remainingPoints <= 27) {
            // In the final color sequence
            shootingForRed = false;
            console.log("Player 1 will shoot for next color in sequence");
        }
        
        // Disable all player 2 elements
        disablePlayerButtons(2);
        
        // Switch to player 1
        switchPlayer(1);
        
        // Force a direct update to all tally elements for player 2
        const player2Tallies = document.querySelectorAll('[id^="tally"][id*="p2"]');
        player2Tallies.forEach(tally => {
            tally.style.pointerEvents = "none";
            tally.style.opacity = "0.5";
            console.log(`Forced disable of player 2 tally: ${tally.id}`);
        });
    });

    // Direct event listener just for player 2's red ball
    const setupPlayer2RedBall = function() {
        console.log("Setting up player 2 red ball");
        
        // Get the red ball element
        const redBall = document.getElementById("pot---red--two");
        
        if (redBall) {
            console.log("Found player 2 red ball element");
            
            // Add a simple click handler
            redBall.addEventListener("click", function() {
                console.log("Player 2 red ball clicked");
                
                // Get the tally element
                const tally = document.getElementById("tally---potted--red-p2");
                
                if (tally) {
                    // Make it visible
                    tally.style.visibility = "visible";
                    tally.style.opacity = "1";
                    
                    // Get current value or default to 0
                    let currentVal = parseInt(tally.textContent);
                    if (isNaN(currentVal)) {
                        currentVal = 0;
                    }
                    
                    // Increment it
                    currentVal++;
                    
                    // Update the display
                    tally.textContent = currentVal;
                    console.log(`Incremented player 2 red tally to ${currentVal}`);
                    
                    // Show the apply button
                    const applyButton = document.getElementById("apply_tally---red--p2");
                    if (applyButton) {
                        applyButton.style.visibility = "visible";
                        applyButton.style.opacity = "1";
                        applyButton.style.pointerEvents = "auto";
                        console.log("Made apply button visible");
                    }
                } else {
                    console.log("Could not find player 2 red tally element");
                }
            });
            
            console.log("Added click handler to player 2 red ball");
        } else {
            console.log("Could not find player 2 red ball element");
        }
    };

    // Run this setup after a short delay to ensure DOM is fully loaded
    setTimeout(setupPlayer2RedBall, 1000);
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
