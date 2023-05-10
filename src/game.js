var title = "My Balloon Game"
// hoisting is the difference between let and var
let developer = "Andrew Ma"

const BALOON_TOTAL = 1000;

const balloons = []

let score = 0

let popSfx;
// const testBalloon = {
//     label: "Pop me!",
//     x: 100,
//     y: 50,
//     isPopped: false,
//     move() {
//         this.x += 10
//     }
// }
// testBalloon.x = 100

// console.log(testBalloon)

// testBalloon.y = 50
// testBalloon.IsPopped = false

// console.log(testBalloon)

function greeting() {
    //let gameTitle = title + " - " + "by " + developer
    let gameTitleText = `${title} - by ${developer}`

    let gameTitle = document.getElementById("game-title")
    gameTitle.innerHTML = gameTitleText
}

function preload() {
    soundFormats("wav")
    popSfx = loadSound("./pop")
}

function setup() {
    //creates canvas object and attaches it to specified container
    let canvas = createCanvas(640, 480)
    canvas.parent("game-container")

    for(let i = 0; i < BALOON_TOTAL; i++)
    {
        balloons.push(new Balloon(random(width), random(height), 30, color(random(255), 0, 0)))
        }
    }
    
function draw() {
    //a nice sky blue background
    background(135, 206, 235, 1.6)

    for (let balloon of balloons) {
        fill(balloon.col)
        balloon.checkToPop()
        balloon.checkBounds()
        balloon.blowAway()
        circle(balloon.x++, balloon.y++, balloon.r)
    }

    if (score >= BALOON_TOTAL) youWin()
}

function youWin() {
    noLoop()

    let para = document.createElement("p")
    para.style.fontSize = "64px"
    let textNode = document.createTextNode("You win!")
    para.appendChild(textNode)

    document.getElementById("game-container").appendChild(para)

    let canvas = document.querySelector("#game-container canvas")
    canvas.remove()
}