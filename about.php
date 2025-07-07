<?php require "assets/template-parts/inc/header.php"; ?>

    <main class="interface-container">

        <article class="about---the---app-section">

            <a href="index.php" class="button" id="back---home--btn">Back to Scorer App</a>

            <h2 class="about---the--app-subheading">About the App</h2>

            <p>This application is a simple way to tally up your Snooker scores as you play through your frames. Such is the scale of this application and the planning required, I decided to open this project out to its own repository. - <a href="https://projects.jonniegrieve.co.uk/snooker_scorer" target="_blank">Link</a></p>           

            <h3 class="about---subheadings">How to use the app</h3>

            <p>The app is designed to be used in a browser or your tablet. The app is responsive and will work on any device that supports HTML5, CSS3, and JavaScript.</p>

            <p>The player that makes the break is always "Player 1".</p>

            <p>To register a pot of a ball, click the appropriate ball icon. To register a miss, click the miss icon.</p>

            <p>In Snooker, there are cases that more than 1 red ball is legally potted in the same shot, click the red ball icon for as many times as required and click "apply". Note that at the moment this action cannot yet be undone.</p>

            <h3 class="about---subheadings">Foul Scenarios</h3>
            
            <ul class="foul---scenario--list">
                <li>Hits red ball when aiming for a colour ball.  <span class="foul---penalty--points">[4 Point Penalty]</span> <strong>Use "Foul" Button</strong></li>
                
                <li>Hits colour ball when aiming for a red ball.  <span class="foul---penalty--points">[4+ Point Penalty or the value of the colour ball hit higher than 4]</span> <strong>Use "Foul" Button</strong></li>
                <li>Player fails to hit target ball when shooting for red - <span class="foul---penalty--points">[Penalty of 4 points or the value of the colour ball hit higher than 4]</span> <strong>Use "FOUL+MISS" Button</strong>.</li>
                <li>Player fails to hit target ball when shooting for a colour - <span class="foul---penalty--points">Penalty of 4+ (4 or the higher value of the colour ball).</span> <strong>Use "FOUL+MISS" Button</strong>.</li>
                <li>Hits red before colour (when on colour). <span class="foul---penalty--points">[Penalty of 4 points]</span> <strong>Use "FOUL" Button</strong>.</li>
                <li>Such as a double hit is a foul - <span class="foul---penalty--points">Penalty of 4+ points (if higher value colour)</span>. <strong>Use "FOUL+MISS" Button</strong>.</li>
                <li>Potting the cue ball is a foul. <span class="foul---penalty--points">[Penalty of 4 points or the value of the colour ball hit higher than 4]</span> <strong>Use "FOUL" Button</strong></li>
                <li>Potting the cue ball is a foul, even if a red or a colour is also potted in the same shot. <span class="foul---penalty--points">[Penalty of 4 points or the value of the colour ball hit higher than 4]</span> <strong>Use "FOUL" Button</strong></li>
                <li>Pots cue ball + other ball(s) <span class="foul---penalty--points">[Penalty of 4 points or the value of the colour ball hit higher than 4]</span> <strong>Use "FOUL" Button</strong></li>
                <!-- <li>Red ball goes off the table</li> -->
            </ul>



            <!-- <h3 class="about---subheadings">Technical Details</h3>

            <p>The application is built using the following technologies:</p>

            <ul>
                <li>PHP</li>
                <li>HTML</li>
                <li>CSS</li>
                <li>JavaScript</li>
                <li>SQLite3</li>
            </ul> -->
          
        </article>

        <!-- About Page 
         
            - About the app
            - Techologies Used
            - Development/Features
            - Contact
            - Links

             There will inevitably be frames where a player forfeits the frame and the table is not cleared. There will be occasions where it's not viable for the winning player to clear the table. This is a player forfeit and the current scores are recorded as the final frame score.</p>
            <p>To use the app, you will need to have a Snooker table set up with the following items:</p>

            <ul>
                <li>A red ball</li>
                <li>A black ball</li>
                <li>A green ball</li>
                <li>A yellow ball</li>
                <li>A pink ball</li>
                <li>A blue ball</li>
                <li>A brown ball</li>


        -->
            
    </main>

<?php require "assets/template-parts/inc/footer.php"; ?>