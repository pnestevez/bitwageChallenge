export type TOverviewData = {
  goals: number;
  goalRatio: number;
  assists: number;
  assistRatio: number;
  matches: number;
  goalsPerSeason: {
    season: string;
    goals: number;
  }[];
  goalsPerTeam: {
    title: string;
    subtitle: string;
    value: number;
    avatarImage: string;
    avatarFallback: string;
  }[];
  overview: string;
  stadium?: string;
};

const OVERVIEW_DATA: TOverviewData = {
  goals: 819,
  goalRatio: 0.79,
  assists: 362,
  assistRatio: 0.35,
  matches: 1040,
  goalsPerSeason: [
    {
      season: "2004-2005",
      goals: 1
    },
    {
      season: "2005-2006",
      goals: 8
    },
    {
      season: "2006-2007",
      goals: 17
    },
    {
      season: "2007-2008",
      goals: 16
    },
    {
      season: "2008-2009",
      goals: 38
    },
    {
      season: "2009-2010",
      goals: 47
    },
    {
      season: "2010-2011",
      goals: 53
    },
    {
      season: "2011-2012",
      goals: 73
    },
    {
      season: "2012-2013",
      goals: 60
    },
    {
      season: "2013-2014",
      goals: 41
    },
    {
      season: "2014-2015",
      goals: 58
    },
    {
      season: "2015-2016",
      goals: 41
    },
    {
      season: "2016-2017",
      goals: 54
    },
    {
      season: "2017-2018",
      goals: 45
    },
    {
      season: "2018-2019",
      goals: 51
    },
    {
      season: "2019-2020",
      goals: 31
    },
    {
      season: "2020-2021",
      goals: 38
    },
    {
      season: "2021-2022",
      goals: 11
    },
    {
      season: "2022-2023",
      goals: 21
    },
    {
      season: "2023-2024",
      goals: 11
    }
  ],
  goalsPerTeam: [
    {
      title: "Barcelona",
      subtitle: "778 matches",
      value: 672,
      avatarImage: "/barcelona.png",
      avatarFallback: "FCB"
    },
    {
      title: "Argentina",
      subtitle: "176 matches",
      value: 104,
      avatarImage: "/afa.png",
      avatarFallback: "ARG"
    },
    {
      title: "París Saint-Germain",
      subtitle: "75 matches",
      value: 32,
      avatarImage: "/paris.png",
      avatarFallback: "PSG"
    },
    {
      title: "Inter Miami",
      subtitle: "10 matches",
      value: 11,
      avatarImage: "/miami.png",
      avatarFallback: "MIA"
    }
  ],
  overview:
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
  stadium: "/miami_stadium.png"
}

const getOverviewData = () => Promise.resolve(OVERVIEW_DATA)

export default getOverviewData
