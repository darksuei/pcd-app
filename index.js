import express from "express";

const app = express();

app.get("/ready", () => {
  console.log(`Readiness check request at ${new Date().toUTCString()}`);
});

app.get("/live", () => {
  console.log(`Liveness check request at ${new Date().toUTCString()}`);
});

app.listen(80, () => {
  console.log("Service is running on port 80.");
});
