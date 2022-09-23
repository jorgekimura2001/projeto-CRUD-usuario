import { Router } from "express";
import { loginSessionController } from "../controllers/sessions.controller";

const sessionRouter = Router()

sessionRouter.post('/login', loginSessionController)

export default sessionRouter