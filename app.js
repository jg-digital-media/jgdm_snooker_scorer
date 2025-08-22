console.log("app.js connected - 22-08-2025 - 11:58");

// Initialize variables
let p1CurrentScore = 0;
let p2CurrentScore = 0;
let p1CurrentBreak = 0;
let p2CurrentBreak = 0;
let p1HighestBreak = 0;
let p2HighestBreak = 0;
let remainingPoints = 147;
let lastBallWasRed = false;
let redClickCount = 0;
let shootingForRed = true;
let tempRedTally = 0;
let tempRedTallyP2 = 0; // Temporary tally for current shot
let currentPlayer = 1;
let lastRedTallyP1 = 0;
let lastRedTallyP2 = 0;
let p1RedBallsTotal = 0; // Total red balls potted by player 1
let p2RedBallsTotal = 0; // Total red balls potted by player 2

// Define global references to DOM elements
let playerNumber, player1Table, player2Table, missP1, missP2, pointsRemaining;
let redBallP1, yellowBallP1, greenBallP1, brownBallP1, blueBallP1, pinkBallP1, blackBallP1;
let redBallP2, yellowBallP2, greenBallP2, brownBallP2, blueBallP2, pinkBallP2, blackBallP2;
let redTallyP1, yellowTallyP1, greenTallyP1, brownTallyP1, blueTallyP1, pinkTallyP1, blackTallyP1;
let lastBreakP1, highestBreakP1, p1Score, applyRedTallyP1;
let lastBreakP2, highestBreakP2, p2Score, applyRedTallyP2;

// Set the default text content of #points_remaining to 147
document.getElementById('points_remaining').textContent = '147';

