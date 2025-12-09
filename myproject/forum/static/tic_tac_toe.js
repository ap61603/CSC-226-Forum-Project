const cells = document.querySelectorAll("[data-cell]");
const statusText = document.getElementById("status");
const resetBtn = document.getElementById("reset");

let currentPlayer = "X";
let board = Array(9).fill("");
let gameActive = true;

const winningCombinations = [
	[0, 1, 2],
	[3, 4, 5],
	[6, 7, 8],
	[0, 3, 6],
	[1, 4, 7],
	[2, 5, 8],
	[0, 4, 8],
	[2, 4, 6]
];

function handleClick(e) {
	const cell = e.target;
	const index = [...cells].indexOf(cell);

	if (!gameActive || board[index] !== "") return;

	board[index] = currentPlayer;
	cell.textContent = currentPlayer;

	if (checkWin()) {
		statusText.textContent = `Player ${currentPlayer} wins!`;
		gameActive = false;
		return;
	}

	if (board.every(spot => spot !== "")) {
		statusText.textContent = "It's a draw!";
		gameActive = false;
		return;
	}

	currentPlayer = currentPlayer === "X" ? "O" : "X";
	statusText.textContent = `Player ${currentPlayer}'s turn`;
}

function checkWin() {
	return winningCombinations.some(combo => {
		return combo.every(index => board[index] === currentPlayer);
	});
}

function resetGame() {
	board = Array(9).fill("");
	currentPlayer = "X";
	gameActive = true;
	statusText.textContent = "Player X's turn";
	cells.forEach(cell => (cell.textContent = ""));
}

cells.forEach(cell => cell.addEventListener("click", handleClick));
resetBtn.addEventListener("click", resetGame);
