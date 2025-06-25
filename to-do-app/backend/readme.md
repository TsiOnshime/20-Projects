---

# 🗄️ To-Do App Backend

This is the **Express.js** backend for the To-Do App, using **MongoDB** for data storage.

---

## Features

- RESTful API for managing to-do tasks
- MongoDB persistence via Mongoose
- CORS enabled for frontend integration
- Production-ready static file serving

---

## Folder Structure
```
backend/ 
        ├── config/ 
        │ └── db.js # MongoDB connection logic 
        ├── models/
        │ └── todo.model.js # Mongoose schema for todos 
        ├── routes/ 
        │ └── todo.route.js # Express routes for todos 
        ├── server.js # Main server entry point
```
---

## Getting Started

1. **Install dependencies:**
   ```sh
   npm install
   ```

2. **Set up environment variables:**

Create a .env file in the project root:
```
MONGO_URI=your_mongodb_connection_string
NODE_ENV=production
PORT=5000
```
3. **Run the backend server:**
```
npm run dev
```
The API will be available at http://localhost:5000/api/todos

## License

This project is provided for educational purposes.

