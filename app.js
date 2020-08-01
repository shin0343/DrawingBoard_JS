const canvas = document.getElementById("jsCanvas");
const ctx = canvas.getContext("2d");

ctx.strokeStyle = "##2c2c2c";

let painting = false;

function stopPainting() {
    painting = false;
}

function onMouseEnter(event) {
    console.log(event);
    const x = event.offsetX;
    const y = event.offsetY;
    console.log(x, y);
}

function onMouseDown(event) {
    console.log(event);
    painting = true;
}

function onMouseUp(event) {
    console.log(event);
    stopPainting();
}

if (canvas) {
    canvas.addEventListener("mousemove", onMouseEnter);
    canvas.addEventListener("mousedown", onMouseDown);
    canvas.addEventListener("mouseup", onMouseUp);
    canvas.addEventListener("mouseleave", stopPainting);
}