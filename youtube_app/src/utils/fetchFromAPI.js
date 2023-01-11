import axios from 'axios';

const BASE_URL= 'https://youtube-v31.p.rapidapi.com'

const options = {
    url: BASE_URL,
    params: {
      maxResults: '50'
    },
    headers: {
      'X-RapidAPI-Key': '9f68b39a11mshe0efc62cbbc3ed9p18d92cjsnff747d32ca12',
      'X-RapidAPI-Host': 'youtube-v31.p.rapidapi.com'
    }
  };

  export const fetchFromAPI= async(url)=>{
   const {data}= await axios.get(`${BASE_URL}/${url}`,options)

      return data;
  }