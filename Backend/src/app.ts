import express from 'express'
import {config} from 'dotenv' 
import path from 'path';
import { fileURLToPath } from 'url'
import morgan from 'morgan'
import appRouter from './routes/index.js';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const envPath = path.resolve(__dirname, '../../.env'); // Move up two levels
config({ path: envPath }); //.env configuration

const app = express()

//---------------------------MIDDLEWARES------------------------

app.use(express.json())     //parses JSON payloads into JavaScript objects, making them accessible via req.body
app.use(morgan("dev"))      //middleware for logging HTTP requests in Node.js.
                            //"dev" is a predefined logging format that outputs concise colored logs with method, status, response time, and size
app.use("/api/v1",appRouter)

export default app