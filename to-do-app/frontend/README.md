---

```markdown
# 🖥️ To-Do App Frontend

This is the **React** frontend for the To-Do App, styled with **Tailwind CSS** and powered by **Vite**.

---

## Features

- Add, edit, complete, and delete tasks
- Responsive, modern UI
- Fast development with Vite
- Uses Axios for API requests

---

## Folder Structure
```
frontend/ 
├── public/ # Static assets 
├── src/ 
│ ├── App.jsx # Main React component 
│ ├── main.jsx # Entry point
│ └── index.css # Tailwind CSS imports 
├── index.html # HTML template 
├── package.json # Frontend dependencies and scripts 
└── vite.config.js # Vite configuration
```
---

## Getting Started

1. **Install dependencies:**
   ```sh
   npm install
   ```


2. **Run the development server:**
  ```
  npm run dev
  ```
3. **Open http://localhost:5173 in your browser.**

## Configuration
The frontend proxies API requests to the backend (/api) via vite.config.js.
Make sure the backend is running on port 5000.
## License
This project is provided for educational purposes.