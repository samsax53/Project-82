var canvas = document.getElementById("myCanvas");
var ctx = canvas.getContext("2d");
var color = "red";
var mouseEvent = "";
cir_rad = 40;

ctx.beginPath();
ctx.strokeStyle = color;
ctx.lineWidth = 2;

canvas.addEventListener("mousedown", my_mousedown);
function my_mousedown(e) {

    cir_width = document.getElementById("width_Input").value;
    color = document.getElementById("color_Input").value;
    cir_rad = document.getElementById("radius_Input").value;
    mouseEvent = "mouseDown";
}

canvas.addEventListener("mouseup", my_mouseup);
function my_mouseup(e) {
    mouseEvent = "mouseUp";
}

canvas.addEventListener("mouseleave", my_mouseleave);
function my_mouseleave(e) {
    mouseEvent = "mouseLeave";
}

canvas.addEventListener("mousemove", my_mousemove);
function my_mousemove(e) {
    
    X_coord = e.clientX - canvas.offsetLeft;
    Y_coord = e.clientY - canvas.offsetTop;

    if (mouseEvent == "mouseDown") {

        console.log("Last X coord: " + lastX_coord);
        console.log("Last Y coord: " + lastY_coord);
        ctx.moveTo(lastX_coord, lastY_coord);
        ctx.beginPath();
        ctx.strokeStyle = color;
        ctx.lineWidth = cir_width;
        console.log("Current X coord: " + X_coord);
        console.log("Current Y coord: " + Y_coord);
        ctx.arc(X_coord, Y_coord, cir_rad, 0, 2*Math.PI);
        ctx.stroke();

    }

    lastX_coord = X_coord;
    lastY_coord = Y_coord;

}
function clearArea() {

    ctx.clearRect(0,0,canvas.width,canvas.height);

}