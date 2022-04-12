const baseUrl = 'https://api.hnpwa.com/v0/';

const settings = { method: 'Get', mode: 'cors' };

export const getStories = async (section = "news", page = 1) => {
  const res = await fetch(baseUrl + `${section}/${page}.json`, settings);
  return await res.json();
}

export const getTopStories = async (page = 1) => {
  return await getStories('news', page);
};

export const getNewestStories = async (page = 1) => {
  return await getStories('newest', page);
};

export const getAskHNStories = async (page = 1) => {
  return await getStories('ask', page);
};

export const getShowHNStories = async (page = 1) => {
  return await getStories('show', page);
};

export const getJobStories = async (page = 1) => {
  return await getStories('jobs', page);
};

export const getItem = async (itemId) => {
  const res = await fetch(baseUrl + `item/${itemId}.json`, settings);
  return await res.json();
}
