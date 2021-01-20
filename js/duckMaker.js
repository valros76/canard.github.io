// Canard
var backDuck = document.getElementById('backDuck');
var eyesDuck = document.getElementById('eyesDuck');
var casquette = false ;
var moustache = false ;
var echarpe = false ;

// Canvas 
var canvas = document.getElementById("myCanvas");
var ctx = canvas.getContext("2d");

// Buttons
var backYellowBtn = document.getElementById('backYellow');
var backBlueBtn = document.getElementById('backBlue');
var backGreenBtn = document.getElementById('backGreen');
var backWhiteBtn = document.getElementById('backWhite')

var eyesRedBtn = document.getElementById('eyesRed');
var eyesBlueBtn = document.getElementById('eyesBlue');
var eyesGreenBtn = document.getElementById('eyesGreen')

var moustacheBtn = document.getElementById('moustache');
var casquetteBtn = document.getElementById('casquette');
var echarpeBtn = document.getElementById('echarpe');

//Function 
backYellowBtn.onclick = function(){

    backDuck.style.backgroundColor = 'yellow';
}
backBlueBtn.onclick = function(){

    backDuck.style.backgroundColor = 'blue';
}
backGreenBtn.onclick = function(){

    backDuck.style.backgroundColor = 'green';
}
backWhiteBtn.onclick = function(){

    backDuck.style.backgroundColor = '#fefee2';
}
eyesRedBtn.onclick = function(){

    eyesDuck.style.backgroundImage = 'radial-gradient(circle, #858cff, #b274e5, #d059c1, #e03f97, #e22b6b, #e34548, #d76228, #c27b07, #a9a42b, #8bc667, #6be3ad, #5ffbf1)';
}
eyesBlueBtn.onclick = function(){

    eyesDuck.style.backgroundImage = 'radial-gradient(circle, #2a2805, #404703, #506a00, #598f00, #55b800, #7ec400, #a4d000, #c8db00, #fac93d, #ffbb6e, #ffb699, #ffbbbb)';
}
eyesGreenBtn.onclick = function(){

    eyesDuck.style.backgroundImage = 'radial-gradient(circle, #000000, #310f18, #5d0f22, #8b0826, #b80023, #cf222c, #e63836, #fe4c40, #ff6b61, #ff8781, #ffa19f, #ffbbbb)';
}

moustacheBtn.onclick = function(){

    if (moustache){
        // On éfface la moustache 
        ctx.beginPath();
        ctx.clearRect(320, 220, 50, 40);
        ctx.closePath();
        moustache = false;

    }else{
        // On crée la moustache 
        ctx.moveTo(340,237);
        ctx.lineTo(360,230);
        ctx.lineWidth = 16;
        ctx.stroke();

        moustache = true;
    }

}
casquetteBtn.onclick = function(){
    // ctx.fillStyle ='orange'; 
    if(casquette){

        ctx.beginPath();
        ctx.clearRect(100, 75, 233, 180);
        ctx.closePath();
        casquette = false;

    }else{
        ctx.beginPath(); 
        ctx.arc(235, 170, 84, 2.5, 2*Math.PI);
        ctx.closePath();
        ctx.fill(); 
    
        ctx.moveTo(128,243);
        ctx.lineTo(330,170);
        ctx.lineWidth = 16;
        ctx.stroke();

        casquette = true;
    }

}

echarpeBtn.onclick = function(){

    if(echarpe){

        ctx.beginPath();
        ctx.clearRect(150, 245, 200, 160);
        ctx.closePath();
        echarpe = false;

    }else{
        ctx.beginPath();

        ctx.moveTo(170,260);
        ctx.lineTo(320,350);
        
        ctx.moveTo(280,330);
        ctx.lineTo(300,400);

        ctx.lineWidth = 35;

        ctx.stroke();
        ctx.beginPath();


        echarpe = true;
    }
}
