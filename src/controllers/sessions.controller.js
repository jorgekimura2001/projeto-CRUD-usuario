import loginSessionService from "../services/sessions/loginSession.service";

export async function loginSessionController (req, res) {
    try {
        const {email, password} = req.body
    
        const token = await loginSessionService(email, password)

        return res.json({token})
    } catch (error) {
        return res.status(400).json({
            message: error.message
        })
    }
}