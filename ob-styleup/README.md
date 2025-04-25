# Style Up Yourself - Drag & Drop Outfit Builder

## Project Description
Style Up Yourself is a web application that allows users to create custom outfit combinations by dragging and dropping clothing items onto a canvas. Users can sign up, sign in, build outfits visually, and add their selected items to a shopping cart for a seamless online shopping experience.

## Features
- User authentication (Sign up and Sign in)
- Drag and drop clothing items by category (shirts, pants, shoes, hats)
- Real-time outfit visualization on a canvas
- Add customized outfits to a shopping cart
- Responsive and modern UI built with React and TailwindCSS
- Simple backend server with REST API for user and cart management

## Installation

### Prerequisites
- Node.js and npm installed

### Backend Setup
1. Navigate to the project directory.
2. Install dependencies:
   ```bash
   npm install express cors body-parser
   ```
3. Start the backend server:
   ```bash
   node simple_backend_server.js
   ```
   The backend server will run on http://localhost:4000

### Frontend Setup
The frontend is served statically by the backend server. Open your browser and navigate to:
```
http://localhost:4000/
```

## Backend API Overview

### Endpoints
- `POST /signup` - Register a new user with email and password.
- `POST /signin` - Sign in an existing user.
- `GET /cart?email={email}` - Get cart items for a user.
- `POST /cart` - Add items to a user's cart.
- `DELETE /cart/:email/:itemId` - Remove an item from a user's cart.

## Usage
1. Open the app in your browser.
2. Sign up or sign in with your email and password.
3. Use the sidebar to browse clothing categories and items.
4. Drag and drop items or item groups onto the canvas to build your outfit.
5. Add your outfit items to the cart.
6. View and manage your cart items.
7. Log out when finished.

## Technologies Used
- Backend: Node.js, Express.js, CORS, Body-parser
- Frontend: React, TailwindCSS, Babel (for JSX transpiling in browser)

## Author
Created by Bhavya Sri Kesamsetty

## License
This project is licensed under the MIT License.
