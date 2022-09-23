import users from "../../database";
import jwt from 'jsonwebtoken'
import { compare } from "bcryptjs";

export default async function loginSessionService (email, password) {
    
    const user = users.find(user => user.email === email)
    
    if(!user){ 
        throw new Error('Wrong email/password')
    } 
    const passwordMatch = await compare(password, user.password)
 
    if(!passwordMatch){
        throw new Error('Wrong email/password')
    }

    const token = jwt.sign({
        email: email,
        isAdm: user.isAdm  
    }, 
    "SECRET_KEY", 
    {
        expiresIn: '24h',
        subject: user.uuid
    }
    )
    
    return token
}