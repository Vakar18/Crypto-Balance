const parseTimestamp = (timestamp) => {
    const date = new Date(timestamp);
    if (isNaN(date.getTime())) {
      throw new Error('Invalid timestamp format');
    }
    return date;
  };
  
  module.exports = { parseTimestamp };
  