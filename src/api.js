// BASE URL
const BASE_URL = "https://api.rawg.io/api";

// Get current date
const getCurrentMonth = () => {
  const month = new Date().getMonth() + 1;
  return month.toString().padStart(2, "0");
};

const getCurrentDay = () => {
  const day = new Date().getDate();
  return day.toString().padStart(2, "0");
};

const currentYear = new Date().getFullYear();
const currentMonth = getCurrentMonth();
const currentDay = getCurrentDay();

const currentDate = `${currentYear}-${currentMonth}-${currentDay}`;
const lastYear = `${currentYear - 1}-${currentMonth}-${currentDay}`;
const nextYear = `${currentYear + 1}-${currentMonth}-${currentDay}`;

// ROUTE URLS
const popular_games = `games?dates=${lastYear},${currentDate}&ordering=-rating&page_size=10`;
const upcoming_games = `games?dates=${currentDate},${nextYear}&ordering=-rating&page_size=10`;
const new_games = `games?dates=${lastYear},${currentDate}&ordering=-released&page_size=10`;

// EXPORT ROUTE URLS
export const popularGamesURL = () => `${BASE_URL}/${popular_games}`;
export const upcomingGamesURL = () => `${BASE_URL}/${upcoming_games}`;
export const newGamesURL = () => `${BASE_URL}/${new_games}`;
