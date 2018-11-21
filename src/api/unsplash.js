import axios from 'axios';

export default axios.create({
  baseURL: 'https://api.unsplash.com',
  headers:{
    Authorization:'Client-ID d4e19b5cfcd73c711b3a0268dbeeecc501b707346b182ddb00f68cb5359a5616'
  }
});
