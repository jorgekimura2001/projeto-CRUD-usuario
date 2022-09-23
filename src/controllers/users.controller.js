import createUserService from "../services/users/createUser.service"
import deleteUserService from "../services/users/deleteUser.service"
import listUserEspecificService from "../services/users/listUserEspecific.service"
import listUsersService from "../services/users/listUsers.service"
import updateUserService from "../services/users/updateUser.service"

export async function createUserController (req, res){

        const user = req.body
    
        const newUser = await createUserService(user)
    
        return res.status(201).json(newUser)
}

export function listUsersController (req, res){
    const users = listUsersService()

    return res.json(users)
}

export function listUserEspecificController(req,res){
    try {
        const { id } = req.user
    
        const user = listUserEspecificService(id)
    
        return res.json(user)
        
    } catch (error) {
        return res.status(404).json({
            message: error.message
        })
    }
}

export function updateUserController(req, res){
    try {
        const { uuid } = req.params

        const newInfo = req.body
    
        const user = updateUserService(uuid, newInfo)
    
        return res.json(user)
        
    } catch (error) {
        return res.status(404).json({
            message: error.message
        })
    }
}

export function deleteUserController (req, res){
    try {
        const { uuid } = req.params

        const userDeleted = deleteUserService(uuid)
    
        return res.json({
            message: userDeleted
        })

    } catch (error) {
        return res.status(404).json({
            message: error.message
        })
    }
}