const DEV = 'http://localhost:8004/api/v1';
const LIVE = 'https://onlinestore38.herokuapp.com/api/v1';

export const BASE_URL = process.env.NODE_ENV == 'production' ? LIVE : DEV;