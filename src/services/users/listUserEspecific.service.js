import users from "../../database";

export default function listUserEspecificService (id){
    const userFiltered = users.find(user => user.uuid === id)

    if(!userFiltered){
        throw new Error('User not found')
    }

    const {password, ...data} = userFiltered
    
    return data
}