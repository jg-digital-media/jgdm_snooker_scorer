# Snooker Scorer Application by Jonnie Grieve Digital Media

+ `Notes Last Updated: 06/05/2025 - 13:14`

Use this appliation to tally up your Snooker scores as you play. Such is the scale of this application and the planning required, I decided to open this project out to its own repository.

[Link to the Snooker Scorer Application](https://projects.jonniegrieve.co.uk/snooker_scorer)


## Planning User Flows

### Flow 1 `complete match flow` - `no fouls` - `failed pots`

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


### Flow 2 `incomplete match flow` - `includes fouls + miss` - `failed pots`

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

5. `Player 1 At the Table` - **Action**: Foul and a Miss (on Red - Force Retake) - Score: 0
  + `Points Remaining`: 139  
  + `Player 1 Score:` 8 - `Last Break:` 8 - `Snookers Required:` 0 - 
  + `Player 2 Score:` 4 - `Last Break:` 0 - `Snookers Required:` 0

6. `Player 1 At the Table` - **Action**: Player 1.  Forced Retake. Misses Red - Score: 0
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
  + `Points Remaining`: 97  
  + `Player 1 Score:` 15 - `Last Break:` 7 - `Snookers Required:` 0 - 
  + `Player 2 Score:` 25 - `Last Break:` 21 - `Snookers Required:` 0

16. `Player 1 At the Table` - **Action**: Pots Red - Score: 1
  + `Points Remaining`: 96  
  + `Player 1 Score:` 16 - `Last Break:` 8 - `Snookers Required:` 0 - 
  + `Player 2 Score:` 25 - `Last Break:` 21 - `Snookers Required:` 0

17. `Player 1 At the Table` - **Action**: Pots Black - Score: 7
  + `Points Remaining`: 89  
  + `Player 1 Score:` 23 - `Last Break:` 15 - `Snookers Required:` 0 - 
  + `Player 2 Score:` 25 - `Last Break:` 21 - `Snookers Required:` 0

18. `Player 1 At the Table` - **Action**: Pots Red - Score: 1
  + `Points Remaining`: 88  
  + `Player 1 Score:` 24 - `Last Break:` 16 - `Snookers Required:` 0 - 
  + `Player 2 Score:` 25 - `Last Break:` 21 - `Snookers Required:` 0

19. `Player 1 At the Table` - **Action**: Pots Black - Score: 7
  + `Points Remaining`: 81  
  + `Player 1 Score:` 31 - `Last Break:` 23 - `Snookers Required:` 0 - 
  + `Player 2 Score:` 25 - `Last Break:` 21 - `Snookers Required:` 0

20. `Player 1 At the Table` - **Action**: Pots Red - Score: 1
  + `Points Remaining`: 80 
  + `Player 1 Score:` 32 - `Last Break:` 24 - `Snookers Required:` 0 - 
  + `Player 2 Score:` 25 - `Last Break:` 21 - `Snookers Required:` 0

19. `Player 1 At the Table` - **Action**: Pots Black - Score: 7
  + `Points Remaining`: 73  
  + `Player 1 Score:` 39 - `Last Break:` 31 - `Snookers Required:` 0 - 
  + `Player 2 Score:` 25 - `Last Break:` 21 - `Snookers Required:` 0

19. `Player 1 At the Table` - **Action**: Pots Red - Score: 1
  + `Points Remaining`: 72 
  + `Player 1 Score:` 40 - `Last Break:` 32 - `Snookers Required:` 0 - 
  + `Player 2 Score:` 25 - `Last Break:` 21 - `Snookers Required:` 0

19. `Player 1 At the Table` - **Action**: Pots Black - Score: 7
  + `Points Remaining`: 65  
  + `Player 1 Score:` 37 - `Last Break:` 29 - `Snookers Required:` 0 - 
  + `Player 2 Score:` 25 - `Last Break:` 21 - `Snookers Required:` 0

19. `Player 1 At the Table` - **Action**: Pots Red - Score: 1
  + `Points Remaining`: 64 
  + `Player 1 Score:` 38 - `Last Break:` 30 - `Snookers Required:` 0 - 
  + `Player 2 Score:` 25 - `Last Break:` 21 - `Snookers Required:` 0

19. `Player 1 At the Table` - **Action**: Pots Black - Score: 7
  + `Points Remaining`: 57  
  + `Player 1 Score:` 45 - `Last Break:` 37 - `Snookers Required:` 0 - 
  + `Player 2 Score:` 25 - `Last Break:` 21 - `Snookers Required:` 0

19. `Player 1 At the Table` - **Action**: Pots Red - Score: 1
  + `Points Remaining`: 56 
  + `Player 1 Score:` 46 - `Last Break:` 30 - `Snookers Required:` 0 - 
  + `Player 2 Score:` 25 - `Last Break:` 21 - `Snookers Required:` 0

19. `Player 1 At the Table` - **Action**: Pots Black - Score: 7
  + `Points Remaining`: 49  
  + `Player 1 Score:` 53 - `Last Break:` 37 - `Snookers Required:` 0 - 
  + `Player 2 Score:` 25 - `Last Break:` 21 - `Snookers Required:` 0
  
19. `Player 1 At the Table` - **Action**: Pots Red - Score: 1
  + `Points Remaining`: 48 
  + `Player 1 Score:` 38 - `Last Break:` 30 - `Snookers Required:` 0 - 
  + `Player 2 Score:` 25 - `Last Break:` 21 - `Snookers Required:` 0

19. `Player 1 At the Table` - **Action**: Pots Black - Score: 7
  + `Points Remaining`: 41  
  + `Player 1 Score:` 45 - `Last Break:` 37 - `Snookers Required:` 0 - 
  + `Player 2 Score:` 25 - `Last Break:` 21 - `Snookers Required:` 0

### Flow 3 - `pots cueball` - `fouls by que ball striking colour on red shot`

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


## Use Cases


+ The `points remaining` is depending on the balls still on the table.
    + Maximum of 147 points available
    + Maximum of 15 Reds on the table. 
    + 1 Colour Ball on the table. (Yellow 2, Green 3, Brown 4. Blue 5, Pink 6, Black 7)     
    + 1 Colour ball available to pot for Each Red Ball. (e.g 15 Red Balls = 15 Colour Balls)
    + Each Red Ball pot reduces the number of Snooker balls available and therefore the remaining points available to be scored.

+ Play Alternates between shooting for Red and Colour Balls.

+ Each new visit to the table starts by shooting for Red Balls.

+ The player that makes the break is "Player 1"

+ There will inevitably be games where a player foerights and th table is not cleared.

+ There will be occasions where it's not viable for the winning player to clear the table. 

+ 130 points remain.  Pot Pink 6 - scores 6 but since 7 is the maximum score with the black, the points remaining reduces by 7.

+ By the time we get to the final 6 colour sequence there should be `27` remaining points available. `7 (Black), 6 (Pink), 5 (Blue), 4 (Brown), 3 (Green), 2 (Yellow)`

+ To calculate snookers available, `Add the total of player 1 and player 2 scores and subtract this total from 147.  Subtract from remaining points available`
+ Keep track of the highest break per player in a frame
+ Use Case 1: Score a Snooker Ball
+ `Scenario:` 1 Red Ball potted. Blue Ball missed.  Points Remaining: 139 - with 14 Reds and 14 Colours available to pot.  S
+ `Scenario:` 4 Red Balls. 3 Colour Balls potted. Blue Ball missed -  Points Remaining: 119 - with 11 Reds and 11 Colours available to pot.

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

`
points	scores	score difference
    27	52-48	4
    25	54-48	6
    22	57-48	9
    18	61-48	13
    13	66-48	18  2 snookers required
    7	72-48	24	4 Snookers
    0	79-48	31  Game over!
`

## Technologies

This application is built using the following technologies:

- PHP
- HTML
- CSS
- JavaScript
- SQLite3

## Development

The development of this application is currently in progress.