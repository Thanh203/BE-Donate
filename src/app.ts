import express from 'express';
import bodyParser from 'body-parser';
import path from 'path';
import { sequelize } from './core/database/connection'; 
import { errorHandler } from './core/error/errorHandler'; 
import router from './routers';
import sessionMiddleware from "./middlewares/session";



const app = express();

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, './views'));


app.use(sessionMiddleware);
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use(express.static(path.join(__dirname, 'src')));
app.use('/assets', express.static(path.join(__dirname, 'assets')));

app.use(express.json());

app.use(router);
//use, get, post

app.use(errorHandler);



const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});

export { sequelize };
