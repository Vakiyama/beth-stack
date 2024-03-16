import { createClient } from '@libsql/client';

const local = process.env.LOCAL;

const url = local ? process.env.LOCAL_DB_URL : process.env.DB_URL;
if (!url) throw new Error('Missing db url env variable');

const authToken = process.env.AUTH_TOKEN;
if (!authToken) throw new Error('Missing db auth token env variable');

const localConfig = {
  url,
};

const liveConfig = {
  ...localConfig,
  authToken,
};

export const client = createClient(local ? localConfig : liveConfig);
