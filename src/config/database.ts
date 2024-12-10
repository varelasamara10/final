import { Sequelize } from "sequelize";

const sequelize = new Sequelize({
  dialect: "postgres",
  host: "localhost", // ou o endereço da instância no Railway ou Render
  username: "username",
  password: "password",
  database: "dbname",
});

export default sequelize;
