# To-Do App (Full Stack)

A modern full-stack To-Do application built with **React**, **Express**, and **MongoDB**.

---

##  Project Structure
```
to-do-app/ 
├── backend/ # Express.js API server 
├── frontend/ # React.js client app 
├── .env # Environment variables for backend 
├── package.json # Project scripts and          dependencies 
└── README.md # Project documentation
```
---

##  Getting Started

### 1. Clone the repository

```sh
git clone <repo-url>
cd to-do-app
```

### 2. Install dependencies
```
npm install
cd frontend
npm install
cd ..
```

### 3. Set up environment variables
Create a .env file in the root with your MongoDB connection string:
```
MONGO_URI=your_mongodb_connection_string
NODE_ENV=production
PORT=5000
```

### 4. Run the backend
```
npm run dev
```
### 5. Run the frontend
```
cd frontend
npm run dev
```
The frontend will be available at http://localhost:5173
The backend API runs at http://localhost:5000
## Features
- Add, edit, complete, and delete tasks
- Responsive and modern UI
- RESTful API with MongoDB persistence
- Proxy setup for seamless frontend-backend integration
## Subproject READMEs
Frontend README
Backend README
## License
This project is provided for educational purposes.