// Function to update which balls are enabled/disabled based on game state
function updateAvailableBalls() {
    
    // If there are no points remaining, end the frame
    if (remainingPoints === 0) {

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
        
    // Apply game-state-specific restrictions for the current player
    if (shootingForRed) {
        
        // If shooting for red, enable red and disable colors
        if (redClickCount < 15) {
            if (currentPlayerRedBall) {
                currentPlayerRedBall.style.pointerEvents = "auto";
                currentPlayerRedBall.style.opacity = "1";
                currentPlayerRedBall.style.cursor = "pointer";

            }
            if (currentPlayerRedTally) {
                currentPlayerRedTally.style.pointerEvents = "auto";
                currentPlayerRedTally.style.opacity = "1";
                currentPlayerRedTally.style.cursor = "pointer";

            }
            
            // If there's only one red left, hide the apply button
            if (redClickCount === 14 && currentPlayerApplyButton) {
                currentPlayerApplyButton.style.visibility = "hidden";
                currentPlayerApplyButton.style.opacity = "0";
            }
        } else {
            // If all reds are potted, disable red
            if (currentPlayerRedBall) {
                currentPlayerRedBall.style.pointerEvents = "none";
                currentPlayerRedBall.style.opacity = "0.5";
            }
            if (currentPlayerRedTally) {
                currentPlayerRedTally.style.pointerEvents = "none";
                currentPlayerRedTally.style.opacity = "0.5";
            }
            
            // Hide the apply button
            if (currentPlayerApplyButton) {
                currentPlayerApplyButton.style.visibility = "hidden";
                currentPlayerApplyButton.style.opacity = "0";
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

    } else {
        
        // If shooting for color, disable red and enable colors
        if (currentPlayerRedBall) {
            currentPlayerRedBall.style.pointerEvents = "none";
            currentPlayerRedBall.style.opacity = "0.5";

        }
        if (currentPlayerRedTally) {
            currentPlayerRedTally.style.pointerEvents = "none";
            currentPlayerRedTally.style.opacity = "0.5";

        }
        
        // Hide the apply button when shooting for color
        if (currentPlayerApplyButton) {
            currentPlayerApplyButton.style.visibility = "hidden";
            currentPlayerApplyButton.style.opacity = "0";
        }
        
        // If in final sequence (all reds potted), handle colors differently
        if (redClickCount >= 15 && remainingPoints <= 27) {
            
            // In the final sequence, colors must be potted in order
            // Yellow, Green, Brown, Blue, Pink, Black
            
            // Determine which color should be enabled based on remaining points
            if (remainingPoints === 27) {
                // Only yellow is available (27 points remaining)
                enableOnlyBallAndTally(0, currentPlayerColorBalls, currentPlayerColorTallies);
            } else if (remainingPoints === 25) {
                // Only green is available (25 points remaining)
                enableOnlyBallAndTally(1, currentPlayerColorBalls, currentPlayerColorTallies);
            } else if (remainingPoints === 22) {
                // Only brown is available (22 points remaining)
                enableOnlyBallAndTally(2, currentPlayerColorBalls, currentPlayerColorTallies);
            } else if (remainingPoints === 18) {
                // Only blue is available (18 points remaining)
                enableOnlyBallAndTally(3, currentPlayerColorBalls, currentPlayerColorTallies);
            } else if (remainingPoints === 13) {
                // Only pink is available (13 points remaining)
                enableOnlyBallAndTally(4, currentPlayerColorBalls, currentPlayerColorTallies);
            } else if (remainingPoints === 7) {
                // Only black is available (7 points remaining)
                enableOnlyBallAndTally(5, currentPlayerColorBalls, currentPlayerColorTallies);
            }
        } else {
            // During normal play, enable all color balls and tallies
            currentPlayerColorBalls.forEach((ball, index) => {
                if (ball) {
                    ball.style.pointerEvents = "auto";
                    ball.style.opacity = "1";
                    ball.style.cursor = "pointer";
                }
                if (currentPlayerColorTallies[index]) {
                    currentPlayerColorTallies[index].style.pointerEvents = "auto";
                    currentPlayerColorTallies[index].style.opacity = "1";
                    currentPlayerColorTallies[index].style.cursor = "pointer";
                }
            });
        }
    }
    
    // Always ensure the miss button for the current player is enabled
    const missButton = document.getElementById(`pot---miss--${currentPlayer === 1 ? 'one' : 'two'}`);
    if (missButton) {
        missButton.style.pointerEvents = "auto";
        missButton.style.opacity = "1";
        missButton.style.cursor = "pointer";
    }
}

// Function to disable all interactive elements when the frame is over
function endFrame() {
    
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
            

        }
    });
    
    // Specifically disable player break elements
    const playerBreaksP1 = document.getElementById("player---breaks--p1");
    const playerBreaksP2 = document.getElementById("player---breaks--p2");
    
    if (playerBreaksP1) {
        playerBreaksP1.style.pointerEvents = "none";
        playerBreaksP1.style.opacity = "0.5";

    }
    
    if (playerBreaksP2) {
        playerBreaksP2.style.pointerEvents = "none";
        playerBreaksP2.style.opacity = "0.5";

    }
    
    // Hide all apply buttons
    const applyButtons = document.querySelectorAll('[id^="apply_tally"]');
    applyButtons.forEach(button => {
        button.style.visibility = "hidden";
        button.style.opacity = "0";

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
    frameOverMessage.style.boxShadow = "#fff041 0px 0px 9px 4px";;
    frameOverMessage.style.background = "linear-gradient(145deg, #014819, #1ea34c)";
    frameOverMessage.style.border = "4px solid #fff041";
    // border: 2px solid #21a20d;
    
    // Only add the message if it doesn't already exist
    if (!document.getElementById("frame-over-message")) {
        frameOverMessage.id = "frame-over-message";
        document.body.appendChild(frameOverMessage);
    }
    

}

// Function to handle player forfeit
function forfeitFrame(forfeitingPlayer) {
    console.log(`Player ${forfeitingPlayer} has forfeited the frame`);
    
    // Disable all interactive elements (same as endFrame)
    const allInteractiveElements = document.querySelectorAll("*");
    allInteractiveElements.forEach(element => {
        const tagName = element.tagName.toLowerCase();
        if (tagName === 'button' || tagName === 'a' || tagName === 'input' || 
            tagName === 'select' || tagName === 'textarea' || 
            element.id.includes('pot') || element.id.includes('tally') || 
            element.id.includes('apply') || element.id.includes('miss')) {
            
            element.style.pointerEvents = "none";
            
            if (element.id.includes('pot') || element.id.includes('tally') || 
                element.id.includes('apply') || element.id.includes('miss')) {
                element.style.opacity = "0.5";
            }
        }
    });
    
    // Disable player break elements
    const playerBreaksP1 = document.getElementById("player---breaks--p1");
    const playerBreaksP2 = document.getElementById("player---breaks--p2");
    
    if (playerBreaksP1) {
        playerBreaksP1.style.pointerEvents = "none";
        playerBreaksP1.style.opacity = "0.5";
    }
    
    if (playerBreaksP2) {
        playerBreaksP2.style.pointerEvents = "none";
        playerBreaksP2.style.opacity = "0.5";
    }
    
    // Hide all apply buttons
    const applyButtons = document.querySelectorAll('[id^="apply_tally"]');
    applyButtons.forEach(button => {
        button.style.visibility = "hidden";
        button.style.opacity = "0";
    });
    
    // Determine the winner (opposite of forfeiting player)
    const winner = forfeitingPlayer === 1 ? 2 : 1;
    console.log(`Frame won by forfeit - Player ${winner} wins`);
    
    // Create a frame complete message with forfeit information
    const frameOverMessage = document.createElement("div");
    frameOverMessage.textContent = `Frame Complete - Player ${winner} Wins by Forfeit!`;
    
    // Add forfeit information
    const forfeitInfo = document.createElement("div");
    forfeitInfo.textContent = `Player ${forfeitingPlayer} forfeited the frame`;
    forfeitInfo.style.marginTop = "10px";
    forfeitInfo.style.fontSize = "20px";
    forfeitInfo.style.fontWeight = "bold";
    forfeitInfo.style.color = "#ffec03";
    frameOverMessage.appendChild(forfeitInfo);
    
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
    frameOverMessage.style.boxShadow = "#fff041 0px 0px 9px 4px";;
    frameOverMessage.style.background = "linear-gradient(145deg, #014819, #1ea34c)";
    frameOverMessage.style.border = "4px solid #fff041";
    //border: 2px solid #21a20d;
    
    // Only add the message if it doesn't already exist
    if (!document.getElementById("frame-over-message")) {
        frameOverMessage.id = "frame-over-message";
        document.body.appendChild(frameOverMessage);
    }
    

}

// Helper function to enable only one ball and tally and disable others
function enableOnlyBallAndTally(index, allBalls, allTallies) {
    allBalls.forEach((ball, i) => {
        if (ball) {
            if (i === index) {
                ball.style.pointerEvents = "auto";
                ball.style.opacity = "1";
                ball.style.cursor = "pointer";
            } else {
                ball.style.pointerEvents = "none";
                ball.style.opacity = "0.5";
                ball.style.cursor = "default";
            }
        }
    });
    
    allTallies.forEach((tally, i) => {
        if (tally) {
            if (i === index) {
                tally.style.pointerEvents = "auto";
                tally.style.opacity = "1";
                tally.style.cursor = "pointer";
            } else {
                tally.style.pointerEvents = "none";
                tally.style.opacity = "0.5";
                tally.style.cursor = "default";
            }
        }
    });
}

// Function to disable all buttons for a specific player
function disablePlayerButtons(playerNum) {
    
    // Disable all elements with IDs containing the player number
    const allPlayerElements = document.querySelectorAll(`[id*="p${playerNum}"], [id*="${playerNum === 1 ? 'one' : 'two'}"]`);
    allPlayerElements.forEach(element => {
        element.style.pointerEvents = "none";
        element.style.opacity = "0.5";
    });
    
    // Specifically disable all tally elements
    const tallyElements = document.querySelectorAll(`[id^="tally"][id*="p${playerNum}"]`);
    tallyElements.forEach(element => {
        element.style.pointerEvents = "none";
        element.style.opacity = "0.5";
    });
    
    // Specifically disable all pot elements
    const potElements = document.querySelectorAll(`[id^="pot"][id*="${playerNum === 1 ? 'one' : 'two'}"]`);
    potElements.forEach(element => {
        element.style.pointerEvents = "none";
        element.style.opacity = "0.5";
    });
    
    // Specifically disable the apply button
    const applyButton = document.getElementById(`apply_tally---red--p${playerNum}`);
    if (applyButton) {
        applyButton.style.pointerEvents = "none";
        applyButton.style.opacity = "0";
        applyButton.style.visibility = "hidden";
    }
}

// Function to enable all buttons for a specific player
function enablePlayerButtons(playerNum) {
    
    // Enable all elements with IDs containing the player number
    const allPlayerElements = document.querySelectorAll(`[id*="p${playerNum}"], [id*="${playerNum === 1 ? 'one' : 'two'}"]`);

    allPlayerElements.forEach(element => {

        element.style.pointerEvents = "auto";
        element.style.opacity = "1";
        element.style.cursor = "pointer";
    });
}

// Function to switch players in normal play and colour sequence
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
        
        // Call function with argument to Enable player 1 elements (updateAvailableBalls will handle specific restrictions)
        enablePlayerButtons(1);
    } else {
        // Player 2 is at the table
        player1Table.style.visibility = "hidden";
        player1Table.style.opacity = "0";
        player2Table.style.visibility = "visible";
        player2Table.style.opacity = "1";
        
        // Disable all player 1 elements
        disablePlayerButtons(1);
        
        // Call function with argument to Enable player 2 elements (updateAvailableBalls will handle specific restrictions)
        enablePlayerButtons(2);
    }
    
    // Determine what ball to shoot for based on game state
    if (redClickCount < 15) {

        // If there are reds left, always shoot for red first
        shootingForRed = true;
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
    });
}

