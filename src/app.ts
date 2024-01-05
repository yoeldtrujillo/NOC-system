import mongoose from "mongoose";
import { envs } from "./config/plugis/envs.plugins";
import { LogModel, MongoDatabase } from "./data/mongo";
import { Server } from "./presentation/server";

(async () => {
  main();
})();

async function main(){

  await MongoDatabase.connect({
    mongoUrl: envs.MONGO_URL,
    dbName: envs.MONGO_DB_NAME
    })

    //Una colección es como una tabla y un documento es como un registro
    //Crear una colección:
    // const newLog = await LogModel.create({
    //   message :'test message',
    //   origin: 'app.ts',
    //   level: "low"
    // })

    // await newLog.save();
    // console.log(newLog);

    //Leer una colección:
    // const logs = await LogModel.find()
    // console.log(logs);
    
  Server.start();
  // console.log(envs.PORT);
}