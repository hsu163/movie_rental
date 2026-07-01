🎬 Movie Rental System

A full-stack Movie Rental web application built with a Spring Boot backend and a Vite + React frontend.

Key Features
______________

Movies (CRUD): Add, view, edit, and delete movie listings.
Customers (CRUD): Manage customer registrations and details.
Rentals: Track active rentals, returns, and movie availability.


Tech Stack
___________

Backend: Java 17+, Spring Boot (Web, JPA), Maven, PostgreSQL/MySQL (or H2)
Frontend: React, Vite, Tailwind CSS, Axios


📂 Project Directory Map

movie-rental-app/
├── movie-rental-backend/      # Spring Boot App
│   └── src/                   # Source Code
└── movie-rental-frontend/     # React Client
    └── src/                   # UI Components

Quick Setup Instructions

1. Start the Backend (Spring Boot)

Open terminal and go to the backend folder:

cd movie-rental-backend


Configure your database credentials in src/main/resources/application.properties:

spring.datasource.url=jdbc:postgresql://localhost:5432/movierental_db
spring.datasource.username=your_username
spring.datasource.password=your_password
spring.jpa.hibernate.ddl-auto=update


Run the backend application:

./mvnw clean spring-boot:run


The server runs at: http://localhost:8080

2. Start the Frontend (Vite + React)

Open a new terminal and go to the frontend folder:

cd movie-rental-frontend


Install dependencies:

npm install


Run the development server:

npm run dev


The client runs at: http://localhost:5173

Key API Endpoints
__________________

All requests use the base URL: http://localhost:8080/api/v1

Movies (/movies)

GET /api/v1/movies - Retrieve all movies

GET /api/v1/movies/{id} - Get single movie

POST /api/v1/movies - Add a new movie

PUT /api/v1/movies/{id} - Update a movie

DELETE /api/v1/movies/{id} - Delete a movie

Customers (/customers)

GET /api/v1/customers - Get all customers

POST /api/v1/customers - Register a customer

PUT /api/v1/customers/{id} - Update customer details

DELETE /api/v1/customers/{id} - Delete customer
