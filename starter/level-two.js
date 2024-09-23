/*
 * DOTS: Level Two
 *
 */


let score = 0
const ball = document.querySelectorAll(`.js-ball`)
const scoreDisply = document.querySelector('.js-score')
const levelWinner = document.querySelector('.level-winner')

for (let i = 0; i < ball.length; i++){
        ball[i].addEventListener(`click`, () => {
            score += 10;
            scoreDisply.innerText = score
            if (score >= 100) {
                levelWinner.style.opacity = 1;
            }
        })
    }
  