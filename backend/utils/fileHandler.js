const fs = require('fs');
const xlsx = require('xlsx');

exports.parseExcel = async (filePath) => {
  try {
    const workbook = xlsx.readFile(filePath);
    const sheetName = workbook.SheetNames[0];
    const sheet = workbook.Sheets[sheetName];
    const rows = xlsx.utils.sheet_to_json(sheet);

    return rows;
  } catch (error) {
    console.error('Error parsing Excel file:', error);
    throw error;
  }
};
