import axios from "axios";

export const MIKEDB_URL = 'http://gerdov.com/mike-db/api/hfg2DB/';

export const api = axios.create({
    headers: {
        'Content-Type': 'application/json'
        ,'API_KEY': 'HFG23cr3tK3y'
    }
});
