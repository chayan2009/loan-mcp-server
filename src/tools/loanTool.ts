import customers from "../data/customers.json";
import { evaluateLoan } from "../services/loanService";

export function loanEligibilityTool(
  userId: string,
  amount: number
) {
  const customer = customers.find(c => c.userId === userId);

  if (!customer) {
    return { error: "Customer not found" };
  }

  return evaluateLoan(customer, amount);
}
