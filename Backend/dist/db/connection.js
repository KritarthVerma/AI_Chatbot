import { connect, disconnect } from 'mongoose';
async function connectToDB() {
    try {
        console.log(process.env.MONGODB_URL);
        await connect(process.env.MONGODB_URL);
    }
    catch (error) {
        console.log(error);
        throw new Error("Cannot connect to mongodb");
    }
}
async function disconnectFromDB() {
    try {
        await disconnect();
    }
    catch (error) {
        console.log(error);
        throw new Error("Could not disconnect from mongodb");
    }
}
export { connectToDB, disconnectFromDB };
//# sourceMappingURL=connection.js.map