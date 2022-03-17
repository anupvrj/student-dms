const axios = require('axios');

exports.homeRoutes=(req,res)=>{
    axios.get('http://localhost:3032/api/users')
    .then(function(response){
        res.render('index',{users:response.data});
    })
    .catch(
        err=>{
            res.send(err);
        }
    )
    
}

exports.addUser=(req,res)=>{
    res.render('add_user.twig');
}

exports.updateUser=(req,res)=>{
    axios.get('http://localhost:3032/api/users',{params:{id:req.query.id}})
    .then( function(userdata){
        res.render('update_user.twig',{user:userdata.data});
    })
    .catch(
        err=>{
            res.send(err);
        }
    )
    

}