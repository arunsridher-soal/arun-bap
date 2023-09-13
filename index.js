import Express from "express";
import routes from "./routes/index.js";
const app = Express();
const port = 3000;

app.use("/", routes);

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
