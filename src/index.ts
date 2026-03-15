import express from "express";
import { testQueryHandler } from "./controller/testDBQuery";
import { ChangeRequestController } from "./controller/ChangeRequestController";
import path from "path";

const app = express();
const PORT = 3000;

const controller = new ChangeRequestController();
app.use(express.json());

app.use(express.static(path.join(__dirname, "../src/client")));
app.use(express.static(path.join(__dirname, "../src/view")));

app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "../src/view/homepage.html"));
})

app.post("/testQuery", testQueryHandler);


app.get("/test-email", controller.testEmail.bind(controller));

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});

