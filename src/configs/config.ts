const dotenv = require('dotenv');
const path = require('path');
const Joi = require('joi');

dotenv.config({ path: path.join(__dirname, '../../.env.local') });

const envVarsSchema = Joi.object()
  .keys({
    NODE_ENV: Joi.string()
      .valid('production', 'development', 'test')
      .required(),
    BASE_URL: Joi.string(),
    MONGODB_URI: Joi.string().required().description('Mongo DB url'),
    MONGODB_NAME: Joi.string().required().description('Mongo DB database name'),
  })
  .unknown();

const { value: envVars, error } = envVarsSchema
  .prefs({ errors: { label: 'key' } })
  .validate(process.env);

if (error) {
  throw new Error(`Config validation error: ${error.message}`);
}

const config = {
  env: envVars.NODE_ENV,
  baseUrl: envVars.BASE_URL,
  mongoDB: {
    uri:
      envVars.NODE_ENV === 'test' ? global.__MONGO_URI__ : envVars.MONGODB_URI,
    name:
      envVars.NODE_ENV === 'test'
        ? global.__MONGO_DB_NAME__
        : envVars.MONGODB_NAME,
    options: {},
  },
};

export default config;
