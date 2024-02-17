 const dbConfig = {
    HOST: "localhost",
    USER: "root",
    PASSWORD: "ITS_Pass970927",
    DB: "node_sequelize_api_db",
    dialect: "mysql", // This is the database type you are using

    pool: {
        max: 5,
        min: 0,
        acquire: 30000,
        idle: 10000
    }
}

export default dbConfig;