export type TAppearanceData = {
  year: number;
  rival: string;
  round: string;
  goals: number;
};

const APPEARANCES_DATA: TAppearanceData[] = [
  {
    year: 2006,
    round: "Group Stage",
    rival: "Ivory Coast",
    goals: 0
  },
  {
    year: 2006,
    round: "Group Stage",
    rival: "Serbia and Montenegro",
    goals: 1
  },
  {
    year: 2006,
    round: "Group Stage",
    rival: "Netherlands",
    goals: 0
  },
  {
    year: 2006,
    round: "Round of 16",
    rival: "Mexico",
    goals: 0
  },
  {
    year: 2006,
    round: "Quarter-finals",
    rival: "Germany",
    goals: 0
  },
  {
    year: 2010,
    round: "Group Stage",
    rival: "Nigeria",
    goals: 0
  },
  {
    year: 2010,
    round: "Group Stage",
    rival: "Greece",
    goals: 0
  },
  {
    year: 2010,
    round: "Group Stage",
    rival: "South Korea",
    goals: 0
  },
  {
    year: 2010,
    round: "Round of 16",
    rival: "Mexico",
    goals: 0
  },
  {
    year: 2010,
    round: "Quarter-finals",
    rival: "Germany",
    goals: 0
  },
  {
    year: 2014,
    round: "Group Stage",
    rival: "Bosnia and Herzegovina",
    goals: 1
  },
  {
    year: 2014,
    round: "Group Stage",
    rival: "Iran",
    goals: 1
  },
  {
    year: 2014,
    rival: "Nigeria",
    round: "Group Stage",
    goals: 2
  },
  {
    year: 2014,
    rival: "Switzerland",
    round: "Round of 16",
    goals: 0
  },
  {
    year: 2014,
    rival: "Belgium",
    round: "Quarter-finals",
    goals: 0
  },
  {
    year: 2014,
    rival: "Netherlands",
    round: "Semi-finals",
    goals: 0
  },
  {
    year: 2014,
    round: "Final",
    rival: "Germany",
    goals: 0
  },
  {
    year: 2018,
    round: "Group Stage",
    rival: "Iceland",
    goals: 0
  },
  {
    year: 2018,
    round: "Group Stage",
    rival: "Croatia",
    goals: 0
  },
  {
    year: 2018,
    round: "Group Stage",
    rival: "Nigeria",
    goals: 1
  },
  {
    year: 2018,
    rival: "France",
    round: "Round of 16",
    goals: 0
  },
  {
    year: 2022,
    round: "Group Stage",
    rival: "Saudi Arabia",
    goals: 1
  },
  {
    year: 2022,
    round: "Group Stage",
    rival: "Mexico",
    goals: 1
  },
  {
    year: 2022,
    round: "Group Stage",
    rival: "Poland",
    goals: 0
  },
  {
    year: 2022,
    round: "Round of 16",
    rival: "Australia",
    goals: 1
  },
  {
    year: 2022,
    round: "Quarter-finals",
    rival: "Netherlands",
    goals: 1
  },
  {
    year: 2022,
    round: "Semi-finals",
    rival: "Croatia",
    goals: 1
  },
  {
    year: 2022,
    round: "Final",
    rival: "France",
    goals: 2
  }
]

const getAppearancesData = () => Promise.resolve(APPEARANCES_DATA)

export default getAppearancesData
