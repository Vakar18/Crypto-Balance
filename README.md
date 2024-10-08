# Crypto Balance API

This project is a simple API built using the MERN stack that calculates asset-wise balances based on cryptocurrency trades up to a given timestamp. It accepts a JSON input with a `timestamp` and returns the balance of all traded assets before that time.

## Features

- Accepts a `timestamp` and returns the account balances for each traded asset.
- Supports **BUY** and **SELL** operations for cryptocurrencies.
- Utilizes **MongoDB** for data storage and **Express.js** for the API.
- Can handle multiple trades and calculate the correct balance at any given time.

## Setup and Installation

 **Prerequisites**

 -Node.js installed on your machine.
 -MongoDB installed or access to a cloud MongoDB service like MongoDB Atlas.

 1. **Clone the Repository**
    ```bash
    git clone https://github.com/Vakar18/Crypto-Balance
2. **Install Dependencies**
    ```bash
    npm install
3. **Configure Environment Variables**
   Create a .env file in the backend directory and add your MongoDB URI and server port:
    ```bash
    MONGO_URI=mongodb://localhost:27017/crypto
    PORT=5000
4. **Start the Server**
    ```bash
    npm run dev

## API Endpoints
**Get Asset Balance**
 - URL: /api/balance
 - Method: POST
 - Content-Type: application/json

