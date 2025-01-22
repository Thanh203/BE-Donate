import { Sequelize } from 'sequelize';


export const sequelize = new Sequelize('postgres://donate:mypassword@postgres:5432/mydatabase');


sequelize.authenticate()
  .then(() => console.log('Connection has been established successfully.'))
  .catch(err => console.error('Unable to connect to the database:', err));
