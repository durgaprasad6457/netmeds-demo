const express = require('express');
const router = express.Router();

const employees = [
    {id:1,name:'employee1'},
    {id:2,name:'employee2'},
    {id:3,name:'employee3'}
];

//GET : to get all employeeslist 
router.get('/',(req,res)=>{
    res.send(employees);
});

//GET : to get specific employee details
router.get('/:id',(req,res)=>{
  const employee= employees.find(c=>c.id === parseInt(req.params.id));
  if(!employee) res.status(404).send('employee not found');
  res.send(employee);
});

//POST: to add a new employee
router.post('/',(req,res)=>{
    const employee = {
        id : employees.length+1,
        name : req.body.name
    };
    employees.push(employee);
    res.send(employee);
 });

 //PUT: to update a specified employee details
 router.put('/:id',(req,res)=>{     
    const employee = employees.find(c => c.id === parseInt(req.params.id));
    if(!employee) res.set(404).send('requested employee was not found');
    employee.name=req.body.name;     
     res.send(employee);
 });

 //DELETE: to delete a specified employee
 router.delete('/:id',(req,res)=>{
     const empid = parseInt(req.params.id);
     const employee = employees.find(c =>c.id === empid);
     if(!employee) res.set(404).send('employee notfound');
     employees.splice(empid-1,1);
     res.send(employees);
 });

 module.exports = router;