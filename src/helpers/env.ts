import dotenv from 'dotenv';

export const { NODE_ENV } = process.env;
console.log("🚀 ~ NODE_ENV:", NODE_ENV)
dotenv.config({ path: `./env/${NODE_ENV}.env` });
export const PORT = process.env.PORT || '5000';

export const {
      DB_USERNAME,
      DB_PASSWORD,
      DB_CLUSTER,
      DB_NAME,
} = process.env;