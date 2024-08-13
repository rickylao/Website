const colors = Object.freeze({
    kombuGreen: '#31493c',
    ashGrey: '#bdbea9',
    richBlack: '#001a23',
    trueBlue: '#3066be',
    theEmerald: '#45d58b'
});

const radius = 50;
const rho = 28;
const sigma = 10;
const beta = 8/3;
var x = 2;
var y = 1;
var z = 1;
var dt = 0.01;
function attract() {
    const canvas = document.getElementById("screen");
    const ctx = canvas.getContext("2d");
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    calculate();
    ctx.fillStyle = colors.theEmerald;
    ctx.beginPath();
    ctx.arc(10*x + screen.width / 2, 10*z + screen.height / 2, radius, 0, Math.PI * 2, true);
    ctx.fill();
    window.requestAnimationFrame(attract);
}

function calculate() {
    let dx = (sigma * (y - x)) * dt;
    let dy = ((x * (rho - z)) - y) * dt;
    let dz = ((x * y) - (beta * z)) * dt;
    x = x + dx;
    y = y + dy;
    z = z + dz;
}

const canvasLogo = document.getElementById("squares");
const ctx2 = canvasLogo.getContext("2d");
canvasLogo.width = 80;
canvasLogo.height = 80;
ctx2.fillStyle = colors.theEmerald;
ctx2.fillRect(10, 10, 50, 50);
ctx2.fillStyle = colors.trueBlue;
ctx2.fillRect(30, 30, 50, 50);

const canvas = document.getElementById("screen");
const ctx = canvas.getContext("2d");
canvas.width = screen.width - 1;
canvas.height = screen.height;
ctx.fillStyle = colors.theEmerald;
ctx.beginPath();
ctx.arc(x, z, radius, 0, Math.PI * 2, true);
ctx.fill();
attract();

let numbers = [1, 5, 2, 6, 3];
numbers.sort();
console.log(numbers);

//Footer
document.getElementById("year").innerHTML = new Date().getFullYear();