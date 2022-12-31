import axios from "axios";

export const MIKEDB_EVENT_URL = 'http://gerdov.com/mike-db/api/hfg2DB/events';

export const _mikedb = axios.create({
    headers: {
        'Content-Type': 'application/json'
        ,'API_KEY': 'HFG23cr3tK3y'
    }
});
