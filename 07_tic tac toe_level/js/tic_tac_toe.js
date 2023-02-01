"use strict";

let flag = "pen-flag";

let counter = 9;

const squares = document.getElementsByClassName("square");

//Array changed
const squaresArray = Array.from(squares);

// squares id

const a_1 = document.getElementById("a_1");
const a_2 = document.getElementById("a_2");
const a_3 = document.getElementById("a_3");
const b_1 = document.getElementById("b_1");
const b_2 = document.getElementById("b_2");
const b_3 = document.getElementById("b_3");
const c_1 = document.getElementById("c_1");
const c_2 = document.getElementById("c_2");
const c_3 = document.getElementById("c_3");

const levels =document.querySelectorAll(".level");

//set level
const level_1=document.getElementById("level_1"); 
const level_2=document.getElementById("level_2"); 
const level_3=document.getElementById("level_3"); 

//newgame button
const newgamebtn_display = document.getElementById("newgame-btn");
const newgamebtn = document.getElementById("btn90");

//Win or Lose Judgment Line
const line1 = JudgLine(squaresArray, ["a_1", "a_2", "a_3"]);
const line2 = JudgLine(squaresArray, ["b_1", "b_2", "b_3"]);
const line3 = JudgLine(squaresArray, ["c_1", "c_2", "c_3"]);
const line4 = JudgLine(squaresArray, ["a_1", "b_1", "c_1"]);
const line5 = JudgLine(squaresArray, ["a_2", "b_2", "c_2"]);
const line6 = JudgLine(squaresArray, ["a_3", "b_3", "c_3"]);
const line7 = JudgLine(squaresArray, ["a_1", "b_2", "c_3"]);
const line8 = JudgLine(squaresArray, ["a_3", "b_2", "c_1"]);

const lineArray = [line1, line2, line3, line4, line5, line6, line7, line8];

const lineRandom = cornerLine(squaresArray,["a_1","a_3","c_1","c_3"]);

let winningLine = null;


//message txt

const msgtxt1 = '<p class = "image"><img src ="img/penguins.jpg" width=61px height=61px></p><p class="text">Penguins Attack!(your turn)</p>';
const msgtxt2 = '<p class = "image"><img src ="img/whitebear.jpg" width=61px height=61px></p><p class="text">WhiteBear Attack!computer turn)</p>';

const msgtxt3 = '<p class = "image"><img src ="img/penguins.jpg" width=61px height=61px></p><p class="text animate__animated animate__lightSpeedInRight">Penguins Win!!</p>';
const msgtxt4 = '<p class = "image"><img src ="img/whitebear.jpg" width=61px height=61px></p><p class="text animate__animated animate__lightSpeedInLeft">Whitebear Win!!</p>';
const msgtxt5 = '<p class = "image"><img src ="img/penguins.jpg" width=61px height=61px><img src ="img/whitebear.jpg" width=61px height=61px></p><p class="text animate__bounceIn">Draw!!</p>';

let gameSound = ["sound/click_sound1.mp3","sound/click_sound2.mp3","sound/penwin_sound.mp3","sound/bearwin_sound.mp3","sound/draw_sound.mp3"];

window.addEventListener("DOMContentLoaded",
    function () {
        setMessage("pen-turn");

        //square click
        squaresArray.forEach(function (square) {
            square.classList.add("js-clickable");
        });

        LevelSetting(0); //level 1 
    }, false
);
///////
//////set level

let index;
levels.forEach((level) => {
    level.addEventListener("click",() => {
        index = [].slice.call(levels).indexOf(level);
        LevelSetting(index);
    });
});

function LevelSetting(index) {
    // set level button
    level_1.classList.remove("level-selected");
    level_2.classList.remove("level-selected");
    level_3.classList.remove("level-selected");
    level_1.classList.remove("level-non-selected");
    level_2.classList.remove("level-non-selected");
    level_3.classList.remove("level-non-selected");

//if sessionStorage key ="tic_tac_toe_access" is not frist

if(sessionStorage.getItem("tic_tac_toe_access")) {
    switch (index) {
        case 0:
            sessionStorage.setItem("tic_tac_toe_access","1");
            level_1.classList.add("level-selected");
            level_2.classList.add("level-non-selected");
            level_3.classList.add("level-non-selected");
            break;
        case 1:
            sessionStorage.setItem("tic_tac_toe_access","2");
            level_1.classList.add("level-non-selected");
            level_2.classList.add("level-selected");
            level_3.classList.add("level-non-selected");
            break;
        case 2:
            sessionStorage.setItem("tic_tac_toe_access","3");
            level_1.classList.add("level-non-selected");
            level_2.classList.add("level-non-selected");
            level_3.classList.add("level-selected");
            break;
        default:
            level_1.classList.add("level-selected");
            level_2.classList.add("level-non-selected");
            level_3.classList.add("level-non-selected");
            break;
    }
 } else {
        sessionStorage.setItem("tic_tac_toe_access","1");
        level_1.classList.add("level-selected");
        level_2.classList.add("level-non-selected");
        level_3.classList.add("level-non-selected");
 }
}

