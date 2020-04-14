import axios from  'axios';

const KEY = "AIzaSyANCfJIUqg4mnqEqN-S1bGxMs--cA2WcPk";

export default axios.create({
    baseURL: 'https://www.googleapis.com/youtube/v3',
    params: {
        part:'snippet',
        //type: 'video',
        maxResults: 10,
        key: KEY 
    }
});

 