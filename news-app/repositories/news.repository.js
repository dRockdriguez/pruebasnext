export const getNews = () => {
  return fetch(
    "https://newsapi.org/v2/top-headlines?country=us&category=business&apiKey=d49e295665cc45cabae7be306a786d92"
  )
};