//Win or Lose Judment Line 
function JudgLine(targeArray, idArray) {
    return targeArray.filter(function (e) {
        return (e.id === idArray[0] || e.id === idArray[1] || e.id === idArray[2]);
    });
}
//corner Line
function cornerLine(targeArray, idArray) {
    return targeArray.filter(function (e) {
        return (e.id === idArray[0] || e.id === idArray[1] || e.id === idArray[2] || e.id === idArray[3]);
    });
}

// the moment of click square , event is moving
squaresArray.forEach(function (square) {
    square.addEventListener('click',() => {
        if (counter === 9) {
            const levelBox = document.getElementById("levelBox");
            levelBox.classList.add("js-unclickable")
        }
        let gameOverFlg = isSelect(square);

        // Is not gameover, auto
        if(gameOverFlg === "0") {
            const squaresBox = document.getElementById("squaresBox");
            squaresBox.classList.add("js-unclickable");
            setTimeout(
                function() {
                    bearTurn();
                },
                "2000"
            );
        }
    });
});

// win or lose

function isSelect(selectSquare) {
   let gameOverFlg="0";
    if (flag === "pen-flag") {
        //click sound
        let music = new Audio(gameSound[0]);
        music.currentTime = 0;
        music.play();

        selectSquare.classList.add("js-pen-checked");
        selectSquare.classList.add("js-unclickable");
        selectSquare.classList.remove("js-clickable");
        
        // penguins win
        if (isWinner("penguins")) {
            setMessage("pen-win");
            gameOver("penguins");
            return gameOverFlg="1";
        }
        setMessage("bear-turn");
        flag = "bear-flag";

    } else {
        //click sound
        let music = new Audio(gameSound[1]);
        music.currentTime = 0;
        music.play();

        selectSquare.classList.add("js-bear-checked");
        selectSquare.classList.add("js-unclickable");
        selectSquare.classList.remove("js-clickable");

        //whitebear win
        if (isWinner("bear")) {
            setMessage("bear-win");
            gameOver("bear");
            return;
        }
        setMessage("pen-turn");
        flag = "pen-flag";
    }

    //*********** */
    counter--;

    //=0
    if (counter === 0) {
        setMessage("draw");
        gameOver("draw");
        return gameOverFlg ="1";
    }
    
    return gameOverFlg ="0";
}


/////// win or lose
////////////////////
function isWinner(symbol) {
    const result = lineArray.some(function (line) {

        const subResult = line.every(function (squares) {
            if (symbol === "penguins") {
                return squares.classList.contains("js-pen-checked");
            }
            if (symbol === "bear") {
                return squares.classList.contains("js-bear-checked");
            }
        });
        if (subResult) { winningLine = line }

        return subResult;
    });
    return result;
}


/////// the change of message///////
////////////////////////////////////

function setMessage(id) {
    switch (id) {
        case "pen-turn":
            document.getElementById("msgtext").innerHTML = msgtxt1;
            break;
        case "bear-turn":
            document.getElementById("msgtext").innerHTML = msgtxt2;
            break;
        case "pen-win":
            document.getElementById("msgtext").innerHTML = msgtxt3;
            break;
        case "bear-win":
            document.getElementById("msgtext").innerHTML = msgtxt4;
            break;
        case "draw":
            document.getElementById("msgtext").innerHTML = msgtxt5;
            break;
        default:
            document.getElementById("msgtext").innerHTML = msgtxt1;

    }
}

//* game over

