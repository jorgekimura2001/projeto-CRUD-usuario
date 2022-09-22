import createUserService from "../services/users/createUser.service"
import listUsersService from "../services/users/listUsers.service"

export function createUserController (req, res){
    const {email, name, age} = req.body

    const user = createUserService(email, name, age)

    return res.json(user)
}

export function listUsersController (req, res){
    const users = listUsersService()

    return res.json(users)
}