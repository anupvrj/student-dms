
var Userdb = require('../model/model.js');


//create and save new user

exports.createUser = (req, res) => {
    //validate Request
    if (!req.body) {
        res.status(400).send({ message: "Content can not be empty!" });
        return;
    }
    //new user

    const user = new Userdb({
        name: req.body.name,
        email: req.body.email,
        gender: req.body.gender,
        status: req.body.status
    });

    //save user in database
    user.save()
        .then(data =>{//res.send(data)
            res.redirect('/add-user');
        }
        )
        .catch(err => {
            res.status(500).send(
                {
                    message: err.message || "Some error occurred while creating a user"
                }
            );
        });

        
}

exports.findUser = (req, res) => {
    if (req.query.id) {
        const id = req.query.id;
        Userdb.findById(id)
            .then(data => {
                if (!data) {
                    res.status(404).send({ message: "Student Not Found with " + id })
                }
                res.send(data);
            })
            .catch(
                err => {
                    res.status(500).send({ message: err.message || "Error occured while finding theuser" })
                }
            )
    }
    else {
        Userdb.find()
            .then(user => {
                res.send(user)
            })
            .catch(err => {
                res.status(500).send({ message: err.message || "Error occurred while finding users" })
            })

    }
}

//Update User

exports.updateUser = (req, res) => {

    if (!req.body) {
        res.status(400).send({ message: "Content can not be empty!" });
        return;
    }
    const id = req.params.id;
    Userdb.findByIdAndUpdate(id, req.body, { useFindAndModify: false })
        .then(data => {
            if (!data) {
                res.status(404).send({ message: `Can not update Student with ${id}` })
            }
            else {
                res.send(data)
            }
        })
        .catch(err => {
            res.status(500).send({ message: "Error Udapte Student Details" })
        })
}

exports.deleteUser = (req, res) => {
    const id = req.params.id;

    Userdb.findByIdAndDelete(id)
        .then(data => {
            if (!data) {
                res.status(404).send({ message: `May be the ${id} is wrong!!` })
            } else {
                res.send({
                    message: "Student record has been deleted"
                })
            }
        })
        .catch(err => {
            res.status(500).send({
                message: "Could not delete User with id=" + id
            });
        });

}