function gameOver(status) {
    let w_sound
    switch (status) {
        case "penguins":
            w_sound = gameSound[2];
            break;
        case "bear":
            w_sound = gameSound[3];
            break;
        case "draw":
            w_sound = gameSound[4];
            break;
    }
    let music = new Audio(w_sound);
    music.currentTime = 0;
    music.play();
    


    
    squaresBox.classList.add("js-unclickable");

    //dispaly new game button


    newgamebtn_display.classList.remove("js-hidden");

    //win effect
    if (status === "penguins") {
        //winner-line penguins high-light 
        if (winningLine) {
            winningLine.forEach(function (square) {
                square.classList.add("js-pen_highLight");
            });
        }
        
        //pen win  snoe color is pink
        $(document).snowfall({
            flakeColor: "rgb(255, 240, 245)",
            maxSpeed: 3,
            minSpeed: 1,
            maxSize: 20,
            minSize: 10,
            round: true
        });
    } else if (status === "bear") {
        //winner-line bear high-light 
        if (winningLine) {
            winningLine.forEach(function (square) {
                square.classList.add("js-bear_highLight");
            });
        }
        //bear win  snoe color is bule
        $(document).snowfall({
            flakeColor: "rgb(175, 238, 238)",
            maxSpeed: 3,
            minSpeed: 1,
            maxSize: 20,
            minSize: 10,
            round: true
        });
    }
}
       //
       newgamebtn.addEventListener("click", function() {

       flag = "pen-flag";
       counter = 9;
       winningLine = null;

       squaresArray.forEach(function (square) {
        square.classList.remove("js-pen-checked");
        square.classList.remove("js-bear-checked");
        square.classList.remove("js-unclickable");
        square.classList.remove("js-bear_highLight");
        square.classList.remove("js-pen_highLight");
        square.classList.add("js-clickable");
    });
        ///////
        squaresBox.classList.remove("js-unclickable");
        levelBox.classList.remove("js-unclickable");

        setMessage("pen-turn");
        newgamebtn_display.classList.add("js-hidden");

        $(document).snowfall("clear");
        });
        //
        ///
        ///bear turn
        function bearTurn(){
            let level = sessionStorage.getItem("tic_tac_toe_access");
            let bearTurnEnd = "0";
            let gameOverFlg ="0";

         while(bearTurnEnd === "0") {
            if(level === "1" || level ==="2" || level === "3") {
            //bear attack
             bearTurnEnd = isReach("bear");
            if(bearTurnEnd ==="1") {
                gameOverFlg = "1";
                break;
            }
        }

        if(level === "2" || level ==="3") {
            //penguins defense
            bearTurnEnd = isReach("penguins");
            if (bearTurnEnd === "1") {
                break;
            }
        }

        if(level === "2" || level ==="3") {
            //if b_2 is empty,to choose
            if (b_2.classList.contains("js-clickable")) {
                gameOverFlg = isSelect(b_2);
                bearTurnEnd = "1";
                break;
            }
        }

        if(level ==="3") {
            //if a_1,a_3,c_1,c_3 is empty,to choose
            for (let square of lineRandom) {
                if(square.classList.contains ("js-clickable")) {
                gameOverFlg = isSelect(square);
                bearTurnEnd = "1";
                break;
            }
          }
          if (bearTurnEnd === "1") break;
        }
           
            //no choose  
        const bearSquare = squaresArray.filter(function (square) {
             return square.classList.contains("js-clickable");     
            });

            let n = Math.floor(Math.random()*bearSquare.length);
            gameOverFlg = isSelect(bearSquare[n]) ;
            break;
        
        }

        //not gameover
        if (gameOverFlg ==="0") {
            squaresBox.classList.remove("js-unclickable");
        }
    }
        //////
        //***********reach  */ 
        
        function isReach(status) {
            let bearTurnEnd = "0";

            lineArray.some(function(line) {
                let bearCheckCnt = 0;
                let penCheckCnt =0;

                line.forEach(function (square) {
                    if ( square.classList.contains("js-bear-checked")) {
                        bearCheckCnt++;
                    }
                
                    if ( square.classList.contains("js-pen-checked")) {
                        penCheckCnt++;
                    }
                     
                });


                if (status === "bear" && bearCheckCnt === 2 && penCheckCnt ===0) {
                    bearTurnEnd = "1";
                }

                // penguins reach
                if (status === "penguins" && bearCheckCnt === 0 && penCheckCnt ===2) {
                    bearTurnEnd = "1";
                  }
        

            if (bearTurnEnd === "1") {
                line.some(function (square) {
                    if (square.classList.contains("js-clickable")) {
                        isSelect(square);
                        return true;
                    }
                })
                return true;
            }
        });

            return bearTurnEnd;
  
}
    



