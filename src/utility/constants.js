const GOOGLE_API = process.env.REACT_APP_GOOGLE_API;

export const OFFSET_CHAT_LIVE = 25;

export const VIDEO_API =
  "https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&chart=mostPopular&maxResults=48&regionCode=IN&key=" +
  GOOGLE_API;

export const YOUTUBE_SEARCH_API_LINK =
  "https://cors-anywhere.herokuapp.com/http://suggestqueries.google.com/complete/search?client=firefox&ds=yt&q=";

export const YOUTUBE_SEARCH_QUERY =
  " https://www.googleapis.com/youtube/v3/search?part=snippet&maxResults=50&type=video&key=" +
  GOOGLE_API +
  "&q=";
