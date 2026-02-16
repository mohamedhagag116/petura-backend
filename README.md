# Petura Backend API

Backend service for **Petura**, a pet care management platform built with Node.js and MongoDB.

This API powers:
- Mobile application (React Native)
- Admin dashboard (Web)

---

# Overview

Petura Backend is a RESTful API that provides:

- Secure JWT Authentication
- Role-Based Authorization
- Pet Management (CRUD)
- Aggregated Home Dashboard Endpoint
- Notifications System (Model Ready)
- Scalable Project Structure

---

# Tech Stack

- Node.js
- Express.js
- MongoDB (Mongoose)
- JWT (Authentication)
- bcrypt (Password hashing)
- express-validator (Input validation)

---

# Architecture

Layered structure:

```

Routes → Controllers → Models → Database

```

Security layers:

- JWT Authentication Middleware
- Role-based Authorization Middleware
- Ownership validation on protected resources
- Input validation middleware

---

# Base URL

```

[http://localhost:5000/api](http://localhost:5000/api)

```

---

# Authentication

The API uses **JWT (Bearer Token)**.

After login or register, include the token in requests:

```

Authorization: Bearer <your_token>

```

---

# Roles

The system supports three roles:

- USER (default)
- PROVIDER
- ADMIN

Role-based protection is handled in backend middleware.

---

# Implemented Modules

## 1. Authentication

| Method | Endpoint | Description |
|--------|----------|------------|
| POST | /auth/register | Register new user |
| POST | /auth/login | Login user |
| GET | /auth/profile | Get logged-in user profile |

Features:
- Email uniqueness check
- Password hashing
- Account activation check
- Secure JWT generation

---

## 2. Home (Aggregated Dashboard)

| Method | Endpoint | Description |
|--------|----------|------------|
| GET | /home | Aggregated dashboard data |

Returns:

- petsCount
- unreadNotificationsCount
- latestPets
- latestNotifications

Optimized for mobile performance (single request dashboard).

---

## 3. Pet Management (CRUD)

| Method | Endpoint | Description |
|--------|----------|------------|
| POST | /pets | Create pet |
| GET | /pets | Get user pets |
| GET | /pets/:id | Get pet details |
| PUT | /pets/:id | Update pet |
| DELETE | /pets/:id | Delete pet |

Security:
- Ownership verification
- Forbidden access protection
- Controlled field updates
- Validation layer applied

---

# Project Structure

```

src/
│
├── config/
│   └── db.js
│
├── controllers/
│   ├── auth.controller.js
│   ├── home.controller.js
│   └── pet.controller.js
│
├── middlewares/
│   ├── auth.middleware.js
│   ├── role.middleware.js
│   ├── validate.middleware.js
│   └── error.middleware.js
│
├── models/
│   ├── user.model.js
│   ├── pet.model.js
│   └── notification.model.js
│
├── routes/
│   ├── auth.routes.js
│   ├── home.routes.js
│   └── pet.routes.js
│
├── utils/
│   ├── hash.js
│   └── jwt.js
│
├── validators/
│   ├── auth.validator.js
│   └── pet.validator.js
│
server.js

```

---

# Run Locally

## 1. Clone Repository

```

git clone [https://github.com/mohamedhagag116/petura-backend.git](https://github.com/mohamedhagag116/petura-backend.git)
cd petura-backend

```

## 2. Install Dependencies

```

npm install

```

## 3. Create .env File

Create a `.env` file in root directory:

```

PORT=5000
MONGO_URI=your_mongodb_connection_string
JWT_SECRET=your_secret_key

```

## 4. Run Development Server

```

npm run dev

```

Server will run at:

```

[http://localhost:5000](http://localhost:5000)

```

---

# Security Measures

- Password hashing using bcrypt
- JWT verification middleware
- Role-based authorization
- Resource ownership validation
- Request validation via express-validator
- Environment variable protection via .env

---

# Current Status

Core backend completed:

- Authentication System
- Role Middleware
- Secure Pet CRUD
- Aggregated Home Endpoint
- Clean Git structure

---

# Next Planned Modules

- Notifications CRUD
- Service Providers Module
- Booking System
- Admin Dashboard APIs
- Advanced Aggregations
- Index Optimization
- Pagination & Filtering
- API Documentation (Swagger)

---

# License

This project is for educational and portfolio purposes.
