export type TProfileData = {
  image: string;
  username: string;
  bio: string | null;
}

const PROFILE_DATA: TProfileData = {
  image: "/messi_profile.png",
  username: "leomessi",
  bio: "Lionel Andrés Messi, also known as Leo Messi, is an Argentine professional footballer who plays as a forward for and captains both Major League Soccer club Inter Miami and the Argentina national team."
}

const getProfileData = () => Promise.resolve(PROFILE_DATA)

export default getProfileData
