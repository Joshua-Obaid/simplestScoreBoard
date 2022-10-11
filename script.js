let hScore = 12
let gScore = 5

Hadd1El = document.getElementById("Hadd1")
Hadd2El = document.getElementById("Hadd2")
Hadd3El = document.getElementById("Hadd3")

homeScoreEl = document.getElementById('homeScore')
guestScoreEL = document.getElementById('guestScore')
homeScoreEl.textContent = hScore
guestScoreEL.textContent = gScore

function Hadd1() {
    hScore += 1
    homeScoreEl.textContent = hScore
}
function Hadd2() {
    hScore += 2
    homeScoreEl.textContent = hScore
}
function Hadd3() {
    hScore += 3
    homeScoreEl.textContent = hScore
}
function Gadd1() {
    gScore += 1
    guestScoreEL.textContent = gScore
}
function Gadd2() {
    gScore += 2
    guestScoreEL.textContent = gScore
}
function Gadd3() {
    gScore += 3
    guestScoreEL.textContent = gScore
}


