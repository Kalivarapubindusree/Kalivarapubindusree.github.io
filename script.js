var typed = new Typed('.animate', {
    strings: [
        "Bindhu Sree Kalivarapu",
        "a Student",
        "a Web developer",
        ],
        typeSpeed:50,
        backDelay: 900,
        backSpeed:50,
        loop:true
});
function myFunction() {
    var x = document.getElementById("myTopnav");
    var y=document.getElementById("myDIV");    
    if (x.className === "nav-bar" && y.className === "fa fa-bars") {
         x.className += " responsive";
         var z = y.className += "fa fa-times";
         y.style.fontSize="30px";
        } 
    else {
        x.className = "nav-bar";
        y.className = "fa fa-bars";
        y.style.fontSize="24px";
    }
}