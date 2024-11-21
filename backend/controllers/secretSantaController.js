const { parseExcel } = require('../utils/fileHandler');
const { generateAssignments } = require('../services/secretSantaService');
const Assignment = require('../models/assignment');

exports.assignSecretSanta = async (req, res) => {
    try{
        const employeeData = await parseExcel(req.files.employees[0].path);
        const previousAssignments = await parseExcel(req.files.previous[0].path);
        const assignments = generateAssignments(employeeData, previousAssignments);

        await Assignment.insertMany(assignments.map(assign => ({
            ...assign,
            year: new Date().getFullYear()
        })));

        res.status(200).json(assignments);
    }
    catch(error){
        res.status(500).json({ error: error.message})
    }
}