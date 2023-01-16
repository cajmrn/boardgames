import axios from "axios";

export const MIKEDB_EVENT_URL = 'http://gerdov.com/mike-db/api/hfg2DB/events/';
export const MIKEDB_COMMISSIONER_URL = 'http://gerdov.com/mike-db/api/hfg2DB/commissioners/';
export const MIKEDB_EXPERIENCE_URL = 'http://gerdov.com/mike-db/api/hfg2DB/experiences/';
export const MIKEDB_RANK_URL = 'http://gerdov.com/mike-db/api/hfg2DB/ranks/';
export const MIKEDB_VENUE_URL = 'http://gerdov.com/mike-db/api/hfg2DB/venues/';

export const _mikedb = axios.create({
    headers: {
        'Content-Type': 'application/json'
        ,'API_KEY': 'HFG23cr3tK3y'
    }
});
