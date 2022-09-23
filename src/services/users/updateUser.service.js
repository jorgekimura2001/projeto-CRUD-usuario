import users from "../../database";

export default function updateUserService (id, newInfo) {
    const userIndex = users.findIndex(user => user.uuid === id)

    if(userIndex === -1){
        throw new Error('User not found')
    }

    if(newInfo.isAdm){
        delete newInfo.isAdm
    }

    users[userIndex] = {...users[userIndex], ...newInfo}

    users[userIndex].updatedOn = new Date().toJSON()

    const {password, ...data} = users[userIndex]

    return data
}