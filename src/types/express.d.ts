// src/types/express.d.ts
import * as express from 'express';

declare global {
  namespace Express {
    interface Request {
      user?: any;  // Hoặc có thể là kiểu dữ liệu cụ thể mà bạn mong muốn
    }
  }
}
