const highScoresList = document.querySelector('#highScoresList')
const highScores = JSON.parse(localStorage.getItem("highScores")) || []

highScoresList.innerHTML =
highScores.map(score => {
    return `<li class="high-score">${score.name} - ${score.score}</li>`
}).join("")

function clearStorage() {

    let session = sessionStorage.getItem('register');

    if (session == null) {
    
        localStorage.removeItem('remove');

    }
    sessionStorage.setItem('register', 1);
}
window.addEventListener('load', clearStorage);