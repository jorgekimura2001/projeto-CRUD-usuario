import jwt from 'jsonwebtoken'

export default function verifyUserAdmMiddleware (req, res, next) {
  
    const idParams = req.params.uuid

    const {isAdm, id} = req.user

    if(idParams){
        if(idParams === id){
            next()
        }
    }

    if(!isAdm) {
        return res
                .status(401)
                .json({
                    message: "Unauthorized"
                })
    }
    next() 
}