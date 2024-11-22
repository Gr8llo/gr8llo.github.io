//window.addEventListener("load", loader);
const loading_wait = 10000;

window.addEventListener("scroll", overlap);

setTimeout(() => document.getElementById("swipe").style.opacity = "1", loading_wait + 3000);

function loader(){
    setTimeout(()=> {
        document.getElementById("loader").style.display = "none";
        document.getElementById("main").style.visibility = "visible";
    }, loading_wait);
}

function overlap(){
    const max = window.innerHeight;
    const scrollY = window.scrollY;

    document.getElementById("welcome").style.opacity = (1-scrollY/max);
    document.getElementById("queenGreetings").style.opacity = (scrollY/max);
}



