import express from "express";

import { connect } from "./pg.js";

const app = express();

app.use(express.json());

let pool = null;

app.get("/ready", (req, res) => {
  console.log(`Readiness check request at ${new Date().toUTCString()}`);
  return res.status(200).send();
});

app.get("/live", (req, res) => {
  console.log(`Liveness check request at ${new Date().toUTCString()}`);
  return res.status(200).send();
});

app.post("/query", (req, res) => {
  if (!req.body.query) return res.status(400).send("Missing query.");
  pool.query(req.body.query);
  return res.status(200).send("ok");
});

app.listen(80, async () => {
  console.log("Service is running on port 80.");
  await connect();
});

// Connect to cloud sql setup POST and GET
// Setup auth proxy
// Pull creds from secret manager
