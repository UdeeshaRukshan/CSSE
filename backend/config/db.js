const mongoose = require('mongoose');
const dotenv = require('dotenv');

// Load environment variables from .env file
require("dotenv").config();

class Database {
  constructor() {
    this.connection = null;
  }

  async connect() {
    if (this.connection) return this.connection;

    try {
      this.connection = await mongoose.connect(process.env.MONGO_URL, {
        useNewUrlParser: true,        // Parses MongoDB connection string correctly
        useUnifiedTopology: true,     // Uses the new connection management engine
      });
      console.log('MongoDB connected successfully');
      return this.connection;
    } catch (error) {
      console.error('MongoDB connection error:', error);
      throw error;
    }
  }
}

const database = new Database();

module.exports = database;
