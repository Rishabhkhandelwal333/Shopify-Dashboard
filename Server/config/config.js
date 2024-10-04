import { config } from 'dotenv';
config();

export const MONGO_URI = process.env.MONGO_URI;
export const JWT_SECRET = process.env.JWT_SECRET;
export const SHOPIFY_STORE_URL = process.env.SHOPIFY_STORE_URL;
export const SHOPIFY_ACCESS_TOKEN = process.env.SHOPIFY_ACCESS_TOKEN;
export const PORT = process.env.PORT || 5000;
