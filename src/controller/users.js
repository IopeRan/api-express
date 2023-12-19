const UsersModel = require('../models/users')

const getAllUsers = async (req, res) => {
    try {
        const [data] = await UsersModel.getAllUsers()
        
        res.json({
            message: 'GET All Users Success',
            data: data
        })
    } catch (error) {
        res.status(500).json({
            message: 'Server Error',
            serverMessage: error,
        })
    }
}

const createNewUser = async (req, res) => {
    const {body} = req;
    
    try {
        await UsersModel.createNewUser(body)
        res.json({
            message: 'CREATE New User Success',
            data: req.body
        })
    } catch (error) {
        res.status(500).json({
            message: 'Server Error',
            serverMessage: error,
        })
    }
}

const updateUser = (req, res) => {
    const {id} = req.params
    console.log(req.params)
    res.json({
        message: 'UPDATE user success',
        data: req.body
    })
}

const deleteUser = (req, res) => {
    const {id} = req.params
    res.json({
        message: 'DELETE user success',
        data: {
            id: id,
            name: 'Mr.Lorem',
            address: 'Bandung'
        }
    })
}

module.exports = {
    getAllUsers,
    createNewUser,
    updateUser,
    deleteUser
}