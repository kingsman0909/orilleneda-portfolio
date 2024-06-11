function menu(){
    var prompt = document.getElementById("prompt");
    prompt.style.display="block";
}

function out(){
    var prompt = document.getElementById("prompt");
    prompt.style.display="none";
}

function visible(){
    var prompt = document.getElementById("menu-box");
    var close = document.getElementById("close");
    var menu = document.getElementById("menu");
    prompt.style.display="block";
    close.style.display="block";
    menu.style.display="none";
}

function remove(){
    var prompt = document.getElementById("menu-box");
    var close = document.getElementById("close");
    var menu = document.getElementById("menu");
    prompt.style.display="none";
    close.style.display="none";
    menu.style.display="block";
}

function home(){
    var info = document.getElementById("body-info");
    info.style.display="block";
    var about = document.getElementById("about");
    about.style.display="none";
    var edu = document.getElementById("education");
    edu.style.display="none";
    var mv = document.getElementById("missViss");
    mv.style.display="none";
    var p = document.getElementById("prelim");
    p.style.display="none";
    var m = document.getElementById("midterm");
    m.style.display="none";
    var f = document.getElementById("finals");
    f.style.display="none";
}


function a(){
    var info = document.getElementById("body-info");
    info.style.display="none";
    var about = document.getElementById("about");
    about.style.display="block";
    var edu = document.getElementById("education");
    edu.style.display="none";
    var mv = document.getElementById("missViss");
    mv.style.display="none";
    var p = document.getElementById("prelim");
    p.style.display="none";
    var m = document.getElementById("midterm");
    m.style.display="none";
    var f = document.getElementById("finals");
    f.style.display="none";
}


function e(){
    var info = document.getElementById("body-info");
    info.style.display="none";
    var about = document.getElementById("about");
    about.style.display="none";
    var edu = document.getElementById("education");
    edu.style.display="block";
    var mv = document.getElementById("missViss");
    mv.style.display="none";
    var p = document.getElementById("prelim");
    p.style.display="none";
    var m = document.getElementById("midterm");
    m.style.display="none";
    var f = document.getElementById("finals");
    f.style.display="none";
}

function mv(){
    var info = document.getElementById("body-info");
    info.style.display="none";
    var about = document.getElementById("about");
    about.style.display="none";
    var edu = document.getElementById("education");
    edu.style.display="none";
    var mv = document.getElementById("missViss");
    mv.style.display="block";
    var p = document.getElementById("prelim");
    p.style.display="none";
    var m = document.getElementById("midterm");
    m.style.display="none";
    var f = document.getElementById("finals");
    f.style.display="none";
}


function p(){
    var info = document.getElementById("body-info");
    info.style.display="none";
    var about = document.getElementById("about");
    about.style.display="none";
    var edu = document.getElementById("education");
    edu.style.display="none";
    var mv = document.getElementById("missViss");
    mv.style.display="none";
    var p = document.getElementById("prelim");
    p.style.display="block";
    var m = document.getElementById("midterm");
    m.style.display="none";
    var f = document.getElementById("finals");
    f.style.display="none";
}

function m(){
    var info = document.getElementById("body-info");
    info.style.display="none";
    var about = document.getElementById("about");
    about.style.display="none";
    var edu = document.getElementById("education");
    edu.style.display="none";
    var mv = document.getElementById("missViss");
    mv.style.display="none";
    var p = document.getElementById("prelim");
    p.style.display="none";
    var m = document.getElementById("midterm");
    m.style.display="block";
    var f = document.getElementById("finals");
    f.style.display="none";

}

function f(){
    var info = document.getElementById("body-info");
    info.style.display="none";
    var about = document.getElementById("about");
    about.style.display="none";
    var edu = document.getElementById("education");
    edu.style.display="none";
    var mv = document.getElementById("missViss");
    mv.style.display="none";
    var p = document.getElementById("prelim");
    p.style.display="none";
    var m = document.getElementById("midterm");
    m.style.display="none";
    var f = document.getElementById("finals");
    f.style.display="block";

}
