class TicTacToe {
    constructor() {
        // Grab DOM elements
        this.cells = document.querySelectorAll(".cell");
        this.statusText = document.querySelector("#statusText");
        this.restartBtn = document.querySelector("#restartBtn");

        // Define win conditions (indexes corresponding to cells)
        this.winConditions = [
            [0, 1, 2],
            [3, 4, 5],
            [6, 7, 8],
            [0, 3, 6],
            [1, 4, 7],
            [2, 5, 8],
            [0, 4, 8],
            [2, 4, 6]
        ];

        // Game state variables
        this.options = ["", "", "", "", "", "", "", "", ""];
        this.currentPlayer = "X";
        this.running = false;

        // Initialize the game
        this.initializeGame();
    }

    initializeGame() {
        // Add event listeners for each cell and restart button.
        this.cells.forEach((cell) =>
            cell.addEventListener("click", this.cellClicked.bind(this))
        );
        this.restartBtn.addEventListener("click", this.restartGame.bind(this));

        // Set the initial status text and mark the game as running.
        this.statusText.textContent = `${this.currentPlayer}'s turn`;
        this.running = true;
    }

    cellClicked(event) {
        const cell = event.target;
        const cellIndex = cell.getAttribute("cellIndex");

        // Prevent moves if the cell is already occupied or game isn't running.
        if (this.options[cellIndex] !== "" || !this.running) {
            return;
        }

        // Update the cell, check for a win, or change the player.
        this.updateCell(cell, cellIndex);
        this.checkWinner();
    }

    updateCell(cell, index) {
        // Record the move in the options array and update the cell's text.
        this.options[index] = this.currentPlayer;
        cell.textContent = this.currentPlayer;
    }

    changePlayer() {
        // Toggle the current player and update the status text.
        this.currentPlayer = this.currentPlayer === "X" ? "O" : "X";
        this.statusText.textContent = `${this.currentPlayer}'s turn`;
    }

    checkWinner() {
        let roundWon = false;

        // Loop through all win conditions to see if one is met.
        for (let i = 0; i < this.winConditions.length; i++) {
            const [a, b, c] = this.winConditions[i];
            const cellA = this.options[a];
            const cellB = this.options[b];
            const cellC = this.options[c];

            if (cellA === "" || cellB === "" || cellC === "") {
                continue;
            }
            if (cellA === cellB && cellB === cellC) {
                roundWon = true;
                break;
            }
        }

        // Update the game status based on the result.
        if (roundWon) {
            this.statusText.textContent = `${this.currentPlayer} wins!`;
            this.running = false;
        } else if (!this.options.includes("")) {
            this.statusText.textContent = `Draw!`;
            this.running = false;
        } else {
            this.changePlayer();
        }
    }

    restartGame() {
        // Reset game state and clear all cells.
        this.currentPlayer = "X";
        this.options = ["", "", "", "", "", "", "", "", ""];
        this.statusText.textContent = `${this.currentPlayer}'s turn`;
        this.cells.forEach(cell => (cell.textContent = ""));
        this.running = true;
    }
}

// Create a new instance of the TicTacToe game.
const game = new TicTacToe();
