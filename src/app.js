import express from "express";
import "dotenv/config"
import userRouter from './routers/users.route'
import sessionRouter from "./routers/sessions.route";

const app = express();
app.use(express.json());
app.use('/users', userRouter)
app.use('/login', sessionRouter)
app.listen(3000)
  
export default app