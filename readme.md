# Snooker Scorer Application by Jonnie Grieve Digital Media

+ `Last Updated: 15/05/2025 - 13:54`

## Sections

[Intro](#intro
) | [Planning User Flows](#planning-user-flows) | [Use Cases](#use-cases) | [Technologies Used](#technologies-used) | [Development](#development) | [Bugs](#identified-bugs) | [Comments](#comments) | [Online](https://projects.jonniegrieve.co.uk/snooker_scorer)* External

Clone to your system `git clone https://github.com/jg-digital-media/jgdm_snooker_scorer.git`

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

  + `foul and a miss` - opponent awarded 4 points or the valu of the colour ball if higher than 4
  + `cueball hits colour before hitting a red` - value of colour awared to opponemt
  + `cue ball hits red before hitting a colour` - penalty of 4 points awarded to opponent
  + `potting the cue ball is a foul, regardless of whether a red or color ball is also potted in the same shot`. The opponent receives a penalty of four points plus the value of any additional balls potted in the same stroke

 + `scenario:` (`points remaining` - `score difference`) 

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

### Tasks - 70 completed items

+ `COMPLETED: 08-05-2025` Final interface design check

+ `COMPLETED: 08-05-2025` Set the starting value of `#points remaining` to 147

+ `COMPLETED: 08-05-2025` Add application versioning to the application footer

+ `COMPLETED: 09-05-2025` Colour Sequence must be taken into account when calculating the remaining points available

+ `COMPLETED: 09-05-2025` BUG: Points remaining element should not be less than 0

+ `COMPLETED: 09-05-2025:` Click black ball icon `#tally---potted--black-p1` (Player 1) to score 7 points
+ `COMPLETED: 09-05-2025:` Click pink ball icon `#tally---potted--pink-p1` (Player 1) to score 6 points
+ `COMPLETED: 09-05-2025:` Click blue ball icon `#tally---potted--blue-p1` (Player 1) to score 5 points
+ `COMPLETED: 09-05-2025:` Click brown ball icon `#tally---potted--brown-p1` (Player 1) to score 4 points
+ `COMPLETED: 09-05-2025:` Click green ball icon `#tally---potted--green-p1` (Player 1) to score 3 points
+ `COMPLETED: 09-05-2025:` Click yellow ball icon `#tally---potted--yellow-p1` (Player 1) to score 2 points

+ `COMPLETED: 13-05-2023` Click red ball icon `tally---potted--red-p1` (Player 1) to score 1 point player 1
    + `COMPLETED: 08-05-2025:` Reduces `#points_remaining` by 1 to 146
    + `COMPLETED: 08-05-2025:` Adds 1 to red ball `#tally---potted--red-p1`
    + `COMPLETED: 08-05-2025:` Adds 1 to last break `#last---break--p1`
    + `COMPLETED: 08-05-2025:` Adds 1 to highest break `#highest---break--p1`
    + `COMPLETED: 09-05-2025:` increments text content 1 to red ball `#tally---potted--red-p1`

+ `COMPLETED: 13-05-2025` Shoot attempt - colour ball Black - player 1

    + `COMPLETED: 09-05-2025:` Reduces `#points_remaining` by 7 to 139
    + `COMPLETED: 09-05-2025:` Adds 1 to black ball `#tally---potted--black-p1`
    + `COMPLETED: 09-05-2025:` Increment last break tally by 7 `#last---break--p1`
    + `COMPLETED: 09-05-2025:` Adds 7 to highest break `#highest---break--p1`    
    + `COMPLETED: 09-05-2025:` increments text content 1 to black ball `#tally---potted--black-p1`

+ `COMPLETED: 13-05-2025` Shoot attempt - colour ball Pink - player 1

    + `COMPLETED: 09-05-2025:` Reduces `#points_remaining` by 7 to 139    
    + `COMPLETED: 09-05-2025:` Adds 1 to pink ball `#tally---potted--pink-p1`
    + `COMPLETED: 09-05-2025:` Increment last break tally by 7 `#last---break--p1`
    + `COMPLETED: 09-05-2025:` Adds 6 to highest break `#highest---break--p1`    
    + `COMPLETED: 09-05-2025:` increments text content 1 to pink ball `#tally---potted--pink-p1`

+ `COMPLETED: 13-05-2025` Shoot attempt - colour ball Blue - player 1

    + `COMPLETED: 09-05-2025:` Reduces `#points_remaining` by 7 to 139    
    + `COMPLETED: 09-05-2025:` Adds 1 to blue ball `#tally---potted--blue-p1`
    + `COMPLETED: 09-05-2025:` Increment last break tally by 5 `#last---break--p1`
    + `COMPLETED: 09-05-2025:` Adds 5 to highest break `#highest---break--p1`
    + `COMPLETED: 09-05-2025:` increments text content 1 to blue ball `#tally---potted--blue-p1`

+ `COMPLETED: 13-05-2025` Shoot attempt - colour ball Brown - player 1

    + `COMPLETED: 09-05-2025:` Reduces `#points_remaining` by 7 to 139    
    + `COMPLETED: 09-05-2025:` Adds 1 to brown ball `#tally---potted--black-p1`
    + `COMPLETED: 09-05-2025:` Increment last break tally by 4 `#last---break--p1`
    + `COMPLETED: 09-05-2025:` Adds 4 to highest break `#highest---break--p1`
    + `COMPLETED: 09-05-2025:` increments text content 1 to brown ball `#tally---potted--brown-p1`

+ `COMPLETED: 13-05-2025` Shoot attempt - colour ball Green - player 1

    + `COMPLETED: 09-05-2025:` Reduces `#points_remaining` by 7 to 139    
    + `COMPLETED: 09-05-2025:` Adds 1 to green ball `#tally---potted--black-p1`
    + `COMPLETED: 09-05-2025:` Increment last break tally by 3 `#last---break--p1`
    + `COMPLETED: 09-05-2025:` Adds 3 to highest break `#highest---break--p1`    
    + `COMPLETED: 09-05-2025:` increments text content 1 to green ball `#tally---potted--green-p1`

+ `COMPLETED: 13-05-2025` Shoot attempt - colour ball Yellow - player 1
    + `COMPLETED: 09-05-2025:` Reduces `#points_remaining` by 7 to 139
    + `COMPLETED: 09-05-2025:` Adds 1 to yellow ball `#tally---potted--black-p1`
    + `COMPLETED: 09-05-2025:` Increment last break tally by 2 `#last---break--p1`
    + `COMPLETED: 09-05-2025:` Adds 2 to highest break `#highest---break--p1`    
    + `COMPLETED: 09-05-2025:` increments text content 1 to yellow ball `#tally---potted--yellow-p1`    

+ `COMPLETED: 12-05-2025:` Link to about page on version number in footer element

+ `COMPLETED: 12-05-2025` Implement Re-rack Button - "Reset" button - change to "Re-rack button (`#reset---app`)

+ `COMPLETED: 13-05-2023` Finish turn based play between red and yellow ball

+ `COMPLETED: 13-05-2023` Disable colour balls while player is shooting for red ball. opacity setting - disabled state

+ `COMPLETED: 13-05-2023` Disable red balls while player is shooting for a colour ball

+ `COMPLETED: 13-05-2023` Fix bug with colour sequence not working after green ball (happens after red and yellow ball)

+ `COMPLETED: 13-05-2023` If the points remaining reaches 0, the frame is over. disable any point scoring buttons so high score and last break are not updated.

+ `COMPLETED: 13-05-2023` Recreate 147 Break (15 Reds + 15 Blacks + 6 Colour sequence - `Yellow Green Brown Blue Pink Black`) 

+ `COMPLETED: 13-05-2023` Handle colour sequence so the player clicks the order of colours in the sequence - 
    if on yellow, disable all other colours
    if on green, disable all other colours
    if on brown, disable all other colours... etc
    This is for player 1 only.

+ `COMPLETED: 13-05-2023` BUG: Players should not be able to score more than 147 points.
  + no more points added to `#p1---score`
  + no further changes to `#highest---break--p1`
  + no further changes to `#last---break--p1`
  
+ `COMPLETED: 14-05-2023` Add apply button which will be linked to red ball player 1 `#apply_tally--red--p1`

+ `COMPLETED: 14-05-202` allow multiple tallies to be added for red ball before clicking the apply button to shoot for a colour ball

+ `COMPLETED: 14-05-202` Fix a bug where the the tally for the red ball resets and does not keep the tally. - introduced after applying the red red ball tally to player 1 - the tally was being reset to 0 when the player 1 score was updated.

+ `COMPLETED: 15-05-202` What about finding a way to count the number of legal pots for a red (multiple pots of a red ball are legal) and comparing this to 15 Reds - and using this to calculate the number of points remaining as 27. We could use incremental counting of the number of clicks of `#tally---potted--black-p1` to do this.

+ `COMPLETED: 15-05-202` Remove the apply link under the red ball from view shooting for colour balls. This is a UX distraction and is not needed when shooting for a colour.

+ `COMPLETED: 15-05-202` Remove apply link from view when the frame ends. `points---remaining` is at 0 (Player 1).

+ `COMPLETED: 15-05-202` Remove apply link from view when the colour sequence begins (Player 1).

+ `TODO:` Player does not make a pot when making a break. (Player1)

+ `TODO:` Track number of times Red ball has been potted `#pot---red--one` (no more than 15)
+ `TODO:` Track number of times Yellow ball has been potted `#pot---red--yellow` (no more than 16)
+ `TODO:` Track number of times Green ball has been potted `#pot---red--green` (no more than 16)
+ `TODO:` Track number of times Brown ball has been potted `#pot---red--brown` (no more than 16)
+ `TODO:` Track number of times Black ball has been potted `#pot---red--blue` (no more than 16)
+ `TODO:` Track number of times Pink ball has been potted `#pot---red--pink` (no more than 16)
+ `TODO:` Track number of times Black ball has been potted `#pot---red--black` (no more than 16)
    + it's possible, however unlikely it might be that a player can pot a colour ball 16 times, including the colour sequence. (15 reds, 15 of a single colour and the colour sequnce e.g. 15 Reds, 15 Yellows, Yellow, Green, Brown, Blue, Pink, Black)

+ `TODO:` Stop counting highest and last break when `#points_remaining`is at 0 (Player 2).

+ Disable foul and miss buttons when points remaining is at 0 (Player 2)


+ `TODO:` Handling scoring and points remaining when the player scores 2 reds
  + Click red ball icon to pot 1 red ball and move to shooting for a colour ball.
  + Click red ball twice to pot 2 red balls and move to shooting for a colour ball.
  + Apply button for more than 1 red ball potted. 

+ `TODO:` Shouldn't take the missed points into account until I simulate shooting for a colour after the 2 reds at once? 

* `TODO:` Check the highest break is updated correctly - player 1

* `TODO:` Check the highest break is updated correctly - player 2

+ `TODO:` Click black ball icon `tally---potted--black-p1` (Player 1) to score 7 point player 1 - 
    + `TODO:` Adds 8 to last break `#last---break--p1`
    + `TODO:` Adds 8 to highest break `#highest---break--p1` 

+ `TODO:` about.php should include instructions on what each button does - e.g. "Miss" button refers to a failed pot but legal hit and ends visit to the table.


+ `Task 1:` Shoot for colour - MISS

+ `TODO:` Consider reworking about.php and its content as a modal area for index.php

`player 2`

shoot red - click red ball icon
shoot colour - black
shoot red - click red ball icon - adds 1 to red ball

`player 1`

The development of this application is currently in progress.

### Identified Bugs
[Back to Top](#sections)


+ `1` - the `rerackTable()` app currently pushes player one score buttons down a row until all colours are pressed. Have replaced with a `location.reload` method on the "Re-reack" button for now.  - `12-05-2025`

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


. . .

### Comments
[Back to Top](#sections)

+ `v1.0.0` - This is probably the most complex and involving application I've ever got myself into. After all the planning I've done and is still to be done I'm now left with trying to decide where and how to start. Because one thing I do will effect the next thing at various times in the weeks and months to come. Several things link together. As an example. The user clicks the Red call icon for player 1. This action effects many moving parts. 1. The player 1 score is increased by 1. 2. The points remaining is reduced by 1. 3. The last break is increased by 1. 4. The highest break is increased by 1. 5. A number 1 is added to the red ball representing the number of times that player 1 has potted a red ball.

+ And since we're representing a potted ball, player 1 remains at the table and in the game; they will now be shooting for a colour ball.  

+ There's enough to be getting on with there. But I can sense more to do because I'm wondering if we need to grey out the colour balls until we've actually registered that a red ball has been potted and vice versa.

+ Elements affected by the red ball potted:

  + `#player---1--table` - The red icon marks the player who is at the table. (Player 1 in this case) It is invisble by default for player 2.
  + `#player_number` - The number is to revert between 1 and 2, depending on who is at the table.
  + `#tally---potted--red-p1` - The number of red balls potted by player 1
  + `#highest---break--p1` - The last highest break made by player 1
  + `#last---break--p1` - The total of the last break made - (a "break" is a visit to the table)
  + `#p1---score` - The Total Scored by Player 1 which is the total accumulation of breaks and scored and penalty points given.
  + `#points_remaining` - The number of points remaining in the game.

+ `v1.0.1` - I've got as far as implementing the UX feature of indicating which balls player 1 has potted and how many times that ball as been potted. I've also updated the scores in each turn for the total player score; the last break made and the highest break. 

+ All of this, assumes that the player has not scored 2 reds in a row, has not missed a shot and goes all the way to a 147 break. We haven't yet thought about the turn based nature of this app. There's the whole business to come of handling what happens when the opponent player comes to the table.

+ `v1.0.2` - I've added a link to the about page on the version number in the footer element and added some initial copy for about.php page.  Also I've created a "Re-rack" Table function to reset the game at any time without the need to use user-agent refresh buttons.

+ `v1.0.3` - Well, it's been a bit of a day (`12-05-2025`) trying to start getting some turned based play working with this app. But... for now, I've made a little achievement by gettin turn play working by switching between the red and the yellow ball. The colour sequence does stop working after the green ball which is a bug that needs looking at. 

+ But after some struggling around for most of the day I'm taking this as a win.

+ I'm still working on a way to handle 2 red balls being potted in the same shot but I think it's sensible at this stage to assume one red at a time till we get this turn play working. And that's the approach I took.  

+ By the next day I'd been able to get the turn play working with the red and colour balls as well as taking into account the colour sequence.  So. Where we stand now is that we are playing through a standard 1 frame visit where the player
   + Commits no fouls
   + Pots 15 Reds and 15 colours with no misses.
   + Goes through the colour sequence at 27 points remaining `#points_remaining`.
   + Can operate a 147 maximum break.
   + Cannot recreate a situation where a player score more than one red in the same shot.
   + Cannot shoot for any more balls or foul buttons when the points remaining `#points_remaining` is at 0

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

+ `v1.0.5` - In Snooker, You only "lock in" the actual loss once you finish reds and see how many colour slots we never got to use. But for the purposes of this app, we are calculating the points remaining after every colour proceeeding a red ball. What this means is that 2 reds in a single shot will be counted as 2 points for a red and deducts only 2 from the remaining points. 

+ This part has taken a lot of work. But I think I've worked out a solution that works well for handling multi-red shots. That works because scores of 2 or more of a red ball when shooting for red is a legal shot.  

+ I had thought of trying to force this change after the last red and colour combination but I couldn't generate a solution without causing too many other bugs and issues in the script.

+ Finally for this part, I've modified the "apply" button to only show when the player is shooting for a red ball. It's a not needed when shooting for a colour and otherwise becomes a distraction.