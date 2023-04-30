const config = {
  env: process.env.NODE_ENV,
  baseUrl: process.env.NEXT_PUBLIC_BASE_URL,
  mongoDB: {
    uri:
      process.env.NODE_ENV === 'test'
        ? global.__MONGO_URI__
        : process.env.MONGODB_URI,
    name:
      process.env.NODE_ENV === 'test'
        ? global.__MONGO_DB_NAME__
        : process.env.MONGODB_NAME,
    options: {},
  },
};

export default config;
