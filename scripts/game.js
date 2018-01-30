// getting canvas
var canvas = document.getElementById("myCanvas");
var ctx = canvas.getContext("2d");

var x = canvas.width / 2;
var y = canvas.height - 30;

function draw() {

    ctx.canvas.width = window.innerWidth;
    ctx.canvas.height = window.innerHeight;

    // document.write(document.getElementById('navbar').offsetHeight);
    console.log(ctx.canvas.width + ":" + ctx.canvas.height);

    ctx.beginPath();
    ctx.arc(50, 50, 10, 0, Math.PI * 2);
    ctx.fillStyle = "#0095DD";
    ctx.fill();
    ctx.closePath();
}
setInterval(draw, 10);