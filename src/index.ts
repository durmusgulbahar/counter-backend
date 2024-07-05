import express from "express"
import * as dotenv from "dotenv"
import cors from "cors"
import helmet from "helmet"
import router from "./routes/api"
dotenv.config()

const app = express()

app.use(express.json())
app.use(express.urlencoded({extended : true}))
app.use(cors())
app.use(helmet())
app.use("/api", router);


export default app;