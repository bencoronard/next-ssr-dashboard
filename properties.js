const properties = {
  server: {
    database: {
      url: process.env.DATABASE_URL,
      username: process.env.DB_USERNAME,
      password: process.env.DB_PASSWORD,
    },
    api: {
      secretKey: process.env.SECRET_API_KEY,
    },
  },
  client: {
    publicApiUrl: process.env.PUBLIC_API_URL,
  },
};

export default properties;
