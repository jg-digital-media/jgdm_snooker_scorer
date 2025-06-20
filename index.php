<?php require "template-parts/inc/header.php"; ?>

    <!-- Custom Confirmation Modal - Player forfeit buttons -->
    <div id="modalOverlay" class="modal-overlay">
        <div class="confirm-modal">
            <div class="modal-title">Forfeit Frame</div>
            <div class="modal-message">
                Are you sure <span class="player-indicator" id="modalPlayerNumber">1</span> wants to forfeit this frame?
            </div>
            <div class="modal-buttons">
                <button class="modal-btn cancel" id="modalCancel">Cancel</button>
                <button class="modal-btn confirm" id="modalConfirm">Yes, Forfeit</button>
            </div>
        </div>
    </div>

    <!-- Foul + Miss Penalty Selection Modal -->
    <div id="foulMissModal" class="modal-overlay">
        <div class="foul-miss-modal">
            <div class="modal-title">Foul + Miss Penalty</div>
            <div class="modal-message">
                Player <span class="player-indicator" id="foulMissPlayerNumber">1</span> committed a foul and miss.<br>
                <small>Penalty points will be awarded to the opponent.</small>
            </div>
            
            <div class="penalty-selection">
                <label>Penalty Points:</label>
                <div class="penalty-controls">
                    <button type="button" class="penalty-btn decrease" id="decreasePenalty">-</button>
                    <span class="penalty-value" id="penaltyValue">4</span>
                    <button type="button" class="penalty-btn increase" id="increasePenalty">+</button>
                </div>
                <div class="penalty-note">Minimum: 4 points, Maximum: 7 points</div>
            </div>

            <div class="retake-option">
                <label>
                    <input type="checkbox" id="forceRetake"> Force opponent to retake the shot
                </label>
            </div>

            <div class="modal-buttons">
                <button class="modal-btn cancel" id="foulMissCancel">Cancel</button>
                <button class="modal-btn confirm" id="foulMissConfirm">Apply Penalty</button>
            </div>
        </div>
    </div>

    <!-- Foul Penalty Selection Modal (No Retake) -->
    <div id="foulModal" class="modal-overlay">
        <div class="foul-miss-modal">
            <div class="modal-title">Foul Penalty</div>
            <div class="modal-message">
                Player <span class="player-indicator" id="foulPlayerNumber">1</span> committed a foul.<br>
                <small>Penalty points will be awarded to the opponent.</small>
            </div>
            
            <div class="penalty-selection">
                <label>Penalty Points:</label>
                <div class="penalty-controls">
                    <button type="button" class="penalty-btn decrease" id="decreaseFoulPenalty">-</button>
                    <span class="penalty-value" id="foulPenaltyValue">4</span>
                    <button type="button" class="penalty-btn increase" id="increaseFoulPenalty">+</button>
                </div>
                <div class="penalty-note">Minimum: 4 points, Maximum: 7 points</div>
            </div>

            <div class="modal-buttons">
                <button class="modal-btn cancel" id="foulCancel">Cancel</button>
                <button class="modal-btn confirm" id="foulConfirm">Apply Penalty</button>
            </div>
        </div>
    </div>

    <main class="interface-container">

        <section class="player---points--status">

            <aside class="active--player">Player <span id="player_number">1</span> is at the table! </aside>
            <aside class="points--remaining">Points Remaining: <span id="points_remaining"></span></aside>

        </section>

        <section class="player---section player---one--section">

            <article class="player---score">

                <div class="player---at--table" id="player---1--table">&nbsp;</div>

                <div class="player---number player---one">

                    <h2>Player 1</h2>                

                </div>

                <div class="player---total--score player---one--score">
                    
                    <h2 id="p1---score">0</h2>
                    
                </div>

            </article>

            <article class="player---potting player---one--potting">

                <!-- POTTED BALL TALLIES (Player 1) ---->
                <article class="player---pot--score player---one--pot player---pot--red" id="pot---red--one">  
                    
                    <p class="pot---tally" id="tally---potted--red-p1">&nbsp;</p>

                </article>

                <article class="player---pot--score player---one--pot player---pot--yellow" id="pot---yellow--one">
                    
                    <p class="pot---tally" id="tally---potted--yellow-p1">&nbsp;</p>
                    
                </article>
                
                <article class="player---pot--score player---one--pot player---pot--green" id="pot---green--one">  

                    <p class="pot---tally" id="tally---potted--green-p1">&nbsp;</p>
                    
                </article>
                
                <article class="player---pot--score player---one--pot player---pot--brown" id="pot---brown--one">  

                    <p class="pot---tally" id="tally---potted--brown-p1">&nbsp;</p>
                    
                </article>
                
                <article class="player---pot--score player---one--pot player---pot--blue" id="pot---blue--one">  

                    <p class="pot---tally" id="tally---potted--blue-p1">&nbsp;</p>
                    
                </article>
                
                <article class="player---pot--score player---one--pot player---pot--pink" id="pot---pink--one">  

                    <p class="pot---tally" id="tally---potted--pink-p1">&nbsp;</p>
                    
                </article>
                
                <article class="player---pot--score player---one--pot player---pot--black" id="pot---black--one">  

                    <p class="pot---tally" id="tally---potted--black-p1">&nbsp;</p>
                    
                </article>
                
                <br />
                
                <a href="#" id="apply_tally---red--p1" class="potting---tally">Apply</a>                
                <br />

                <article class="player---one--pot player---pot--miss player---one--pot-undo" id="pot---undo--one">

                    <p class="pot---tally" id="tally---potted--undo-p1">Undo</p>

                </article>

                <article class="player---one--pot player---pot--miss player---one--pot-miss" id="pot---miss--one">  

                    <p class="pot---tally" id="tally---potted--miss-p1">MISS</p>
                    
                </article>            

                <article class="player---one--pot player---pot--miss player---one--pot-foul" id="pot---foul--one">  

                    <p class="pot---tally" id="tally---potted--foul-p1">FOUL</p>
                    
                </article>         

                <article class="player---one--pot player---pot--miss player---one--pot-foulmiss" id="pot---foulmiss--one">  

                    <p class="pot---tally" id="tally---potted--foulmiss-p1">FOUL+ MISS</p>
                    
                </article>          

                <article class="player---one--pot player---pot--miss" id="pot---forfeit--one">  

                    <p class="pot---tally" id="tally---potted--forfeit-p1">FORFEIT</p>
                    
                </article>

                <br />

                <article class="player---points--difference">

                    <span class="points---ahead">
                        Ahead:  <span id="player---one--ahead">0</span>
                    </span>

                    <span class="points---remaining" id="player---one--remaining">
                        Remaining: <span id="player---one--remaining">0</span>
                    </span>

                </article>

            </article>
            
            <article class="breaks---and--snookers" id="player---breaks--p1">
                
                <div>Highest Break: <span class="highest---break" id="highest---break--p1">0</span></a></div>
                <div>Last Break: <span class="last---break" id="last---break--p1">0</span></a></div>
                <div class="snookers---required">Snookers Required: <span id="snookers---required--p1">0</span></div>
                
            </article>
            
        </section>

        <section class="player---section player---two--section">

            <article class="player---score">

                <div class="player---at--table" id="player---2--table">&nbsp;</div>

                <div class="player---number player---two">

                    <h2>Player 2</h2>                

                </div>

                <article class="player---total--score player---two--score">
                    
                    <h2 id="p2---score">0</h2>
                    
                </article>   
                
            </article>

            <article class="player---potting player---two--potting">

                <!-- POTTED BALL TALLIES (Player 2) ---->
                <article class="player---pot--score player---two--pot player---pot--red" id="pot---red--two">  
                    
                    <p class="pot---tally" id="tally---potted--red-p2">&nbsp;</p>

                </article>

                <article class="player---pot--score player---two--pot player---pot--yellow" id="pot---yellow--two">
                    
                    <p class="pot---tally" id="tally---potted--yellow-p2">&nbsp;</p>
                    
                </article>
            
                <article class="player---pot--score player---two--pot player---pot--green" id="pot---green--two">  

                    <p class="pot---tally" id="tally---potted--green-p2">&nbsp;</p>
                    
                </article>
            
                <article class="player---pot--score player---two--pot player---pot--brown" id="pot---brown--two">  

                    <p class="pot---tally" id="tally---potted--brown-p2">&nbsp;</p>
                    
                </article>
            
                <article class="player---pot--score player---two--pot player---pot--blue" id="pot---blue--two">  

                    <p class="pot---tally" id="tally---potted--blue-p2">&nbsp;</p>
                    
                </article>
            
                <article class="player---pot--score player---two--pot player---pot--pink" id="pot---pink--two">  

                    <p class="pot---tally" id="tally---potted--pink-p2">&nbsp;</p>
                    
                </article>
                
                <article class="player---pot--score player---two--pot player---pot--black " id="pot---black--two">  

                    <p class="pot---tally"  id="tally---potted--black-p2">&nbsp;</p>
                    
                </article>

                <br />
                    
                    <a href="#" id="apply_tally---red--p2" class="potting---tally">Apply</a>
                <br />

                <article class="player---two--pot player---pot--miss player---two--pot-undo" id="put---undo--two">

                    <p class="pot---tally" id="tally---potted--undo-p2">Undo</p>

                </article>

                <article class="player---two--pot player---pot--miss player---two--pot-miss" id="pot---miss--two">  

                    <p class="pot---tally"  id="tally---potted--miss-p2">MISS</p>
                    
                </article>            

                <article class="player---two--pot player---pot--miss player---two--pot-foul" id="pot---foul--two">  

                    <p class="pot---tally"  id="tally---potted--foul-p2">FOUL</p>
                    
                </article>           

                <article class="player---two--pot player---pot--miss player---two--pot-foulmiss" id="pot---foulmiss--two">  

                    <p class="pot---tally" id="tally---potted--foulmiss-p2">FOUL + MISS</p>
                    
                </article>           

                <article class="player---two--pot player---pot--miss" id="pot---forfeit--two">  

                    <p class="pot---tally" id="tally---potted--forfeit-p2">FORFEIT</p>
                    
                </article>

                <br />

                <article class="player---points--difference">
                    
                    <span class="points---ahead">
                        Ahead: <span id="player---two--ahead">0</span>
                    </span>

                    <span class="points---remaining" id="player---two--remaining">
                        Remaining: <span id="player---two--remaining">0</span>
                    </span>

                </article>

            </article>

            <article class="breaks---and--snookers" id="player---breaks--p2">
                
                <div>Highest Break: <span class="highest---break" id="highest---break--p2">0</span></a></div>
                <div>Last Break: <span class="last---break" id="last---break--p2">0</span></a></div>
                <div class="snookers---required">Snookers Required: <span id="snookers---required--p2">0</span></div>
                
            </article>
            
        </section>

        <section class="app---buttons">

            <a href="#" class="app---button" id="reset---app">Re-rack</a>
            <a href="about.php" class="app---button" id="app--app">About</a>
            
        </section>

    </main>

<?php require "template-parts/inc/footer.php"; ?>