/*
 * DOTS: Level Three
 *
 */


let score = 0
const ball = document.querySelectorAll(`.js-ball`)
const scoreDisply = document.querySelector('.js-score')
const levelWinner = document.querySelector('.level-winner')

for (let i = 0; i < ball.length; i++){
    let ballValue = parseInt(ball[i].getAttribute(`data-increment`))  
    ball[i].addEventListener(`click`, () => {
            score += ballValue;
            scoreDisply.innerText = score
            if (score >= 100) {
                levelWinner.style.opacity = 1;
            }
        })
    }
