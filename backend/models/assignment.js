const mongoose = require('mongoose');

const assignmentSchema = new mongoose.Schema({
    employeeName: String,
    employeeEmailId: String,
    secretChildName: String,
    secretChildEmailId: String,
    year: Number
});

module.exports = mongoose.model('Assignment', assignmentSchema);