import express from "express"
import * as dotenv from "dotenv"
import cors from "cors"
import helmet from "helmet"
import router from "./routes/api"
dotenv.config()

const app = express()
const corsOptions = {
    origin: 'http://localhost:3000', // Allow requests from this origin
    methods: 'GET,POST,PUT,DELETE', // Allow these methods
    allowedHeaders: 'Content-Type,Authorization' // Allow these headers
  };
  app.use(cors(corsOptions))
app.use(express.json())
app.use(express.urlencoded({extended : true}))

app.use(helmet())
app.use("/api", router);


export default app;