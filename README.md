# 📈 SB Stocks – Paper Trading Platform

SB Stocks is a full-stack MERN web application that enables users to practice stock market trading using virtual money in a realistic and risk-free environment. The platform provides paper trading functionality with stock market data, allowing users to buy, sell, and manage a virtual investment portfolio without any financial risk.

Whether you're a beginner learning the basics of investing or an experienced trader testing new strategies, SB Stocks provides an intuitive and educational trading experience.

---

## 🚀 Features

### 🔐 Authentication
- User Registration
- Secure Login
- JWT Authentication
- Password Encryption using bcrypt
- Protected Routes

### 📊 Dashboard
- Portfolio Overview
- Virtual Account Balance
- Total Portfolio Value
- Profit & Loss Summary
- Recent Transactions

### 📈 Stock Market
- Browse US Stocks
- Search Stocks
- Company Details
- Real-Time Stock Data (Alpha Vantage API)
- Historical Stock Information

### 💹 Paper Trading
- Buy Stocks
- Sell Stocks
- Virtual Investment Portfolio
- Automatic Balance Updates
- Portfolio Performance Tracking

### 📂 Portfolio Management
- Holdings Overview
- Profit/Loss Calculation
- Current Market Value
- Average Purchase Price

### 📜 Transaction History
- Buy History
- Sell History
- Complete Trading Records

### 📱 Responsive Design
- Mobile Friendly
- Modern User Interface
- Fast Performance

---

# 🛠 Tech Stack

## Frontend
- React.js
- HTML5
- CSS3
- JavaScript
- Axios
- React Router

## Backend
- Node.js
- Express.js

## Database
- MongoDB Atlas
- Mongoose

## Authentication
- JWT
- bcrypt

## APIs
- Alpha Vantage Stock API

---

# 📁 Project Structure

```
SB-Stocks/
│
├── backend/
│   ├── config/
│   ├── controllers/
│   ├── middleware/
│   ├── models/
│   ├── routes/
│   ├── services/
│   ├── server.js
│   └── package.json
│
├── client/
│   ├── public/
│   ├── src/
│   │   ├── assets/
│   │   ├── components/
│   │   ├── context/
│   │   ├── pages/
│   │   ├── services/
│   │   ├── App.jsx
│   │   └── main.jsx
│   └── package.json
│
├── README.md
└── .gitignore
```

---

# ⚙️ Installation

## Clone Repository

```bash
git clone https://github.com/Khursheed-shaik/STOCK-TRADING-APP.git
```

Move into the project folder

```bash
cd STOCK-TRADING-APP
```

---

## Backend Setup

```bash
cd backend
npm install
```

Create a `.env` file inside the `backend` directory.

Example:

```env
PORT=5000
MONGO_URI=your_mongodb_connection_string
JWT_SECRET=your_secret_key
ALPHA_VANTAGE_API_KEY=your_alpha_vantage_api_key
```

Start the backend server:

```bash
npm run dev
```

or

```bash
npm start
```

---

## Frontend Setup

Open another terminal.

```bash
cd client
npm install
```

Create a `.env` file inside the `client` directory.

```env
VITE_API_URL=http://localhost:5000/api
```

Start the frontend.

```bash
npm run dev
```

Open your browser.

```
http://localhost:5173
```

---

# 🔑 Environment Variables

## Backend

```env
PORT=5000
MONGO_URI=your_mongodb_connection_string
JWT_SECRET=your_secret_key
ALPHA_VANTAGE_API_KEY=your_alpha_vantage_api_key
```

## Frontend

```env
VITE_API_URL=http://localhost:5000/api
```

---

# 📌 API Endpoints

## Authentication

```
POST /api/auth/register
POST /api/auth/login
GET  /api/auth/profile
```

## Stocks

```
GET /api/stocks
GET /api/stocks/:symbol
GET /api/stocks/search?q=
```

## Portfolio

```
GET  /api/portfolio
POST /api/portfolio/buy
POST /api/portfolio/sell
```

## Transactions

```
GET /api/transactions
```

---

# 📸 Application Modules

- Landing Page
- Login
- Register
- Dashboard
- Market
- Portfolio
- Stock Details
- Transactions
- User Profile

---

# 🎯 Project Objectives

- Learn stock trading without financial risk.
- Practice investment strategies using virtual money.
- Understand stock market behavior.
- Track portfolio performance.
- Improve financial literacy through paper trading.

---

# 🌟 Future Enhancements

- AI Stock Recommendation System
- Watchlist
- Stock News Integration
- Dark Mode
- Email Notifications
- Portfolio Analytics
- Mobile Application
- PDF Portfolio Reports

---


# 📄 License

This project is developed for educational and learning purposes.

---

## ⭐ If you found this project useful, don't forget to star the repository!
