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
        console.log('Connection has been established successfully.');
        initModels(db);
        return db.sync();
      })
      .then(() => {
        app.listen(5001, () => {
          console.log(`App listening on http://localhost:5001`);
        });
      })
      .catch((error) => {
        console.log('Database Error: ', error.message);
      });
  };

start();

// app.listen(5000, ()=> console.log('Server up and running...'));
