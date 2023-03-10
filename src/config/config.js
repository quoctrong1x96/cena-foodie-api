export default {
    NODE_ENV: process.env.NODE_ENV,
    PORT: process.env.PORT,
  
    /** DATABASE */
    db: {
      DB_HOST: process.env.DB_HOSTNAME,
      DB_NAME: process.env.DB_DATABASE,
      DB_USER: process.env.DB_USERNAME,
      DB_PASS: process.env.DB_PASSWORD,      
      dialect: "mysql",
  
      // pool is optional, it will be used for Sequelize connection pool configuration
      pool: {
        max: 5,
        min: 0,
        acquire: 30000,
        idle: 10000
      }
    },
  
    /** AUTH KEY */
    auth: {
      secret: process.env.APP_KEY_JWT,
    }
  };
  