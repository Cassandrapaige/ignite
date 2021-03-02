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

// Popular games
const popular_games = `games?dates=${lastYear},${currentDate}&ordering=-rating&page_size=10`;

export const popularGamesURL = () => `${BASE_URL}/${popular_games}`;
