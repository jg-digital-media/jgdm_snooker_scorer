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