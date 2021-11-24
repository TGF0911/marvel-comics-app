import axios from 'axios';
import md5 from 'md5';

export const apiKey = 'f03140917abebd106f87611db0aa722a';
export const privateKey = '51b401f8edd94da86a652189415775072e673d47';
export const time = Number(new Date());
export const hash = md5(time + privateKey + apiKey);

export const api = axios.create({
  baseURL: 'https://gateway.marvel.com:443/v1/public/',
  params: {
    apikey: apiKey,
    ts: time,
    hash: hash,
  },
});
