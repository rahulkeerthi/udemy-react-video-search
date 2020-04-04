import axios from 'axios';

const KEY = 'AIzaSyDWr-tpje_mR2m4hMC5KnaO75FvyfldYvg';

export default axios.create({
  baseURL: "https://www.googleapis.com/youtube/v3"
});