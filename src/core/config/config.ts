import { Dialect } from 'sequelize';
import dotenv from 'dotenv';

dotenv.config();

// Định nghĩa kiểu cấu hình cho Sequelize
interface SequelizeConfig {
  username: string;
  password: string;
  database: string;
  host: string;
  dialect: Dialect;
  port: number;
}

interface Config {
  development: SequelizeConfig;
  test: SequelizeConfig;
  production: SequelizeConfig;
}

// Tạo và export cấu hình Sequelize
const config: Config = {
  development: {
    username: process.env.POSTGRES_USER || 'root',
    password: process.env.POSTGRES_PASSWORD || 'password',
    database: process.env.POSTGRES_DB || 'mydatabase',
    host: process.env.POSTGRES_HOST_PORT || '127.0.0.1',
    dialect: 'postgres',
    port: parseInt(process.env.POSTGRES_CONTAINER_PORT || '5432', 10)
  },
  test: {
    username: process.env.POSTGRES_USER || 'root',
    password: process.env.POSTGRES_PASSWORD || 'password',
    database: process.env.POSTGRES_DB || 'mydatabase',
    host: process.env.POSTGRES_HOST_PORT || '127.0.0.1',
    dialect: 'postgres',
    port: parseInt(process.env.POSTGRES_CONTAINER_PORT || '5432', 10)
  },
  production: {
    username: process.env.POSTGRES_USER || 'root',
    password: process.env.POSTGRES_PASSWORD || 'password',
    database: process.env.POSTGRES_DB || 'mydatabase',
    host: process.env.POSTGRES_HOST_PORT || '127.0.0.1',
    dialect: 'postgres',
    port: parseInt(process.env.POSTGRES_CONTAINER_PORT || '5432', 10)
  }
};

export default config;
