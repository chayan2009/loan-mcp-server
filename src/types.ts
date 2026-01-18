export interface Customer {
    userId: string;
    name: string;
    monthlyIncome: number;
    existingEMI: number;
    creditScore: number;
    deviceRisk: number;
  }
  
  export interface LoanDecision {
    status: "APPROVED" | "REJECTED" | "BLOCKED";
    reason: string;
    approvedAmount?: number;
  }
  