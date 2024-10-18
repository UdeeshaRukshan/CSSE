const fs = require('fs');
const path = require('path');

// Define log levels
const LOG_LEVELS = {
  INFO: 'INFO',
  WARN: 'WARN',
  ERROR: 'ERROR',
};

// Define the log file path
const logFilePath = path.join(__dirname, 'application.log');

class LoggerService {
  constructor() {
    if (LoggerService.instance) {
      return LoggerService.instance; // Ensure a single instance
    }
    LoggerService.instance = this;
  }

  // Utility function to get the current timestamp
  getCurrentTimestamp() {
    return new Date().toISOString();
  }

  // Function to log messages to the console and a log file
  logToFile(level, message) {
    const logMessage = `${this.getCurrentTimestamp()} [${level}] ${message}\n`;

    // Log to console
    console.log(logMessage.trim());

    // Append log message to the log file
    fs.appendFile(logFilePath, logMessage, (err) => {
      if (err) {
        console.error('Failed to write to log file:', err);
      }
    });
  }

  // Logger methods for different log levels
  info(message) {
    this.logToFile(LOG_LEVELS.INFO, message);
  }

  warn(message) {
    this.logToFile(LOG_LEVELS.WARN, message);
  }

  error(message) {
    this.logToFile(LOG_LEVELS.ERROR, message);
  }
}

// Export a single instance of LoggerService
const loggerService = new LoggerService();
module.exports = loggerService;
