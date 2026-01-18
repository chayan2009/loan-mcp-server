import customers from "../data/customers.json";
import { checkCredit } from "../services/creditService";

export function creditAnalysisTool(userId: string) {
  const customer = customers.find(c => c.userId === userId);

  if (!customer) {
    return { error: "Customer not found" };
  }

  return {
    creditEligible: checkCredit(customer),
    creditScore: customer.creditScore,
    emiRatio: customer.existingEMI / customer.monthlyIncome
  };
}
