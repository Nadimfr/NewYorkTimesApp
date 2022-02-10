import axios from "axios";

export const getNews = async (page) => {
  return await axios
    .get(
      `https://api.nytimes.com/svc/search/v2/articlesearch.json?q=react&page=${page}&api-key=OAD0Qz0csaoDZLpw5ZR74TCeSjynnabJ`
    )
    .then((res) => {
      return res.data.response.docs;
    });
};
