# Snooker Scorer Application by Jonnie Grieve Digital Media

+ `Last Updated: 23/06/2025 - 16:56`
## Sections

[Intro](#intro
) | [Planning User Flows](#planning-user-flows) | [Use Cases](#use-cases) | [Technologies Used](#technologies-used) | [Development](#development) | [Bugs](#identified-bugs) | [Comments](#comments) | [Online](https://projects.jonniegrieve.co.uk/snooker_scorer)* External

Clone to your system with Git Bash: `git clone https://github.com/jg-digital-media/jgdm_snooker_scorer.git`

## Intro

Use this application to tally up your Snooker scores as you play. Such is the scale of this application and the planning required, I decided to open this project out to its own repository.

[Link to the Snooker Scorer Application](https://projects.jonniegrieve.co.uk/snooker_scorer)

## Planning User Flows
[Back to Top](#sections)

### Flow 1: - `complete match flow` - `no fouls` - `failed pots`

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
  + `Points Remaining:` 123
  + `Player 1 Score:` 0 - `Last Break:` 0 - `Snookers Required:` 0
  + `Player 2 Score:` 23 - `Last Break:` 23 - `Snookers Required:` 0
  
7. `Player 2 At the Table` - **Action**: Pots Red - Score: 1
  + `Points Remaining:` 122
  + `Player 1 Score:` 0 - `Last Break:` 0 - `Snookers Required:` 0
  + `Player 2 Score:` 24 - `Last Break:` 24 - `Snookers Required:` 0
  
8. `Player 2 At the Table` - **Action**: Pots Blue (Red) - Score: 5
  + `Points Remaining:` 115
  + `Player 1 Score:` 0 - `Last Break:` 0 - `Snookers Required:` 0
  + `Player 2 Score:` 29 - `Last Break:` 29 - `Snookers Required:` 0

9. `Player 2 At the Table` - **Action**: Fails Pot (Red) - Score: 0
  + `Points Remaining:` 115
  + `Player 1 Score:` 0 - `Last Break:` 0 - `Snookers Required:` 0
  + `Player 2 Score:` 29 - `Last Break:` 29 - `Snookers Required:` 0

10. `Player 1 At the Table` - **Action**: Pots Red - Score: 1
  + `Points Remaining:` 114
  + `Player 1 Score:` 1 - `Last Break:` 1 - `Snookers Required:` 0
  + `Player 2 Score:` 29 - `Last Break:` 29 - `Snookers Required:` 0

11. `Player 1 At the Table` - **Action**: Pots Black - Score: 7
  + `Points Remaining:` 107
  + `Player 1 Score:` 8 - `Last Break:` 8 - `Snookers Required:` 0
  + `Player 2 Score:` 29 - `Last Break:` 29 - `Snookers Required:` 0
  
12. `Player 1 At the Table` - **Action**: Pots Red - Score: 1
  + `Points Remaining:` 106
  + `Player 1 Score:` 9 - `Last Break:` 9 - `Snookers Required:` 0
  + `Player 2 Score:` 29 - `Last Break:` 29 - `Snookers Required:` 0

13. `Player 1 At the Table` - **Action**: Pots Blue - Score: 5
  + `Points Remaining:` 99
  + `Player 1 Score:` 14 - `Last Break:` 14 - `Snookers Required:` 0
  + `Player 2 Score:` 29 - `Last Break:` 29 - `Snookers Required:` 0

14. `Player 1 At the Table` - **Action**: Pots Red - Score: 1
  + `Points Remaining:` 98
  + `Player 1 Score:` 15 - `Last Break:` 15 - `Snookers Required:` 0
  + `Player 2 Score:` 29 - `Last Break:` 29 - `Snookers Required:` 0

15. `Player 1 At the Table` - **Action**: Pots Pink - Score: 6
  + `Points Remaining:` 91
  + `Player 1 Score:` 21 - `Last Break:` 21 - `Snookers Required:` 0
  + `Player 2 Score:` 29 - `Last Break:` 29 - `Snookers Required:` 0

16. `Player 1 At the Table` - **Action**: Pots Red - Score: 1
  + `Points Remaining:` 90
  + `Player 1 Score:` 22 - `Last Break:` 22 - `Snookers Required:` 0
  + `Player 2 Score:` 29 - `Last Break:` 29 - `Snookers Required:` 0

17. `Player 1 At the Table` - **Action**: Pots Black - Score: 7
  + `Points Remaining:` 83
  + `Player 1 Score:` 29 - `Last Break:` 29 - `Snookers Required:` 0
  + `Player 2 Score:` 29 - `Last Break:` 29 - `Snookers Required:` 0
  
18. `Player 1 At the Table` - **Action**: Pots Red - Score: 1
  + `Points Remaining:` 82
  + `Player 1 Score:` 30 - `Last Break:` 30 - `Snookers Required:` 0
  + `Player 2 Score:` 29 - `Last Break:` 29 - `Snookers Required:` 0

19. `Player 1 At the Table` - **Action**: Pots Blue - Score: 5
  + `Points Remaining:` 75
  + `Player 1 Score:` 35 - `Last Break:` 35 - `Snookers Required:` 0
  + `Player 2 Score:` 29 - `Last Break:` 29 - `Snookers Required:` 0

20. `Player 1 At the Table` - **Action**: Pots Red - Score: 1
  + `Points Remaining:` 74
  + `Player 1 Score:` 36 - `Last Break:` 36 - `Snookers Required:` 0
  + `Player 2 Score:` 29 - `Last Break:` 29 - `Snookers Required:` 0

21. `Player 1 At the Table` - **Action**: Pots Yellow - Score: 2
  + `Points Remaining:` 67
  + `Player 1 Score:` 38 - `Last Break:` 38 - `Snookers Required:` 0
  + `Player 2 Score:` 29 - `Last Break:` 29 - `Snookers Required:` 0

22. `Player 1 At the Table` - **Action**: Misses Red - Score: 0
  + `Points Remaining:` 67
  + `Player 1 Score:` 38 - `Last Break:` 38 - `Snookers Required:` 0
  + `Player 2 Score:` 29 - `Last Break:` 29 - `Snookers Required:` 0

23. `Player 2 At the Table` - **Action**: Pots Red - Score: 1
  + `Points Remaining:` 66
  + `Player 1 Score:` 38 - `Last Break:` 38 - `Snookers Required:` 0
  + `Player 2 Score:` 30 - `Last Break:` 1 - `Snookers Required:` 0

24. `Player 2 At the Table` - **Action**: Pots Black - Score: 7
  + `Points Remaining:` 59
  + `Player 1 Score:` 38 - `Last Break:` 38 - `Snookers Required:` 0
  + `Player 2 Score:` 37 - `Last Break:` 8 - `Snookers Required:` 0

25. `Player 2 At the Table` - **Action**: Pots Red - Score: 1
  + `Points Remaining:` 58
  + `Player 1 Score:` 38 - `Last Break:` 38 - `Snookers Required:` 0
  + `Player 2 Score:` 38 - `Last Break:` 9 - `Snookers Required:` 0

26. `Player 2 At the Table` - **Action**: Pots Green - Score: 3
  + `Points Remaining:` 51
  + `Player 1 Score:` 38 - `Last Break:` 38 - `Snookers Required:` 0
  + `Player 2 Score:` 41 - `Last Break:` 12 - `Snookers Required:` 0

27. `Player 2 At the Table` - **Action**: Pots Red - Score: 1
  + `Points Remaining:` 50
  + `Player 1 Score:` 38 - `Last Break:` 38 - `Snookers Required:` 0
  + `Player 2 Score:` 42 - `Last Break:` 13 - `Snookers Required:` 0

28. `Player 2 At the Table` - **Action**: Pots Pink - Score: 6
  + `Points Remaining:` 43
  + `Player 1 Score:` 38 - `Last Break:` 38 - `Snookers Required:` 0
  + `Player 2 Score:` 48 - `Last Break:` 19 - `Snookers Required:` 0

29. `Player 2 At the Table` - **Action**: Misses Red - Score: 0
  + `Points Remaining:` 43
  + `Player 1 Score:` 38 - `Last Break:` 38 - `Snookers Required:` 0
  + `Player 2 Score:` 48 - `Last Break:` 19 - `Snookers Required:` 0

30. `Player 1 At the Table` - **Action**: Pot Red - Score: 1
  + `Points Remaining:` 42
  + `Player 1 Score:` 38 - `Last Break:` 38 - `Snookers Required:` 0
  + `Player 2 Score:` 48 - `Last Break:` 12 - `Snookers Required:` 0

31. `Player 1 At the Table` - **Action**: Pot Black - Score: 7
  + `Points Remaining:` 35
  + `Player 1 Score:` 45 - `Last Break:` 38 - `Snookers Required:` 0
  + `Player 2 Score:` 48 - `Last Break:` 12 - `Snookers Required:` 0

32. `Player 1 At the Table` - **Action**: Pot Red - Score: 1
  + `Points Remaining:` 34
  + `Player 1 Score:` 46 - `Last Break:` 38 - `Snookers Required:` 0
  + `Player 2 Score:` 48 - `Last Break:` 12 - `Snookers Required:` 0

32. `Player 1 At the Table` - **Action**: Pot Pink - Score: 6
  + `Points Remaining:` 27
  + `Player 1 Score:` 52 - `Last Break:` 38 - `Snookers Required:` 0
  + `Player 2 Score:` 48 - `Last Break:` 12 - `Snookers Required:` 0

33. `Player 1 At the Table` - **Action**: Pot Yellow - Score: 2
  + `Points Remaining:` 25
  + `Player 1 Score:` 54 - `Last Break:` 38 - `Snookers Required:` 0
  + `Player 2 Score:` 48 - `Last Break:` 12 - `Snookers Required:` 0

34. `Player 1 At the Table` - **Action**: Pot Green - Score: 3
  + `Points Remaining:` 22
  + `Player 1 Score:` 57 - `Last Break:` 38 - `Snookers Required:` 0
  + `Player 2 Score:` 48 - `Last Break:` 12 - `Snookers Required:` 0

35. `Player 1 At the Table` - **Action**: Pot Brown - Score: 4
  + `Points Remaining:` 18
  + `Player 1 Score:` 61 - `Last Break:` 38 - `Snookers Required:` 0
  + `Player 2 Score:` 48 - `Last Break:` 12 - `Snookers Required:` 0

36. `Player 1 At the Table` - **Action**: Pot Blue - Score: 5
  + `Points Remaining:` 13
  + `Player 1 Score:` 66 - `Last Break:` 38 - `Snookers Required:` 0
  + `Player 2 Score:` 48 - `Last Break:` 12 - `Snookers Required:` 0

37. `Player 1 At the Table` - **Action**: Pot Pink - Score: 6
  + `Points Remaining:` 7
  + `Player 1 Score:` 72 - `Last Break:` 38 - `Snookers Required:` 0
  + `Player 2 Score:` 48 - `Last Break:` 12 - `Snookers Required:` 0

38. `Player 1 At the Table` - **Action**: Pot Black - Score: 7
  + `Points Remaining:` 0
  + `Player 1 Score:` 79 - `Last Break:` 38 - `Snookers Required:` 0
  + `Player 2 Score:` 48 - `Last Break:` 12 - `Snookers Required:` 0


### Flow 2: - `incomplete match flow` - `includes fouls + miss` - `failed pots`
[Back to Top](#sections)

1. `Player 1 At the Table` - **Action**: Player 1 Breaks - No Score
  + `Points Remaining:` 147
  + `Player 1 Score:` 0 - `Last Break:` 0 - `Snookers Required:` 0
  + `Player 2 Score:` 0 - `Last Break:` 0 - `Snookers Required:` 0

2. `Player 2 At the Table` - **Action**: Misses Red - No Score
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

5. `Player 1 At the Table` - **Action**: Foul and a Miss (on Red - Force Retake) - Score: 0
  + `Points Remaining`: 139  
  + `Player 1 Score:` 8 - `Last Break:` 8 - `Snookers Required:` 0 - 
  + `Player 2 Score:` 4 - `Last Break:` 0 - `Snookers Required:` 0

6. `Player 1 At the Table` - **Action**: Player 1. Forced Retake. Misses Red - Score: 0
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
  + `Points Remaining`: 115  
  + `Player 1 Score:` 8 - `Last Break:` 0 - `Snookers Required:` 0 - 
  + `Player 2 Score:` 25 - `Last Break:` 21 - `Snookers Required:` 0

13. `Player 2 At the Table` - **Action**: Misses Red - Score: 0
  + `Points Remaining`: 115  
  + `Player 1 Score:` 8 - `Last Break:` 0 - `Snookers Required:` 0 - 
  + `Player 2 Score:` 25 - `Last Break:` 21 - `Snookers Required:` 0

14. `Player 1 At the Table` - **Action**: Pots Red - Score: 1
  + `Points Remaining`: 114  
  + `Player 1 Score:` 9 - `Last Break:` 1 - `Snookers Required:` 0 - 
  + `Player 2 Score:` 25 - `Last Break:` 21 - `Snookers Required:` 0

15. `Player 1 At the Table` - **Action**: Pots Pink - Score: 6
  + `Points Remaining`: 107  
  + `Player 1 Score:` 15 - `Last Break:` 7 - `Snookers Required:` 0 - 
  + `Player 2 Score:` 25 - `Last Break:` 21 - `Snookers Required:` 0

16. `Player 1 At the Table` - **Action**: Pots Red - Score: 1
  + `Points Remaining`: 105  
  + `Player 1 Score:` 16 - `Last Break:` 8 - `Snookers Required:` 0 - 
  + `Player 2 Score:` 25 - `Last Break:` 21 - `Snookers Required:` 0

17. `Player 1 At the Table` - **Action**: Pots Black - Score: 7
  + `Points Remaining`: 99  
  + `Player 1 Score:` 23 - `Last Break:` 15 - `Snookers Required:` 0 - 
  + `Player 2 Score:` 25 - `Last Break:` 21 - `Snookers Required:` 0

18. `Player 1 At the Table` - **Action**: Pots Red - Score: 1
  + `Points Remaining`: 98  
  + `Player 1 Score:` 24 - `Last Break:` 16 - `Snookers Required:` 0 - 
  + `Player 2 Score:` 25 - `Last Break:` 21 - `Snookers Required:` 0

19. `Player 1 At the Table` - **Action**: Pots Black - Score: 7
  + `Points Remaining`: 91  
  + `Player 1 Score:` 31 - `Last Break:` 23 - `Snookers Required:` 0 - 
  + `Player 2 Score:` 25 - `Last Break:` 21 - `Snookers Required:` 0

20. `Player 1 At the Table` - **Action**: Pots Red - Score: 1
  + `Points Remaining`: 90 
  + `Player 1 Score:` 32 - `Last Break:` 24 - `Snookers Required:` 0 - 
  + `Player 2 Score:` 25 - `Last Break:` 21 - `Snookers Required:` 0

21. `Player 1 At the Table` - **Action**: Pots Black - Score: 7
  + `Points Remaining`: 83  
  + `Player 1 Score:` 39 - `Last Break:` 31 - `Snookers Required:` 0 - 
  + `Player 2 Score:` 25 - `Last Break:` 21 - `Snookers Required:` 0

22. `Player 1 At the Table` - **Action**: Pots Red - Score: 1
  + `Points Remaining`: 82 
  + `Player 1 Score:` 40 - `Last Break:` 32 - `Snookers Required:` 0 - 
  + `Player 2 Score:` 25 - `Last Break:` 21 - `Snookers Required:` 0

23. `Player 1 At the Table` - **Action**: Pots Black - Score: 7
  + `Points Remaining`: 75  
  + `Player 1 Score:` 37 - `Last Break:` 29 - `Snookers Required:` 0 - 
  + `Player 2 Score:` 25 - `Last Break:` 21 - `Snookers Required:` 0

24. `Player 1 At the Table` - **Action**: Pots Red - Score: 1
  + `Points Remaining`: 74 
  + `Player 1 Score:` 38 - `Last Break:` 30 - `Snookers Required:` 0 - 
  + `Player 2 Score:` 25 - `Last Break:` 21 - `Snookers Required:` 0

25. `Player 1 At the Table` - **Action**: Pots Black - Score: 7
  + `Points Remaining`: 67  
  + `Player 1 Score:` 45 - `Last Break:` 37 - `Snookers Required:` 0 - 
  + `Player 2 Score:` 25 - `Last Break:` 21 - `Snookers Required:` 0

26. `Player 1 At the Table` - **Action**: Pots Red - Score: 1
  + `Points Remaining`: 66 
  + `Player 1 Score:` 46 - `Last Break:` 30 - `Snookers Required:` 0 - 
  + `Player 2 Score:` 25 - `Last Break:` 21 - `Snookers Required:` 0

27. `Player 1 At the Table` - **Action**: Pots Black - Score: 7
  + `Points Remaining`: 59  
  + `Player 1 Score:` 53 - `Last Break:` 37 - `Snookers Required:` 0 - 
  + `Player 2 Score:` 25 - `Last Break:` 21 - `Snookers Required:` 0
  
28. `Player 1 At the Table` - **Action**: Pots Red - Score: 1
  + `Points Remaining`: 58 
  + `Player 1 Score:` 38 - `Last Break:` 30 - `Snookers Required:` 0 - 
  + `Player 2 Score:` 25 - `Last Break:` 21 - `Snookers Required:` 0

29. `Player 1 At the Table` - **Action**: Pots Black - Score: 7
  + `Points Remaining`: 51  
  + `Player 1 Score:` 45 - `Last Break:` 37 - `Snookers Required:` 0 - 
  + `Player 2 Score:` 25 - `Last Break:` 21 - `Snookers Required:` 0

30. `Player 2 At the Table` - **Action**: Pots Red - Score: 1
  + `Points Remaining`: 50  
  + `Player 1 Score:` 45 - `Last Break:` 37 - `Snookers Required:` 0 - 
  + `Player 2 Score:` 26 - `Last Break:` 21 - `Snookers Required:` 0

31. `Player 2 At the Table` - **Action**: Misses Blue - Score: 0
  + `Points Remaining`: 43  
  + `Player 1 Score:` 45 - `Last Break:` 37 - `Snookers Required:` 0 - 
  + `Player 2 Score:` 26 - `Last Break:` 21 - `Snookers Required:` 0

32. `Player 1 At the Table` - **Action**: Pots Red - Score: 1
  + `Points Remaining`: 42  
  + `Player 1 Score:` 46 - `Last Break:` 37 - `Snookers Required:` 0 - 
  + `Player 2 Score:` 26 - `Last Break:` 21 - `Snookers Required:` 0

33. `Player 1 At the Table` - **Action**: Pots Black - Score: 7
  + `Points Remaining`: 35  
  + `Player 1 Score:` 53 - `Last Break:` 37 - `Snookers Required:` 0 - 
  + `Player 2 Score:` 26 - `Last Break:` 21 - `Snookers Required:` 0

33. `Player 1 At the Table` - **Action**: Pots Red - Score: 1
  + `Points Remaining`: 34  
  + `Player 1 Score:` 54 - `Last Break:` 37 - `Snookers Required:` 0 - 
  + `Player 2 Score:` 26 - `Last Break:` 21 - `Snookers Required:` 0

34. `Player 1 At the Table` - **Action**: Pots Black - Score: 7
  + `Points Remaining`: 27  
  + `Player 1 Score:` 61 - `Last Break:` 37 - `Snookers Required:` 0 - 
  + `Player 2 Score:` 26 - `Last Break:` 21 - `Snookers Required:` 2


### Flow 3: - `incomplete match flow` - `pots cueball` - `fouls by cue ball striking colour on red shot`

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

4. `Player 2 At the Table` - **Action**: Pots Cueball on Red Shot - Score: 0
  + `Points Remaining:` 138
  + `Player 1 Score:` 4 - `Last Break:` 0 - `Snookers Required:` 0
  + `Player 2 Score:` 8 - `Last Break:` 8 - `Snookers Required:` 0

5. `Player 1 At the Table` - **Action**: Pots Red - Score: 1
  + `Points Remaining:` 138
  + `Player 1 Score:` 5 - `Last Break:` 1 - `Snookers Required:` 0
  + `Player 2 Score:` 8 - `Last Break:` 8 - `Snookers Required:` 0

6. `Player 1 At the Table` - **Action**: Pots Black - Score: 7
  + `Points Remaining:` 131
  + `Player 1 Score:` 12 - `Last Break:` 8 - `Snookers Required:` 0
  + `Player 2 Score:` 8 - `Last Break:` 8 - `Snookers Required:` 0

7. `Player 1 At the Table` - **Action**: Foul - Que striking Colour Ball (Blue) on shot for Red ball - Score: 0
  + `Points Remaining:` 131
  + `Player 1 Score:` 8 - `Last Break:` 8 - `Snookers Required:` 0
  + `Player 2 Score:` 13 - `Last Break:` 8 - `Snookers Required:` 0

8. `Player 2 At the Table` - **Action**: Pots Red - Score: 1
  + `Points Remaining:` 130
  + `Player 1 Score:` 8 - `Last Break:` 8 - `Snookers Required:` 0
  + `Player 2 Score:` 14 - `Last Break:` 8 - `Snookers Required:` 0

9. `Player 2 At the Table` - **Action**: Pots Pink - Score: 6
  + `Points Remaining:` 123
  + `Player 1 Score:` 8 - `Last Break:` 8 - `Snookers Required:` 0
  + `Player 2 Score:` 20 - `Last Break:` 8 - `Snookers Required:` 0

10. `Player 2 At the Table` - **Action**: Pots Red - Score: 1
  + `Points Remaining:` 122
  + `Player 1 Score:` 8 - `Last Break:` 8 - `Snookers Required:` 0
  + `Player 2 Score:` 21 - `Last Break:` 9 - `Snookers Required:` 0

11. `Player 2 At the Table` - **Action**: Pots Blue - Score: 5
  + `Points Remaining:` 115
  + `Player 1 Score:` 8 - `Last Break:` 8 - `Snookers Required:` 0
  + `Player 2 Score:` 26 - `Last Break:` 14 - `Snookers Required:` 0

12. `Player 2 At the Table` - **Action**: Pots Red - Score: 1
  + `Points Remaining:` 114
  + `Player 1 Score:` 8 - `Last Break:` 8 - `Snookers Required:` 0
  + `Player 2 Score:` 27 - `Last Break:` 15 - `Snookers Required:` 0

13. `Player 2 At the Table` - **Action**: Pots Green - Score: 3
  + `Points Remaining:` 107
  + `Player 1 Score:` 8 - `Last Break:` 8 - `Snookers Required:` 0
  + `Player 2 Score:` 30 - `Last Break:` 18 - `Snookers Required:` 0
  
14. `Player 2 At the Table` - **Action**: Pots Red - Score: 1
  + `Points Remaining:` 106
  + `Player 1 Score:` 8 - `Last Break:` 8 - `Snookers Required:` 0
  + `Player 2 Score:` 31 - `Last Break:` 19 - `Snookers Required:` 0
  
15. `Player 2 At the Table` - **Action**: Pots Yellow - Score: 2
  + `Points Remaining:` 99
  + `Player 1 Score:` 8 - `Last Break:` 8 - `Snookers Required:` 0
  + `Player 2 Score:` 33 - `Last Break:` 21 - `Snookers Required:` 0

16. `Player 2 At the Table` - **Action**: Pots Red - Score: 1
  + `Points Remaining:` 98
  + `Player 1 Score:` 8 - `Last Break:` 8 - `Snookers Required:` 0
  + `Player 2 Score:` 34 - `Last Break:` 22 - `Snookers Required:` 0

17. `Player 2 At the Table` - **Action**: Pots Brown - Score: 4
  + `Points Remaining:` 91
  + `Player 1 Score:` 8 - `Last Break:` 8 - `Snookers Required:` 0
  + `Player 2 Score:` 38 - `Last Break:` 26 - `Snookers Required:` 0

18. `Player 2 At the Table` - **Action**: Pots Red - Pots Cueball - Score: 0
  + `Points Remaining:` 91
  + `Player 1 Score:` 12 - `Last Break:` 8 - `Snookers Required:` 0
  + `Player 2 Score:` 38 - `Last Break:` 26 - `Snookers Required:` 0

19. `Player 1 At the Table` - **Action**: Pots Red - Score: 1
  + `Points Remaining:` 90
  + `Player 1 Score:` 13 - `Last Break:` 8 - `Snookers Required:` 0
  + `Player 2 Score:` 38 - `Last Break:` 26 - `Snookers Required:` 0

### Flow 4: - `incomplete match flow` - `3 reds potted` - `multiple reds potted`

1. `Player 1 At the Table` - **Action**: Player 1 Breaks - 3 reds
  + `Points Remaining:` 130
  + `Player 1 Score:` 3 - `Last Break:` 3 - `Snookers Required:` 0
  + `Player 2 Score:` 0 - `Last Break:` 0 - `Snookers Required:` 0

2. `Player 1 At the Table` - **Action**: Pots Pink - Score: 6
  + `Points Remaining:` 123
  + `Player 1 Score:` 9 - `Last Break:` 9 - `Snookers Required:` 0
  + `Player 2 Score:` 0 - `Last Break:` 0 - `Snookers Required:` 0

3. `Player 1 At the Table` - **Action**: Pots Red (x2) - Score: 2
  + `Points Remaining:` 114
  + `Player 1 Score:` 11 - `Last Break:` 11 - `Snookers Required:` 0
  + `Player 2 Score:` 0 - `Last Break:` 0 - `Snookers Required:` 0
  
4. `Player 1 At the Table` - **Action**: Pots Black - Score: 7
  + `Points Remaining:` 107
  + `Player 1 Score:` 18 - `Last Break:` 18 - `Snookers Required:` 0
  + `Player 2 Score:` 0 - `Last Break:` 0 - `Snookers Required:` 0

5.  `Player 1 At the Table` - **Action**: Pots Red - Score: 1
  + `Points Remaining:` 106
  + `Player 1 Score:` 19 - `Last Break:` 19 - `Snookers Required:` 0
  + `Player 2 Score:` 0 - `Last Break:` 0 - `Snookers Required:` 0

### Flow 5: - `match flow` - `2 reds potted` - `multiple reds potted`


1. `Player 1 At the Table` - **Action**: Player 1 Breaks - Pots Red (1) - Score: 1
  + `Points Remaining:` 146
  + `Player 1 Score:` 1 - `Last Break:` 1 - `Snookers Required:` 0
  + `Player 2 Score:` 0 - `Last Break:` 0 - `Snookers Required:` 0

2. `Player 1 At the Table` - **Action**: Pots Black (Colour 1) - Score: 7
  + `Points Remaining:` 139
  + `Player 1 Score:` 8 - `Last Break:` 8 - `Snookers Required:` 0
  + `Player 2 Score:` 0 - `Last Break:` 0 - `Snookers Required:` 0

3. `Player 1 At the Table` - **Action**: Pots Red (2)  - Score: 1
  + `Points Remaining:` 138
  + `Player 1 Score:` 9 - `Last Break:` 9 - `Snookers Required:` 0
  + `Player 2 Score:` 0 - `Last Break:` 0 - `Snookers Required:` 0

4. `Player 1 At the Table` - **Action**: Pots Black (Colour 2) - Score: 7
  + `Points Remaining:` 131
  + `Player 1 Score:` 16 - `Last Break:` 16 - `Snookers Required:` 0
  + `Player 2 Score:` 0 - `Last Break:` 0 - `Snookers Required:` 0

5. `Player 1 At the Table` - **Action**: Pots Red (3) - Score: 1
  + `Points Remaining:` 130
  + `Player 1 Score:` 17 - `Last Break:` 17 - `Snookers Required:` 0
  + `Player 2 Score:` 0 - `Last Break:` 0 - `Snookers Required:` 0

6. `Player 1 At the Table` - **Action**: Pots Black (Colour 3) - Score: 7
  + `Points Remaining:` 123
  + `Player 1 Score:` 24 - `Last Break:` 24 - `Snookers Required:` 0
  + `Player 2 Score:` 0 - `Last Break:` 0 - `Snookers Required:` 0
  
7. `Player 1 At the Table` - **Action**: Pots Red (x2) - Score: 2
  + `Points Remaining:` 121  (114 - 7 missed points)
  + `Player 1 Score:` 26 - `Last Break:` 26 - `Snookers Required:` 0
  + `Player 2 Score:` 0 - `Last Break:` 0 - `Snookers Required:` 0
  
8. `Player 1 At the Table` - **Action**: Pots Pink (Colour 4) - Score: 6
  + `Points Remaining:` 114 (107 - 7 missed points)
  + `Player 1 Score:` 32 - `Last Break:` 32 - `Snookers Required:` 0
  + `Player 2 Score:` 0 - `Last Break:` 0 - `Snookers Required:` 0

9. `Player 1 At the Table` - **Action**: Pots Red (6) - Score: 1
  + `Points Remaining:` 113 (106 - 7 missed points)
  + `Player 1 Score:` 1 - `Last Break:` 1 - `Snookers Required:` 0
  + `Player 2 Score:` 0 - `Last Break:` 0 - `Snookers Required:` 0

10. `Player 1 At the Table` - **Action**: Pots Black (Colour 5) - Score: 7
  + `Points Remaining:` 106 (99 - 7 missed points)
  + `Player 1 Score:` 1 - `Last Break:` 1 - `Snookers Required:` 0
  + `Player 2 Score:` 0 - `Last Break:` 0 - `Snookers Required:` 0

11. `Player 1 At the Table` - **Action**: Pots Red (7) - Score: 1
  + `Points Remaining:` 105 (98 - 7 missed points)
  + `Player 1 Score:` 1 - `Last Break:` 1 - `Snookers Required:` 0
  + `Player 2 Score:` 0 - `Last Break:` 0 - `Snookers Required:` 0

12. `Player 1 At the Table` - **Action**: Pots Black (Colour 6) - Score: 7
  + `Points Remaining:` 98 (91 - 7 missed points)
  + `Player 1 Score:` 1 - `Last Break:` 1 - `Snookers Required:` 0
  + `Player 2 Score:` 0 - `Last Break:` 0 - `Snookers Required:` 0

13. `Player 1 At the Table` - **Action**: Pots Red (8) - Score: 1
  + `Points Remaining:` 97 (90 - 7 missed points)
  + `Player 1 Score:` 1 - `Last Break:` 1 - `Snookers Required:` 0
  + `Player 2 Score:` 0 - `Last Break:` 0 - `Snookers Required:` 0

14. `Player 1 At the Table` - **Action**: Pots Black (Colour 7) - Score: 7
  + `Points Remaining:` 90 (83 - 7 missed points)
  + `Player 1 Score:` 1 - `Last Break:` 1 - `Snookers Required:` 0
  + `Player 2 Score:` 0 - `Last Break:` 0 - `Snookers Required:` 0

15. `Player 1 At the Table` - **Action**: Pots Red (9) - Score: 1
  + `Points Remaining:` 89 (82 - 7 missed points)
  + `Player 1 Score:` 1 - `Last Break:` 1 - `Snookers Required:` 0
  + `Player 2 Score:` 0 - `Last Break:` 0 - `Snookers Required:` 0

16. `Player 1 At the Table` - **Action**: Pots Black (Colour 8) - Score: 7
  + `Points Remaining:` 82 (75 - 7 missed points)
  + `Player 1 Score:` 1 - `Last Break:` 1 - `Snookers Required:` 0
  + `Player 2 Score:` 0 - `Last Break:` 0 - `Snookers Required:` 0

17. `Player 1 At the Table` - **Action**: Pots Red (10) - Score: 1
  + `Points Remaining:` 81 (74 - 7 missed points)
  + `Player 1 Score:` 1 - `Last Break:` 1 - `Snookers Required:` 0
  + `Player 2 Score:` 0 - `Last Break:` 0 - `Snookers Required:` 0

18. `Player 1 At the Table` - **Action**: Pots Black (Colour 9) - Score: 7
  + `Points Remaining:` 74 (67 - 7 missed points)
  + `Player 1 Score:` 1 - `Last Break:` 1 - `Snookers Required:` 0
  + `Player 2 Score:` 0 - `Last Break:` 0 - `Snookers Required:` 0

19. `Player 1 At the Table` - **Action**: Pots Red (11) - Score: 1
  + `Points Remaining:` 73 (66 - 7 missed points)
  + `Player 1 Score:` 1 - `Last Break:` 1 - `Snookers Required:` 0
  + `Player 2 Score:` 0 - `Last Break:` 0 - `Snookers Required:` 0

20. `Player 1 At the Table` - **Action**: Pots Black (Colour 10) - Score: 7
  + `Points Remaining:` 66 (59 - 7 missed points)
  + `Player 1 Score:` 1 - `Last Break:` 1 - `Snookers Required:` 0
  + `Player 2 Score:` 0 - `Last Break:` 0 - `Snookers Required:` 0

21. `Player 1 At the Table` - **Action**: Pots Red (12) - Score: 1
  + `Points Remaining:` 65 (58 - 7 missed points)
  + `Player 1 Score:` 1 - `Last Break:` 1 - `Snookers Required:` 0
  + `Player 2 Score:` 0 - `Last Break:` 0 - `Snookers Required:` 0

22. `Player 1 At the Table` - **Action**: Pots Black (Colour 11) - Score: 7
  + `Points Remaining:` 58 (51 - 7 missed points)
  + `Player 1 Score:` 1 - `Last Break:` 1 - `Snookers Required:` 0
  + `Player 2 Score:` 0 - `Last Break:` 0 - `Snookers Required:` 0

23. `Player 1 At the Table` - **Action**: Pots Red (13) - Score: 1
  + `Points Remaining:` 57 (50 - 7 missed points)
  + `Player 1 Score:` 1 - `Last Break:` 1 - `Snookers Required:` 0
  + `Player 2 Score:` 0 - `Last Break:` 0 - `Snookers Required:` 0

24. `Player 1 At the Table` - **Action**: Pots Black (Colour 12) - Score: 7
  + `Points Remaining:` 50 (43 - 7 missed points)
  + `Player 1 Score:` 1 - `Last Break:` 1 - `Snookers Required:` 0
  + `Player 2 Score:` 0 - `Last Break:` 0 - `Snookers Required:` 0

25. `Player 1 At the Table` - **Action**: Pots Red (14) - Score: 1
  + `Points Remaining:` 49 (42 - 7 missed points)
  + `Player 1 Score:` 1 - `Last Break:` 1 - `Snookers Required:` 0
  + `Player 2 Score:` 0 - `Last Break:` 0 - `Snookers Required:` 0

26. `Player 1 At the Table` - **Action**: Pots Black (Colour 13) - Score: 7
  + `Points Remaining:` 42 (35 - 7 missed points)
  + `Player 1 Score:` 1 - `Last Break:` 1 - `Snookers Required:` 0
  + `Player 2 Score:` 0 - `Last Break:` 0 - `Snookers Required:` 0

27. `Player 1 At the Table` - **Action**: Pots Red (2) - Score: 1
  + `Points Remaining:` 41 (34 - 7 missed points)
  + `Player 1 Score:` 1 - `Last Break:` 1 - `Snookers Required:` 0
  + `Player 2 Score:` 0 - `Last Break:` 0 - `Snookers Required:` 0

28. `Player 1 At the Table` - **Action**: Pots Black (Colour 14) - Score: 7
  + `Points Remaining:` 34 (27 - 7 missed points)
  + `Player 1 Score:` 1 - `Last Break:` 1 - `Snookers Required:` 0
  + `Player 2 Score:` 0 - `Last Break:` 0 - `Snookers Required:` 0

After 15 reds potted and the last colour

29. `Player 1 At the Table` - **Action**: Pots Yellow (Colour 15 Sequence Starts)  - Score: 7
  + `Points Remaining:` 25
  + `Player 1 Score:` 1 - `Last Break:` 1 - `Snookers Required:` 0
  + `Player 2 Score:` 0 - `Last Break:` 0 - `Snookers Required:` 0

+ Green
+ Brown
+ Blue
+ Pink
+ Black

  

## Use Cases
[Back to Top](#sections)

+ The `points remaining` is dependent on the balls still on the table.
    + Maximum of 147 points available
    + Maximum of 15 Reds on the table. 
    + 1 Colour Ball on the table. (Yellow 2, Green 3, Brown 4. Blue 5, Pink 6, Black 7)     
    + 1 Colour ball available to pot for Each Red Ball. (e.g 15 Red Balls = 15 Colour Balls)
    
    + `Scenario` 130 points remain on the table.  Pot Pink (6) - player scores 6 but since 7 is the maximum score with the black, the points remaining reduces by 7.

    + Each Red Ball potted reduces the number of Snooker colour balls available to be potted;  and therefore the remaining points available to be scored.
        + `1` red potted reduces the available points by `1`. The player shoots for the next colour.
        + `2` reds potted reduces the available points by `9` 2 reds removing **1** chance to shoot for a colour ball. The player shoots for the next colour as normal.
        + `3` reds potted reduces the available points by `10`. (3 reds - 1 colour ball bypassed). The player shoots for the next colour as normal.
    + If a player shoots for a colour and misses, they have the preceding 1 point for the red ball potted. The next player shoots for a red ball and the available points is reduced by `7`.
        + `Scenario:` 1 Red Ball potted. Blue Ball missed.  Points Remaining: 139 - with 14 Reds and 14 Colours available to pot.  S
        + `Scenario:` 4 Red Balls. 3 Colour Balls potted. Blue Ball missed -  Points Remaining: 119 - with 11 Reds and 11 Colours available to pot.

+ Play Alternates between shooting for Red and Colour Balls.

+ Each new visit to the table starts by shooting for Red Balls.

+ For the purposes of this app, the player that makes the break is "Player 1". More often than not, no balls are potted in the first strike of the cue ball which is a "Miss".

+ There will inevitably be frames where a player forfeits the frame and the table is not cleared.

+ There will be occasions where it's not viable for the winning player to clear the table. This is a player forfeit and the current scores are recorded as the final frame score.

+ By the time we get to the final 6 colour sequence there should be `27` remaining points available. `7 (Black), 6 (Pink), 5 (Blue), 4 (Brown), 3 (Green), 2 (Yellow)`
    + Need to let the application know somehow that the final 6 colour sequence means the reduction is absolute and not relative to further respotting of colour balls.
    + 15 Reds 16 blacks, 1 Pink, 1 Blue, 1 Brown, 1 Green, 1 Yellow is a 147 break

+ To calculate snookers available, `Add the total of player 1 and player 2 scores and subtract this total from 147.  Subtract from remaining points available`
+ Keep track of the highest break per player in a frame

+ `Scenario` - force player to retake 

+ keep track of total points scored by both players

+ `Snookers Required`

  + To determine if a player needs to get their opponent into snookers to win a frame in snooker, you need to consider the remaining points and the score difference
  + Each snooker (foul) is worth at least 4 points (or the value of the ball involved if higher than 4). 5 points (Blue) 6 points (Pink) 7 points (Black).

+ `Foul scenarios`

  + `Foul - Hits red ball when aiming for a colour ball.` - Penalty of `4 points`.
    + Recommended Action:
        + FOUL: `#tally---potted--foul-p1` or `pot---miss--one`
        + FOUL: `#tally---potted--foul-p2` or `pot---miss--one`
        
  + `Foul - Hits colour ball when aiming for a red ball.` - Penalty of `4+ (4 or the higher value of the colour ball)`.
    + Recommended Action:  
        + FOUL: `#tally---potted--foul-p1`
        + FOUL: `#tally---potted--foul-p2`
        
  + `Foul and a Miss`- Player fails to hit target ball when shooting for red - Penalty of `4 points`.
    + Recommended Action:
        + FOUL+MISS: `#pot---foulmiss--one`  
        + FOUL+MISS: `#pot---foulmiss--two`
        + Worth noting that with a FOUL+MISS a player can choose to make the opponent retake the shot.

  + `Foul and a Miss`- Player fails to hit target ball when shooting for a colour ball - Penalty of `4+ (4 or the higher value of the colour ball`.
    + Recommended Action:
        + FOUL+MISS: `#pot---foulmiss--one`  
        + FOUL+MISS: `#pot---foulmiss--two`
        + With a FOUL+MISS a player can choose to make the opponent retake the shot.

  + `Misfiring the cue ball` - Such as a double hit is a foul - Penalty of `4+ points (if higher value colour)`.
    + Recommended Action:
        + FOUL: `#tally---potted--foul-p1`  
        + FOUL: `#tally---potted--foul-p2`

  + `Potting the cue ball is a foul`
  + `Potting the cue ball is a foul, regardless of whether a red or color ball is also potted in the same shot`. The opponent receives a penalty of four points plus the value of any additional balls potted in the same stroke
    + Recommended Action:
        + FOUL: `#tally---potted--foul-p1`  
        + FOUL: `#tally---potted--foul-p2`
     
  + `A red ball going off the table` is considered a `foul` and the opponent receives a penalty of `4 points` plus the value of any additional balls potted in the same stroke. **Note:**: There is nothing in the UI as yet for this eventuality.
    + Recommended Action:
        + FOUL: `#tally---potted--foul-p1`  
        + FOUL: `#tally---potted--foul-p2`

  + If a red ball is potted during a foul, `it is NOT respotted`.
  + If a colour is potted during a foul, `it is respotted` (*unless* it's the final colour sequence).
  + A foul wipes out any score that a player would have gained from legally potting a red or colour.

  + Once a red is potted, foul or not, it’s considered "off the table".

+ Snookers Required Scenarios

 + `scenario:` (`points remaining` - `score difference`) - A means to calculate how many snookers a player might require to win a frame.

```
points	scores	score difference
    27	52-48	4
    25	54-48	6
    22	57-48	9
    18	61-48	13
    13	66-48	18  2 snookers required
    7	72-48	24	4 Snookers
    0	79-48	31  Game over!

```

+ When can you get >7 foul points

```
Scenario	Points
Normal foul hitting/potting highest ball (e.g. black)	Max 7

Deliberate misuse of object balls (e.g. striking red as cue ball)	More than 7 (e.g. 14)

Multiple fouls in a shot — highest ball value still caps at 7	Still 7

Ungentlemanly conduct or frame forfeit (at referee’s discretion)	Frame loss or more points awarded
```


## Technologies Used
[Back to Top](#sections)

This application is built using the following technologies:

- PHP
- HTML
- CSS
- JavaScript
- SQLite3

## Development
[Back to Top](#sections)

### Tasks - 205 completed items

The development of this application is currently in progress.


+ `COMPLETED: 08-05-2025` Final interface design check

+ `COMPLETED: 08-05-2025` Set the starting value of `#points remaining` to 147

+ `COMPLETED: 08-05-2025` Add application versioning to the application footer

+ `COMPLETED: 09-05-2025` Colour Sequence must be taken into account when calculating the remaining points available

+ `COMPLETED: 09-05-2025` BUG: Points remaining element should not be less than 0

+ `COMPLETED: 09-05-2025` Click black ball icon `#tally---potted--black-p1` (Player 1) to score 7 points
+ `COMPLETED: 09-05-2025` Click pink ball icon `#tally---potted--pink-p1` (Player 1) to score 6 points
+ `COMPLETED: 09-05-2025` Click blue ball icon `#tally---potted--blue-p1` (Player 1) to score 5 points
+ `COMPLETED: 09-05-2025` Click brown ball icon `#tally---potted--brown-p1` (Player 1) to score 4 points
+ `COMPLETED: 09-05-2025` Click green ball icon `#tally---potted--green-p1` (Player 1) to score 3 points
+ `COMPLETED: 09-05-2025` Click yellow ball icon `#tally---potted--yellow-p1` (Player 1) to score 2 points

+ `COMPLETED: 13-05-2023` Click red ball icon `tally---potted--red-p1` (Player 1) to score 1 point player 1
    + `COMPLETED: 08-05-2025` Reduces `#points_remaining` by 1 to 146
    + `COMPLETED: 08-05-2025` Adds 1 to red ball `#tally---potted--red-p1`
    + `COMPLETED: 08-05-2025` Adds 1 to last break `#last---break--p1`
    + `COMPLETED: 08-05-2025` Adds 1 to highest break `#highest---break--p1`
    + `COMPLETED: 09-05-2025` increments text content 1 to red ball `#tally---potted--red-p1`

+ `COMPLETED: 13-05-2025` Shoot attempt - colour ball Black - player 1

    + `COMPLETED: 09-05-2025` Reduces `#points_remaining` by 7 to 139
    + `COMPLETED: 09-05-2025` Adds 1 to black ball `#tally---potted--black-p1`
    + `COMPLETED: 09-05-2025` Increment last break tally by 7 `#last---break--p1`
    + `COMPLETED: 09-05-2025` Adds 7 to highest break `#highest---break--p1`    
    + `COMPLETED: 09-05-2025` increments text content 1 to black ball `#tally---potted--black-p1`

+ `COMPLETED: 13-05-2025` Shoot attempt - colour ball Pink - player 1

    + `COMPLETED: 09-05-2025` Reduces `#points_remaining` by 7 to 139    
    + `COMPLETED: 09-05-2025` Adds 1 to pink ball `#tally---potted--pink-p1`
    + `COMPLETED: 09-05-2025` Increment last break tally by 7 `#last---break--p1`
    + `COMPLETED: 09-05-2025` Adds 6 to highest break `#highest---break--p1`    
    + `COMPLETED: 09-05-2025` increments text content 1 to pink ball `#tally---potted--pink-p1`

+ `COMPLETED: 13-05-2025` Shoot attempt - colour ball Blue - player 1

    + `COMPLETED: 09-05-2025` Reduces `#points_remaining` by 7 to 139    
    + `COMPLETED: 09-05-2025` Adds 1 to blue ball `#tally---potted--blue-p1`
    + `COMPLETED: 09-05-2025` Increment last break tally by 5 `#last---break--p1`
    + `COMPLETED: 09-05-2025` Adds 5 to highest break `#highest---break--p1`
    + `COMPLETED: 09-05-2025` increments text content 1 to blue ball `#tally---potted--blue-p1`

+ `COMPLETED: 13-05-2025` Shoot attempt - colour ball Brown - player 1

    + `COMPLETED: 09-05-2025` Reduces `#points_remaining` by 7 to 139    
    + `COMPLETED: 09-05-2025` Adds 1 to brown ball `#tally---potted--black-p1`
    + `COMPLETED: 09-05-2025` Increment last break tally by 4 `#last---break--p1`
    + `COMPLETED: 09-05-2025` Adds 4 to highest break `#highest---break--p1`
    + `COMPLETED: 09-05-2025` increments text content 1 to brown ball `#tally---potted--brown-p1`

+ `COMPLETED: 13-05-2025` Shoot attempt - colour ball Green - player 1

    + `COMPLETED: 09-05-2025` Reduces `#points_remaining` by 7 to 139    
    + `COMPLETED: 09-05-2025` Adds 1 to green ball `#tally---potted--black-p1`
    + `COMPLETED: 09-05-2025` Increment last break tally by 3 `#last---break--p1`
    + `COMPLETED: 09-05-2025` Adds 3 to highest break `#highest---break--p1`    
    + `COMPLETED: 09-05-2025` increments text content 1 to green ball `#tally---potted--green-p1`

+ `COMPLETED: 13-05-2025` Shoot attempt - colour ball Yellow - player 1
    + `COMPLETED: 09-05-2025` Reduces `#points_remaining` by 7 to 139
    + `COMPLETED: 09-05-2025` Adds 1 to yellow ball `#tally---potted--black-p1`
    + `COMPLETED: 09-05-2025` Increment last break tally by 2 `#last---break--p1`
    + `COMPLETED: 09-05-2025` Adds 2 to highest break `#highest---break--p1`    
    + `COMPLETED: 09-05-2025` increments text content 1 to yellow ball `#tally---potted--yellow-p1`    

+ `COMPLETED: 12-05-2025` Link to about page on version number in footer element

+ `COMPLETED: 12-05-2025` Implement Re-rack Button - "Reset" button - change to "Re-rack button (`#reset---app`)

+ `COMPLETED: 13-05-2025` Finish turn based play between red and yellow ball

+ `COMPLETED: 13-05-2025` Disable colour balls while player is shooting for red ball. opacity setting - disabled state

+ `COMPLETED: 13-05-2025` Disable red balls while player is shooting for a colour ball

+ `COMPLETED: 13-05-2025` Fix bug with colour sequence not working after green ball (happens after red and yellow ball)

+ `COMPLETED: 13-05-2025` If the points remaining reaches 0, the frame is over. disable any point scoring buttons so high score and last break are not updated.

+ `COMPLETED: 13-05-2025` Recreate 147 Break (15 Reds + 15 Blacks + 6 Colour sequence - `Yellow Green Brown Blue Pink Black`) 

+ `COMPLETED: 13-05-2025` Handle colour sequence so the player clicks the order of colours in the sequence - 
    if on yellow, disable all other colours
    if on green, disable all other colours
    if on brown, disable all other colours... etc
    This is for player 1 only.

+ `COMPLETED: 13-05-2025` BUG: Players should not be able to score more than 147 points.
  + no more points added to `#p1---score`
  + no further changes to `#highest---break--p1`
  + no further changes to `#last---break--p1`
  
+ `COMPLETED: 14-05-2025` Add apply button which will be linked to red ball player 1 `#apply_tally--red--p1`

+ `COMPLETED: 14-05-2025` allow multiple tallies to be added for red ball before clicking the apply button to shoot for a colour ball

+ `COMPLETED: 14-05-2025` Fix a bug where the the tally for the red ball resets and does not keep the tally. - introduced after applying the red red ball tally to player 1 - the tally was being reset to 0 when the player 1 score was updated.

+ `COMPLETED: 15-05-2025` Apply button for more than 1 red ball potted. 

+ `COMPLETED: 15-05-2025` What about finding a way to count the number of legal pots for a red (multiple pots of a red ball are legal) and comparing this to 15 Reds - and using this to calculate the number of points remaining as 27. We could use incremental counting of the number of clicks of `#tally---potted--black-p1` to do this.

+ `COMPLETED: 15-05-2025` Remove the apply link under the red ball from view shooting for colour balls. This is a UX distraction and is not needed when shooting for a colour.

+ `COMPLETED: 15-05-2025` Remove apply link from view when the frame ends `points---remaining` is at 0 (Player 1).

+ `COMPLETED: 15-05-2025` Remove apply link from view when the colour sequence begins (Player 1).

+ `COMPLETED: 15-05-2025` Handling player scoring and points remaining when the player scores 2 reds
 
+ `COMPLETED: 15-05-2025` Apply button for more than 1 red ball potted. Click red ball icon to pot 1 red ball and move to shooting for a colour ball.

+ `COMPLETED: 15-05-2025` Apply button for more than 1 red ball potted. Click red ball icon twice to pot 2 red balls and move to shooting for a colour ball.

+ `COMPLETED: 19-05-2025` Revert between player 1 and player 2 at the table via the "Miss" buttons `#tally---potted--miss-p1` and `#tally---potted--miss-p2`.
+ `COMPLETED: 19-05-2025` Player does not make a pot when making a break - a "MISS". (Player 1)
+ `COMPLETED: 19-05-2025` Track which player is at the table
+ `COMPLETED: 19-05-2025` Player 2 at the table - misses ball should revert back to player 1 at the table

+ `COMPLETED: 19-05-2025` Player 1 misses a pot attempt - player 2 is at the table to shoot for a red ball if there are red balls left on the table.

+ `COMPLETED: 19-05-2025` Player 2 misses a pot attempt - player 1 is at the table to shoot for a red ball if there are red balls left on the table..

+ `COMPLETED: 19-05-2025` Next player reverts to shooting for a red ball after a miss. 

+ `COMPLETED: 19-05-2025` If player 2 is set to shoot for a red ball, don't deduct any points remaining from the available points if they miss their shot

+ `COMPLETED: 20-05-2025` disable all player 1 buttons when player 1 miss button is clicked.
+ `COMPLETED: 20-05-2025` disable all player 2 buttons when player 2 miss button is clicked.
+ `COMPLETED: 20-05-2025` "MISS" buttons on both players disable the corresponding player buttons.

+ `COMPLETED: 20-05-2025` Visibility of player at the table - `#player---1--table` or `#player---2--table` switches at the end of each turn at the table.

+ `COMPLETED: 20-05-2025` Implement the "miss" button for player 2.

+ `COMPLETED: 21-05-2025` Disable player 2 buttons when player 1 is at the table.

+ `COMPLETED: 21-05-2025` Disable player 1 buttons when player 2 is at the table.

+ `COMPLETED: 21-05-2025` Disable player 1 breaks and snookers element `.breaks---and--snookers` when player 2 is at the table.

+ `COMPLETED: 21-05-2025` Disable player 2 breaks and snookers element `.breaks---and--snookers` when player 1 is at the table.

+ `COMPLETED: 21-05-2025` Disable breaks and breaks and snookers element container when points remaining is at 0 (Player 1 and 2).

+ `COMPLETED: 21-05-2025` **FIX: Ball Icon Tallies buttons are clickable again even when greyed out when player 1 comes back to the table.  ```#pot---miss--two```

+ `COMPLETED: 21-05-2025` "MISS!" button for player one should be fixed to disable `#tally---potted--red-p1` red 1 for player 1

+ `COMPLETED: 22-05-2025` Disable all player buttons at frame end

+ `COMPLETED: 23-05-2025` Tally 1 red button (`#pot---red--two`) on player 2 to indicate 1 red ball potted for player 2.

+ `COMPLETED: 29-05-2025` Show "apply" link (`#apply_tally---red--p2`) for player 2 to indicate more red balls could be potted in the same shot.
+ `COMPLETED: 30-05-2025` clicking `#apply_tally---red--p2` increments the tally for player 2 red ball by 1; adds 1 point to `last---break--p2` and `highest---break--p2`. Reduces `#points_remaining` by 1 point. Adds 1 to `red---tally--p2` 

+ `COMPLETED: 02-06-2025` Click black ball icon `#pot---red--two` (Player 2) to score 7 points
+ `COMPLETED: 02-06-2025` Click pink ball icon `#pot---pink--two` (Player 2) to score 6 points
+ `COMPLETED: 02-06-2025` Click blue ball icon `#pot---blue--two` (Player 2) to score 5 points
+ `COMPLETED: 02-06-2025` Click brown ball icon `#pot---brown-two` (Player 2) to score 4 points
+ `COMPLETED: 02-06-2025` Click green ball icon `#pot---green--two` (Player 2) to score 3 points
+ `COMPLETED: 02-06-2025` Click yellow ball icon `#pot---yellow--two` (Player 2) to score 2 points
+ `COMPLETED: 02-06-2025` Add points to highest break and last break for player 2 for each successful pot attempt.
+ `COMPLETED: 02-06-2025` Apply successful red ball shot(s) and then shoot for a colour ball.
+ `COMPLETED: 02-06-2025` Player 2 misses a pot attempt.


+ `COMPLETED: 03-06-2025` Shoot attempt - Colour Ball (Yellow) - Player 2
    + `COMPLETED: 03-06-2025` Reduces `#points_remaining` by 2
    + `COMPLETED: 03-06-2025` Adds 1 to yellow ball potted tally `#tally---potted--yellow-p2`
    + `COMPLETED: 03-06-2025` Adds 2 to the last break total `#last---break--p2`
    + `COMPLETED: 03-06-2025` Adds 2 to highest break total if needed `#highest---break--p2`    
    + `COMPLETED: 03-06-2025` Increments text content 1 to yellow ball `#tally---potted--yellow-p2`

+ `COMPLETED: 03-06-2025` Shoot attempt - Colour Ball (Green) - Player 2
    + `COMPLETED: 03-06-2025` Reduces `#points_remaining` by 3
    + `COMPLETED: 03-06-2025` Adds 1 to green ball potted tally `#tally---potted--green-p2`
    + `COMPLETED: 03-06-2025` Adds 2 to the last break total `#last---break--p2`
    + `COMPLETED: 03-06-2025` Adds 3 to highest break total if needed `#highest---break--p2`    
    + `COMPLETED: 03-06-2025` Increments text content 1 to green ball `#tally---potted--green-p2`

+ `COMPLETED: 03-06-2025` Shoot attempt - Colour Ball (Brown) - Player 2
    + `COMPLETED: 03-06-2025` Reduces `#points_remaining` by 4
    + `COMPLETED: 03-06-2025` Adds 1 to brown ball potted tally `#tally---potted--brown-p2`
    + `COMPLETED: 03-06-2025` Increment last break tally by 4 `#last---break--p2`
    + `COMPLETED: 03-06-2025` Adds 7 to highest break total if needed `#highest---break--p2`    
    + `COMPLETED: 03-06-2025` Increments text content 1 to brown ball `#tally---potted--brown-p2`

+ `COMPLETED: 03-06-2025` Shoot attempt - Colour Ball (Blue) - Player 2
    + `COMPLETED: 03-06-2025` Reduces `#points_remaining` by 5
    + `COMPLETED: 03-06-2025` Adds 1 to blue ball potted tally `#tally---potted--blue-p2`
    + `COMPLETED: 03-06-2025` Increment last break tally by 5 `#last---break--p2`
    + `COMPLETED: 03-06-2025` Adds 7 to highest break total if needed `#highest---break--p2`    
    + `COMPLETED: 03-06-2025` Increments text content 1 to pink ball `#tally---potted--blue-p2`

+ `COMPLETED: 03-06-2025` Shoot attempt - Colour Ball (Pink) - Player 2
    + `COMPLETED: 03-06-2025` Reduces `#points_remaining` by 6
    + `COMPLETED: 03-06-2025` Adds 1 to pink ball potted tally `#tally---potted--pink-p2`
    + `COMPLETED: 03-06-2025` Increment last break tally by 6 `#last---break--p2`
    + `COMPLETED: 03-06-2025` Adds 7 to highest break total if needed `#highest---break--p2`    
    + `COMPLETED: 03-06-2025` Increments text content 1 to pink ball `#tally---potted--pink-p2`

+ `COMPLETED: 03-06-2025` Shoot attempt - Colour Ball (Black) - Player 2
    + `COMPLETED: 03-06-2025` Reduces `#points_remaining` by 7
    + `COMPLETED: 03-06-2025` Adds 1 to yellow ball potted tally `#tally---potted--black-p2`
    + `COMPLETED: 03-06-2025` Increment last break tally by 7 `#last---break--p2`
    + `COMPLETED: 03-06-2025` Adds 7 to highest break `#highest---break--p2`    
    + `COMPLETED: 03-06-2025` Increments text content 1 to black ball `#tally---potted--black-p2`

+ `COMPLETED: 03-06-2025` BUG: ball tally for brown ball player 2 needs to be fixed as a duplicate of the brown ball tally attribute for player 2.

+ `COMPLETED: 03-06-2025` Disable foul and miss buttons when points remaining is at 0 (Player 2)

+ `COMPLETED: 09-06-2025` BUG: The link `#apply_tally---red--p2` does not apply the correct number of points for multiple reds potted in the same shot. e.g. applying 2 red ball points gives us only 1 point

+ `COMPLETED: 09-06-2025` Apply points remaining fix for multiple red pots in the same shot for player 2 

+ `COMPLETED: 10-06-2025` BUG: Players apply 2 successful red ball scores and then miss on following colour. A reduction of 16 points should be applied to 
`#points_remaining` (The colour not shot for followed by the missed colour)

+ `COMPLETED: 13-06-2025` Restore playing through the final colour sequence for player 2.

+ `COMPLETED: 13-06-2025` Ensure that at no point does the number of red balls potted by both players exceed 15.

+ `COMPLETED: 16-06-2025` BUG: Red Ball tallies for players 1 and 2 should be incremented independently of each other like the colour balls.  Red balls for both players should add up to 15 for the number of balls potted.

+ `COMPLETED: 16-06-2025` BUG: Red ball tallies in player 1 are no longer incremented correctly after player 1 misses a pot attempt.

+ `COMPLETED: 16-06-2025` Missing the last colour after the last red should take the points remaining straight to 27 points and therefore into the final colour sequence.

+ `COMPLETED: 16-06-2025` If a player misses the next colour after the 15th red the next player starts shooting for the yellow ball as part of the colour sequence. (27 points remaining)

+ `COMPLETED: 16-06-2025` If a player misses a colour after the 15th red the next player starts shooting for the yellow ball as part of the colour sequence. (27 points remaining)

+ `COMPLETED: 16-06-2025` To get to the final colour sequence, players 1 or 2, or both between them must have potted 15 red balls. In theory, either player could possibly pot these red balls but not pot the following colour before they reach the colour sequence.

+ `COMPLETED: 16-06-2025` Replicate functionality of player 1 in player 2.

+ `COMPLETED: 16-06-2025` Take into account the number red balls in the frame that have been potted - by both players. They need to be incremented independently of each other, but the tallies never be allowed to go above 15 clicks between them. 

+ `COMPLETED: 16-06-2025` Take into account the number red balls in the frame that have been potted - by both players. They need to be incremented independently of each other, but the tallies never be allowed to go above 15 clicks between them.  BUG: When missing a colour on the colour sequence, the next player must shoot for that colour. (Player 2)  e.g. if Player 1 misses a pot attempt on Green, player 2 must shoot for Green.

+ `COMPLETED: 16-06-2025` BUG: Player 2 does not follow the colour sequence when Player 1 misses a pot attempt within 27 points remaining. 

+ `COMPLETED: 17-06-2025` BUG: Player 2 red ball does not factor in 2 red balls potted in the same shot. 

+ `COMPLETED: 17-06-2025` Track number of times Red ball has been potted `#pot---red--one` (no more than 15)
+ `COMPLETED: 17-06-2025` Track number of times Yellow ball has been potted `#pot---red--yellow` (no more than 16)
+ `COMPLETED: 17-06-2025` Track number of times Green ball has been potted `#pot---red--green` (no more than 16)
+ `COMPLETED: 17-06-2025` Track number of times Brown ball has been potted `#pot---red--brown` (no more than 16)
+ `COMPLETED: 17-06-2025` Track number of times Black ball has been potted `#pot---red--blue` (no more than 16)
+ `COMPLETED: 17-06-2025` Track number of times Pink ball has been potted `#pot---red--pink` (no more than 16)
+ `COMPLETED: 17-06-2025` Track number of times Black ball has been potted `#pot---red--black` (no more than 16)

+ `COMPLETED: 17-06-2025` Stop counting highest and last break when `#points_remaining`is at 0 (Player 2).

+ `COMPLETED: 17-06-2025` Stop counting highest and last break when `#points_remaining`is at 0 (Player 1).

+ `COMPLETED: 17-06-2025` Shouldn't take the missed points into account until I simulate shooting for a colour after the 2 reds at once.

+ `COMPLETED: 17-06-2025` Implement the "FOUL" button for player 1.
  + `COMPLETED: 17-06-2025` Add event listener for `#pot---foul--one`
  + `COMPLETED: 17-06-2025` Check that the player is shooting for a red ball or a colour ball.
  + `COMPLETED: 17-06-2025` The opposite player is awarded 4 penalty points - no effect in the current or highest break.
  + `COMPLETED: 17-06-2025` Play switches to the opponent who will shoot for the next red.
  

+ `COMPLETED: 17-06-2025` Implement the "FOUL+MISS" button for player 1.
  + `COMPLETED: 17-06-2025` Add event listener for `#pot---foulmiss--one`
  + `COMPLETED: 17-06-2025` Check that the player is shooting for a red ball or a colour ball.
  + `COMPLETED: 17-06-2025` The opposite player is awarded 4 penalty points - no effect in the current or highest break.
  + `COMPLETED: 17-06-2025` Play switches to the opponent who will shoot for the next red.


+ `COMPLETED: 17-06-2025` Implement the "FOUL" button for player 2.
  + `COMPLETED: 17-06-2025` Add event listener for `#pot---foul--two`
  + `COMPLETED: 17-06-2025` Check that the player is shooting for a red ball or a colour ball.
  + `COMPLETED: 17-06-2025` The opposite player is awarded 4 penalty points - no effect in the current or highest break.
  + `COMPLETED: 17-06-2025` Play switches to the opponent who will shoot for the next red.
  + `COMPLETED: 18-06-2025` BUG: Foul button on the colour sequence reverts play to 27 points and back to yellow ball (Player 1)

+ `COMPLETED: 17-06-2025` Implement the "FOUL+MISS" button for player 2.
  + `COMPLETED: 17-06-2025` Add event listener for `#pot---foulmiss--two`
  + `COMPLETED: 17-06-2025` Check that the player is shooting for a red ball or a colour ball.
  + `COMPLETED: 17-06-2025` The opposite player is awarded 4 penalty points - no effect in the current or highest break.
  + `COMPLETED: 17-06-2025` Play switches to the opponent who will shoot for the next red.
  + `COMPLETED: 18-06-2025` BUG: Foul button on the colour sequence reverts play to 27 points and back to yellow ball (Player 2)


+ `COMPLETED: 17-06-2025` Next player reverts to shooting for a red ball after a foul. 
+ `COMPLETED: 17-06-2025` Revert to shooting for a red ball after a foul. 

+ `COMPLETED: 18-06-2025` BUG:  Missing colour balls in the colour sequence reverts users to the yellow ball - #points_remaining = 27 - Both players

+ `COMPLETED: 18-06-2025` Event listener for `#pot---forfeit--one` and `#pot---forfeit--two` should be added.

+ `COMPLETED: 18-06-2025` Players presented with the option to force the opponent to retake the shot after a FOUL+MISS.

+ `COMPLETED: 19-06-2025` Forfeit button  

    + `COMPLETED: 18-06-2025` ask user to confirm forfeit for that player before clicking to confirm.
    + `COMPLETED: 18-06-2025` Display the scores to indicate end of the frame. 
    + `COMPLETED: 18-06-2025` Same details as end of frame: #points_remaining == 0 - "Frame Complete - Player N Wins!

    ```
        Player 1: 24 | Player 2: 40
        Highest Breaks - Player 1: 15 | Player 2: 27
    ``` 

    + `COMPLETED: 19-06-2025` Implement a custom tooltip/dialog box to display the confirmation dialog box

+ `COMPLETED: 20-06-2025`  BUG: Foul and Penalty Points are being be applied to the opponent player not the player that fouled.  Also active play should revert to the other player -if- that player has not opted to make opponent replay the shot!

+ `COMPLETED: 20-06-2025` Clicking `#app-app` should take the user to a new browser tab so game progress is not lost.

+ `TODO:` Tidy up CSS/Sass code.

+ `TODO:` Ask for confirmation before initiating a "re-rack" (new frame)

+ `TODO:` Refactor code generated so far to reduce total lines in the script, make it more readable and easier to maintain.

+ `TODO:` BUG: Player 2 Cursor pointer missing from red ball icon after the first successful colour pot attempt.

+ `TODO`: On smaller screens, the "apply" link for red balls bleeds below colour balls that also bleed the line below. Not ideal for clarity about which ball it is linked to.

+ `TODO:` BUG: "Last Break" should not be reset to 0 until a player makes their first successful pot attempt after returning to the table

+ `TODO:` Last break for player 1 resets when player 1 misses a pot attempt.  Keep this number until the player makes successful pot after returning to the table.
ayer 2. 

+ `TODO:` BUG: Player 1 clicks "MISS" without applying their Redball pot(s).  

+ `TODO:` BUG: Player 2 colour balls should be disabled when the table is cleared (frame ends - `#points_remaining` = 0 and player 2 has won the game).

+ `TODO:` "Frame Complete" Tooltip can probably be dismissed automatically after a given number of seconds - e.g. 5 seconds.
    
+ it's possible, however unlikely it might be that a player can pot a colour ball 16 times, including the colour sequence. A 147 Break (15 reds, 15 of a single colour and the colour sequence e.g. 15 Reds, 15 Yellows, Yellow, Green, Brown, Blue, Pink, Black)

+ `TODO:` Change the styling of the snooker ball icons so they stand out more - more visual clarity required against the main background and also as disabled elements. 

* `TODO:` Check the highest break is updated correctly - player 1

* `TODO:` Check the highest break is updated correctly - player 2

+ `TODO:` Click black ball icon `tally---potted--black-p1` (Player 1) to score 7 point player 1 - 
    + `TODO:` Adds 8 to last break `#last---break--p1`
    + `TODO:` Adds 8 to highest break `#highest---break--p1` 

+ `TODO:` about.php should include instructions on what each button does - e.g. "Miss" button refers to a failed pot but legal hit and ends visit to the table.

+ `TODO:` Consider reworking about.php and its content as a modal area for index.php

+ `TODO:` Both players want to end the frame.  Develop a button that ends the frame and calculates the score as it is at that time. 

+ `TODO:` Add a note about vibe coding. Why I'm doing it this way.

### Identified Bugs
[Back to Top](#sections)

+ `1` - the `rerackTable()` method, as written currently pushes player one score buttons down a row until all colours are pressed. Have replaced with a `location.reload` method on the "Re-reack" button for now.  - `Resolved: 12-05-2025`

```javascript

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
    }

    resetButton.addEventListener("click", function(event) {

        event.preventDefault(); // Prevent default link behavior
        // reRackTable();        

        setTimeout(function () {

            location.reload();
        }, 1000); 
    });
    

```

+ `2` - Ball potting tallies over player 2 ball icons by default. They must not be visible until the user of the application clicks the potted ball icon. `Resolved: 20-05-2025`

+ `3` - `#points_remaining` should not be less than 0. This bug occurs after the "MISS" button is clicked. This should not be possible when the table is cleared and the frame is over. `Resolved: 20-05-2025`

+ `4` - Every time you click the Player 1 "MISS" button, it becomes possible to click the greyed out colour buttons to tally points for that colour. `Resolved: 20-05-2025`

+ `5` - ball tally for brown ball player 2 needs to be fixed as a duplicate of the brown ball tally attribute for player 2. `Resolved: 03-06-2025`

+ `6` - The link `#apply_tally---red--p2` 2 does not apply the correct number of points for multiple reds potted in the same shot.  e.g. applying 2 red ball points gives us only 1 point. `Resolved: 09-06-2025`

+ `7` - Red Ball tallies for players 1 and 2 should be incremented independently of each other like the colour balls.  Red balls for both players should add up to 15 for the number of balls potted. `Resolved: 16-06-2025`

+ `8` - Red ball tallies in player 1 are no longer incremented correctly after player 1 misses a pot attempt. `Resolved: 16-06-2025`

  e.g. 
    + Red Ball Player 1:  1
    + MISS 
    + Red Ball Player 2: 1
    + MISS
    + Red Ball Player 1: 3   (should be 2)
    + MISS 
    + Red Ball Player

+ `9` - When missing a colour on the colour sequence, the next player must shoot for that colour. (Player 2)  e.g. if Player 1 misses a pot attempt on Green, player 2 must shoot for Green. `Resolved: 16-06-2025`

+ `10` - Player 2 red ball does not factor in 2 red balls potted in the same shot. `Resolved: 17-06-2025`

+ `11` - Player 2 does not follow the colour sequence when Player 1 misses a pot attempt within 27 points remaining. `Resolved: 16-06-2025`

+ `12` - Missing colour balls in the colour sequence reverts users to the yellow ball - #points_remaining = 27 - Both players. `Resolved: 18-06-2025`

+ `13` - Foul button on the colour sequence reverts play to 27 points and back to yellow ball (Player 1). `Resolved: 18-06-2025`

+ `14` - Foul button on the colour sequence reverts play to 27 points and back to yellow ball (Player 2). `Resolved: 18-06-2025`

+ `15` - Foul and Penalty Points are being applied to the opponent player not the player that fouled.  Also active play should revert to the other player -if- that player has not opted to make opponent replay the shot! `Resolved: 20-06-2025`

+ `16` - "Last Break" should not be reset to 0 until a player makes their first successful pot attempt after returning to the table.

+ `17` - Player 1 clicks "MISS" without applying their Redball pot(s). 

+ `18` - Players apply 2 successful red ball scores and then miss on following colour. A reduction of 16 points should be applied to `#points_remaining` (The colour not shot for followed by the missed colour)

+ `19` - Player 2 Cursor pointer missing from red ball icon  after the first successful colour pot attempt.

### Future Improvements

+ Identify how many points ahead or behind a player is - changing depending on point score - to be compared with the points available.
    + Points Ahead:  45/147 - 0.33
    + Points Remaining: 147/147 - 1
    + Points Behind: 147/45 - 2.5   

### Comments 

[Back to Sections](#sections)

[v1.0.0](#v100) --- [v1.0.1](#v101) --- [v1.0.2](#v102) --- [v1.0.3](#v103) --- [v1.0.4](#v104) --- [v1.0.5](#v105) --- [v1.0.6](#v106) --- [v1.0.7](#v107) --- [v1.0.8](#v108) --- [v1.0.9](#v109) --- [v1.0.10](#v1010) --- [v1.0.11](#v1011) --- [v1.0.12](#v1012) --- [v1.0.13](#v1013) --- [v1.0.14](#v1014) --- [v1.0.15](#v1015) --- [v1.0.16](#v1016) --- [v1.0.17](#v1017) --- [v1.0.18](#v1018) --- [v1.0.19](#v1019) --- [v1.0.20](#v1020) --- [v1.0.21](#v1021)
 
#### v1.0.0

+ `v1.0.0` - This is probably the most complex and involving application I've ever got myself into. After all the planning I've done and is still to be done I'm now left with trying to decide where and how to start. Because one thing I do will effect the next thing at various times in the weeks and months to come. Several things link together. As an example. The user clicks the Red ball icon for player 1. This action effects many moving parts. 1. The player 1 score is increased by 1. 2. The points remaining is reduced by 1. 3. The last break is increased by 1. 4. The highest break is increased by 1. 5. A number 1 is added to the red ball representing the number of times that player 1 has potted a red ball.

+ And since we're representing a potted ball, player 1 remains at the table and in the game; they will now be shooting for a colour ball.  

+ There's enough to be getting on with there. But I can sense more to do because I'm wondering if we need to grey out the colour balls until we've actually registered that a red ball has been potted and vice versa.

+ Elements affected by the red ball potted:

  + `#player---1--table` - The red icon marks the player who is at the table. (Player 1 in this case) It is invisble by default for player 2
  + `#player_number` - The number is to revert between 1 and 2, depending on who is at the table
  + `#tally---potted--red-p1` - The number of red balls potted by player 1
  + `#highest---break--p1` - The last highest break made by player 1
  + `#last---break--p1` - The total of the last break made - (a "break" is a visit to the table)
  + `#p1---score` - The Total Scored by Player 1 which is the total accumulation of breaks and scored and penalty points given
  + `#points_remaining` - The number of points remaining in the game

[Back to Top](#comments)

#### v1.0.1

+ `v1.0.1` - I've got as far as implementing the UX feature of indicating which balls player 1 has potted and how many times that ball as been potted. I've also updated the scores in each turn for the total player score; the last break made and the highest break. 

+ All of this, assumes that the player has not scored 2 reds in a row, has not missed a shot and goes all the way to a 147 break. We haven't yet thought about the turn based nature of this app. There's the whole business to come of handling what happens when the opponent player comes to the table.

[Back to Top](#comments)

#### v1.0.2

+ `v1.0.2` - I've added a link to the about page on the version number in the footer element and added some initial copy for about.php page.  Also I've created a "Re-rack" Table function to reset the game at any time without the need to use user-agent refresh buttons.

[Back to Top](#comments)

#### v1.0.3

+ `v1.0.3` - Well, it's been a bit of a day (`12-05-2025`) trying to start getting some turned based play working with this app. But... for now, I've made a little achievement by gettin turn play working by switching between the red and the yellow ball. The colour sequence does stop working after the green ball which is a bug that needs looking at. 

+ But after some struggling around for most of the day I'm taking this as a win.

+ I'm still working on a way to handle 2 red balls being potted in the same shot but I think it's sensible at this stage to assume one red at a time till we get this turn play working. And that's the approach I took.  

+ By the next day I'd been able to get the turn play working with the red and colour balls as well as taking into account the colour sequence.  So. Where we stand now is that we are playing through a standard 1 frame visit where the player
   + Commits no fouls
   + Pots 15 Reds and 15 colours with no misses
   + Goes through the colour sequence at 27 points remaining `#points_remaining`
   + Can operate a 147 maximum break
   + Cannot recreate a situation where a player score more than one red in the same shot
   + Cannot shoot for any more balls or foul buttons when the points remaining `#points_remaining` is at 0

[Back to Top](#comments)

#### v1.0.4

+ `v1.0.4` - So we've come to the point now where we've got the scoring system working to a certain degree. To the degree that a range of reds and colours can be potted, minus any eventuality where the second player gets to the table. Perversley we haven't yet taken into account the common scenario where the player doesn't pot anything on their break (A "miss"). So soon we'll have to open up the turn based place to bring player 2 into play. 

+ At that point, we'll have to link a number of things together, such as the `#points_remaining`; tracking the indiviual player scores; tracking the number of balls potted and therefore the ones remaining across both players.

+ But I don't want to do that before we've finally expanded scoring system working so it takes into account multiple reds potted in the same shot.

+ To attempt this, I've added a hyperlink to the project; `#apply_tally--red--p1`. This link to the player 1 potting section under the red ball. This will allow us to click multiple times to apply the tally to the player 1 red ball. We then click this link rather than the red ball icon to switch to colour balls as normal. 

```html

    <a href="#" id="apply_tally--red--p1" class="potting---tally">Apply</a>                
    <br />
```

```css
a#apply_tally---red--p1 {

	color: yellow;
    font-size: 12px;
    margin: 0 10px;
    position: relative;
    bottom: 7px;
    visibility: hidden;

}
```

+ I'd also like to attempt to differentiate between the number of times reds have been legally potted in a given shot as opposed to the number of reds that have *actually* been potted, which is an important distinction. For example a player might pot 2 reds in one shot, which is legal.  But that would then take the player to 15 reds in 14 legal pots.

[Back to Top](#comments)

#### v1.0.5

+ `v1.0.5` - In Snooker, You only "lock in" the actual loss once you finish reds and see how many colour slots we never got to use. But for the purposes of this app, we are calculating the points remaining after every colour proceeeding a red ball. What this means is that 2 reds in a single shot will be counted as 2 points for a red and deducts only 2 from the remaining points. 

+ This part has taken a lot of work. But I think I've worked out a solution that works well for handling multi-red shots. That works because scores of 2 or more of a red ball when shooting for red is a legal shot.  

+ I had thought of trying to force this change after the last red and colour combination but I couldn't generate a solution without causing too many other bugs and issues in the script.

+ Finally for this part, I've modified the "apply" button to only show when the player is shooting for a red ball. It's a not needed when shooting for a colour and otherwise becomes a distraction.

[Back to Top](#comments)

#### v1.0.6

+ `v1.0.6` - Working on the "MISS" button and implementing the beginnings of turn based play between the 2 players.

+ So. Where we stand now is that we are playing through a standard 1 frame visit where the player.  

+ The next step is to implement the "MISS" button, which in turn expands the turn based play to include the opponent player. That will have massive implications for the rest of the development of this app. In the first instance, we're just going to use the "MISS" button to get the opponent player to the table. And then, vice versa (i.e. player 1 misses a pot attempt so player 2 come to the table).

+ This affects a number of elements:
  + `#player_number` - The number is to revert between 1 and 2, depending on who is at the table; programatically change the text content.
  + `#tally---potted--miss-p1` - The button that "misses" a pot attempt by player 1 and brings player 2 to the table.
  + `#tally---potted--miss-p2` - The button that "misses" a pot attempt by player 2. This will be disabled when player 1 is at the table.
  + `#points_remaining` - The number of points remaining in the game. - This will be reduced by 7 when the player misses an attempt for a colour ball. Unless that colour is part of the final colour sequence.
  + `player---1--table` - The red icon marks the player who is at the table. This will move to `player---2--table` when Player 1 misses a pot attempt. It will appear back on `player---1--table` when Player 2 misses a pot attempt to indicate that player 1 is back at the table.
  + `#last---break--p1` - The last break made by player 1 - this will be reset when player 1 misses a pot attempt.
  + `#highest---break--p1` - The highest break made by player 1 - this will remain the same until player 1 achieves a new higher break. Not a change but worth noting.

+ currentPlayer (`#player_number`) text content linked to newPlayer and playerNumber element.

+ I've left this stage with turn based play in place between the 2 players. Play Reverts bEtween player status icons when missed pot attempts occur. A missed pot attempt on a colour reduces potential points by 7.  A miss on a red ball does not reduce the points remaining. This is good. 

+ We also have taken into account which colour a player is shooting for when thry return to the table after opponent misses a pot attempt.  It will always return to a red ball if there are reds left on the table.

+ Where I've left it at for now `19-05-2025` is I'm trying to work out a way to diable the relevent buttons for the player who is not at the table. There must not be way for a player to interact with the buttons when they are not at the table or accidently register points. Especially since we can't undo any actions yet.

+ It might be worth trying the following prompt. 

 ```
   Player 1 is at the table by default. 

   Disable all player 2 buttons when player 1 is at the table. Open them up when player 2 is at the table. and vice versa.

   e.g. Player 1 is at the table.

        #tally---potted--yellow-p2
        #tally---potted--green-p2
        #tally---potted--brown-p2
        #tally---potted--blue-p2
        #tally---potted--pink-p2
        #tally---potted--black-p2
        apply_tally---red--p2

        #put---undo--two
        #pot---miss--two
        #pot---foul--two
        #pot---forfeit--two  .disabled
        #pot---foulmiss--two

 all disabled. Ensure all buttons for  the buttons for player 1 are enabled.

    e.g. Player 2 is at the table.

        #tally---potted--red-p1
        #tally---potted--yellow-p1
        #tally---potted--green-p1
        #tally---potted--brown-p1
        #tally---potted--blue-p1
        #tally---potted--pink-p1
        #tally---potted--black-p1
        #apply_tally---red--p1

        #put---undo--one
        #pot---miss--one
        #pot---foul--one
        #pot---forfeit--one  
        #pot---foulmiss--one

 all disabled. Enable all the buttons for player 2

```

+ And in the end, that's what worked. It gave me 2 helper functions `enablePlayerButtons()` and `disablePlayerButtons()` to control the buttons for each player which are triggered at the call of each instance of `switchPlayer()` or more specifically, when the miss buttons are triggered. So we can now switch between 2 players in turn based play when both of the players miss a pot attempt.

[Back to Top](#comments)

#### v1.0.7

+  `v1.0.7` - I added a couple of id attributes to the "breaks and snookers" element for each player to complete the visual turn based effect.

+ 

```html

<article class="breaks---and--snookers" id="player---breaks--p1">
    
    <div>Highest Break: <span class="highest---break" id="highest---break--p1">0</span></a></div>
    <div>Last Break: <span class="last---break" id="last---break--p1">0</span></a></div>
    <div class="snookers---required">Snookers Required: <span id="snookers---required--p1">0</span></div>
    
</article>

```

#### v1.0.8

+ `v1.0.8` - Well, I had hoped to have made a bit more progress and moved on to making player 2 able to do the things player 1 can. But while I was working on that I noticed another bug.

+ After I clicked the "MISS" button for player 2, even though the player 1 buttons were greyed, I noticed that clicking the buttons incremented the ball potted count and accordingly assigned points to the player. A genuine bug.

+ From the AI `The solution involved creating parallel arrays of ball elements and tally elements, then ensuring that whenever a ball was disabled, its corresponding tally was also disabled (and vice versa for enabling). We also created a new helper function `enableOnlyBallAndTally()` to handle the special case of the final color sequence where only one color should be available at a time.`

+ I knew at some point there would be a radical refactoring of the code we wrote so far. But I didn't think it'd be this soon. We have new methods we hadn't previously used.  Is it a bad thing? Not necessarily but it does make me super aware of the kind of work that I'm doing; how big this application is and how hard it is to maintain even with the Aid of AI.  

+ Hopefully soon I can get on again and work on expanding the turn based play between the 2 players.

[Back to Top](#comments)

#### v1.0.9 

+ `v1.0.9` - So much has happened from one update to the next that I've decided to push this to its own update report. 

+ I did think it was imported to ensure that disabling all buttons when the table was cleared....

but we also now have a new feature to the app that I wasn't expecting but felt it was necessary to keep in.  First,  Cursor AI added in a frame complete" tooltip that appears when poins remaining is at 0 (i.e. a player has cleared the table).

+ It then added more detail to this tooltip. That, again I didn't ask for. All I wanted was button and  disabling but clearly Cursor AI decided I wamted something else.  It now shows me which player won the frame, the final scores for both players, and the highest break for each player.

+ These are all fine. They're good things to have but for my part they are unplanned but too good to just discard.

[Back to Top](#comments)

#### v1.0.10

+  Game Development Status

   + Players commit no fouls
   + Players can miss pots
   + Player 1 Pots up to 15 Reds and 15 colours with misses now possible
   + Player 1 is able to click or press for up to 15 red balls and as many missed shots for a colour before getting to the colour sequence
   + Player 1 can go through the colour sequence at 27 points remaining `#points_remaining`.
   + Player 1 can "play" a 147 maximum break.
   + Player 1 cannot shoot for any more balls or foul buttons when the points remaining `#points_remaining` is at 0

+ We now have to bring Player 2 into the game and functioning in the same way that player 1 now does. So we have to figure out how to replicate the functionality of player 1 in player 2.

+ This means
   + Player 2 coming to the table after a miss or foul by player 1
   + Player 2 will shoot for a red ball first if there is a red ball left on the table
   + Player 2 will shoot for a red and then a colour ball until they miss; bringing player 1 into the game
   + Player 2 can "play" a 147 maximum break if player 1 misses before potting another ball.
   + Player 2 scoring points will add to the total for the last break and highest break for player 2.
   + Players 1 and 2 start sharing the points available to be played for as they now compete for points. 

+  I've been flitting around the edges of doing this for a while now feels like a big part of the project where a lot could go wrong and indeed has gone wrong in meeting those goals. My first approach was to try planning a new AI prompt because it seemed to me this was an undertaking that requires a big refactor. I thought that trying this approach might help me in the way that element interactivity did.

```

We are going to try and replicate the how Player 1 works right now with the second player. Right now the only interaction between Player 1 and Player 2 is when a miss occurs.

This means we'll need to make sure that when player 2 comes to the table after a miss or foul by player 1, that player 2 shoots for a red ball (if there is one available). It will increment tallies of the number of times it is potted, like before. The tallies for player 1 and 2 should be independent of each other. There shouldn't be any need to calculate how any balls are available for each player. 

If the points remaining are being appropriately deducted. But we do need to take into account that if there are no reds left, they shoot for the first colour ball available in the colour sequence (Yellow, Green, Brown, Blue, Pink, Black).

Elements affected: 

pot---red--two
apply_tally---red--p2 increments by 1

p2---score increases by given score

highest---break--p2
last---break--p2

```

+ And it was a case of "Do we leave it there? Or do we say something in the prompt about how the scorer app will track the points available to be scored for each player? and how they will compete for points?"

+ Then I started to wonder if I had been doing this all wrong the wrong way? Because what I was trying to do was essentially trying to do doing big massive prompt to CursorAI `claude-3.7.sonnet` that tried to cover many bases and fix many bugs. 

+ I find that this is an all consuming approach. Maybe I just need to build 2nd player from the ground up; to be more methodical and breakdown the job into smaller tasks, like I was doing before. Let me try this for shooting for a red ball before I move on.

+ At the end of this iteration, I've got player 2 shooting for a red ball which increments the tally for player 2 red ball by 1 and makes the apply button for player 2 red ball visible.

[Back to Top](#comments)

#### v1.0.11

+ There's no way around it. Introducing the second player into the game introduces so many other pressure points. And every attempt I've made to do it so far has ... not so much been a failure... but has introduced numerous bugs.  So now it's a case of committing to an action and working through those bugs. And I've since accepted that the code is more bloated than I would have liked. The code for player 1, working differently than player 2 because now there *are* 2 players there are more variables (or moving parts) to keep track of.

+ So there's trade-offs.  I've traded off my desire to sort out the tally of the potted balls across both players and let it go for now.  Instead I've at this point implemented the turn play of red and colour balls for player 2.  So now player 2 correctly applies the number of points for each red and colour ball potted. I've generated a solution that correctly takes off the required remaining points for a colour, unless the player has reached the colour sequence. I've generated a solution that works but it's not pretty.

+ I've also traded off on code that functions before ensuring that code is neat; tidy and readable. I'll work on that sorting that out in the future.

+ On this day (02-06-2025) I ended up making a tremendous leap forward. I can now replicate as many missed and successful pot attempts as I like. And the colour sequence works as expected.  Almost as expected. If one player misses a pot attempt on the last brown the next player will shoot for the last blue ball. This is a bug because the programming seems to be assuming that the ball was in fact potted and moves on.  

+ However, for now I'm taking this as a win because it does seem that the turn based play is working for the most part. I've been testing this extensively, and there does seem to be the intelligence to know when to start the colour sequence based on the remaining points available.

[Back to Top](#comments)

#### v1.0.12

+ After this point, it looks like we've finished building turned based play in so far as switching between colour and red for both players and changing between both players after a missed shot. There is still a bit of stylistic polish to sort out but functionally it's done.

+ This took a lot of bloated code. I am fully aware of the code bloat and that'll need to work on a lot of refactoring later on. At my last count I can see that there are over *2400* lines of code in `app.js`. This is only going build up even more before I'm finished adding the application features.

+ But in terms of the functionalty of the application it's another big step.

    + The MISS Buttons switch you between Player 1 and Player 2
    + The red and colour balls correctly apply the player scores; ball potted tallies; breaks and points remaining values for player 1.
    + The red and colour balls correctly apply the player scores; ball potted tallies; breaks and points remaining values for player 2.
    + MISSing shots on a colour reduces the point remaining by 7 for each shot - unless the player has reached the colour sequence.

+ There a new glitch now with regards to player 2 finishing the game. It's hard to replicate this on its own because there could be multiple routes to player 2 overshotting the points remaining beyond 0 points. And if it goes to -1 the frame will not end (as far as the application is concerned). Now at this point I have verified that points are calculated correctly both players. So it comes down to the fact that player 2 does not take into account multiple red pots in the same shot as player 1 does.

[Back to Top](#comments)

#### v1.0.13

+ `The turn based play is definitely coming into place now.  On this day, 04-06-2025, I've implemented the disabling of red and colour balls at the appropriate times (Player 2).

+ I also refreshed the main stylesheet so the cursor pointer always appears on the ball icons aned frame buttons (MISS, FOUL) when they are enabled.

+ There was an issue with opacity of the ball tallies not working properly when colour balls were enabled that does now seem to have resolved itself.

+ What needs to happen now is to sort out multiple red pots in the same shot for player 2 (points remaining affected) and ensure that at no point do the number of red balls potted by both players exceeds 15. And the last thing to sort out is the final colour sequence for player 2.

#### v1.0.14

+ Progress with the user case of multiple red pots in the same shot for player 2 (points remaining affected). A further bug remains where when players miss the 2 player red balls are linked to each other and do not tally independently.

+ There are a couple of points I haven't yet taken in to account. The first To get to the final colour sequence, players 1 or 2, or both between them must have potted 15 red balls. In theory, either player could possibly pot these red balls but not pot the following colour before they reach the colour sequence.

+ The second is that the points remaining is not being deducted correctly misses a colour ball after potted 2 or more reds in the previous shot for a red.

[Back to Top](#comments)

#### v1.0.15

+ Multiple red pots in the same shot are now taken into account MISSed shots `2 red` --> `MISS`. This means at no point can users accumulate more than 15 red balls potted between the 2 of them.

+ It took a lot of testing and prompting of the AI to get this working.

+ I had wanted to sort out the colour sequence for player 2 but this is proving difficult for the AI to understand. It's like Harry Potter trying find different ways of saying "let me into the Room of Requirement". Extensive testing has also uncovered a couple of new issues to sort out - including the need to take the player straight into the final colour sequence when when missing the colour after the last red.

[Back to Top](#comments)

#### v1.0.16

+ Now this is very interesting.

+ I've been attempting to vibe code the solution this problem "colour sequence handling for player 2" for a few days now. I go back to the Harry Potter analogy I used in `v1.0.15`.  I tried every combination of words I could think of and more to make the model understand what I was trying to do. The model I was using (on auto) was `claude-3.7-sonnet`. It claimed to diagnose the issues and gave me more generated code and claimed solutions than I can count. What always transpired was more bugs returned than any fixed issues or no effect to the code whatsoever.

+ So... I did the only other thing that made sense to me. I changed the model in Cursor AI to `claude-4-sonnet`. I shied away from doing that before now because I didn't want to be charged any extra money than the subscription I'm paying for using the latest available model (I don't pretend to be on top of the specifics of Cursor's pricing structure.) but I got the impression that further charges would be payable.

+ Anyway, I started a new chat and asked claude 4 to do this...

  `"build the colour sequence for player 1 so it works the same way as it does when player 1 goes through it.  Make sure misses are taken into account  e.g. if player 1 misses on green, player 2 shoots for green etc"`

+ It took a few minutes but it got it working at the first attempt. Worth every penny (or cent) extra I might be charged in the end. I've lost a bit of time and almost lost my will to carry on with this project but it's another big step.

+ I think it's worth noting what changes have been made to the code.
  + Removed redundant `updatePlayer2BallAvailability()` and `updatePlayer2BallStyling()` functions
  + The main `updateAvailableBalls()` function now properly handles both players. This ensures consistent behavior between player 1 and player 2

  + So the sonnet has handled all redundant code, any references to redundant functions and applied the changes accordingly. 

[Back to Top](#comments)

#### v1.0.17

+ In this update, I've finally (Well... `claude-sonnet-4` has) converted the Red ball pot tallies to count incrementally and independently of each other. What was happening before today, (`16-05-2024`) was that the numbers were doing the wrong kind of counting. 

+ If say I'd simulated player 1 potting 5 reds and missing the next colour, player 2 potting their first red would indicate 6, even though it was their first Red. Sonnet tells me that this is because "both players are displaying the total red count (`redClickCount`). 

+ Naturally the fix involves changes to multiple areas of the codebase. To update the red ball click handler for Player 1 to show only their individual count. To update the apply button handler for Player 1 to track their individual red ball total; to update the Player 2 apply button handler to track their individual red ball total. Finally to update the reset function to also reset the individual player red ball totals

+ A summary of these changes 

```text
1. Added Independent Red Ball Tracking Variables

    p1RedBallsTotal - tracks only Player 1's red balls potted
    p2RedBallsTotal - tracks only Player 2's red balls potted

2. Updated Red Ball Click Handlers

   + Player 1: Now checks total across both players before allowing more reds, but displays only Player 1's count (p1RedBallsTotal + tempRedTally)
   + Player 2: Now checks total across both players before allowing more reds, but displays only Player 2's count (p2RedBallsTotal + tempRedTallyP2)
3. Updated Apply Button Handlers
   + Both players now update their individual red ball totals when applying their shots
   + The global redClickCount still tracks the combined total for game logic purposes
4. Updated Reset Function
   + Resets both p1RedBallsTotal and p2RedBallsTotal when the game is reset
```

+ The second thing I managed to get sorted out was the MISS button handlers, forcing the code to transition the next player to the colour sequence  (`27 points remaining`).

+ This issue was fixed by modifying the miss button handlers which required specific handling for MISS scenarios - with additional checks required on the number of reds potted allowing us to determine when the players should be playing the colour sequence following a red ball pot.

+ I'll let the AI summarise the rest.

```text

Key Changes Made:
1. Added Special Handling for Missing After the 15th Red
  + Both miss button handlers now check if:
  + Player is shooting for a color (!shootingForRed)
  + All 15 reds have been potted (redClickCount >= 15)
2. Direct Transition to Final Color Sequence
  + When a player misses the color after the 15th red:
  + Points remaining is set directly to 27
  + Game mode stays as shooting for colors (shootingForRed = false)
  + Next player will enter the final color sequence starting with yellow
3. Preserved Normal Miss Logic
  + For misses during normal play (when reds are still available):
  + Points are reduced by 7 (or more for multi-red shots)
  + Next player shoots for red if reds are available
```

[Back to Top](#comments)

#### v1.0.18

+ As far as I can see, the rest of the development of this app should be relatively straightforward, having now done the bulk of the work, which is based on the main scoring logic. Potting balls, missing shots, accumulating points per player; calculating the remaining points to be played for; calculating the current break and highest break in a visit.  All of that has been taken care of.

+ I say "relatively straightforward but I've been spending a bit of time thinking about 'foul scenarios' in Snooker player and how they might be applied to this app. Most of them can be settled by simply clicking/pressing for FOUL or FOUL+MISS. There are a certain number of things to think about.  Is it a foul on a red or a colour ball? Is the value of the colour ball higher than 4?  Is it a foul and a miss?  Did the cue ball get potted? Did the player touch a ball with anything other than the snooker cue?

+ I have planned for most, if not all of those scenarios. But I think we can press ahead with the basics and then build on the more complex scenarios as we go.  And that's what I did. I've added the event listeners and logic for the foul and foul+miss buttons. In each case, when the FOUL buttons are clicked, the opposing player is awarded 4 points. And for now, ONLY 4 points. We are going to have to do some checking later on for colour balls and values so that the correct penalty points are awarded.

+ It's worth again summarising the steps taken.  I used ```claude-4-sonnet``` again and it hasn't failed me up to this point. Although it did introduce a bug for the foul event listeners on the colour sequence. That's okay, we can sort that later.  But the model sorted out everythng it needed to do. For both Foul and Foul and a Miss.

```text

A summary as provided by claude-4-sonnet

1. Event Listeners Added
  + Added event listeners for #pot---foul--one (Player 1 foul button)
  + Added event listeners for #pot---foul--two (Player 2 foul button)

2. Penalty Points System
  + 4 penalty points are awarded to the opposing player when a foul is committed
  + Points are added directly to the opponent's total score
  + No points are added to the fouling player's break (break is reset to 0)

3. Points Remaining Logic
  + When fouling on a red ball: No points are deducted from points remaining (red ball remains available)
  + When fouling on a colour ball during normal play: 7 points are deducted from points remaining (accounts for the missed colour opportunity)
  + When fouling during final colour sequence: Points remaining is set to 27 to maintain the colour sequence


4. Player Switching
  + Fouling player's break is reset to 0
  + Game switches to the opposing player
  + Next player shoots for red balls (if available) or continues the colour sequence

5. Integration with Existing Systems
  + The existing disablePlayerButtons() and enablePlayerButtons() functions already handle the foul buttons
  + Foul buttons are properly disabled/enabled during player switches
updateAvailableBalls() function manages ball availability after fouls

6. Game State Management
  + Handles multi-red shot scenarios correctly
  + Manages final colour sequence transitions properly
  + Maintains all existing game logic while adding foul functionality
  + The FOUL buttons now work seamlessly with the existing miss buttons and ball potting system, providing a complete foul handling mechanism for the snooker scorer application.
```

+ But... at least at this point the buttons are working and doing something. 

[Back to Top](#comments)

#### v1.0.19

+ `17-06-2025` - In these number of days, I've been working on more of the logic for the foul and foul+miss buttons. In doing this I noticed a new bug that crept in - the foul button on the colour sequence reverts play to 27 points and back to yellow ball (both players).  In fact, this was the case for every MISS, every FOUL and every FOUL+MISS button.

+ Now that we've moved on to using the `claude-4-sonnet` model, these fixes have been somewhat seamless. Without going into too much detail, we were able go in and identify where the bug was; fixed several event handlers and added a new condition to differentiate between normal play and the final color sequence.  

```
    if (!shootingForRed && redClickCount >= 15 && remainingPoints <= 27) → No change to points during final sequence
```

Rather than 

```
    if (!shootingForRed && redClickCount >= 15)
```

+ It's a bit like something a human would do in a way because by introducing code that does one thing it can have a negative impact; an unintended consequence for another thing.  So that's why we kept going back to 27 points because the new condition checks we made were not robust enough.  We fixed that on `18-06-2025`.

+ The second thing we worked on in this iteration of the app is player forfeiting  functionality. The generated solution works with the Alert dialog of the user agent (the browser) to give user the chance to either correct a mistake and cancel the forfeit confirm that the player did indeed forfeit the frame. This works for us because if the does not forfeit they get the chance to indicate the correct player action and move on with the frame.

+ I do get the sense that we'll want to move away from using the alert dialog box and instead use a more custom JavaScript solution. So I might ask about how to use that next. It would provide a framework for letting the user select the proper penalty points for fouls on higher value colours.

[Back to Top](#comments)


#### v1.0.20 

+ "Is there a way", I asked, "to modify this [Forfeit dialog box], so it uses a custom element, a tooltip that does the same confirmation process but takes it out of the browser functionality. This is for aesthetics.. something that better plends in with the app"  

+ And well.. I knew the answer was "yes", of course. Within a few minutes, I had a working solution generated for me, for both of the forfeit buttons..

+ I got a nice modal area generated for me with an aesthetic that Claude analysed and made to suit the rest of the app. I can read and understand what `claude-4-sonnet` has done. But given the task, I could not have thought to make the dialog box a modal area with buttons you can do something with.

```javascript

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

    function handleModalConfirm() {

    function handleModalCancel() {

    
    // Execute the forfeit
    forfeitFrame(forfeitingPlayer);

    
    // Function to handle player forfeit
    function forfeitFrame(forfeitingPlayer) {
        console.log(`Player ${forfeitingPlayer} has forfeited the frame`);

        // . . . 


    }

```
+ In the `forfeitframe()` method, you can see how the end frame elements and modal are created.

+ Now we can try and work on the remaining required modals and bring all the foul scenarios into play. For instance, we need to award the apppropriate penalty points to the opponent player, depending on whether the foul took place on a red ball, or a higher value colour ball than the 4 points.

+ Let's review the foul scenarios:

```text

PLAYER IS ON A RED BALL BUT HITS A COLOUR FIRST
PLAYER ON COLOUR BALL BUT HITS A RED
FOUL AND A MISS - FAILS TO HIT A RED OR ANY OTHER BALL
MISFIRING THE CUE BALL: DOUBLE HIT (ON COLOUR BALL)
MISFIRING THE CUE BALL: DOUBLE HIT (ON RED BALL)
POTTING THE CUE BALL IS A FOUL
POTTING THE CUE BALL IS A FOUL, EVEN IF A RED OR A COLOUR IS ALSO POTTED
Red ball goes off the table

```

+ That presents a number of combinations and we need to get right. Are we fouling on a red or a colour. And which colour have we fouled on, etc. And then I thought of another way.  

+ For fouls on a red ball, we need to award 4 penalty points to the opponent. But for colour balls, it will he up to the scorer, that is the user of the application to award the correct penalty points. That seems to be to be a better idea than letting the user select a prefined number of points. It might also make for a cleaner user experience.

+ So what we will have is a new modal area that will contain a dropbox of a number spinner element to help the user to select a number and the confirm those points.

e.g. 

```text

Algorithmic Thinking:


Player is shooting for a red and commits a foul by cue ball hitting a colour ball first.  4 penalty points (or the value of the colour ball hit higher than 4).

  1) PLAYER IS ON A RED BALL BUT HITS A COLOUR FIRST 
  
    - if (shootingForRed == true) ----> FOUL (potFoulOne or foulP1) (on red)   
    - selectPenaltyPoints: ----> Select value of colour ball hit: 4 points (red, yellow, green, brown), 5 points (blue), 6 points (pink), 7 points (black)
    - BTN: Confirm Penalty Points --> Confirm

  2) PLAYER ON COLOUR BALL BUT HITS A RED 
    - if (shootingForRed == false) ----> FOUL (potFoulOne or foulP1 ) (on colour)  
    - selectPenaltyPoints: ----> 4 points (for hitting red with cue ball)
    - BTN: Confirm Penalty Points --> Confirm

  3) FOUL AND A MISS - FAILS TO HIT A RED OR ANY OTHER BALL 
    - if (shootingForRed == true) ---->  FOUL+MISS (potFoulMissOne or foulMissP1)      
    - selectPenaltyPoints: ----> Select value of colour ball hit: 4 points (red, yellow, green, brown), 5 points (blue), 6 points (pink), 7 points (black).
    - With FOUL+MISS a player can choose to make the opponent retake the shot.  
    -----> "Make opponent retake the shot?" ----> YES/NO
            Yes: currentPlayer  (1 or 2)

            No: currentPlayer (1 or 2)

  4) MISFIRING THE CUE BALL: DOUBLE HIT 
    - if (shootingForRed == true) ----> FOUL (potFoulOne or foulP1 )  (on red)  ----> 4 points (for hitting red with cue ball)
    - selectPenaltyPoints: ----> Select value of colour ball hit: 4 points (red, yellow, green, brown), 5 points (blue), 6 points (pink), 7 points (black).    
    - BTN: Confirm Penalty Points --> Confirm

  5) MISFIRING THE CUE BALL: DOUBLE HIT 
    - if (shootingForRed == false) ----> FOUL (potFoulOne or foulP1 )  (on colour)  ----> 4 points (for hitting red with cue ball)    
    - BTN: Confirm Penalty Points --> Confirm

  6) POTTING THE CUE BALL IS A FOUL 
    - if (shootingForRed == true)  ---->  FOUL (potFoulOne or foulP1 )  (on red)  ----> Select value of colour ball hit 4 points (red, yellow, green, brown), 5 points (blue), 6 points (pink), 7 points (black)    
    - BTN: Confirm Penalty Points --> Confirm

  7) POTTING THE CUE BALL IS A FOUL 
   - if (shootingForRed == false)  ---->  FOUL (potFoulOne or foulP1 )  (on colour)  ----> Select value of colour ball hit 4 points (red, yellow, green, brown), 5 points (blue), 6 points (pink), 7 points (black)  
   - BTN: Confirm Penalty Points --> Confirm

  8) POTTING THE CUE BALL IS A FOUL, EVEN IF A RED OR A COLOUR IS ALSO POTTED
   - if (shootingForRed == true) ---->  FOUL (potFoulOne or foulP1 )
   - selectPenaltyPoints: ----> Select value of colour ball hit: 4 points (red, yellow, green, brown), 5 points (blue), 6 points (pink), 7 points (black).
   - BTN: Confirm Penalty Points --> Confirm

  9) POTTING THE CUE BALL IS A FOUL, EVEN IF A RED OR A COLOUR IS ALSO POTTED 
   - if (shootingForRed == false) ---->  FOUL (potFoulOne or foulP1 )
   - selectPenaltyPoints: ----> Select value of colour ball hit: 4 points (red, yellow, green, brown), 5 points (blue), 6 points (pink), 7 points (black).
   - BTN: Confirm Penalty Points --> Confirm

  10) Red ball goes off the table

```

+  So... we can account for the vast majority of these scenarios by...

   + A modal area with a dropdown box or other element that the user and add or reduce a number of penalty points to award.
   + and a button within that modal to then confirm the points.

[Back to Top](#comments)

#### v1.0.21

+ At this stage, we're finally coming to the end of the initial release of the application, making it ready and suitable for public use. There are 2 more event listeners to edit the penalty points for fouls and misses.  I spent a lot of time doing the algorithmic thinking for i,t but most cases can be covered by either of the 2 "foul" buttons for each player.

+ It does mean 2 more modal areas - FOULS and FOULS+MISS. We added 2 new modal areas to the top of index.php.  I think a better place for those modals would be somewhere in *header.php* in their own template parts so they don't bloat so much code in index.php.

+ The biggest issue with this section, even with `claude-4-sonnet`, is that we, as in myself and the LLM, had to "collaborate" to work out why the penalty points were being **not** applied to the opponent player other than the player that fouled.  It turned out that this was an issue, foulMissPlayer = null, which caused a cascade of issues, meaning the code was getting confused about who to apply penalty points to and when to switch players. Not to do with the logic of the functions, but a new issue with the ordering of functions and variables.

+ But... that was all solved in the end, and that wraps us up for the initial build of the application; certainly when it comes to the scoring, fouling and general application mechanics. All that remains is to remove certain things from view that haven't yet been developed (but will be). There's enough here to get people using the app for the vast vast majority of gameplay situations.  For no,w I'll be removing the use of "Undo" and Snooker counts.  They'll come back in the future.

+ This application has been a genesis of an idea of mine for a long, long time. It's been lying dormant in my head for a while, waiting for the tools and the knowledge and the experience to come together to build it. AI has helped make it a reality.  

+ Now this, of course, as I keep saying, does bring with it its own challenges, questions, advantages and pitfalls. I discuss some of these on my homepage for Cursor AI and other projects I've worked on using AI. My focus from here on in wull be about adding feature improements, and improving the scability and meaintainability of the code.

[Back to Top](#comments)

#### v1.1.0

+ Now that the application is functional and stable, ready for public use (with further features to be added in the future), it's a good time to take a step back and look at the existing code; look for way to make it more readable and easier to maintain. I'm going to start by looking at the SASS and CSS code. At the moment, the bulk of it is in a single `body` selector. But some styles, like button styling and animation controls are probably better off in their own partials.  `e.g _animations.scss`.

+ But the first thing to do is look at the code and convert CSS selectors into nested SASS selectors.  I've completed a minor enhancement "active-points section" so the 2 sections text content stays in sync, on the same line. The player status indicator way making that a tricky UI problem.

[Back to Top](#comments)