import users from "../../database";
import {v4 as uuidv4} from 'uuid'

export default function createUserService (email, name, age){
    // verificar se existe um usuário com o email que está tentando ser criado
    const userExist = users.find(user => user.email === email)

    // se já tiver um usuário com o email mostra-se essa mensagem de erro
    if(userExist){
        return 'E-mail já cadastrado!'
    }

    const newUser = {
        email, name, id: uuidv4(), age
    }
    users.push(newUser)

    return newUser
}