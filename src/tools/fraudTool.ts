import customers from "../data/customers.json";
import { checkFraud } from "../services/fraudService";

export function fraudCheckTool(userId: string) {
  const customer = customers.find(c => c.userId === userId);

  if (!customer) {
    return { error: "Customer not found" };
  }

  const safe = checkFraud(customer);

  return {
    fraudSafe: safe,
    reason: safe
      ? "No fraud indicators detected"
      : "High device risk detected"
  };
}
    