import express from "express";
import routes from "./routes.js";
import db from "./src/db.js";

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());
app.use(routes);

db.sync(() => console.log(`Data base connected on : ${process.env.DB_NAME}`));
app.listen(PORT, () => console.log(`Server started on http://localhost:${PORT}`));