#  JS Chess

A simple, interactive chess game built with **vanilla JavaScript**, **HTML**, and **CSS**.

---

##  Features

- **Interactive Chessboard:** Drag-and-drop interface for moving pieces
- **Turn-Based Play:** Alternates between black and white players
- **Move Validation:** Basic rules implemented for all standard chess pieces
- **Win Detection:** Game ends when a king is captured
- **Responsive Design:** Clean and modern UI for enjoyable play

---

##  Folder Structure

```
js-chess/
├── app.js        # Main game logic and board handling
├── index.html    # HTML structure for the chess game
├── pieces.js     # (Reserved for chess piece SVGs or logic)
└── styles.css    # Styling for the chessboard and UI
music-player/
```

---

## Getting Started

1. **Clone or Download** this repository.
2. Open `js-chess/index.html` in your web browser.
3. Play chess by dragging and dropping pieces on the board.

---

## Customization

- To change piece designs, add SVG markup to `pieces.js` and update the `startPieces` array in `app.js`.
- Modify `styles.css` for board and UI appearance.

---

## How It Works

- The chessboard is rendered dynamically in the browser.
- Each square and piece is represented as a DOM element.
- Drag-and-drop events handle piece movement and validation.
- The current player is displayed, and the game ends when a king is captured.

---

## License

This project is provided for educational purposes.

---

**Enjoy playing chess!**