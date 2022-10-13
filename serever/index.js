import express from "express";
import cors from "cors";
import db from "./config/Database.js";
import initModels from "./models/index.js"
import UserRoute from "../serever/routes/UserRoute.js";


const app = express();
app.use(cors());
app.use(express.json());
app.use(UserRoute);


const start = () => {
    db
      .authenticate()
      .then(() => {
        initModels(db);
        return db.sync();
      })
      .then(() => {
        app.listen(5001, () => {
        });
      })
      .catch((error) => {
        console.log('Database Error: ', error.message);
      });
  };

start();

