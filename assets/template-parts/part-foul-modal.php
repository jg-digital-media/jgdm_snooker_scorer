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