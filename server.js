import dotenv from "dotenv";
import app from "./app.js";
import connectDB from "./config/db.js";
import dns from "dns" ///new

dns.setServers(["1.1.1.1","8.8.8.8"])


dotenv.config();


connectDB();

app.listen(process.env.PORT,()=>{
    console.log(`server running on port ${process.env.PORT}`);
    
});