# HRMS Lite – Full Stack Coding Assignment

A lightweight **Human Resource Management System (HRMS Lite)** built as part of a full-stack coding assignment.  
The application allows an admin to manage employees and track daily attendance through a clean, simple, and production-ready interface.

---

## Live Application

- **Frontend (Vercel):**  
  https://hrms-lite-eosin.vercel.app

- **Backend API (Render):**  
  https://hrms-backend-mxi8.onrender.com


---

## Features

### Employee Management
- Add a new employee with:
  - Employee ID (unique)
  - Full Name
  - Email Address
  - Department
- View list of all employees
- Delete an employee

### Attendance Management
- Mark attendance for an employee (Present / Absent)
- Attendance is tracked per employee per date
- Updating attendance for the same date updates the existing record
- View attendance history for each employee
- Display the total number of present days per employee

---

## Tech Stack

### Frontend
- React (Vite)
- JavaScript
- React Router
- Axios
- Plain CSS (custom styling)

### Backend
- Python
- Django
- Django REST Framework

### Database
- PostgreSQL (Render Managed Database)

### Deployment
- Frontend: **Vercel**
- Backend: **Render**
- Database: **Render PostgreSQL**

---

## Project Structure
```
├── hrms_backend/
│ ├── manage.py
│ ├── hrms_backend/
│ ├── employees/
│ └── requirements.txt
├── hrms-frontend/
│ ├── src/
│ ├── package.json
│ └── vite.config.js
└── README.md
```

Both frontend and backend are maintained in a **single repository** and deployed independently using folder-based configuration.

---

## Backend API Overview

### Employee APIs
- `GET /api/employees/` – List employees
- `POST /api/employees/` – Add employee
- `DELETE /api/employees/<id>/` – Delete employee

### Attendance APIs
- `POST /api/attendance/` – Create or update attendance
- `GET /api/attendance/<employee_id>/` – View attendance by employee

Attendance uses an **idempotent design**:
- If attendance exists for the same employee and date → it is updated
- Otherwise → a new record is created

---

## Database Design

### Employee
- employee_id (unique)
- full_name
- email (unique)
- department

### Attendance
- employee (ForeignKey)
- date
- status (Present / Absent)

A composite constraint ensures one attendance record per employee per date.

---

## Running the Project Locally

### Backend Setup
```
cd hrms_backend
python -m venv venv
source venv/bin/activate   # Windows: venv\Scripts\activate
pip install -r requirements.txt
python manage.py migrate
python manage.py runserver
```

Backend runs at:
```
http://127.0.0.1:8000
```

### Frontend Setup

```
cd hrms-frontend
npm install
npm run dev
```

Frontend runs at:
```
http://localhost:5173
```

## Deployment Notes

- Backend is deployed on Render using Gunicorn
- Database migrations are automatically applied during startup
- PostgreSQL is used to ensure data persistence across deployments
- Frontend uses Vercel rewrite rules to support client-side routing and page refresh

## Conclusion

This project demonstrates end-to-end full-stack development, covering backend APIs, frontend UI, database persistence, and production deployment.
The focus is on correctness, clarity, and real-world usability rather than over-engineering.
