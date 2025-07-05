import { config } from "dotenv";
import { connectDB } from "../lib/db.js";
import User from "../models/user.model.js";

config();

const seedUsers = [
  {
    "fullName": "Aanya Mehra",
    "email": "aanya.mehra@example.com",
    "password": "Aanya@123",
    "profilePic": "https://randomuser.me/api/portraits/women/65.jpg"
  },
  {
    "fullName": "Kavya Sharma",
    "email": "kavya.sharma@example.com",
    "password": "Kavya@123",
    "profilePic": "https://randomuser.me/api/portraits/women/23.jpg"
  },
  {
    "fullName": "Isha Patel",
    "email": "isha.patel@example.com",
    "password": "Isha@123",
    "profilePic": "https://randomuser.me/api/portraits/women/81.jpg"
  },
  {
    "fullName": "Riya Banerjee",
    "email": "riya.banerjee@example.com",
    "password": "Riya@123",
    "profilePic": "https://randomuser.me/api/portraits/women/44.jpg"
  },
  {
    "fullName": "Aarav Malhotra",
    "email": "aarav.malhotra@example.com",
    "password": "Aarav@123",
    "profilePic": "https://randomuser.me/api/portraits/men/33.jpg"
  },
  {
    "fullName": "Vivaan Deshmukh",
    "email": "vivaan.deshmukh@example.com",
    "password": "Vivaan@123",
    "profilePic": "https://randomuser.me/api/portraits/men/56.jpg"
  },
  {
    "fullName": "Aditya Verma",
    "email": "aditya.verma@example.com",
    "password": "Aditya@123",
    "profilePic": "https://randomuser.me/api/portraits/men/72.jpg"
  },
  {
    "fullName": "Rohan Sinha",
    "email": "rohan.sinha@example.com",
    "password": "Rohan@123",
    "profilePic": "https://randomuser.me/api/portraits/men/41.jpg"
  }
];


const seedDatabase = async () => {
  try {
    await connectDB();

    await User.insertMany(seedUsers);
    console.log("Database seeded successfully");
  } catch (error) {
    console.error("Error seeding database:", error);
  }
};

// Call the function
seedDatabase();