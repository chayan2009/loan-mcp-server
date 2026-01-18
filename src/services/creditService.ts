import { Customer } from "../types";

export function checkCredit(customer: Customer): boolean {
  if (customer.creditScore < 650) {
    return false;
  }

  const emiRatio = customer.existingEMI / customer.monthlyIncome;
  if (emiRatio > 0.4) {
    return false;
  }

  return true;
}
