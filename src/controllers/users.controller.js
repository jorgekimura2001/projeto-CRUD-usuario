import createUserService from "../services/users/createUser.service"
import listUserEspecificService from "../services/users/listUserEspecific.service"
import listUsersService from "../services/users/listUsers.service"
import updateUserService from "../services/users/updateUser.service"

export async function createUserController (req, res){
    const user = req.body

    const newUser = await createUserService(user)

    return res.json(newUser)
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
        const { id } = req.user

        const newInfo = req.body
    
        const user = updateUserService(id, newInfo)
    
        return res.json(user)
        
    } catch (error) {
        return res.status(404).json({
            message: error.message
        })
    }
}