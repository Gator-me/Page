function handleClick() {
    console.info("click");
    var elem = document.getElementById("maindiv");
    var bg = window.getComputedStyle(elem, null).getPropertyValue("background-color");
    if (bg == "rgb(0, 0, 0)") {
        console.info("bg");
        elem.style.backgroundColor = "aquamarine";
    } else {
        console.info(bg);
        elem.style.backgroundColor = "black";
    }
    var audio = new Audio("goodboy.m4a");
    audio.play();
}
