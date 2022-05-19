import express, { Response, Request } from "express";
const app  = express();
import cors from "cors";
import dotenv from "dotenv";
import router from "./routes/routes";

app.use(express.json());
app.use(express.urlencoded({extended: false}));

dotenv.config();

app.use(cors());
app.use((req: Request, res: Response, next: any) => {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Methods", "*");
    res.header("Content-type", "application/json");
    res.header("Access-Control-Allow-Methods", "Origin, X-Requested-With, Content-Type, Accept");
    next();
})

// route
app.use("/api", router)

app.get("/",async (req: Request, res: Response) => {
    res.send({status: 200, message: "Server is up and running"})
})

const port: string | number = process.env.PORT || 3000;

app.listen(port, () => {
    return console.log(`Server is running on port ${port}`);
    
})