const fs = require('fs');
const xlsx = require('xlsx');

exports.parseExcel = async (filePath) => {
  try {
    // Read the file into a workbook
    const workbook = xlsx.readFile(filePath);

    // Assuming the data is in the first sheet
    const sheetName = workbook.SheetNames[0];
    const sheet = workbook.Sheets[sheetName];

    // Convert the sheet data into JSON
    const rows = xlsx.utils.sheet_to_json(sheet);

    return rows; // Return the parsed rows
  } catch (error) {
    console.error('Error parsing Excel file:', error);
    throw error;
  }
};
