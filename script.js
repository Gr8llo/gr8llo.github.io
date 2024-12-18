window.addEventListener("load", loader);
const loading_wait = 4000;

window.addEventListener("scroll", overlap);

setTimeout(() => document.getElementById("swipe").style.opacity = "1", loading_wait + 2000);

function loader(){
    setTimeout(()=> {
        document.getElementById("loader").style.opacity = 0;
        document.getElementById("main").style.opacity = 1;
        window.scrollTo(0, 0);
    }, loading_wait);
}

function overlap(){
    const max = window.innerHeight;
    const scrollY = window.scrollY;

    document.getElementById("welcome").style.opacity = (1-scrollY/max);
    document.getElementById("queenGreetings").style.opacity = (scrollY/max);

    if(scrollY>= max - 10){
        document.getElementById("queenGreetings").style.opacity = 1;
        audio.play();
    }
    else{
        audio.pause();
    }
}

function audioButton(){
    document.getElementById("speaker").style.opacity = 0;
}



