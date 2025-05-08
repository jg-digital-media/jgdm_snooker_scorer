    header.php

```html
    <!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">

    <!-- Global site tag (gtag.js) - Google Analytics -->
    <script async src="https://www.googletagmanager.com/gtag/js?id=G-N9WB623MVP"></script>
    <script>
        window.dataLayer = window.dataLayer || [];
        function gtag(){dataLayer.push(arguments);}
        gtag('js', new Date());

        gtag('config', 'G-N9WB623MVP');
    </script>

    <!-- Slick Styling -->
    <link rel="stylesheet" type="text/css" href ="assets/slick/slick.css" />
    <link rel="stylesheet" type="text/css" href ="assets/slick/slick-theme.css" />

    <!-- Lightbox-->
    <link href="../assets/lightbox/dist/css/lightbox.css" rel="stylesheet" />

    <!-- Google Font -->
    <link href="https://fonts.googleapis.com/css?family=Merriweather|Odibee+Sans|Quicksand&display=swap" rel="stylesheet">

    <!-- Favicon -->
    <link rel="icon" href="favicon.png" type="image/png">

    <!-- Meta Tags -->
    <meta name="description" content="">
    <meta name="keywords" content=""> 
    <meta name="image" content="">

    <!-- FACEBOOK: Open Graph -->
    <meta property="og:title" content="">
    <meta property="og:description" content="">
    <meta property="og:image" content="">
    <meta property="og:url" content="">

    <!-- TWITTER: Open Graph -->
    <meta name="twitter:title" content="">
    <meta name="twitter:description" content="">
    <meta name="twitter:image" content="">
    <meta name="twitter:card" content="">

    <!-- Canonical link -->
    <link rel="canonical" href="">
    
    <!-- Main Styling -->
    <link rel="stylesheet" type="text/css" href ="style.css" />

    <!-- Page Title-->
    <title>Snooker Scorer App</title>

</head>
<body>
    
    <header>

        <h1>Snooker Scorer App</h1>

        <img id="snooker---app--logo" src="assets/images/snooker-logo.png" alt="Snooker Logo" title="Snooker Logo" />
        
    </header>


<?php //echo "<p>header.php</p>"; ?>
    
```
    
    index.php

```html 
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
                    
                    <p class="pot---tally" id="tally---potted--red-p1">1</p>

                </article>

                <article class="player---pot--score player---one--pot player---pot--yellow" id="pot---yellow--one">
                    
                    <p class="pot---tally" id="tally---potted--yellow-p1">1</p>
                    
                </article>
                
                <article class="player---pot--score player---one--pot player---pot--green" id="pot---green--one">  

                    <p class="pot---tally" id="tally---potted--green-p1">1</p>
                    
                </article>
                
                <article class="player---pot--score player---one--pot player---pot--brown" id="pot---brown--one">  

                    <p class="pot---tally" id="tally---potted--brown-p1">1</p>
                    
                </article>
                
                <article class="player---pot--score player---one--pot player---pot--blue" id="pot---blue--one">  

                    <p class="pot---tally" id="tally---potted--blue-p1">1</p>
                    
                </article>
                
                <article class="player---pot--score player---one--pot player---pot--pink" id="pot---pink--one">  

                    <p class="pot---tally" id="tally---potted--pink-p1">1</p>
                    
                </article>
                
                <article class="player---pot--score player---one--pot player---pot--black" id="pot---black--one">  

                    <p class="pot---tally" id="tally---potted--black-p1">1</p>
                    
                </article>
                
                <br />

                <article class="player---one--pot player---pot--miss player---one--pot-undo" id="put---undo--one">

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
            
            <article class="breaks---and--snookers">
                
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
                
                <p class="pot---tally" id="tally---potted--red-p2">1</p>

            </article>

            <article class="player---pot--score player---two--pot player---pot--yellow" id="pot---yellow--two">
                
                <p class="pot---tally" id="tally---potted--yellow-p2">1</p>
                
            </article>
            
            <article class="player---pot--score player---two--pot player---pot--green" id="pot---green--two">  

                <p class="pot---tally" id="tally---potted--green-p2">1</p>
                
            </article>
            
            <article class="player---pot--score player---two--pot player---pot--brown" id="pot---brown--two">  

                <p class="pot---tally" id="tally---potted--brown-p1">1</p>
                
            </article>
            
            <article class="player---pot--score player---two--pot player---pot--blue" id="pot---blue--two">  

                <p class="pot---tally" id="tally---potted--blue-p2">1</p>
                
            </article>
            
            <article class="player---pot--score player---two--pot player---pot--pink" id="pot---pink--two">  

                <p class="pot---tally" id="tally---potted--pink-p2">1</p>
                
            </article>
            
            <article class="player---pot--score player---two--pot player---pot--black " id="pot---black--two">  

                <p class="pot---tally"  id="tally---potted--black-p2">1</p>
                
            </article>

            <br />

            <article class="player---two--pot player---pot--miss player---one--pot-undo" id="put---undo--one">

                <p class="pot---tally" id="tally---potted--undo-p1">Undo</p>

            </article>

            <article class="player---two--pot player---pot--miss player---two--pot-miss " id="pot---miss--two">  

                <p class="pot---tally"  id="tally---potted--miss-p2">MISS</p>
                
            </article>            

            <article class="player---two--pot player---pot--miss player---two--pot-foul " id="pot---foul--two">  

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

                <span class="points---remaining">
                    Remaining: <span id="player---two--remaining">0</span>
                </span>

            </article>

           

            </article>

            <article class="breaks---and--snookers">
                
                <div>Highest Break: <span class="highest---break" id="highest---break--p1">0</span></a></div>
                <div>Last Break: <span class="last---break" id="last---break--p1">0</span></a></div>
                <div class="snookers---required">Snookers Required: <span id="snookers---required--p1">0</span></div>
                
            </article>
            
        </section>

        <section class="app---buttons">

            <a href="javascript:void(0);" class="app---button" id="reset---app">Reset</a>
            <a href="javascript:void(0);" class="app---button" id="app--app">About</a>
            
        </section>

    </main>

    footer.php

    ```html

    <?php //echo "<p>footer.php</p>"; ?>

    <footer>


        <p>&copy; <?php echo date('Y'); ?> "Snooker Scorer App". By Jonnie Grieve Digital Media. <a href="https://github.com/jg-digital-media/jgdm_snooker_scorer" target="_blank">Repository</a> <span id="app_versioning">ver. 1.0.1</span></p>

    </footer>

    <script src="app.js" type="text/javascript"></script>
</body>
```