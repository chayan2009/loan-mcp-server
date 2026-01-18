import { Customer } from "../types";

export function checkFraud(customer: Customer): boolean {
  if (customer.deviceRisk > 0.7) {
    return false;
  }
  return true;
}
