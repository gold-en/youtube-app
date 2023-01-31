import axios from 'axios';

const KEY = 'AIzaSyDwURJt0rVyaMgqsaepzOei1uVBmNkbgdA';
const baseURL = 'https://www.googleapis.com/youtube/v3/search';

const searchYoutubeVideos = async term => {
  const response = await axios.get(baseURL, {
    params: {
      part: 'snippet',
      type: 'video',
      maxResults: 5,
      key: KEY,
      q: term,
    },
  });
  console.log(response.data.items);
  return response.data.items;
};

export default searchYoutubeVideos;
