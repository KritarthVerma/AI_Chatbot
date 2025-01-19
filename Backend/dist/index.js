import express from 'express';
const app = express();
//---------------------------MIDDLEWARES------------------------
app.use(express.json()); //parses JSON payloads into JavaScript objects, making them accessible via req.body
//-----------------------CONNECTIONS AND LISTENERS-------------------------------
app.listen(5000, () => { console.log("Server open"); });
//# sourceMappingURL=index.js.map