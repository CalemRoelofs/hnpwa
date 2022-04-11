const baseUrl = 'https://api.hnpwa.com/v0/';

const settings = { method: 'Get', mode: 'cors' };

const getTopStories = async (page = 1) => {
  const res = await fetch(baseUrl + `news/${page}.json`, settings);
  return await res.json();
};

const getStory = async (itemId) => {
  const res = await fetch(baseUrl + `item/${itemId}.json`, settings);
  return await res.json();
}

export {
  getTopStories,
  getStory
};