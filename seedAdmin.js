import mongoose from "mongoose";
import dotenv from "dotenv";
import bcrypt from "bcryptjs";
import User from "./models/User.js";
import dns from "dns";

dns.setServers(["1.1.1.1", "8.8.8.8"]);

dotenv.config();

const createAdmin = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URI);

    const exist = await User.findOne({
      email: "admin@gmail.com"
    });

    if (exist) {
      console.log("Admin already exists");
      process.exit();
    }

    const hashedPassword = await bcrypt.hash("admin@123", 10);

    await User.create({
      name: "Admin",
      email: "admin@gmail.com",
      password: hashedPassword,
      role: "admin",
      department: "Administration"
    });

    console.log("✅ Admin Created Successfully");
    process.exit();

  } catch (error) {
    console.log(error);
    process.exit(1);
  }
};

createAdmin();
