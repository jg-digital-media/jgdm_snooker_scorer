console.log("app.js connected - 09-06-2025 - 14:45");

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
let tempRedTallyP2 = 0; // Temporary tally for current shot
let p2RedTallyTotal = 0; // Cumulative tally for player 2's reds
let multiRedShotCount = 0;
let multiRedShotCountP2 = 0;
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
 ;

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
    
    /****
     * 
     * Reset the game
     */

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
        remainingPoints = 147;
        lastBallWasRed = false;
        consecutiveRedCount = 0;
        totalRedsPotted = 0;
        redClickCount = 0;
        shootingForRed = true;
        tempRedTally = 0;
        tempRedTallyP2 = 0;
        p2RedTallyTotal = 0; // Reset player 2's cumulative red tally
        multiRedShotCount = 0;
        multiRedShotCountP2 = 0;
        
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
        tempRedTallyP2 = 0; // Add temporary tally for player 2
        
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
        tempRedTallyP2 = 0; // Add temporary tally for player 2
        
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
                
                // Check if we've already clicked the red ball 15 times in total
                if (redClickCount + tempRedTallyP2 >= 15) {
                    console.log("Maximum number of red ball clicks (15) reached");
                    return; // Exit the function early
                }
                
                // Increment temporary tally
                tempRedTallyP2++;
                
                // Get the tally element
                const tally = document.getElementById("tally---potted--red-p2");
                
                if (tally) {
                    // Make it visible
                    tally.style.visibility = "visible";
                    tally.style.opacity = "1";
                    
                    // Update the display with the total number of reds potted
                    tally.textContent = redClickCount + tempRedTallyP2;
                    console.log(`Updated player 2 red tally to ${redClickCount + tempRedTallyP2}`);
                    
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

    // Function to handle the apply button click for player 2
    function handlePlayer2ApplyRedTally() {
        console.log("Player 2 apply red tally function called");
        
        // Get the apply button
        const applyButton = document.getElementById("apply_tally---red--p2");
        
        if (applyButton) {
            // Remove any existing event listeners
            applyButton.replaceWith(applyButton.cloneNode(true));
            
            // Get the new element after replacing
            const newApplyButton = document.getElementById("apply_tally---red--p2");
            
            // Add click event
            newApplyButton.addEventListener("click", function(event) {
                event.preventDefault(); // Prevent default link behavior
                console.log("Player 2 apply button clicked");
                
                // Check if this is a multi-red shot
                let isMultiRedShot = tempRedTallyP2 > 1;
                
                // 1. Update player 2's score
                const scoreElement = document.getElementById("p2---score");
                if (scoreElement) {
                    let score = parseInt(scoreElement.textContent);
                    if (isNaN(score)) score = 0;
                    score += tempRedTallyP2; // Add all reds potted in this shot
                    scoreElement.textContent = score;
                    p2CurrentScore = score;
                    console.log(`Updated player 2 score to ${score}`);
                }
                
                // 2. Update player 2's break
                const breakElement = document.getElementById("last---break--p2");
                if (breakElement) {
                    let currentBreak = parseInt(breakElement.textContent);
                    if (isNaN(currentBreak)) currentBreak = 0;
                    currentBreak += tempRedTallyP2; // Add all reds potted in this shot
                    breakElement.textContent = currentBreak;
                    p2CurrentBreak = currentBreak;
                    console.log(`Updated player 2 break to ${currentBreak}`);
                }
                
                // 3. Update highest break if needed
                const highestBreakElement = document.getElementById("highest---break--p2");
                if (highestBreakElement) {
                    if (p2CurrentBreak > p2HighestBreak) {
                        p2HighestBreak = p2CurrentBreak;
                        highestBreakElement.textContent = p2HighestBreak;
                        console.log(`Updated player 2 highest break to ${p2HighestBreak}`);
                    }
                }
                
                // 4. Update points remaining
                const pointsRemainingElement = document.getElementById("points_remaining");
                if (pointsRemainingElement) {
                    remainingPoints -= tempRedTallyP2; // Deduct all reds potted in this shot
                    pointsRemainingElement.textContent = remainingPoints;
                    console.log(`Updated points remaining to ${remainingPoints}`);
                }
                
                // 5. Update red click count (total reds potted in frame)
                redClickCount += tempRedTallyP2;
                console.log(`Updated total red click count to ${redClickCount}`);
                
                // 6. Update player 2's cumulative red tally
                p2RedTallyTotal += tempRedTallyP2;
                
                // 7. If this is a multi-red shot, track the extra reds
                if (isMultiRedShot) {
                    multiRedShotCountP2 += (tempRedTallyP2 - 1);
                }
                
                // 8. Reset temporary tally
                tempRedTallyP2 = 0;
                
                // 9. Hide the apply button
                newApplyButton.style.visibility = "hidden";
                newApplyButton.style.opacity = "0";
                
                // 10. Update game state
                shootingForRed = false;
                lastBallWasRed = true;
                
                // 11. Disable red ball and tally for player 2
                const redBallP2 = document.getElementById("pot---red--two");
                if (redBallP2) {
                    redBallP2.style.pointerEvents = "none";
                    redBallP2.style.opacity = "0.5";
                    redBallP2.style.cursor = "default";
                    console.log("Disabled player 2 red ball");
                }
                
                const redTallyP2 = document.getElementById("tally---potted--red-p2");
                if (redTallyP2) {
                    redTallyP2.style.pointerEvents = "none";
                    redTallyP2.style.opacity = "0.5";
                    redTallyP2.style.cursor = "default";
                    // Keep the tally display as is, don't clear it
                    console.log("Disabled player 2 red tally");
                }
                
                // 12. Make color balls available
                makeColorBallsAvailableForPlayer2();
                
                // 13. Update available balls
                updateAvailableBalls();
                
                console.log("Player 2 now shooting for color");
            });
            
            console.log("Added click handler to player 2 apply button");
        } else {
            console.log("Could not find player 2 apply button");
        }
    }

    // Call the function immediately
    handlePlayer2ApplyRedTally();

    // Define yellowBallP2 before using it
    const yellowBallP2 = document.getElementById("pot---yellow--two");
    const greenBallP2 = document.getElementById("pot---green--two");
    const brownBallP2 = document.getElementById("pot---brown--two");
    const blueBallP2 = document.getElementById("pot---blue--two");
    const pinkBallP2 = document.getElementById("pot---pink--two");
    const blackBallP2 = document.getElementById("pot---black--two");

    // Define p2Score to avoid the TypeError
    const p2Score = document.getElementById("p2---score");

    // Only add the event listener if the element exists
    if (yellowBallP2) {
        
        yellowBallP2.addEventListener("click", function() {

            // Add 2 to player 2's score
            p2CurrentScore += 2;
            
            // Make sure p2 Score exists before setting its textContent
            if (p2Score) {
                p2Score.textContent = p2CurrentScore;
            } else {
                console.error("Player 2 score element not found");
            }
            
            // Add 2 to current break
            p2CurrentBreak += 2;
            const lastBreakP2 = document.getElementById("last---break--p2");
            if (lastBreakP2) {
                lastBreakP2.textContent = p2CurrentBreak;
            } else {
                console.error("Player 2 last break element not found");
            }
            
            // Update highest break if needed
            if (p2CurrentBreak > p2HighestBreak) {
                p2HighestBreak = p2CurrentBreak;
                const highestBreakP2 = document.getElementById("highest---break--p2");
                if (highestBreakP2) {
                    highestBreakP2.textContent = p2HighestBreak;
                } else {
                    console.error("Player 2 highest break element not found");
                }
            }
            
            // Set lastBallWasRed to false
            lastBallWasRed = false;
            
            // Get points remaining element
            const pointsRemaining = document.getElementById("points_remaining");
            
            // Check if we're in the final color sequence
            if (redClickCount >= 15 && remainingPoints <= 27) {
                // We're in the final sequence
                // Deduct the actual value
                remainingPoints -= 2;
                if (pointsRemaining) {
                    pointsRemaining.textContent = remainingPoints;
                }
                
                // Stay in color sequence mode
                shootingForRed = false;
            } else if (redClickCount >= 15) {
                // This is the last color after the last red
                // Set to exactly 27 points for the final sequence
                remainingPoints = 27;
                if (pointsRemaining) {
                    pointsRemaining.textContent = remainingPoints;
                }
                
                // Now we're in the final sequence
                shootingForRed = false;
            } else {
                // Normal play - now shooting for red
                shootingForRed = true;
                
                // Update points remaining
                if (typeof updatePointsRemaining === 'function') {
                    updatePointsRemaining();
                } else {
                    // Fallback if function doesn't exist
                    remainingPoints -= 2;
                    if (pointsRemaining) {
                        pointsRemaining.textContent = remainingPoints;
                    }
                }
            }
            
            // Make the yellow ball tally visible
            const yellowTallyP2 = document.getElementById("tally---potted--yellow-p2");
            if (yellowTallyP2) {
                yellowTallyP2.style.visibility = "visible";
                yellowTallyP2.style.opacity = "1";
                
                // Increment the yellow ball tally
                let currentTally = 0;
                try {
                    currentTally = parseInt(yellowTallyP2.textContent) || 0;
                } catch (e) {
                    console.error("Error parsing tally:", e);
                }
                currentTally++;
                yellowTallyP2.textContent = currentTally;
            } else {
                console.error("Yellow tally element for player 2 not found");
            }
            
            // Re-enable red ball for player 2 if not in final sequence
            if (shootingForRed && redClickCount < 15) {
                const redBallP2 = document.getElementById("pot---red--two");
                if (redBallP2) {
                    redBallP2.style.pointerEvents = "auto";
                    redBallP2.style.opacity = "1";
                }
                
                // Disable color balls for player 2
                const colorBalls = ["yellow", "green", "brown", "blue", "pink", "black"];
                colorBalls.forEach(color => {
                    const colorBall = document.getElementById(`pot---${color}--two`);
                    if (colorBall && color !== "yellow") { // Skip the yellow ball we just clicked
                        colorBall.style.pointerEvents = "none";
                        colorBall.style.opacity = "0.5";
                    }
                });
            }
            
            // Update available balls if the function exists
            if (typeof updateAvailableBalls === 'function') {
                updateAvailableBalls();
                updatePlayer2BallAvailability();
            } else {
                console.warn("updateAvailableBalls function not found");
            }
        });
    } else {
        console.error("Yellow ball element for player 2 (pot---yellow--two) not found in the DOM");
    }

    // green  TODO
    if (greenBallP2) {
        
        greenBallP2.addEventListener("click", function() {
            // Add 2 to player 2's score
            p2CurrentScore += 3;
            
            // Make sure p2Score exists before setting its textContent
            if (p2Score) {
                p2Score.textContent = p2CurrentScore;
            } else {
                console.error("Player 2 score element not found");
            }
            
            // Add 3 to current break
            p2CurrentBreak += 3;
            const lastBreakP2 = document.getElementById("last---break--p2");
            if (lastBreakP2) {
                lastBreakP2.textContent = p2CurrentBreak;
            } else {
                console.error("Player 2 last break element not found");
            }
            
            // Update highest break if needed
            if (p2CurrentBreak > p2HighestBreak) {
                p2HighestBreak = p2CurrentBreak;
                const highestBreakP2 = document.getElementById("highest---break--p2");
                if (highestBreakP2) {
                    highestBreakP2.textContent = p2HighestBreak;
                }
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
            const greenTallyP2 = document.getElementById("tally---potted--green-p2");
            if (greenTallyP2) {
                greenTallyP2.style.visibility = "visible";
                greenTallyP2.style.opacity = "1";
                
                // Increment the green ball tally
                let currentTally = 0;
                try {
                    currentTally = parseInt(greenTallyP2.textContent) || 0;
                } catch (e) {
                    console.error("Error parsing tally:", e);
                }
                currentTally++;
                greenTallyP2.textContent = currentTally;
            } else {
                console.error("Green tally element for player 2 not found");
            }
            
            // Re-enable red ball for player 2 if not in final sequence
            if (shootingForRed && redClickCount < 15) {
                const redBallP2 = document.getElementById("pot---red--two");
                if (redBallP2) {
                    redBallP2.style.pointerEvents = "auto";
                    redBallP2.style.opacity = "1";
                }
                
                // Disable color balls for player 2
                const colorBalls = ["yellow", "green", "brown", "blue", "pink", "black"];
                colorBalls.forEach(color => {
                    const colorBall = document.getElementById(`pot---${color}--two`);
                    if (colorBall && color !== "green") { // Skip the green ball we just clicked
                        colorBall.style.pointerEvents = "none";
                        colorBall.style.opacity = "0.5";
                    }
                });
            }
            
            // Update available balls
            updateAvailableBalls();
            updatePlayer2BallAvailability();
        });
    } else {
        console.error("Green ball element for player 2 (pot---green--two) not found in the DOM");
    }

    // brown  TODO
    if (brownBallP2) {
        brownBallP2.addEventListener("click", function() {
            // Add 2 to player 2's score
            p2CurrentScore += 4;
            
            // Make sure p2Score exists before setting its textContent
            if (p2Score) {
                p2Score.textContent = p2CurrentScore;
            } else {
                console.error("Player 2 score element not found");
            }
            
            // Add 2 to current break
            p2CurrentBreak += 4;
            const lastBreakP2 = document.getElementById("last---break--p2");
            if (lastBreakP2) {
                lastBreakP2.textContent = p2CurrentBreak;
            } else {
                console.error("Player 2 last break element not found");
            }
            
            // Update highest break if needed
            if (p2CurrentBreak > p2HighestBreak) {
                p2HighestBreak = p2CurrentBreak;
                const highestBreakP2 = document.getElementById("highest---break--p2");
                if (highestBreakP2) {
                    highestBreakP2.textContent = p2HighestBreak;
                } else {
                    console.error("Player 2 highest break element not found");
                }
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
            const brownTallyP2 = document.getElementById("tally---potted--brown-p2");
            if (brownTallyP2) {
                brownTallyP2.style.visibility = "visible";
                brownTallyP2.style.opacity = "1";
                
                // Increment the brown ball tally
                let currentTally = 0;
                try {
                    currentTally = parseInt(brownTallyP2.textContent) || 0;
                } catch (e) {
                    console.error("Error parsing tally:", e);
                }
                currentTally++;
                brownTallyP2.textContent = currentTally;
            } else {
                console.error("Brown tally element for player 2 not found");
            }
            
            // Re-enable red ball for player 2 if not in final sequence
            if (shootingForRed && redClickCount < 15) {
                const redBallP2 = document.getElementById("pot---red--two");
                if (redBallP2) {
                    redBallP2.style.pointerEvents = "auto";
                    redBallP2.style.opacity = "1";
                }
                
                // Disable color balls for player 2
                const colorBalls = ["yellow", "green", "brown", "blue", "pink", "black"];
                colorBalls.forEach(color => {
                    const colorBall = document.getElementById(`pot---${color}--two`);
                    if (colorBall && color !== "brown") { // Skip the brown ball we just clicked
                        colorBall.style.pointerEvents = "none";
                        colorBall.style.opacity = "0.5";
                    }
                });
            }
            
            // Update available balls if the function exists
            if (typeof updateAvailableBalls === 'function') {
                updateAvailableBalls();
            } else {
                console.warn("updateAvailableBalls function not found");
            }
        });
    } else {
        console.error("Brown ball element for player 2 not found in the DOM");
    }

    // blue   TODO
     if (blueBallP2) {
        blueBallP2.addEventListener("click", function() {
            // Add 2 to player 2's score
            p2CurrentScore += 5;
            
            // Make sure p2Score exists before setting its textContent
            if (p2Score) {
                p2Score.textContent = p2CurrentScore;
            } else {
                console.error("Player 2 score element not found");
            }
            
            // Add 2 to current break
            p2CurrentBreak += 5;
            const lastBreakP2 = document.getElementById("last---break--p2");
            if (lastBreakP2) {
                lastBreakP2.textContent = p2CurrentBreak;
            } else {
                console.error("Player 2 last break element not found");
            }
            
            // Update highest break if needed
            if (p2CurrentBreak > p2HighestBreak) {
                p2HighestBreak = p2CurrentBreak;
                const highestBreakP2 = document.getElementById("highest---break--p2");
                if (highestBreakP2) {
                    highestBreakP2.textContent = p2HighestBreak;
                }
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
            const blueTallyP2 = document.getElementById("tally---potted--blue-p2");
            if (blueTallyP2) {
                blueTallyP2.style.visibility = "visible";
                blueTallyP2.style.opacity = "1";
                
                // Increment the blue ball tally
                let currentTally = 0;
                try {
                    currentTally = parseInt(blueTallyP2.textContent) || 0;
                } catch (e) {
                    console.error("Error parsing tally:", e);
                }
                currentTally++;
                blueTallyP2.textContent = currentTally;
            } else {
                console.error("Blue tally element for player 2 not found");
            }
            
            // Re-enable red ball for player 2 if not in final sequence
            if (shootingForRed && redClickCount < 15) {
                const redBallP2 = document.getElementById("pot---red--two");
                if (redBallP2) {
                    redBallP2.style.pointerEvents = "auto";
                    redBallP2.style.opacity = "1";
                }
                
                // Disable color balls for player 2
                const colorBalls = ["yellow", "green", "brown", "blue", "pink", "black"];
                colorBalls.forEach(color => {
                    const colorBall = document.getElementById(`pot---${color}--two`);
                    if (colorBall && color !== "blue") { // Skip the blue ball we just clicked
                        colorBall.style.pointerEvents = "none";
                        colorBall.style.opacity = "0.5";
                    }
                });
            }
            
            // Update available balls
            updateAvailableBalls();
            updatePlayer2BallAvailability();
        });
    } else {
        console.error("Blue ball element for player 2 not found in the DOM");
    }

    // pink  TODO
     if (pinkBallP2) {
        pinkBallP2.addEventListener("click", function() {

            // Add 2 to player 2's score
            p2CurrentScore += 6;
            
            // Make sure p2Score exists before setting its textContent
            if (p2Score) {
                p2Score.textContent = p2CurrentScore;
            } else {
                console.error("Player 2 score element not found");
            }
            
            // Add 2 to current break
            p2CurrentBreak += 6;
            const lastBreakP2 = document.getElementById("last---break--p2");
            if (lastBreakP2) {
                lastBreakP2.textContent = p2CurrentBreak;
            } else {
                console.error("Player 2 last break element not found");
            }
            
            // Update highest break if needed
            if (p2CurrentBreak > p2HighestBreak) {
                p2HighestBreak = p2CurrentBreak;
                const highestBreakP2 = document.getElementById("highest---break--p2");
                if (highestBreakP2) {
                    highestBreakP2.textContent = p2HighestBreak;
                }
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
            const pinkTallyP2 = document.getElementById("tally---potted--pink-p2");
            if (pinkTallyP2) {
                pinkTallyP2.style.visibility = "visible";
                pinkTallyP2.style.opacity = "1";
                
                // Increment the pink ball tally
                let currentTally = 0;
                try {
                    currentTally = parseInt(pinkTallyP2.textContent) || 0;
                } catch (e) {
                    console.error("Error parsing tally:", e);
                }
                currentTally++;
                pinkTallyP2.textContent = currentTally;
            } else {
                console.error("Pink tally element for player 2 not found");
            }
            
            // Re-enable red ball for player 2 if not in final sequence
            if (shootingForRed && redClickCount < 15) {
                const redBallP2 = document.getElementById("pot---red--two");
                if (redBallP2) {
                    redBallP2.style.pointerEvents = "auto";
                    redBallP2.style.opacity = "1";
                }
                
                // Disable color balls for player 2
                const colorBalls = ["yellow", "green", "brown", "blue", "pink", "black"];
                colorBalls.forEach(color => {
                    const colorBall = document.getElementById(`pot---${color}--two`);
                    if (colorBall && color !== "pink") { // Skip the pink ball we just clicked
                        colorBall.style.pointerEvents = "none";
                        colorBall.style.opacity = "0.5";
                    }
                });
            }
            
            // Update available balls
            updateAvailableBalls();
            updatePlayer2BallAvailability();
        });
    } else {
        console.error("Pink ball element for player 2 not found in the DOM");
    }

    // black  TODO
     if (blackBallP2) {
        blackBallP2.addEventListener("click", function() {
            // Add 2 to player 2's score
            p2CurrentScore += 7;
            
            // Make sure p2Score exists before setting its textContent
            if (p2Score) {
                p2Score.textContent = p2CurrentScore;
            } else {
                console.error("Player 2 score element not found");
            }
            
            // Add 2 to current break
            p2CurrentBreak += 7;
            const lastBreakP2 = document.getElementById("last---break--p2");
            if (lastBreakP2) {
                lastBreakP2.textContent = p2CurrentBreak;
            } else {
                console.error("Player 2 last break element not found");
            }
            
            // Update highest break if needed
            if (p2CurrentBreak > p2HighestBreak) {
                p2HighestBreak = p2CurrentBreak;
                const highestBreakP2 = document.getElementById("highest---break--p2");
                if (highestBreakP2) {
                    highestBreakP2.textContent = p2HighestBreak;
                }
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
            const blackTallyP2 = document.getElementById("tally---potted--black-p2");
            if (blackTallyP2) {
                blackTallyP2.style.visibility = "visible";
                blackTallyP2.style.opacity = "1";
                
                // Increment the black ball tally
                let currentTally = 0;
                try {
                    currentTally = parseInt(blackTallyP2.textContent) || 0;
                } catch (e) {
                    console.error("Error parsing tally:", e);
                }
                currentTally++;
                blackTallyP2.textContent = currentTally;
            } else {
                console.error("Black tally element for player 2 not found");
            }
            
            // Re-enable red ball for player 2 if not in final sequence
            if (shootingForRed && redClickCount < 15) {
                const redBallP2 = document.getElementById("pot---red--two");
                if (redBallP2) {
                    redBallP2.style.pointerEvents = "auto";
                    redBallP2.style.opacity = "1";
                }
                
                // Disable color balls for player 2
                const colorBalls = ["yellow", "green", "brown", "blue", "pink", "black"];
                colorBalls.forEach(color => {
                    const colorBall = document.getElementById(`pot---${color}--two`);
                    if (colorBall && color !== "black") { // Skip the black ball we just clicked
                        colorBall.style.pointerEvents = "none";
                        colorBall.style.opacity = "0.5";
                    }
                });
            }
            
            // Update available balls
            updateAvailableBalls();
            updatePlayer2BallAvailability();
        });
    } else {
        console.error("Black ball element for player 2 not found in the DOM");
    }
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

// Function to make color balls available for player 2
function makeColorBallsAvailableForPlayer2() {
    console.log("Making color balls available for player 2");
    
    const colorBalls = ["yellow", "green", "brown", "blue", "pink", "black"];
    
    colorBalls.forEach(color => {
        const colorBall = document.getElementById(`pot---${color}--two`);
        if (colorBall) {
            colorBall.style.visibility = "visible";
            colorBall.style.opacity = "1";
            colorBall.style.pointerEvents = "auto";
            console.log(`Made ${color} ball available for player 2`);
        }
    });
}

// Helper function to disable red balls when 15 are potted
function disableRedBalls() {
    console.log("Disabling all red balls - 15 reds potted");
    
    // Disable red ball for player 1
    const redBallP1 = document.getElementById("pot---red--one");
    if (redBallP1) {
        redBallP1.style.pointerEvents = "none";
        redBallP1.style.opacity = "0.5";
        redBallP1.style.cursor = "pointer";
    }
    
    // Disable red ball for player 2
    const redBallP2 = document.getElementById("pot---red--two");
    if (redBallP2) {
        redBallP2.style.pointerEvents = "none";
        redBallP2.style.opacity = "0.5";
        redBallP2.style.cursor = "pointer";
    }
    
    // Hide apply buttons
    const applyButtonP1 = document.getElementById("apply_tally---red--p1");
    if (applyButtonP1) {
        applyButtonP1.style.visibility = "hidden";
    }
    
    const applyButtonP2 = document.getElementById("apply_tally---red--p2");
    if (applyButtonP2) {
        applyButtonP2.style.visibility = "hidden";
    }
}

// Function to update player 2 ball availability based on game state
function updatePlayer2BallAvailability() {
    console.log("Updating ball availability for player 2");
    
    // Only proceed if it's player 2's turn
    if (currentPlayer !== 2) {
        console.log("Not player 2's turn, skipping ball availability update");
        return;
    }
    
    // Get all ball elements for player 2
    const redBallP2 = document.getElementById("pot---red--two");
    const yellowBallP2 = document.getElementById("pot---yellow--two");
    const greenBallP2 = document.getElementById("pot---green--two");
    const brownBallP2 = document.getElementById("pot---brown--two");
    const blueBallP2 = document.getElementById("pot---blue--two");
    const pinkBallP2 = document.getElementById("pot---pink--two");
    const blackBallP2 = document.getElementById("pot---black--two");
    
    // Array of all color balls
    const colorBalls = [yellowBallP2, greenBallP2, brownBallP2, blueBallP2, pinkBallP2, blackBallP2];
    const colorNames = ["yellow", "green", "brown", "blue", "pink", "black"];
    
    if (shootingForRed && redClickCount < 15) {
        // Shooting for red - enable red ball, disable color balls
        console.log("Player 2 is shooting for red");
        
        // Enable red ball
        if (redBallP2) {
            redBallP2.style.pointerEvents = "auto";
            redBallP2.style.opacity = "1";
            redBallP2.style.cursor = "pointer";
            console.log("Enabled red ball for player 2");
        }
        
        // Disable all color balls
        colorBalls.forEach((ball, index) => {
            if (ball) {
                ball.style.pointerEvents = "none";
                ball.style.opacity = "0.5";
                ball.style.cursor = "default";
                console.log(`Disabled ${colorNames[index]} ball for player 2`);
            }
        });
    } else {
        // Shooting for color - disable red ball, enable color balls
        console.log("Player 2 is shooting for color");
        
        // Disable red ball
        if (redBallP2) {
            redBallP2.style.pointerEvents = "none";
            redBallP2.style.opacity = "0.5";
            redBallP2.style.cursor = "default";
            console.log("Disabled red ball for player 2");
        }
        
        // Enable all color balls
        colorBalls.forEach((ball, index) => {
            if (ball) {
                ball.style.pointerEvents = "auto";
                ball.style.opacity = "1";
                ball.style.cursor = "pointer";
                console.log(`Enabled ${colorNames[index]} ball for player 2`);
            }
        });
    }
    
    // If all reds are potted, ensure red ball is disabled regardless
    if (redClickCount >= 15) {
        if (redBallP2) {
            redBallP2.style.pointerEvents = "none";
            redBallP2.style.opacity = "0.5";
            redBallP2.style.cursor = "default";
            console.log("Disabled red ball for player 2 (all reds potted)");
        }
    }
}

// Update player 2 ball event listeners to call updatePlayer2BallAvailability
// For example, add this at the end of the red ball apply button click handler:
// updatePlayer2BallAvailability();

// Add the updatePlayer2BallAvailability call to all relevant event handlers
document.addEventListener("DOMContentLoaded", function() {

    // Initial ball availability setup
    updatePlayer2BallAvailability();
    
    // Add to player switch function if it exists
    const origSwitchPlayer = window.switchPlayer;
    if (typeof origSwitchPlayer === 'function') {
        window.switchPlayer = function(player) {
            // Call original function
            origSwitchPlayer(player);
            
            // Update ball availability
            updatePlayer2BallAvailability();
        };
        console.log("Patched switchPlayer function to update ball availability");
    }
    
    // Hook into existing updateAvailableBalls function if it exists
    const origUpdateAvailableBalls = window.updateAvailableBalls;
    if (typeof origUpdateAvailableBalls === 'function') {
        window.updateAvailableBalls = function() {
            // Call original function
            origUpdateAvailableBalls();
            
            // Update player 2 ball availability
            updatePlayer2BallAvailability();
        };
        console.log("Patched updateAvailableBalls function to update player 2 ball availability");
    } else {
        // If updateAvailableBalls doesn't exist, create it
        window.updateAvailableBalls = updatePlayer2BallAvailability;
        console.log("Created updateAvailableBalls function");
    }
});

// Call updatePlayer2BallAvailability immediately
updatePlayer2BallAvailability();

// Function to properly update the styling for player 2's balls - with no interval
function updatePlayer2BallStyling() {
    console.log("Updating ball styling for player 2");
    
    // Static counter to prevent excessive logging
    updatePlayer2BallStyling.callCount = (updatePlayer2BallStyling.callCount || 0) + 1;
    if (updatePlayer2BallStyling.callCount % 10 === 0) {
        console.log(`Ball styling function called ${updatePlayer2BallStyling.callCount} times`);
    }
    
    // Get all ball elements for player 2
    const redBallP2 = document.getElementById("pot---red--two");
    const yellowBallP2 = document.getElementById("pot---yellow--two");
    const greenBallP2 = document.getElementById("pot---green--two");
    const brownBallP2 = document.getElementById("pot---brown--two");
    const blueBallP2 = document.getElementById("pot---blue--two");
    const pinkBallP2 = document.getElementById("pot---pink--two");
    const blackBallP2 = document.getElementById("pot---black--two");
    
    // Get all tally elements for player 2
    const redTallyP2 = document.getElementById("tally---potted--red-p2");
    const yellowTallyP2 = document.getElementById("tally---potted--yellow-p2");
    const greenTallyP2 = document.getElementById("tally---potted--green-p2");
    const brownTallyP2 = document.getElementById("tally---potted--brown-p2");
    const blueTallyP2 = document.getElementById("tally---potted--blue-p2");
    const pinkTallyP2 = document.getElementById("tally---potted--pink-p2");
    const blackTallyP2 = document.getElementById("tally---potted--black-p2");
    
    // Arrays for easier handling
    const colorBalls = [yellowBallP2, greenBallP2, brownBallP2, blueBallP2, pinkBallP2, blackBallP2];
    const colorTallies = [yellowTallyP2, greenTallyP2, brownTallyP2, blueTallyP2, pinkTallyP2, blackTallyP2];
    const colorNames = ["yellow", "green", "brown", "blue", "pink", "black"];
    
    // Only proceed with styling changes if it's player 2's turn
    if (currentPlayer === 2) {
        console.log("Styling balls for player 2's turn");
        
        if (shootingForRed && redClickCount < 15) {
            // Shooting for red: enable red, disable colors
            console.log("Player 2 shooting for red");
            
            // Style red ball
            if (redBallP2) {
                redBallP2.style.pointerEvents = "auto";
                redBallP2.style.opacity = "1";
                redBallP2.style.cursor = "pointer";
                redBallP2.style.visibility = "visible";
            }
            
            // Style red tally
            if (redTallyP2) {
                redTallyP2.style.pointerEvents = "auto";
                redTallyP2.style.opacity = "1";
                redTallyP2.style.cursor = "pointer";
                redTallyP2.style.visibility = "visible";
            }
            
            // Style color balls and tallies (disabled)
            colorBalls.forEach((ball, index) => {
                if (ball) {
                    ball.style.pointerEvents = "none";
                    ball.style.opacity = "0.5";
                    ball.style.cursor = "pointer";
                }
                
                if (colorTallies[index]) {
                    colorTallies[index].style.pointerEvents = "none";
                    colorTallies[index].style.opacity = "0.5";
                    colorTallies[index].style.cursor = "pointer";
                }
            });
        } else {
            // Shooting for color: disable red, enable colors
            console.log("Player 2 shooting for color");
            
            // Style red ball (disabled)
            if (redBallP2) {
                redBallP2.style.pointerEvents = "none";
                redBallP2.style.opacity = "0.5";
                redBallP2.style.cursor = "default";
            }
            
            // Style red tally (disabled)
            if (redTallyP2) {
                redTallyP2.style.pointerEvents = "none";
                redTallyP2.style.opacity = "0.5";
                redTallyP2.style.cursor = "default";
            }
            
            // Style color balls and tallies (enabled)
            colorBalls.forEach((ball, index) => {
                if (ball) {
                    ball.style.pointerEvents = "auto";
                    ball.style.opacity = "1";
                    ball.style.cursor = "pointer";
                }
                
                if (colorTallies[index]) {
                    colorTallies[index].style.pointerEvents = "auto";
                    colorTallies[index].style.opacity = "1";
                    colorTallies[index].style.cursor = "pointer";
                }
            });
        }
    } else {
        console.log("Not player 2's turn, disabling all player 2 balls");
        
        // Disable all player 2 balls and tallies when it's not their turn
        if (redBallP2) {
            redBallP2.style.pointerEvents = "none";
            redBallP2.style.opacity = "0.5";
            redBallP2.style.cursor = "default";
        }
        
        if (redTallyP2) {
            redTallyP2.style.pointerEvents = "none";
            redTallyP2.style.opacity = "0.5";
            redTallyP2.style.cursor = "default";
        }
        
        colorBalls.forEach((ball, index) => {
            if (ball) {
                ball.style.pointerEvents = "none";
                ball.style.opacity = "0.5";
                ball.style.cursor = "default";
            }
            
            if (colorTallies[index]) {
                colorTallies[index].style.pointerEvents = "none";
                colorTallies[index].style.opacity = "0.5";
                colorTallies[index].style.cursor = "default";
            }
        });
    }
}

// Call this function only at specific events, not on an interval
document.addEventListener("DOMContentLoaded", function() {
    // Initial call once on page load
    updatePlayer2BallStyling();
    
    // Hook into switchPlayer if it exists
    const origSwitchPlayer = window.switchPlayer;
    if (typeof origSwitchPlayer === 'function') {
        window.switchPlayer = function(player) {
            origSwitchPlayer(player);
            updatePlayer2BallStyling();
        };
    }
    
    // Hook into miss button
    const missButtonP2 = document.getElementById("pot---miss--two");
    if (missButtonP2) {
        missButtonP2.addEventListener("click", function() {
            updatePlayer2BallStyling();
        });
    }
    
    // Add event listeners to all player 2 balls to update styling after click
    const p2Balls = [
        document.getElementById("pot---red--two"),
        document.getElementById("pot---yellow--two"),
        document.getElementById("pot---green--two"),
        document.getElementById("pot---brown--two"),
        document.getElementById("pot---blue--two"),
        document.getElementById("pot---pink--two"),
        document.getElementById("pot---black--two")
    ];
    
    p2Balls.forEach(ball => {
        if (ball) {
            ball.addEventListener("click", function() {
                updatePlayer2BallStyling();
            });
        }
    });
    
    // Hook into updateAvailableBalls
    const origUpdateAvailableBalls = window.updateAvailableBalls;
    if (typeof origUpdateAvailableBalls === 'function') {
        window.updateAvailableBalls = function() {
            origUpdateAvailableBalls();
            updatePlayer2BallStyling();
        };
    }
});

// One-time call
updatePlayer2BallStyling();
