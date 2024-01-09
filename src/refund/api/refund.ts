import Refund from "../types/types";

async function delay(delayms: number) {
    return new Promise((resolve, reject) => {
      setTimeout(resolve, delayms);
    })
}
  
const refunds: Refund[] = [
    {
        id: 0,
        idMission: 0,
        budgetInitial: -999,
        frais: "aa",
        idProf: 0,
        state: "~"
    },
    {
        id: 1,
        idMission: 0,
        budgetInitial: 900,
        frais: "bbbb",
        idProf: 2,
        state: "aaa"
    }
  ]
  
export const refundApi = {
    getRefunds: async () => {
        await delay(1000)
        return refunds
    }
}
  