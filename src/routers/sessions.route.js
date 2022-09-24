import { Router } from "express";
import { loginSessionController } from "../controllers/sessions.controller";

const sessionRouter = Router()

sessionRouter.post('', loginSessionController)

export default sessionRouter