import express from "express";
import { loanEligibilityTool } from "./tools/loanTool";
import { creditAnalysisTool } from "./tools/creditTool";
import { fraudCheckTool } from "./tools/fraudTool";

const app = express();
app.use(express.json());

app.post("/loan/eligibility", (req, res) => {
  const { userId, amount } = req.body;
  res.json(loanEligibilityTool(userId, amount));
});

app.get("/credit/:userId", (req, res) => {
  res.json(creditAnalysisTool(req.params.userId));
});

app.get("/fraud/:userId", (req, res) => {
  res.json(fraudCheckTool(req.params.userId));
});

app.listen(3000, () => {
  console.log("✅ MCP Server running at http://localhost:3000");
});
