import { Sequelize } from "sequelize";

//const sequelize = new Sequelize('postgres://user:pass@example.com:5432/dbname') // Example for postgres

export const db = new Sequelize('postgresql://rest_api_node_typescript_lmfs_user:hfvhxrYGjgMEqBRznvDXWhMGeD2rtmdM@dpg-cqdb7mtumphs73dv4a30-a.oregon-postgres.render.com/rest_api_node_typescript_lmfs?ssl=true') 

