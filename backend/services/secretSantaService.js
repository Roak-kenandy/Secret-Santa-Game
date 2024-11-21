const Assignment = require('../models/assignment');

const generateAssignments = (employees, previousAssignments) => {
  const availableChildren = [...employees];
  const assignments = [];
  employees.forEach(employee => {
    let child;
    do {
      child = availableChildren.splice(
        Math.floor(Math.random() * availableChildren.length),
        1
      )[0];
      if(child === undefined){
        return
      }

    } while (
      child?.Employee_EmailID === employee?.Employee_EmailID ||
      previousAssignments.some(
        prev => prev?.Employee_EmailID === employee?.Employee_EmailID &&
                prev?.Secret_Child_EmailID === child?.Employee_EmailID
      )
    );

    assignments.push({
      employeeName: employee.Employee_Name,
      employeeEmailID: employee.Employee_EmailID,
      secretChildName: child.Employee_Name,
      secretChildEmailID: child.Employee_EmailID
    });
  });

  return assignments;
};

module.exports = { generateAssignments };
