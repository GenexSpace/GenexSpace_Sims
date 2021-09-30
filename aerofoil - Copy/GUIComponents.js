

function speedValueDown(){

    var number;
    var valueString = "";
    var subtract = 0;
    valueString = document.getElementById("speedText").value;
    valueNum = parseInt(valueString);

    number = 10;
    
    subtract = valueNum - number;

    if(subtract <= 0){
        subtract = 0;

    }

    document.getElementById("speedText").value = subtract.toString();

}

function speedValueUp(){

    var number;
    var valueString = "";
    var sum = 0;
    valueString = document.getElementById("speedText").value;
    valueNum = parseInt(valueString);

    number = 10;

    
    sum = valueNum + number;

    if (sum >= 250){
        sum = 250;
    }


    document.getElementById("speedText").value = sum.toString();


}


function altitudeDown(){


    
    var valueString = "";
    var subtract = 0;
    valueString = document.getElementById("altitudeText").value;
    valueNum = parseInt(valueString);

    
    subtract = valueNum - 1000;

    if(subtract <= 0){

        subtract = 0;
    }


    document.getElementById("altitudeText").value = subtract.toString();


}

function altitudeUp(){

    
    var valueString = "";
    var sum = 0;
    valueString = document.getElementById("altitudeText").value;
    valueNum = parseInt(valueString);

    
    sum = valueNum + 1000;

    if(sum >= 50000){
        sum = 50000;
    }

    document.getElementById("altitudeText").value = sum.toString();


}

function angleDown(){

    const number = 1;
    var valueNum;
    var valueString = "";
    var subtract = 0;
    valueString = document.getElementById("angleText").value;

    valueNum = parseInt(valueString);

    subtract = valueNum - number;

    if(subtract <= -20){

        subtract = -20;
    }

    document.getElementById("angleText").value = subtract.toString();
    
}

function angleUp(){

    const number = 1;
    var valueNum;
    var valueString = "";
    var sum = 0;
    valueString = document.getElementById("angleText").value;

    valueNum = parseInt(valueString);

    sum = valueNum + number;

    if(sum >= 20){

        sum = 20;

    }

    document.getElementById("angleText").value = sum.toString();

}


function camberDown(){

    const number = 2;
    var valueNum;
    var valueString = "";
    var subtract = 0;
    valueString = document.getElementById("camberText").value;

    valueNum = parseInt(valueString);

    subtract = valueNum - number;

    if(subtract <= -20){

        subtract = -20;
    }

    document.getElementById("camberText").value = subtract.toString();


}


function camberUp(){

    const number = 2;
    var valueNum;
    var valueString = "";
    var sum = 0;
    valueString = document.getElementById("camberText").value;

    valueNum = parseInt(valueString);

    sum = valueNum + number;

    if(sum >= 20){

        sum = 20;

    }

    document.getElementById("camberText").value = sum.toString();


}

function thicknessDown(){

    const number = 1;
    var valueNum;
    var valueString= "";
    var subtract = 0;
    valueString = document.getElementById("thicknessText").value;

    valueNum = parseInt(valueString);

    subtract = valueNum - number;

    if(subtract <= 1){

        subtract = 1;
    }

    document.getElementById("thicknessText").value = subtract.toString();


}


function thicknessUp(){


    const number = 1;
    var valueNum;
    var valueString= "";
    var sum = 0;
    valueString = document.getElementById("thicknessText").value;

    valueNum = parseInt(valueString);

    sum = valueNum + number;

    if(sum >= 20){

        sum = 20;
    }

    document.getElementById("thicknessText").value = sum.toString();

}

function wAreaDown(){

    const number = 50.0;
    var valueNum;
    var valueString = "";
    var subtract = 0;
    valueString = document.getElementById("wingText").value;

    valueNum = parseFloat(valueString);

    subtract = valueNum - number;

    if(subtract <= 0){

        subtract = 0;

    } 
        
    document.getElementById("wingText").value = subtract.toString();

}

function wAreaUp(){


    const number = 50.0;
    var valueNum;
    var valueString = "";
    var sum = 0;
    valueString = document.getElementById("wingText").value;

    valueNum = parseFloat(valueString);

    sum = valueNum + number;

    if(sum >= 2500){

        sum = 2500;

    } 
        
    document.getElementById("wingText").value = sum.toString();

}

function reset(){

    location.reload(false);
}


