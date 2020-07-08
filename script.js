let points = 0;
let pointsInCircle = 0;

const pointsBox = document.querySelector('.pointsBox');
const pointsInCircleBox = document.querySelector('.pointsInCircleBox');
const piBox = document.querySelector('.pi');

const canvas = document.querySelector('canvas');
canvas.width = 1000;
canvas.height = 1000;
const context = canvas.getContext('2d');
context.fillStyle = "#FF00FF";
context.strokeStyle = "#FFFFFF";

context.beginPath();
context.rect(0, 0, 1000, 1000);
context.stroke();
context.beginPath();
context.arc(500, 500, 500, 0, 2 * Math.PI);
context.stroke();

setInterval(() => {
    let min = Math.ceil(0);
    let max = Math.floor(1000);
    let xRandom =  Math.floor(Math.random() * (max - min)) + min;
    let yRandom =  Math.floor(Math.random() * (max - min)) + min;

    context.beginPath();
    context.arc(xRandom, yRandom, 1, 0, 2 * Math.PI, true);
    context.fill();

    points++;
    if(inCiricle(xRandom, yRandom)) pointsInCircle++;

    pointsBox.innerHTML = points;
    pointsInCircleBox.innerHTML = pointsInCircle;

    piBox.innerHTML = (4*(pointsInCircle/points)).toFixed(5);

}, 1);



const inCiricle = (x, y, r=500) =>{
    let xFromCenter = Math.abs(500-x);
    let yFromCenter = Math.abs(500-y);
    const rOfPoint = Math.sqrt((xFromCenter*xFromCenter) + (yFromCenter*yFromCenter));
    if(rOfPoint <= r) return true;
    else return false;
}