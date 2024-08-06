import { Sequelize } from "sequelize-typescript";
import dotenv from 'dotenv'

dotenv.config() // traernos las variables de entorno

//const sequelize = new Sequelize('postgres://user:pass@example.com:5432/dbname') // Example for postgres

export const db = new Sequelize(process.env.DATA_BASE_URL , { 
    models: [__dirname + '/../models/**/*.ts']
}) 

