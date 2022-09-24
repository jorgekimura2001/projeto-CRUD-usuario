import { Router } from "express";
import { createUserController, deleteUserController, listUserEspecificController, listUsersController, updateUserController } from "../controllers/users.controller";
import verifyAuthTokenMiddleware from "../middlewares/verifyAuthToken.middleware";
import verifyEmailAvailabilityMiddleware from "../middlewares/verifyEmailAvailability.middleware";
import verifyUserAdmMiddleware from "../middlewares/verifyUserAdm.middleware";

const router = Router()

router.post('', verifyEmailAvailabilityMiddleware, createUserController)
router.get('', verifyAuthTokenMiddleware, verifyUserAdmMiddleware, listUsersController)
router.get('/profile', verifyAuthTokenMiddleware, listUserEspecificController)
router.patch('/:uuid', verifyAuthTokenMiddleware, verifyUserAdmMiddleware, updateUserController)
router.delete('/:uuid', verifyAuthTokenMiddleware, verifyUserAdmMiddleware, deleteUserController)

export default router