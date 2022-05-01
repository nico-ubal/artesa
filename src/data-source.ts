import "reflect-metadata"
import { DataSource } from "typeorm"
import { User } from "./entity/User"
import {Beer} from "./entity/Beer";

export const AppDataSource = new DataSource({
    type: "postgres",
    host: "localhost",
    port: 5432,
    username: "postgres",
    password: "1234",
    database: "Artesa",
    synchronize: true,
    logging: false,
    entities: [Beer],
    migrations: [],
    subscribers: [],
})
