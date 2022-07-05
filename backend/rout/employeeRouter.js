const express=require('express');
const router=express.Router();
const {addEmployee,getAllEmployee, getSingleEmployee,updateEmployee, delateEmployee}=require('../controler/employeControler')
router.route('/employee/new').post(addEmployee);
router.route('/employee').get(getAllEmployee)
router.route('/employee/:id').get(getSingleEmployee)
router.route('/employee/:id') .delete(delateEmployee)
                              .put(updateEmployee)
module.exports=router; 