---

# 🏢 Attendance Management Application

Developed with the MERN Stack and Redux, this application provides a comprehensive solution for managing hostel operations.

## 📦 Installation Instructions

1. Clone the repository:

   ```sh
   ?git clone  https://github.com/RAJAKSURAJ/attendancemanagemnet-backend.git
   ```

2. Install backend dependencies:
   ```sh
   npm install
   ```

### 🛠️ Setup the .env File

Create a `.env` file in the root directory with the following content:

```env
NODE_ENV=development
PORT=5000
MONGO_URI=Your MongoDB URI
JWT_SECRET=Your JWT Secret Key
```

## 🚀 Features

- [x] User Registration and Login
- [x] Student Information Management
- [x] Add New Students
- [x] Edit or Remove Student Details
- [x] Update Student Locations
- [x] Daily Attendance Tracking
- [x] Attendance Records Display
- [x] Export Attendance Data as CSV
- [x] Delete Attendance Records from Previous Days
- [x] User List Management
- [x] Modify User Admin Privileges
- [x] Admin-Only Data Control

## 📂 Project Structure

The project structure includes:

- Backend: Contains the server-side code and APIs
- Frontend: Contains the client-side code and React components
- Redux: Used for state management

## 🌱 Environment Variables

### .env.example

Here's an example of what your `.env` file should look like:

```env
NODE_ENV=development
PORT=5000
MONGO_URI=Your MongoDB URI
JWT_SECRET=Your JWT Secret Key
```

## 📝 Usage

1. Start the backend server:
   ```sh
   npm run server
   ```
