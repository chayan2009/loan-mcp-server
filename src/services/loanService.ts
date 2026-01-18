import { Customer, LoanDecision } from "../types";
import { checkCredit } from "./creditService";
import { checkFraud } from "./fraudService";

export function evaluateLoan(
  customer: Customer,
  requestedAmount: number
): LoanDecision {

  if (!checkFraud(customer)) {
    return {
      status: "BLOCKED",
      reason: "High fraud risk detected"
    };
  }

  if (!checkCredit(customer)) {
    return {
      status: "REJECTED",
      reason: "Credit eligibility failed"
    };
  }

  return {
    status: "APPROVED",
    approvedAmount: requestedAmount,
    reason: "Low risk and affordable"
  };
}
