# Speed Typing Game

A modern, responsive speed typing game built with **React**, **TypeScript**, and **Tailwind CSS**.

---

## Features

- **Real-Time Typing Test:** Type as many words as you can before the timer runs out.
- **Live Accuracy & Error Tracking:** See your accuracy and error count instantly.
- **Restart Anytime:** Quickly restart the test with a single click.
- **Responsive Design:** Works great on desktop and mobile.
- **Animated UI:** Smooth transitions and visual feedback.

---

## Tech Stack

- [React](https://reactjs.org/) (with Hooks)
- [TypeScript](https://www.typescriptlang.org/)
- [Tailwind CSS](https://tailwindcss.com/)
- [Framer Motion](https://www.framer.com/motion/) (for animations)
- [Faker.js](https://fakerjs.dev/) (for random word generation)
- [classnames](https://www.npmjs.com/package/classnames) (for conditional class names)
- [react-icons](https://react-icons.github.io/react-icons/) (for icons)

---

## Folder Structure
```
speed-typing/ 
├── public/
│      └── ... # Static assets and HTML template
├── src/ 
    │   
    ├── components/ # React components 
        (Caret,RestartButton, Results, UserTypings) 
    │ 
    ├── hooks/ # Custom React hooks (useEngine, useWords, useTypings, useCountdownTimer) 
    │
    ├── utils/ # Helper functions 
    │
    ├── App.tsx # Main app component 
    │ 
    ├── index.tsx # Entry point 
    │ 
    └── index.css # Tailwind CSS imports and custom styles 
├── tailwind.config.js # Tailwind CSS configuration
├── postcss.config.js # PostCSS configuration 
├── package.json # Project dependencies and scripts 
└── README.md # Project documentation
```
---

## Getting Started

1. **Clone the repository:**
   ```sh
   git clone <repo-url>
   cd speed-typing

2. **Install dependencies:**
    ```sh
    npm install
3. **Start the development server:**
    ```sh
    npm start

Open http://localhost:3000 in your browser.

## Customization

Change Number of Words or Timer:
Edit NUMBER_OF_WORDS and COUNTDOWN_SECONDS in useEngine.ts.
Change Theme Colors:
Edit the colors section in tailwind.config.js.
## 📄 License
This project is provided for educational and personal use.

<p align="center"><b>Enjoy testing your typing speed! ⌨️⚡</b></p>

