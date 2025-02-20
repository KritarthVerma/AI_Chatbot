import app from './app.js';
import { connectToDB } from './db/connection.js';
//-----------------------CONNECTIONS AND LISTENERS-------------------------------
connectToDB().then(() => {
    app.listen(process.env.PORT, () => { console.log("Server open and connected to database"); });
})
    .catch((err) => console.log(err));
//# sourceMappingURL=index.js.map