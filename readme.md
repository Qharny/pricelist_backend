# Pricelist Backend

## Description
The Pricelist Backend is a Node.js application that serves as the backend for a product management system. It provides RESTful APIs for user authentication, product management, and role-based access control.

## Features
- User registration and login
- Role-based access control (admin, manager, employee)
- CRUD operations for products
- JWT-based authentication
- MongoDB as the database

## Technologies Used
- Node.js
- Express.js
- MongoDB
- Mongoose
- JWT (JSON Web Tokens)
- dotenv for environment variable management
- bcryptjs for password hashing
- cors for enabling Cross-Origin Resource Sharing

## Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/yourusername/pricelist-backend.git
   cd pricelist-backend
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Create a `.env` file in the root directory and add the following environment variables:
   ```plaintext
   PORT=5000
   MONGODB_URI=mongodb://localhost:27017/pricelist
   JWT_SECRET=your_jwt_secret
   ```

4. Start the server:
   ```bash
   npm run dev
   ```

## API Endpoints

### Authentication
- **POST** `/api/auth/register` - Register a new user
- **POST** `/api/auth/login` - Login an existing user
- **GET** `/api/auth/profile` - Get user profile (requires authentication)
- **GET** `/api/auth/admin-only` - Admin-only access (requires authentication and admin role)

### Products
- **GET** `/api/products` - Get all products
- **GET** `/api/products/:id` - Get a product by ID
- **POST** `/api/products` - Create a new product (requires admin role)
- **PUT** `/api/products/:id` - Update a product by ID (requires admin role)
- **DELETE** `/api/products/:id` - Delete a product by ID (requires admin role)

## Testing
To run tests, use:

```

## License
This project is licensed under the ISC License.

## Author
Kabutey Manasseh || Anita Araba Mends