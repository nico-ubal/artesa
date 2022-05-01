import { AppDataSource } from "./data-source"
// import { User } from "./entity/User"
import {Beer} from "./entity/Beer";

AppDataSource.initialize().then(async () => {

    console.log("Inserting a new user into the database...")
    const beer = new Beer()
    beer.Id = 1
    beer.Name = "test"
    beer.Type = "TypeTest"

    beer.Created_At=new Date().getDate().toString()

    await AppDataSource.manager.save(beer)
    console.log("Saved a new user with id: " + beer.Id)

    console.log("Loading users from the database...")
    const users = await AppDataSource.manager.find(Beer)
    console.log("Loaded users: ", beer)

    console.log("Here you can setup and run express / fastify / any other framework.")

}).catch(error => console.log(error))
