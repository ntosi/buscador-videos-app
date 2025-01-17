import axios from 'axios'


const KEY = 'AIzaSyB2hIeyK-J65FAahLlPVncXZ1FeiUjdREc'

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
 
*/