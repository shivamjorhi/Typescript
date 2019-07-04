 import {IEmployee} from './Employee';
 var empall:IEmployee[]=[
    {empId:1001,empName:"ABCD",empSalary:10000.11,empStatus:true},
    {empId:1002,empName:"BCD",empSalary:10000.11,empStatus:true},
    {empId:1003,empName:"CD",empSalary:10000.11,empStatus:true}
];

empall.push({empId:1004,empName:"D",empSalary:10000.11,empStatus:true})
empall.splice(1,1);
for(let data of empall){
    console.log(data.empId+" "+data.empName+" "+data.empSalary+" "+data.empStatus);

}