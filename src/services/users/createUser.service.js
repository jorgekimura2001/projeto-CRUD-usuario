import users from "../../database";
import {v4 as uuidv4} from 'uuid'
import { hash } from "bcryptjs";

export default async function createUserService (user){

    const date = new Date()

    const dateCreate = date.toJSON()

    const hashedPassword = await hash(user.password, 10)

    const newUser = {
        email: user.email, 
        name: user.name, 
        uuid: uuidv4(), 
        isAdm: user.isAdm, 
        password: hashedPassword,
        createdOn: dateCreate,
        updatedOn: dateCreate
    }
        
    users.push(newUser)

    const {password, ...data} = newUser

    return data
}