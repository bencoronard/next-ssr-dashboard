const properties = {
  server: {
    database: {
      url: process.env.DATABASE_URL || "url",
      username: process.env.DB_USERNAME || "next",
      password: process.env.DB_PASSWORD || "1234",
    },
    api: {
      secretKey: process.env.SECRET_API_KEY || "loxbit888",
    },
  },
  client: {
    publicApiUrl: process.env.PUBLIC_API_URL || "curl",
  },
};

export default properties;
