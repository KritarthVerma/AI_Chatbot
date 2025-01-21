import express from 'express'
import {config} from 'dotenv'
import path from 'path';
import { fileURLToPath } from 'url'

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const envPath = path.resolve(__dirname, '../../.env'); // Move up two levels
config({ path: envPath }); //.env configuration

const app = express()

//---------------------------MIDDLEWARES------------------------

app.use(express.json())     //parses JSON payloads into JavaScript objects, making them accessible via req.body

export default app