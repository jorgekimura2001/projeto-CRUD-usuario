import express from "express";
import "dotenv/config"
import userRouter from './routes/users.route'
import sessionRouter from "./routes/sessions.route";

const app = express();
app.use(express.json());
app.use('/users', userRouter, sessionRouter)
app.listen(3000)
  
export default app