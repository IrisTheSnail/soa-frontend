
async function delay(delayms: number) {
  return new Promise((resolve, reject) => {
    setTimeout(resolve, delayms);
  })
}

const missions = [
  {
    id: 0,
    name: "mission",
    destination: "somewhere",
    startdate: "tomorrow",
    enddate: "next month",
    state: "state",
    transport: "Car",
    idProf: 0
  },
  {
    id: 1,
    name: "mission 1",
    destination: "somewhere 1",
    startdate: "tomorrow 1",
    enddate: "next month 1",
    state: "state 1",
    transport: "Bus",
    idProf: 0
  }
]

export const missionApi = {
  getMissions: async () => {
    await delay(1000)
    return missions
  },
  addMission: async () => {
    await delay(1000)
    //the axios part
    return
  }
}
