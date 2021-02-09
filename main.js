let currentScene;

const level0 = "img/000.png";
const level1 = "img/001.png";
const level2 = "img/002.png";
const level3 = "img/003.png";
const mainImage__URL = document.getElementById("mainImage");
const title__JS = document.getElementById("title");
const btn = document.getElementById('btn');


function drawScene1(){
    currentScene = 1;
    document.body.style.backgroundColor = "rgb(199, 182, 121)";
    title__JS.textContent = "●○○○";
    mainImage__URL.src = level0;
}

function drawScene2(){
    currentScene = 2;
    document.body.style.backgroundColor = "rgb(199, 192, 121)";
    title__JS.textContent = "●●○○";
    mainImage__URL.src = level1;
}

function drawScene3(){
    currentScene = 3;
    document.body.style.backgroundColor = "rgb(199, 202, 121)";
    title__JS.textContent = "●●●○";
    mainImage__URL.src = level2;
}

function drawScene4(){
    currentScene = 4;
    document.body.style.backgroundColor = "rgb(199, 212, 121)";
    title__JS.textContent = "🦍🦍🦍🦍";
    mainImage__URL.src = level3;
}

let onButtonClick = function() {
    if (currentScene === 1){
        drawScene2();
    } else if (currentScene === 2){
        drawScene3();
    } else if (currentScene === 3){
        drawScene4();
    } else if (currentScene === 4){
        drawScene1();
    }
  };

if (btn) {
    btn.addEventListener("click", onButtonClick)
}

// main
drawScene1();