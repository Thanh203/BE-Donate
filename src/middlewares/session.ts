import session from "express-session";
import dotenv from "dotenv";

dotenv.config();

const sessionMiddleware = session({
  secret: process.env.SESSION_SECRET || "fallback-secret", 
  resave: false,             
  saveUninitialized: false,
  cookie: { 
    maxAge: 12 * 60 * 60 * 1000,         
    httpOnly: true,          
  },
});

export default sessionMiddleware;
