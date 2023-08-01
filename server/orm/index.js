import express from "express";
import cors from "cors";

import cptRoute from "./routes/cptRoute.js";

const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(
  cors({
    origin: "*",
  })
);

app.use("/api/v1", cptRoute);

const PORT =  8080;
app.listen(PORT, () => console.log(`Server started on port ${PORT}`));
