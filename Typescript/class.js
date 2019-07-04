"use strict";
exports.__esModule = true;
var empall = [
    { empId: 1001, empName: "ABCD", empSalary: 10000.11, empStatus: true },
    { empId: 1002, empName: "BCD", empSalary: 10000.11, empStatus: true },
    { empId: 1003, empName: "CD", empSalary: 10000.11, empStatus: true }
];
empall.push({ empId: 1004, empName: "D", empSalary: 10000.11, empStatus: true });
empall.splice(1, 2);
for (var _i = 0, empall_1 = empall; _i < empall_1.length; _i++) {
    var data = empall_1[_i];
    console.log(data.empId + " " + data.empName + " " + data.empSalary + " " + data.empStatus);
}
