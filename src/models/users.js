const dbPool = require('../config/database')

const getAllUsers = () => {
    const SQLQuery = 'SELECT * FROM users'

    return dbPool.execute(SQLQuery)
}

const createNewUser = (body) => {
    const SQLQuery = `
        INSERT INTO users (nama, email, address) 
        VALUES ('${body.nama}', '${body.email}', '${body.address}')
    `
    
    return dbPool.execute(SQLQuery)
}

// const updateUser = (body, id) => {
//     const SQLQuery = `
//         UPDATE users SET 
//     `
// }

module.exports = {
    getAllUsers,
    createNewUser
}