// Function to make color balls available for player 2
function makeColorBallsAvailableForPlayer2() {
    
    const colorBalls = ["yellow", "green", "brown", "blue", "pink", "black"];
    
    colorBalls.forEach(color => {
        const colorBall = document.getElementById(`pot---${color}--two`);
        if (colorBall) {
            colorBall.style.visibility = "visible";
            colorBall.style.opacity = "1";
            colorBall.style.pointerEvents = "auto";
            colorBall.style.cursor = "pointer";
        }
    });
}

// Wait for DOM to be fully loaded before adding event listeners
document.addEventListener("DOMContentLoaded", function() {

    // Initialize player elements
    playerNumber = document.getElementById("player_number");
    player1Table = document.getElementById("player---1--table");
    player2Table = document.getElementById("player---2--table");
    
    // Set initial player at table as Player 1
    playerNumber.textContent = "1";
    player1Table.style.visibility = "visible";
    player1Table.style.opacity = "1";
    player2Table.style.visibility = "hidden";
    player2Table.style.opacity = "0";
    
    // Player 1 starts first - Initially disable all Player 2 buttons
    disablePlayerButtons(2);
    
    // Enable MISS button for player 1, disable for player 2
    missP1 = document.getElementById("pot---miss--one");
    missP2 = document.getElementById("pot---miss--two");

    missP1.style.pointerEvents = "auto";
    missP1.style.opacity = "1";
    missP2.style.pointerEvents = "none";
    missP2.style.opacity = "0.5";
    
    // Get Ball icon elements - player 1
    redBallP1 = document.getElementById("pot---red--one");
    blackBallP1 = document.getElementById("pot---black--one");
    pinkBallP1 = document.getElementById("pot---pink--one");
    blueBallP1 = document.getElementById("pot---blue--one");
    brownBallP1 = document.getElementById("pot---brown--one")
    greenBallP1 = document.getElementById("pot---green--one");
    yellowBallP1 = document.getElementById("pot---yellow--one");

    p1Score = document.getElementById("p1---score");
    p2Score = document.getElementById("p2---score");
    pointsRemaining = document.getElementById("points_remaining");
    highestBreakP1 = document.getElementById("highest---break--p1");
    lastBreakP1 = document.getElementById("last---break--p1");

    // Get Ball potted tally elements - player 1
    redTallyP1 = document.getElementById("tally---potted--red-p1")
    blackTallyP1 = document.getElementById("tally---potted--black-p1");
    pinkTallyP1 = document.getElementById("tally---potted--pink-p1");
    blueTallyP1 = document.getElementById("tally---potted--blue-p1");
    brownTallyP1 = document.getElementById("tally---potted--brown-p1");
    greenTallyP1 = document.getElementById("tally---potted--green-p1");
    yellowTallyP1 = document.getElementById("tally---potted--yellow-p1");

    // frame buttons (player 1)
    
    // Get the apply button for red ball tally
    applyRedTallyP1 = document.getElementById("apply_tally---red--p1");
    
    // Hide the apply button by default
    applyRedTallyP1.style.visibility = "hidden";
    applyRedTallyP1.style.opacity = "0";
    
    // Function to calculate and update points remaining after each pot
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
        
        // Check if we've already clicked the red ball 15 times in total across both players
        if (p1RedBallsTotal + p2RedBallsTotal + tempRedTally + tempRedTallyP2 >= 15) {
            console.log("Maximum number of red ball clicks (15) reached across both players");
            return; // Exit the function early
        }
        
        // Increment temporary tally
        tempRedTally++;
        
        // Make the red ball tally visible and update display
        redTallyP1.style.visibility = "visible";
        redTallyP1.style.opacity = "1";
        
        // Show only player 1's red ball count (their total plus current temporary tally)
        redTallyP1.textContent = p1RedBallsTotal + tempRedTally;
        
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
        

        
        // Update player 1's individual red ball total
        p1RedBallsTotal += tempRedTally;
        
        // Update total red click count (add the temporary tally)
        redClickCount += tempRedTally;
        
        // Set lastBallWasRed to true
        lastBallWasRed = true;
        
        // Now shooting for color
        shootingForRed = false;
        
        // Update points remaining based on number of reds potted
        // Each red reduces remaining points by 1
        remainingPoints -= tempRedTally;
        pointsRemaining.textContent = remainingPoints;
        
        // Store the number of reds potted for miss calculation
        lastRedTallyP1 = tempRedTally;
        
        // Reset temporary tally
        tempRedTally = 0;
        
        // Hide the apply button since we're now shooting for a color
        this.style.visibility = "hidden";
        this.style.opacity = "0";
        
        // Update available balls
        updateAvailableBalls();
    });

    // Add event listeners for miss buttons
    missP1.addEventListener("click", function() {
        console.log("Player 1 miss button clicked");
        
        // Reset temporary red tally if player missed after clicking red ball but before applying
        if (tempRedTally > 0) {
            console.log(`Resetting Player 1 temporary red tally from ${tempRedTally} to 0`);
            tempRedTally = 0;
            
            // Update the red tally display to show only the applied reds
            redTallyP1.textContent = p1RedBallsTotal > 0 ? p1RedBallsTotal : "&nbsp;";
            if (p1RedBallsTotal === 0) {
                redTallyP1.style.visibility = "hidden";
                redTallyP1.style.opacity = "0";
            }
            
            // Hide the apply button since there's nothing to apply
            applyRedTallyP1.style.visibility = "hidden";
            applyRedTallyP1.style.opacity = "0";
        }
        
        // Check if this is a miss after the last red (15th red) but NOT during final sequence
        if (!shootingForRed && redClickCount >= 15 && remainingPoints > 27) {
            // Missing the color after the last red - go straight to final sequence
            remainingPoints = 27;
            pointsRemaining.textContent = remainingPoints;
            shootingForRed = false;
            console.log("Missed color after last red - setting up final color sequence (27 points)");
        } else if (!shootingForRed && redClickCount >= 15 && remainingPoints <= 27) {
            // Missing during final color sequence - no change to points remaining
            // Next player shoots for the same color
            console.log("Missed during final color sequence - no change to points remaining");
        } else if (!shootingForRed && redClickCount < 15) {
            // Normal miss during regular play - reduce points
            // Calculate points to reduce based on the last red potted
            // Each red potted means we need to reduce by 7 (color value) for each red
            let pointsToReduce = 7; // Base reduction for the current color
            if (lastRedTallyP1 > 1) {
                // If we had multiple reds potted, reduce by 7 for each additional red
                pointsToReduce += (lastRedTallyP1 - 1) * 7;
            }
            remainingPoints -= pointsToReduce;
            pointsRemaining.textContent = remainingPoints;
            console.log(`Reduced remaining points by ${pointsToReduce} (missed color after ${lastRedTallyP1} reds)`);
        }
        
        // Reset current break for player 1
        p1CurrentBreak = 0;
        console.log("Reset player 1 current break");
        
        // Force player 2 to shoot for red if there are reds left
        if (redClickCount < 15) {
            shootingForRed = true;
            console.log("Player 2 will shoot for red (reds available)");
        } else {
            // All reds are potted - player 2 shoots for colors in sequence
            shootingForRed = false;
            console.log("Player 2 will shoot for colors in final sequence");
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

    // Add event listeners for miss buttons
    missP2.addEventListener("click", function() {
        console.log("Player 2 miss button clicked");
        
        // Reset temporary red tally if player missed after clicking red ball but before applying
        if (tempRedTallyP2 > 0) {
            console.log(`Resetting Player 2 temporary red tally from ${tempRedTallyP2} to 0`);
            tempRedTallyP2 = 0;
            
            // Update the red tally display to show only the applied reds
            const redTallyP2 = document.getElementById("tally---potted--red-p2");
            if (redTallyP2) {
                redTallyP2.textContent = p2RedBallsTotal > 0 ? p2RedBallsTotal : "&nbsp;";
                if (p2RedBallsTotal === 0) {
                    redTallyP2.style.visibility = "hidden";
                    redTallyP2.style.opacity = "0";
                }
            }
            
            // Hide the apply button since there's nothing to apply
            const applyRedTallyP2 = document.getElementById("apply_tally---red--p2");
            if (applyRedTallyP2) {
                applyRedTallyP2.style.visibility = "hidden";
                applyRedTallyP2.style.opacity = "0";
            }
        }
        
        // Check if this is a miss after the last red (15th red) but NOT during final sequence
        if (!shootingForRed && redClickCount >= 15 && remainingPoints > 27) {
            // Missing the color after the last red - go straight to final sequence
            remainingPoints = 27;
            pointsRemaining.textContent = remainingPoints;
            shootingForRed = false;
            console.log("Missed color after last red - setting up final color sequence (27 points)");
        } else if (!shootingForRed && redClickCount >= 15 && remainingPoints <= 27) {
            // Missing during final color sequence - no change to points remaining
            // Next player shoots for the same color
            console.log("Missed during final color sequence - no change to points remaining");
        } else if (!shootingForRed && redClickCount < 15) {
            // Normal miss during regular play - reduce points
            // Calculate points to reduce based on the last red potted
            // Each red potted means we need to reduce by 7 (color value) for each red
            let pointsToReduce = 7; // Base reduction for the current color
            if (lastRedTallyP2 > 1) {
                // If we had multiple reds potted, reduce by 7 for each additional red
                pointsToReduce += (lastRedTallyP2 - 1) * 7;
            }
            remainingPoints -= pointsToReduce;
            pointsRemaining.textContent = remainingPoints;
            console.log(`Reduced remaining points by ${pointsToReduce} (missed color after ${lastRedTallyP2} reds)`);
        }
        
        // Reset current break for player 2
        p2CurrentBreak = 0;
        console.log("Reset player 2 current break");
        
        // Force player 1 to shoot for red if there are reds left
        if (redClickCount < 15) {
            shootingForRed = true;
            console.log("Player 1 will shoot for red (reds available)");
        } else {
            // All reds are potted - player 1 shoots for colors in sequence
            shootingForRed = false;
            console.log("Player 1 will shoot for colors in final sequence");
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

    // Enhanced Foul Modal Functions
    let currentFoulPenaltyPoints = 4;
    let foulPlayer = null;

    function showFoulModal(playerNumber) {
        console.log(`Showing foul modal for player ${playerNumber}`);
        const modal = document.getElementById('foulModal');
        const playerIndicator = document.getElementById('foulPlayerNumber');
        
        if (modal && playerIndicator) {
            playerIndicator.textContent = playerNumber;
            modal.classList.add('show');
            
            // Store the player number for use in the confirmation
            foulPlayer = playerNumber;
            
            // Reset penalty points to default
            currentFoulPenaltyPoints = 4;
            document.getElementById('foulPenaltyValue').textContent = currentFoulPenaltyPoints;
            
            // Update button states
            updateFoulPenaltyButtons();
        }
    }

    function hideFoulModal() {
        const modal = document.getElementById('foulModal');
        if (modal) {
            modal.classList.remove('show');
            foulPlayer = null;
        }
    }

    function updateFoulPenaltyButtons() {
        const decreaseBtn = document.getElementById('decreaseFoulPenalty');
        const increaseBtn = document.getElementById('increaseFoulPenalty');
        
        // Disable decrease if at minimum (4)
        decreaseBtn.disabled = currentFoulPenaltyPoints <= 4;
        
        // Disable increase if at maximum (7)
        increaseBtn.disabled = currentFoulPenaltyPoints >= 7;
    }

    function handleFoulConfirm() {
        console.log(`Player ${foulPlayer} foul confirmed`);
        console.log(`Penalty points: ${currentFoulPenaltyPoints}`);
        
        // Store the player before hiding modal
        const foulingPlayer = foulPlayer;
        
        // Hide the modal
        hideFoulModal();
        
        // Apply the penalty (no retake for regular fouls)
        applyFoulMissPenalty(foulingPlayer, currentFoulPenaltyPoints, false);
    }

    // Set up foul modal event listeners
    const foulModal = document.getElementById('foulModal');
    const foulConfirm = document.getElementById('foulConfirm');
    const foulCancel = document.getElementById('foulCancel');
    const decreaseFoulPenalty = document.getElementById('decreaseFoulPenalty');
    const increaseFoulPenalty = document.getElementById('increaseFoulPenalty');

    if (foulConfirm) {
        foulConfirm.addEventListener('click', handleFoulConfirm);
    }

    if (foulCancel) {
        foulCancel.addEventListener('click', function() {
            console.log(`Player ${foulPlayer} foul cancelled`);
            hideFoulModal();
        });
    }

    if (decreaseFoulPenalty) {
        decreaseFoulPenalty.addEventListener('click', function() {
            if (currentFoulPenaltyPoints > 4) {
                currentFoulPenaltyPoints--;
                document.getElementById('foulPenaltyValue').textContent = currentFoulPenaltyPoints;
                updateFoulPenaltyButtons();
                console.log(`Decreased foul penalty to ${currentFoulPenaltyPoints} points`);
            }
        });
    }

    if (increaseFoulPenalty) {
        increaseFoulPenalty.addEventListener('click', function() {
            if (currentFoulPenaltyPoints < 7) {
                currentFoulPenaltyPoints++;
                document.getElementById('foulPenaltyValue').textContent = currentFoulPenaltyPoints;
                updateFoulPenaltyButtons();
                console.log(`Increased foul penalty to ${currentFoulPenaltyPoints} points`);
            }
        });
    }

    // Close foul modal when clicking outside of it
    if (foulModal) {
        foulModal.addEventListener('click', function(e) {
            if (e.target === foulModal) {
                hideFoulModal();
            }
        });
    }

    // Add event listeners for foul buttons
    const foulP1 = document.getElementById("pot---foul--one");
    const foulP2 = document.getElementById("pot---foul--two");

    if (foulP1) {
        foulP1.addEventListener("click", function() {
            console.log("Player 1 foul button clicked");
            // Only show modal if player 1 is currently at the table
            if (currentPlayer === 1) {
                showFoulModal(1);
            }
        });
    }

    if (foulP2) {
        foulP2.addEventListener("click", function() {
            console.log("Player 2 foul button clicked");
            // Only show modal if player 2 is currently at the table
            if (currentPlayer === 2) {
                showFoulModal(2);
            }
        });
    }

    // Custom Modal Functions
    function showForfeitModal(playerNumber) {
        const modal = document.getElementById('modalOverlay');
        const playerIndicator = document.getElementById('modalPlayerNumber');
        
        if (modal && playerIndicator) {
            playerIndicator.textContent = playerNumber;
            modal.classList.add('show');
            
            // Store the player number for use in the confirmation
            modal.dataset.forfeitingPlayer = playerNumber;
        }
    }

    function hideForfeitModal() {
        const modal = document.getElementById('modalOverlay');
        if (modal) {
            modal.classList.remove('show');
            delete modal.dataset.forfeitingPlayer;
        }
    }

    function handleModalConfirm() {
        const modal = document.getElementById('modalOverlay');
        const forfeitingPlayer = parseInt(modal.dataset.forfeitingPlayer);
        
        console.log(`Player ${forfeitingPlayer} forfeit confirmed via custom modal`);
        
        // Hide the modal
        hideForfeitModal();
        
        // Execute the forfeit
        forfeitFrame(forfeitingPlayer);
    }

    function handleModalCancel() {
        const forfeitingPlayer = document.getElementById('modalOverlay').dataset.forfeitingPlayer;
        console.log(`Player ${forfeitingPlayer} forfeit cancelled via custom modal`);
        
        // Hide the modal
        hideForfeitModal();
    }

    // Set up modal event listeners
    const modalOverlay = document.getElementById('modalOverlay');
    const modalConfirm = document.getElementById('modalConfirm');
    const modalCancel = document.getElementById('modalCancel');

    if (modalConfirm) {
        modalConfirm.addEventListener('click', handleModalConfirm);
    }

    if (modalCancel) {
        modalCancel.addEventListener('click', handleModalCancel);
    }

    // Close modal when clicking outside of it
    if (modalOverlay) {
        modalOverlay.addEventListener('click', function(e) {
            if (e.target === modalOverlay) {
                handleModalCancel();
            }
        });
    }

    // Close modal with Escape key
    document.addEventListener('keydown', function(e) {
        if (e.key === 'Escape') {
            const forfeitModal = document.getElementById('modalOverlay');
            const foulModal = document.getElementById('foulModal');
            const foulMissModal = document.getElementById('foulMissModal');
            
            if (forfeitModal && forfeitModal.classList.contains('show')) {
                handleModalCancel();
            } else if (foulModal && foulModal.classList.contains('show')) {
                hideFoulModal();
            } else if (foulMissModal && foulMissModal.classList.contains('show')) {
                hideFoulMissModal();
            }
        }
    });

    // Add event listeners for forfeit buttons
    const forfeitP1 = document.getElementById("pot---forfeit--one");
    const forfeitP2 = document.getElementById("pot---forfeit--two");

    if (forfeitP1) {
        forfeitP1.addEventListener("click", function() {
            console.log("Player 1 forfeit button clicked");
            showForfeitModal(1);
        });
    }

    if (forfeitP2) {
        forfeitP2.addEventListener("click", function() {
            console.log("Player 2 forfeit button clicked");
            showForfeitModal(2);
        });
    }

    // Enhanced Foul + Miss Modal Functions
    let currentPenaltyPoints = 4;
    let foulMissPlayer = null;

    function showFoulMissModal(playerNumber) {
        console.log(`Showing foul+miss modal for player ${playerNumber}`);
        const modal = document.getElementById('foulMissModal');
        const playerIndicator = document.getElementById('foulMissPlayerNumber');
        
        if (modal && playerIndicator) {
            playerIndicator.textContent = playerNumber;
            modal.classList.add('show');
            
            // Store the player number for use in the confirmation
            foulMissPlayer = playerNumber;
            
            // Reset penalty points to default
            currentPenaltyPoints = 4;
            document.getElementById('penaltyValue').textContent = currentPenaltyPoints;
            
            // Reset retake checkbox
            document.getElementById('forceRetake').checked = false;
            
            // Update button states
            updatePenaltyButtons();
        }
    }

    function hideFoulMissModal() {
        const modal = document.getElementById('foulMissModal');
        if (modal) {
            modal.classList.remove('show');
            foulMissPlayer = null;
        }
    }

    function updatePenaltyButtons() {
        const decreaseBtn = document.getElementById('decreasePenalty');
        const increaseBtn = document.getElementById('increasePenalty');
        
        // Disable decrease if at minimum (4)
        decreaseBtn.disabled = currentPenaltyPoints <= 4;
        
        // Disable increase if at maximum (7)
        increaseBtn.disabled = currentPenaltyPoints >= 7;
    }

    function handleFoulMissConfirm() {
        const forceRetake = document.getElementById('forceRetake').checked;
        
        console.log(`Player ${foulMissPlayer} foul+miss confirmed`);
        console.log(`Penalty points: ${currentPenaltyPoints}`);
        console.log(`Force retake: ${forceRetake}`);
        
        // Store the player before hiding modal (which sets foulMissPlayer to null)
        const foulingPlayer = foulMissPlayer;
        
        // Hide the modal
        hideFoulMissModal();
        
        // Apply the penalty with the stored player value
        applyFoulMissPenalty(foulingPlayer, currentPenaltyPoints, forceRetake);
    }

    function applyFoulMissPenalty(foulingPlayer, penaltyPoints, forceRetake) {
        const opponentPlayer = foulingPlayer === 1 ? 2 : 1;
        
        // Award penalty points to opponent
        if (foulingPlayer === 1) {
            p2CurrentScore += penaltyPoints;
            if (p2Score) {
                p2Score.textContent = p2CurrentScore;
            }
            console.log(`Awarded ${penaltyPoints} penalty points to player 2 (total: ${p2CurrentScore})`);
        } else {
            p1CurrentScore += penaltyPoints;
            if (p1Score) {
                p1Score.textContent = p1CurrentScore;
            }
            console.log(`Awarded ${penaltyPoints} penalty points to player 1 (total: ${p1CurrentScore})`);
        }
        
        // Handle points remaining based on what player was shooting for
        const lastRedTally = foulingPlayer === 1 ? lastRedTallyP1 : lastRedTallyP2;
        
        if (!shootingForRed && redClickCount < 15) {
            // Fouling while shooting for a color - deduct 7 points
            let pointsToReduce = 7;
            if (lastRedTally > 1) {
                // If we had multiple reds potted, reduce by 7 for each additional red
                pointsToReduce += (lastRedTally - 1) * 7;
            }
            remainingPoints -= pointsToReduce;
            pointsRemaining.textContent = remainingPoints;
            console.log(`Reduced remaining points by ${pointsToReduce} (foul+miss on color after ${lastRedTally} reds)`);
        } else if (!shootingForRed && redClickCount >= 15 && remainingPoints > 27) {
            // Fouling on a color after all 15 reds - go straight to color sequence
            remainingPoints = 27;
            pointsRemaining.textContent = remainingPoints;
            shootingForRed = false;
            console.log("Foul+miss on color after 15th red - setting points to 27 for final color sequence");
        } else if (!shootingForRed && redClickCount >= 15 && remainingPoints <= 27) {
            // Foul+miss during final color sequence - no change to points remaining
            // Next player shoots for the same color
            console.log("Foul+miss during final color sequence - no change to points remaining");
        }
        // If shooting for red, no points deducted (red remains available)
        else {
            console.log("Foul+miss on red - no points deducted from remaining points");
        }
        
        // Reset current break for fouling player
        if (foulingPlayer === 1) {
            p1CurrentBreak = 0;
            lastRedTallyP1 = 0;
            
            // Reset temporary red tally if player fouled after clicking red ball but before applying
            if (tempRedTally > 0) {
                console.log(`Resetting Player 1 temporary red tally from ${tempRedTally} to 0 due to foul`);
                tempRedTally = 0;
                
                // Update the red tally display to show only the applied reds
                redTallyP1.textContent = p1RedBallsTotal > 0 ? p1RedBallsTotal : "&nbsp;";
                if (p1RedBallsTotal === 0) {
                    redTallyP1.style.visibility = "hidden";
                    redTallyP1.style.opacity = "0";
                }
                
                // Hide the apply button since there's nothing to apply
                applyRedTallyP1.style.visibility = "hidden";
                applyRedTallyP1.style.opacity = "0";
            }
            
            console.log("Reset player 1 current break");
        } else {
            p2CurrentBreak = 0;
            lastRedTallyP2 = 0;
            
            // Reset temporary red tally if player fouled after clicking red ball but before applying
            if (tempRedTallyP2 > 0) {
                console.log(`Resetting Player 2 temporary red tally from ${tempRedTallyP2} to 0 due to foul`);
                tempRedTallyP2 = 0;
                
                // Update the red tally display to show only the applied reds
                const redTallyP2 = document.getElementById("tally---potted--red-p2");
                if (redTallyP2) {
                    redTallyP2.textContent = p2RedBallsTotal > 0 ? p2RedBallsTotal : "&nbsp;";
                    if (p2RedBallsTotal === 0) {
                        redTallyP2.style.visibility = "hidden";
                        redTallyP2.style.opacity = "0";
                    }
                }
                
                // Hide the apply button since there's nothing to apply
                const applyRedTallyP2 = document.getElementById("apply_tally---red--p2");
                if (applyRedTallyP2) {
                    applyRedTallyP2.style.visibility = "hidden";
                    applyRedTallyP2.style.opacity = "0";
                }
            }
            
            console.log("Reset player 2 current break");
        }
        
                 // Handle retake or player switch
         if (forceRetake) {
             console.log(`Player ${foulingPlayer} must retake the shot`);
             // Fouling player stays at the table and retakes
             // Keep the current player as the fouling player
             console.log(`Player ${foulingPlayer} retakes - no player switch`);
             updateAvailableBalls();
         } else {
             console.log(`Player ${foulingPlayer} fouled - switching to Player ${opponentPlayer} who received penalty points`);
             
             // Normal player switch - opponent who received penalty points comes to table
             // Determine what the next player should shoot for
             if (redClickCount < 15) {
                 shootingForRed = true;
                 console.log(`Player ${opponentPlayer} will shoot for red (reds available)`);
             } else {
                 // All reds are potted - opponent shoots for colors in sequence
                 shootingForRed = false;
                 console.log(`Player ${opponentPlayer} will shoot for colors in final sequence`);
             }
             
             // Switch to the opponent (who received the penalty points)
             switchPlayer(opponentPlayer);
         }
        
        console.log(`FOUL+MISS: ${penaltyPoints} penalty points applied. Retake: ${forceRetake ? 'Yes' : 'No'}`);
    }

    // Set up foul+miss modal event listeners
    const foulMissModal = document.getElementById('foulMissModal');
    const foulMissConfirm = document.getElementById('foulMissConfirm');
    const foulMissCancel = document.getElementById('foulMissCancel');
    const decreasePenalty = document.getElementById('decreasePenalty');
    const increasePenalty = document.getElementById('increasePenalty');

    if (foulMissConfirm) {
        foulMissConfirm.addEventListener('click', handleFoulMissConfirm);
    }

    if (foulMissCancel) {
        foulMissCancel.addEventListener('click', function() {
            console.log(`Player ${foulMissPlayer} foul+miss cancelled`);
            hideFoulMissModal();
        });
    }

    if (decreasePenalty) {
        decreasePenalty.addEventListener('click', function() {
            if (currentPenaltyPoints > 4) {
                currentPenaltyPoints--;
                document.getElementById('penaltyValue').textContent = currentPenaltyPoints;
                updatePenaltyButtons();
                console.log(`Decreased penalty to ${currentPenaltyPoints} points`);
            }
        });
    }

    if (increasePenalty) {
        increasePenalty.addEventListener('click', function() {
            if (currentPenaltyPoints < 7) {
                currentPenaltyPoints++;
                document.getElementById('penaltyValue').textContent = currentPenaltyPoints;
                updatePenaltyButtons();
                console.log(`Increased penalty to ${currentPenaltyPoints} points`);
            }
        });
    }

    // Close modal when clicking outside of it
    if (foulMissModal) {
        foulMissModal.addEventListener('click', function(e) {
            if (e.target === foulMissModal) {
                hideFoulMissModal();
            }
        });
    }

    // Re-rack Modal Functions
    function showRerackModal() {
        const modal = document.getElementById('rerackModalOverlay');
        if (modal) {
            modal.classList.add('show');
        }
    }

    function hideRerackModal() {
        const modal = document.getElementById('rerackModalOverlay');
        if (modal) {
            modal.classList.remove('show');
        }
    }

    function handleRerackConfirm() {
        console.log("Re-rack confirmed - reloading page");
        
        // Hide the modal
        hideRerackModal();
        
        // Reload the page to reset the game
        setTimeout(function () {
            location.reload();
        }, 500);
    }

    function handleRerackCancel() {
        console.log("Re-rack cancelled");
        
        // Hide the modal
        hideRerackModal();
    }

    // Set up re-rack modal event listeners
    const rerackModal = document.getElementById('rerackModalOverlay');
    const rerackConfirm = document.getElementById('rerackModalConfirm');
    const rerackCancel = document.getElementById('rerackModalCancel');

    if (rerackConfirm) {
        rerackConfirm.addEventListener('click', handleRerackConfirm);
    }

    if (rerackCancel) {
        rerackCancel.addEventListener('click', handleRerackCancel);
    }

    // Close re-rack modal when clicking outside of it
    if (rerackModal) {
        rerackModal.addEventListener('click', function(e) {
            if (e.target === rerackModal) {
                handleRerackCancel();
            }
        });
    }

    // Close modal with Escape key - Handles all Modals
    document.addEventListener('keydown', function(e) {
        if (e.key === 'Escape') {
            const forfeitModal = document.getElementById('modalOverlay');
            const foulModal = document.getElementById('foulModal');
            const foulMissModal = document.getElementById('foulMissModal');
            const rerackModal = document.getElementById('rerackModalOverlay');
            
            if (forfeitModal && forfeitModal.classList.contains('show')) {
                handleModalCancel();
            } else if (foulModal && foulModal.classList.contains('show')) {
                hideFoulModal();
            } else if (foulMissModal && foulMissModal.classList.contains('show')) {
                hideFoulMissModal();
            } else if (rerackModal && rerackModal.classList.contains('show')) {
                handleRerackCancel();
            }
        }
    });

    // Add event listeners for FOUL+MISS buttons
    const foulMissP1 = document.getElementById("pot---foulmiss--one");
    const foulMissP2 = document.getElementById("pot---foulmiss--two");

    if (foulMissP1) {

        foulMissP1.addEventListener("click", function() {
            console.log("Player 1 foul+miss button clicked");
            // Only show modal if player 1 is currently at the table
            if (currentPlayer === 1) {
                showFoulMissModal(1);
            }
        });
    }

    if (foulMissP2) {

        foulMissP2.addEventListener("click", function() {
            console.log("Player 2 foul+miss button clicked");
            // Only show modal if player 2 is currently at the table
            if (currentPlayer === 2) {
                showFoulMissModal(2);
            }
        });
    }

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
    
    // Add click event listener to the reset button
    resetButton.addEventListener("click", function(event) {

        event.preventDefault(); // Prevent default link behavior       

        // Show the re-rack confirmation modal instead of immediately reloading
        showRerackModal();
    });

    // Set initial available balls
    updateAvailableBalls();

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
                
                const scoreElement = document.getElementById("p2---score");
                if (scoreElement) {
                    let score = parseInt(scoreElement.textContent);
                    if (isNaN(score)) score = 0;
                    score += tempRedTallyP2; // Add all reds potted in this shot
                    scoreElement.textContent = score;
                    p2CurrentScore = score;
                }
                
                // Update player 2's break (use state, not DOM)
                p2CurrentBreak += tempRedTallyP2;
                const breakElement = document.getElementById("last---break--p2");
                if (breakElement) {
                    breakElement.textContent = p2CurrentBreak;
                }
                console.log(`Updated player 2 break to ${p2CurrentBreak}`);
                
                // Update highest break if needed
                const highestBreakElement = document.getElementById("highest---break--p2");
                if (highestBreakElement) {
                    if (p2CurrentBreak > p2HighestBreak) {
                        p2HighestBreak = p2CurrentBreak;
                        highestBreakElement.textContent = p2HighestBreak;
                    }
                }
                
                // Update points remaining
                const pointsRemainingElement = document.getElementById("points_remaining");
                if (pointsRemainingElement) {
                    remainingPoints -= tempRedTallyP2; // Deduct all reds potted in this shot
                    pointsRemainingElement.textContent = remainingPoints;
                }
                
                // Update player 2's individual red ball total
                p2RedBallsTotal += tempRedTallyP2;
                
                // Update red click count (total reds potted in frame)
                redClickCount += tempRedTallyP2;
                                
                // Store the number of reds potted for miss calculation
                lastRedTallyP2 = tempRedTallyP2;
                
                // Reset temporary tally
                tempRedTallyP2 = 0;
                
                // Hide the apply button
                newApplyButton.style.visibility = "hidden";
                newApplyButton.style.opacity = "0";
                
                // Update game state
                shootingForRed = false;
                lastBallWasRed = true;
                
                // Disable red ball and tally for player 2
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
                    console.log("Disabled player 2 red tally");
                }
                
                // Make color balls available
                makeColorBallsAvailableForPlayer2();
                
                //Update available balls
                updateAvailableBalls();
                
            });
            
            console.log("Added click handler to player 2 apply button");
        } else {
            console.log("Could not find player 2 apply button");
        }
    }

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
            
            // Check if we've already clicked the red ball 15 times in total across both players
            if (p1RedBallsTotal + p2RedBallsTotal + tempRedTally + tempRedTallyP2 >= 15) {
                console.log("Maximum number of red ball clicks (15) reached across both players");
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
                
                // Show only player 2's red ball count (their total plus current temporary tally)
                tally.textContent = p2RedBallsTotal + tempRedTallyP2;
                console.log(`Updated player 2 red tally to ${p2RedBallsTotal + tempRedTallyP2}`);
                
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

    // Initialize player 2's apply button handler
    handlePlayer2ApplyRedTally();

    // Get Player 2 ball elements (now declared globally)
    yellowBallP2 = document.getElementById("pot---yellow--two");
    greenBallP2 = document.getElementById("pot---green--two");
    brownBallP2 = document.getElementById("pot---brown--two");
    blueBallP2 = document.getElementById("pot---blue--two");
    pinkBallP2 = document.getElementById("pot---pink--two");
    blackBallP2 = document.getElementById("pot---black--two");

    // Reusable function for Player 2 color ball clicks
    function handlePlayer2ColorBall(points, color) {
        // Add points to player 2's score
        p2CurrentScore += points;
        p2Score.textContent = p2CurrentScore;
        
        // Add points to current break
        p2CurrentBreak += points;
        const lastBreakP2 = document.getElementById("last---break--p2");
        if (lastBreakP2) {
            lastBreakP2.textContent = p2CurrentBreak;
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
            // We're in the final sequence - deduct the actual value
            remainingPoints -= points;
            pointsRemaining.textContent = remainingPoints;
            // Stay in color sequence mode
            shootingForRed = false;
        } else if (redClickCount >= 15) {
            // This is the last color after the last red - set to exactly 27 points for the final sequence
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
        
        // Make the color ball tally visible and increment it
        const colorTallyP2 = document.getElementById(`tally---potted--${color}-p2`);
        if (colorTallyP2) {
            colorTallyP2.style.visibility = "visible";
            colorTallyP2.style.opacity = "1";
            
            let currentTally = parseInt(colorTallyP2.textContent) || 0;
            currentTally++;
            colorTallyP2.textContent = currentTally;
        }
        
        // Update available balls
        updateAvailableBalls();
    }

    // Set up Player 2 color ball event listeners using the reusable function
    function setupPlayer2ColorBalls() {
        const colorBalls = [
            { element: yellowBallP2, points: 2, color: "yellow" },
            { element: greenBallP2, points: 3, color: "green" },
            { element: brownBallP2, points: 4, color: "brown" },
            { element: blueBallP2, points: 5, color: "blue" },
            { element: pinkBallP2, points: 6, color: "pink" },
            { element: blackBallP2, points: 7, color: "black" }
        ];

        colorBalls.forEach(ball => {
            if (ball.element) {
                ball.element.addEventListener("click", function() {
                    handlePlayer2ColorBall(ball.points, ball.color);
                });
            }
        });
    }

    // Initialize all Player 2 color ball event listeners
    setupPlayer2ColorBalls();
});
            