# Snooker Scorer Application by Jonnie Grieve Digital Media

+ `Notes Last Updated: 15/04/2025 - 11:39`

Use this appliation to tally up your Snooker scores as you play. Such is the scale of this application and the planning required, I decided to open this project out to its own repository.

[Link to the Snooker Scorer Application](https://projects.jonniegrieve.co.uk/snooker_scorer)


## Planning User Flows

### Flow 1

1. `Player 1 At the Table` - **Action**: Player 1 Breaks - No Score
  + `Points Remaining:` 147
  + `Player 1 Score:` 0 - `Last Break:` 0 - `Snookers Required:` 0
  + `Player 2 Score:` 0 - `Last Break:` 0 - `Snookers Required:` 0

2. `Player 2 At the Table` - **Action**: Pots Red - Score: 1
  + `Points Remaining:` 146
  + `Player 1 Score:` 0 - `Last Break:` 0 - `Snookers Required:` 0
  + `Player 2 Score:` 1 - `Last Break:` 1 - `Snookers Required:` 0

3. `Player 2 At the Table` - **Action**: Pots Black - Score: 7
  + `Points Remaining:` 139
  + `Player 1 Score:` 0 - `Last Break:` 0 - `Snookers Required:` 0
  + `Player 2 Score:` 8 - `Last Break:` 8 - `Snookers Required:` 0

3. `Player 2 At the Table` - **Action**: Pots Red - Score: 1
  + `Points Remaining:` 138
  + `Player 1 Score:` 0 - `Last Break:` 0 - `Snookers Required:` 0
  + `Player 2 Score:` 9 - `Last Break:` 9 - `Snookers Required:` 0

4. `Player 2 At the Table` - **Action**: Pots Black - Score: 7
  + `Points Remaining:` 131
  + `Player 1 Score:` 0 - `Last Break:` 0 - `Snookers Required:` 0
  + `Player 2 Score:` 16 - `Last Break:` 16 - `Snookers Required:` 0
  
5. `Player 2 At the Table` - **Action**: Pots Red - Score: 1
  + `Points Remaining:` 130
  + `Player 1 Score:` 0 - `Last Break:` 0 - `Snookers Required:` 0
  + `Player 2 Score:` 17 - `Last Break:` 17 - `Snookers Required:` 0

6. `Player 2 At the Table` - **Action**: Pots Pink - Score: 6
  + `Points Remaining:` 124
  + `Player 1 Score:` 0 - `Last Break:` 0 - `Snookers Required:` 0
  + `Player 2 Score:` 23 - `Last Break:` 23 - `Snookers Required:` 0
  
7. `Player 2 At the Table` - **Action**: Pots Red - Score: 1
  + `Points Remaining:` 123
  + `Player 1 Score:` 0 - `Last Break:` 0 - `Snookers Required:` 0
  + `Player 2 Score:` 24 - `Last Break:` 24 - `Snookers Required:` 0
  
8. `Player 2 At the Table` - **Action**: Pots Blue (Red) - Score: 5
  + `Points Remaining:` 116
  + `Player 1 Score:` 0 - `Last Break:` 0 - `Snookers Required:` 0
  + `Player 2 Score:` 29 - `Last Break:` 29 - `Snookers Required:` 0

9. `Player 2 At the Table` - **Action**: Fails Pot (Red) - Score: 0
  + `Points Remaining:` 116
  + `Player 1 Score:` 0 - `Last Break:` 0 - `Snookers Required:` 0
  + `Player 2 Score:` 29 - `Last Break:` 29 - `Snookers Required:` 0

11. `Player 1 At the Table` - **Action**: Pots Red - Score: 1
  + `Points Remaining:` 115
  + `Player 1 Score:` 1 - `Last Break:` 1 - `Snookers Required:` 0
  + `Player 2 Score:` 29 - `Last Break:` 29 - `Snookers Required:` 0

10. `Player 1 At the Table` - **Action**: Pots Black - Score: 7
  + `Points Remaining:` 138
  + `Player 1 Score:` 8 - `Last Break:` 8 - `Snookers Required:` 0
  + `Player 2 Score:` 29 - `Last Break:` 29 - `Snookers Required:` 0
  
10. `Player 1 At the Table` - **Action**: Pots Red - Score: 1
  + `Points Remaining:` 138
  + `Player 1 Score:` 9 - `Last Break:` 9 - `Snookers Required:` 0
  + `Player 2 Score:` 29 - `Last Break:` 29 - `Snookers Required:` 0

10. `Player 1 At the Table` - **Action**: Pots Blue - Score: 5
  + `Points Remaining:` 138
  + `Player 1 Score:` 14 - `Last Break:` 14 - `Snookers Required:` 0
  + `Player 2 Score:` 1 - `Last Break:` 1 - `Snookers Required:` 0

10. `Player 1 At the Table` - **Action**: Pots Red - Score: 1
  + `Points Remaining:` 138
  + `Player 1 Score:` 15 - `Last Break:` 15 - `Snookers Required:` 0
  + `Player 2 Score:` 1 - `Last Break:` 1 - `Snookers Required:` 0

10. `Player 1 At the Table` - **Action**: Pots Pink - Score: 6
  + `Points Remaining:` 138
  + `Player 1 Score:` 21 - `Last Break:` 21 - `Snookers Required:` 0
  + `Player 2 Score:` 1 - `Last Break:` 1 - `Snookers Required:` 0

10. `Player 1 At the Table` - **Action**: Pots Red - Score: 1
  + `Points Remaining:` 138
  + `Player 1 Score:` 22 - `Last Break:` 22 - `Snookers Required:` 0
  + `Player 2 Score:` 1 - `Last Break:` 1 - `Snookers Required:` 0

10. `Player 1 At the Table` - **Action**: Pots Black - Score: 7
  + `Points Remaining:` 138
  + `Player 1 Score:` 29 - `Last Break:` 29 - `Snookers Required:` 0
  + `Player 2 Score:` 1 - `Last Break:` 1 - `Snookers Required:` 0
  
10. `Player 1 At the Table` - **Action**: Pots Red - Score: 1
  + `Points Remaining:` 138
  + `Player 1 Score:` 0 - `Last Break:` 0 - `Snookers Required:` 0
  + `Player 2 Score:` 1 - `Last Break:` 1 - `Snookers Required:` 0

10. `Player 1 At the Table` - **Action**: Pots Blue - Score: 5
  + `Points Remaining:` 138
  + `Player 1 Score:` 0 - `Last Break:` 0 - `Snookers Required:` 0
  + `Player 2 Score:` 1 - `Last Break:` 1 - `Snookers Required:` 0

10. `Player 1 At the Table` - **Action**: Pots Red - Score: 1
  + `Points Remaining:` 138
  + `Player 1 Score:` 0 - `Last Break:` 0 - `Snookers Required:` 0
  + `Player 2 Score:` 1 - `Last Break:` 1 - `Snookers Required:` 0

10. `Player 1 At the Table` - **Action**: Pots Yellow - Score: 2
  + `Points Remaining:` 138
  + `Player 1 Score:` 0 - `Last Break:` 0 - `Snookers Required:` 0
  + `Player 2 Score:` 1 - `Last Break:` 1 - `Snookers Required:` 0

10. `Player 1 At the Table` - **Action**: Misses Red - Score: 0
  + `Points Remaining:` 138
  + `Player 1 Score:` 0 - `Last Break:` 0 - `Snookers Required:` 0
  + `Player 2 Score:` 1 - `Last Break:` 1 - `Snookers Required:` 0

10. `Player 1 At the Table` - **Action**: Pots Red - Score: 1
  + `Points Remaining:` 138
  + `Player 1 Score:` 0 - `Last Break:` 0 - `Snookers Required:` 0
  + `Player 2 Score:` 1 - `Last Break:` 1 - `Snookers Required:` 0

10. `Player 1 At the Table` - **Action**: Pots Black - Score: 7
  + `Points Remaining:` 138
  + `Player 1 Score:` 0 - `Last Break:` 0 - `Snookers Required:` 0
  + `Player 2 Score:` 1 - `Last Break:` 1 - `Snookers Required:` 0

10. `Player 1 At the Table` - **Action**: Pots Red - Score: 1
  + `Points Remaining:` 138
  + `Player 1 Score:` 0 - `Last Break:` 0 - `Snookers Required:` 0
  + `Player 2 Score:` 1 - `Last Break:` 1 - `Snookers Required:` 0



### Flow 2

1. `Player 1 At the Table` - **Action**: Player 1 Breaks - No Score
  + `Points Remaining:` 147
  + `Player 1 Score:` 0 - `Last Break:` 0 - `Snookers Required:` 0
  + `Player 2 Score:` 0 - `Last Break:` 0 - `Snookers Required:` 0

2. `Player 2 At the Table` - **Action**: Fails Pot - No Score
  + `Points Remaining:` 147 
  + `Player 1 Score:` 0 - `Last Break:` 0 - `Snookers Required:` 0     
  + `Player 2 Score:` 0 - `Last Break:` 0 - `Snookers Required:` 0

3. `Player 1 At the Table:` - **Action**: Pots Red - Score: 1
  + `Points Remaining:` 146
  + `Player 1 Score:` 1 - `Last Break:` 1 - `Snookers Required:` 0
  + `Player 2 Score:` 0 - `Last Break:` 0 - `Snookers Required:` 0

4. `Player 1 At the Table` - **Action**: Pots Black - Score: 7
  + `Points Remaining:` 139 
  + `Player 1 Score:` 8 - `Last Break:` 8 - `Snookers Required:` 0
  + `Player 2 Score:` 0 - `Last Break:` 0 - `Snookers Required:` 0

5. `Player 1 At the Table` - **Action**: Foul and a Miss (on Red) - Score: 0
  + `Points Remaining`: 139  
  + `Player 1 Score:` 8 - `Last Break:` 8 - `Snookers Required:` 0 - 
  + `Player 2 Score:` 4 - `Last Break:` 0 - `Snookers Required:` 0
force player to retake

6. `Player 1 At the Table` - **Action**: Player 1.  Forced Retake. Misses - Score: 0
  + `Points Remaining`: 139  
  + `Player 1 Score:` 8 - `Last Break:` 0 - `Snookers Required:` 0 - 
  + `Player 2 Score:` 4 - `Last Break:` 0 - `Snookers Required:` 0

7. `Player 2 At the Table` - **Action**: Pots Red - Score: 1
  + `Points Remaining`: 138  
  + `Player 1 Score:` 8 - `Last Break:` 0 - `Snookers Required:` 0 - 
  + `Player 2 Score:` 5 - `Last Break:` 1 - `Snookers Required:` 0

8. `Player 2 At the Table` - **Action**: Pots Pink - Score: 6
  + `Points Remaining`: 131  
  + `Player 1 Score:` 8 - `Last Break:` 0 - `Snookers Required:` 0 - 
  + `Player 2 Score:` 11 - `Last Break:` 7 - `Snookers Required:` 0

9. `Player 2 At the Table` - **Action**: Pots Red - Score: 1
  + `Points Remaining`: 130  
  + `Player 1 Score:` 8 - `Last Break:` 0 - `Snookers Required:` 0 - 
  + `Player 2 Score:` 12 - `Last Break:` 8 - `Snookers Required:` 0

10. `Player 2 At the Table` - **Action**: Pots Black - Score: 7
  + `Points Remaining`: 123  
  + `Player 1 Score:` 8 - `Last Break:` 0 - `Snookers Required:` 0 - 
  + `Player 2 Score:` 19 - `Last Break:` 15 - `Snookers Required:` 0
  
11. `Player 2 At the Table` - **Action**: Pots Red - Score: 1
  + `Points Remaining`: 122  
  + `Player 1 Score:` 8 - `Last Break:` 0 - `Snookers Required:` 0 - 
  + `Player 2 Score:` 20 - `Last Break:` 16 - `Snookers Required:` 0

12. `Player 2 At the Table` - **Action**: Pots Blue - Score: 5
  + `Points Remaining`: 117  
  + `Player 1 Score:` 8 - `Last Break:` 0 - `Snookers Required:` 0 - 
  + `Player 2 Score:` 25 - `Last Break:` 21 - `Snookers Required:` 0

13. `Player 2 At the Table` - **Action**: Misses Red - Score: 0
  + `Points Remaining`: 117  
  + `Player 1 Score:` 8 - `Last Break:` 0 - `Snookers Required:` 0 - 
  + `Player 2 Score:` 25 - `Last Break:` 21 - `Snookers Required:` 0

14. `Player 1 At the Table` - **Action**: Pots Red - Score: 1
  + `Points Remaining`: 117  
  + `Player 1 Score:` 9 - `Last Break:` 1 - `Snookers Required:` 0 - 
  + `Player 2 Score:` 25 - `Last Break:` 21 - `Snookers Required:` 0

15. `Player 1 At the Table` - **Action**: Pots Pink - Score: 6
  + `Points Remaining`: 111  
  + `Player 1 Score:` 9 - `Last Break:` 1 - `Snookers Required:` 0 - 
  + `Player 2 Score:` 25 - `Last Break:` 21 - `Snookers Required:` 0

### Flow 3



force player to retake

## Use Cases

+ 15 Reds on the table. 
+ 1 Colour Ball on the table. (Yellow 2, Green 3, Brown 4. Blue 5, Pink 6, Black 7) 
+ 1 Colour ball available to pot for Each Red Ball. (e.g 15 Red Balls = 15 Colour Balls)
+ Each Red Ball pot reduces the number of Snooker calls available and therefore the remaining points available to be scored.
Play Alternates between shooting for Red and Colour Balls.
Each new visit to the table starts by shooting for Red Balls.
+ Keep track of the highest break per player in a frame
+ Use Case 1: Score a Snooker Ball
+ `Scenario:` 1 Red Ball potted. Blue Ball missed.  Points Remaining: 139 - with 14 Reds and 14 Colours available to pot.  S
+ `Scenario:` 4 Red Balls. 3 Colour Balls potted. Blue Ball missed -  Points Remaining: 119 - with 11 Reds and 11 Colours available to pot.

  + 

+ Use Case 2: Score a Snooker Ball
+ Use Case 3: Score a Snooker Ball


## Technologies

This application is built using the following technologies:

- PHP
- HTML
- CSS
- JavaScript
- SQLite3

## Development

The development of this application is currently in progress.