let currentScene;

let level0 = "img/000.png";
let level1 = "img/001.png";
let level2 = "img/002.png";
let level3 = "img/003.png";
let mainImage__URL = document.getElementById("mainImage");
let title__JS = document.getElementById("title");


function drawScene1(){
    currentScene = 1;
    document.body.style.backgroundColor = "rgb(199, 182, 121)";
    title__JS.textContent = "Level 0";
    mainImage__URL.src = level0;
}

function drawScene2(){
    currentScene = 2;
    document.body.style.backgroundColor = "rgb(199, 192, 121)";
    title__JS.textContent = "Level 1";
    mainImage__URL.src = level1;
}

function drawScene3(){
    currentScene = 3;
    document.body.style.backgroundColor = "rgb(199, 202, 121)";
    title__JS.textContent = "Level 2";
    mainImage__URL.src = level2;
}

function drawScene4(){
    currentScene = 4;
    document.body.style.backgroundColor = "rgb(199, 212, 121)";
    title__JS.textContent = "Level 3(Final)🦍";
    mainImage__URL.src = level3;
}

onclick = function(event){
    if (currentScene === 1){
        drawScene2();
    } else if (currentScene === 2){
        drawScene3();
    } else if (currentScene === 3){
        drawScene4();
    } else if (currentScene === 4){
        drawScene1();
    }
}

//main
drawScene1();