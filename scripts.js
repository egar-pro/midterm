window.onload = init;
	  
function init()
{
    var gameOver = false;
    while (gameOver == false) {
        var round = 1;
        document.getElementById('answer').hidden = true;
        document.getElementById('check').hidden = true;
        document.getElementById('gameOver').hidden = true;
        var rand1 = Math.floor(Math.random() * 4); 
        var rand2 = Math.floor(Math.random() * 4); 
        var randAnswer = random(rand1, rand2);
        var choosenAnswer = 0;
    
        
        if (rand1 !== rand2) {
            if (rand1 == 0 && rand2 == 1) {
                choosenAnswer = glassDisplay(rand1);
                choosenAnswer = starDisplay(rand2);
                round += choosen();
            } else if (rand1 == 0 && rand2 == 2) {
                choosenAnswer = starDisplay( rand1);
                round += choosen();
            } else if (rand1 == 0 && rand2 == 3) {
                choosenAnswer = starDisplay( rand1);
                round += choosen();
            } else if (rand1 == 2) {
                choosenAnswer = moonDisplay(rand1);
                round += choosen();
            } else if (rand1 == 3) {
                choosenAnswer = eyeDisplay(rand1);
                round += choosen();
            }

        }
    }
}
document.getElementById('gameOver').hidden = false;

function choosen() {
    var eyeAnswer = 'assets/eyeAnswer.png';
    var moonAnswer = 'assets/moonAnswer.png';
    var glassAnswer = 'assets/glassAnswer.png';
    var starAnswer = 'assets/starAnswer.png';
    var eyewin = 'assets/Eye/winEye.png';
    var moonwin = 'assets/Moon/winMoon.png';
    var starwin = 'assets/Star/winStar.png';
    var glasswin = 'assets/Glass/winGlass.png';

    if (choosenAnswer == randAnswer) {
        if (rand1 == 0) {
            document.getElementById('choice1').src = glasswin;
            document.getElementById('answer').src = glassAnswer;
            document.getElementById('answer').hidden = false;
        } else if (rand2 == 0) {
            document.getElementById('choice2').src = glasswin;
            document.getElementById('answer').src = glassAnswer;
            document.getElementById('answer').hidden = false;
        } else if (rand1 == 1) {
            document.getElementById('choice1').src = starwin;
            document.getElementById('answer').src = starAnswer;
            document.getElementById('answer').hidden = false;
        } else if (rand2 == 1) {
            document.getElementById('choice2').src = starwin;
            document.getElementById('answer').src = starAnswer;
            document.getElementById('answer').hidden = false;
        } else if (rand1 == 2) {
            document.getElementById('choice1').src = moonwin;
            document.getElementById('answer').src = moonAnswer;
            document.getElementById('answer').hidden = false;
        } else if (rand2 == 2) {
            document.getElementById('choice2').src = moonwin;
            document.getElementById('answer').src = moonAnswer;
            document.getElementById('answer').hidden = false;
        } else if (rand1 == 3) {
            document.getElementById('choice1').src = eyewin;
            document.getElementById('answer').src = eyeAnswer;
            document.getElementById('answer').hidden = false;
        } else {
            document.getElementById('choice2').src = eyewin;
            document.getElementById('answer').src = eyeAnswer;
            document.getElementById('answer').hidden = false;
        }
        document.getElementById('check').hidden = false;
        return 1;
    } else {
        if (randAnswer == 0) {
            document.getElementById('answer').src = glassAnswer;
        } else if (randAnswer == 1) {
            document.getElementById('answer').src = starAnswer;
        } else if (randAnswer == 2) {
            document.getElementById('answer').src = moonAnswer;
        } else {
            document.getElementById('answer').src = eyeAnswer;
        }
        gameOver = true;
    }
}

function glassDisplay() {
    var glassDefault = 'assets/Glass/glass.png';
    var glassClick = 'assets/Glass/clickGlass.png';
    var glasshov = 'assets/Glass/hovGlass.png';
    if (rand1 == 0) {
    document.getElementById('choice1').src = glassDefault;
    document.getElementById('choice1').addEventListener('onmouseover', function () {
        document.getElementById('choice1').src = glasshov;
    });
    document.getElementById('choice1').addEventListener('click', function () {
        document.getElementById('choice1').src = glassClick;
        return 0;
    });
    } else if (rand2 == 0) {
    document.getElementById('choice2').src = glassDefault;
    document.getElementById('choice2').addEventListener('onmouseover', function () {
        document.getElementById('choice2').src = glasshov;
    });
    document.getElementById('choice2').addEventListener('click', function () {
        document.getElementById('choice2').src = glassClick;
        return 0;
    });
}
}
function eyeDisplay() {
    var eyeDefault = 'assets/Eye/eye.png';
    var eyeClick = 'assets/Eye/clickEye.png';
    var eyehov = 'assets/Eye/hovEye.png';
    if (rand1 == 3) {
    document.getElementById('choice1').src = eyeDefault;
    document.getElementById('choice1').addEventListener('onmouseover', function () {
        document.getElementById('choice1').src = eyehov;
    });
    document.getElementById('choice1').addEventListener('click', function () {
        document.getElementById('choice1').src = eyeClick;
        return 3;
    });
} else if (rand2 == 3) {
    document.getElementById('choice2').src = eyeDefault;
    document.getElementById('choice2').addEventListener('onmouseover', function () {
        document.getElementById('choice2').src = eyehov;
    });
    document.getElementById('choice2').addEventListener('click', function () {
        document.getElementById('choice2').src = eyeClick;
        return 3;
    });
}
}
function moonDisplay() {
    var moonDefault = 'assets/Moon/moon.png';
    var moonClick = 'assets/Moon/clickMoon.png';
    var moonhov = 'assets/Moon/hovMoon.png';
    if (rand1 == 2) {
    document.getElementById('choice1').src = moonDefault;
    document.getElementById('choice1').addEventListener('onmouseover', function () {
        document.getElementById('choice1').src = moonhov;
    });
    document.getElementById('choice1').addEventListener('click', function () {
        document.getElementById('choice1').src = moonClick;
        return 2;
    });
} else if (rand2 == 2) {
    document.getElementById('choice2').src = glassDefault;
    document.getElementById('choice2').addEventListener('onmouseover', function () {
        document.getElementById('choice2').src = moonhov;
    });
    document.getElementById('choice2').addEventListener('click', function () {
        document.getElementById('choice2').src = moonClick;
        return 2;
    });
}
}
function starDisplay() {
    var starDefault = 'assets/Star/star.png';
    var starClick = 'assets/Star/clickStar.png';
    var starhov = 'assets/Star/hovStar.png';
    if (rand1 == 1) {
    document.getElementById('choice1').src = starDefault;
    document.getElementById('choice1').addEventListener('onmouseover', function () {
        document.getElementById('choice1').src = starhov;
    });
    document.getElementById('choice1').addEventListener('click', function () {
        document.getElementById('choice1').src = starClick;
        return 1;

    });
} else if (rand2 == 1){
    document.getElementById('choice2').src = starDefault;
    document.getElementById('choice2').addEventListener('onmouseover', function () {
        document.getElementById('choice2').src = starhov;
    });
    document.getElementById('choice2').addEventListener('click', function () {
        document.getElementById('choice2').src = starClick;
        return 1;
    });
}
}