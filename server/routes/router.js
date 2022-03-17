const express= require('express');
const route =express.Router();
const services = require('../services/render.js'); 
const controller =require('../controller/controller')
var Userdb = require('../model/model.js');
//var userSchema = userdb.UserSchema;

/* 
@description Root Route
@method GET/
*/
route.get('/',services.homeRoutes);

  
/* 
@description Add User Route
@method POST/
*/

route.get('/add-user',services.addUser);
/* 
@description Udpate User Route
@method POST/
*/
route.get('/update-user',services.updateUser);

//route.post('updateuser/:id',controller.updateUser);
// route.post('/update-data/:id',(req,res,next)=>
//    {
//     const id = req.params.id;
//     Userdb.findByIdAndUpdate(id, req.body, { useFindAndModify: false })
//         .then(data => {
            
//             if (!data) {
//                 res.status(404).send({ message: `Can not update Student with ${id}` })
//             }
//             else {
//                 res.redirect('/');
//                // res.send(data);
                
//             }
//         })
//         .catch(err => {
//             res.status(500).send({ message: "Error Udapte Student Details" })
//         })
//    })
// //Find and delete
// route.get('/delete/:id',(req,res)=>{
// const id = req.params.id;

//     Userdb.findByIdAndDelete(id)
//         .then(data => {
//             if (!data) {
//                 res.status(404).send({ message: `May be the ${id} is wrong!!` })
//             } else {
//                 res.redirect("/")
//             }
//         })
//         .catch(err => {
//             res.status(500).send({
//                 message: "Could not delete User with id=" + id
//             });
//         });
//     })
//API

route.post('/api/users',controller.createUser)
route.get('/api/users',controller.findUser);
route.put('/api/users/:id',controller.updateUser)
route.delete('/api/users/:id',controller.deleteUser)
module.exports= route; 