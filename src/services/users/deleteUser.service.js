import users from "../../database";

export default function deleteUserService(id){
    const userIndex = users.findIndex(user => user.uuid === id)

    if(userIndex === -1){
        throw new Error('User not found')
    }

    users.splice(userIndex, 1)

    return 'User deleted with success'
}