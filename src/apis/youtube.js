import axios from 'axios'


const KEY = 'AIzaSyD12CBNRdowciuSz3hBXNG0KSSjnyCK878'

export default axios.create({
    baseURL: 'https://www.googleapis.com/youtube/v3',
    params: {
      part: 'snippet', 
      type: 'video',
      maxResults: 5,
      key: `${KEY}`
  }
})



/* export default axios.create({
    baseURL: 'https://www.googleapis.com/youtube/v3',
    params: {
        part: 'snippet',
        maxResults: 5,
        key: KEY
    }
})
 
tincho se la come🍆
*/