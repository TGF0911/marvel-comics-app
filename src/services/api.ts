import axios from 'axios';
import md5 from 'md5';

export const apiKey = process.env.API_KEY;
export const privateKey = String(process.env.PRIVATE_KEY);
export const time = Number(new Date());
export const hash = md5(time + privateKey + apiKey);


export const api = axios.create({
  baseURL: 'https://gateway.marvel.com:443/v1/public/',
  params: {
    apikey: apiKey,
    ts: time,
    hash: hash
  }
})