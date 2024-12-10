import express from "express";
import bodyParser from "body-parser";
import pranchaRoutes from "./routes/pranchaRoutes";
import sequelize from "../config/database";

const app = express();
app.use(bodyParser.json());

app.use(pranchaRoutes);

const PORT = process.env.PORT || 3000;

sequelize.sync().then(() => {
  app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
  });
});
