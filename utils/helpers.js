module.exports = {
    format_date: (date) => {
      // Check if date is provided
      if (!date) {
        return "Invalid Date";
      }
  
      // Format date as MM/DD/YYYY
      return date.toLocaleDateString();
    }
};