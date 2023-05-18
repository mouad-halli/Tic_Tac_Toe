const restartBtn = document.getElementById('restartBtn')
const headText = document.getElementById('headText')
const boxes = [...document.getElementsByClassName('box')]

const PLAYER_X = 'X'
const PLAYER_O = 'O'
const EMPTY_BOX = null

let playerTurn = PLAYER_X
let gameEnded = false

const gameBoard = Array(9).fill(EMPTY_BOX)

const onRestartButtonClick = () => {
    headText.innerHTML = 'TIC TAC TOE'
    boxes.forEach(box => box.innerHTML = '')
    gameBoard.fill(null)
    playerTurn = PLAYER_X
    gameEnded = false
}

restartBtn.addEventListener('click', onRestartButtonClick)

const onBoxClick = (e) => {

    const { id } = e.target
    if (!gameEnded && gameBoard[id] === EMPTY_BOX) {
        gameBoard[id] = playerTurn
        e.target.innerHTML = playerTurn

        if (checkIfPlayerWon()) {
            gameEnded = true
            return headText.innerHTML = `PLAYER ${playerTurn} WON 🎉!`
        }

        playerTurn = playerTurn === PLAYER_X ? PLAYER_O : PLAYER_X
    }
}

const checkIfPlayerWon = () => {

    let isWin = false

    winningPredictions.forEach(row => {
        const [a, b, c] = row

        if (gameBoard[a] && gameBoard[a] === gameBoard[b] && gameBoard[a] === gameBoard[c])
            isWin = true
    })

    return isWin
}

boxes.forEach(box => box.addEventListener('click', onBoxClick))

boxes.forEach(box => box.addEventListener('mouseover', (e) => {
    const { id } = e.target

    if (!gameEnded && gameBoard[id] === EMPTY_BOX) 
        e.target.innerHTML = playerTurn
}))

boxes.forEach(box => box.addEventListener('mouseleave', (e) => {
    const { id } = e.target

    if (!gameEnded && gameBoard[id] === EMPTY_BOX)
        e.target.innerHTML = ''
}))

const winningPredictions = [
    [0,1,2],
    [3,4,5],
    [6,7,8],
    [0,3,6],
    [1,4,7],
    [2,5,8],
    [0,4,8],
    [2,4,6]
]
