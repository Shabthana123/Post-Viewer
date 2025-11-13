# 📜 Post Viewer

A web application to view posts from [JSONPlaceholder](https://jsonplaceholder.typicode.com/), save selected posts to a backend, and manage saved posts. Built with **React** for the frontend and **Node.js + Express + SQLite** for the backend.

## Features

- Display posts fetched from JSONPlaceholder API.
- Select posts and save them to a backend database.
- View all saved posts.
- Delete saved posts.
- Responsive and clean UI.

## Tech Stack

**Frontend:**

- React.js
- Axios
- CSS-in-JS for styling

**Backend:**

- Node.js + Express
- SQLite3 database
- CORS and body-parser for handling API requests

## Installation & Setup

### Prerequisites

- Node.js (v16+ recommended)
- npm

---

### Backend Setup

1. Navigate to the backend folder:

```bash
cd backend
```

2. Install dependencies:

```bash
npm install
```

3. Start the backend server:

```bash
node server.js
```

The backend server will run on `http://localhost:5000`.

---

## Frontend Setup

1. Navigate to the frontend folder:

```bash
cd frontend
```

2. Install dependencies:

```bash
npm install
```

3. Start the React app:

```bash
npm run dev
```

## Usage

1. Open the frontend in your browser.
2. View all posts from JSONPlaceholder.
3. Select the posts you want to save.
4. Click **Save Selected Posts**.
5. Scroll down to view saved posts.
6. Delete any saved post using the **Delete** button.

---

## API Endpoints (Backend)

| Method | Endpoint    | Description            |
| ------ | ----------- | ---------------------- |
| GET    | `/save`     | Fetch all saved posts  |
| POST   | `/save`     | Save posts to database |
| DELETE | `/save/:id` | Delete a post by ID    |

## Notes

- Make sure the backend server is running before using saved posts functionality.
- `node_modules` folders are **not included** in git; use `npm install` to install dependencies.
- SQLite database (`posts.db`) will be created automatically on first run.
