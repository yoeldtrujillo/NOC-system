import mongoose from "mongoose";
import { envs } from "./config/plugis/envs.plugins";
import { LogModel, MongoDatabase } from "./data/mongo";
import { Server } from "./presentation/server";
import { PrismaClient } from "@prisma/client";

(async () => {
  main();
})();

async function main(){

  await MongoDatabase.connect({
    mongoUrl: envs.MONGO_URL,
    dbName: envs.MONGO_DB_NAME
    })

  const prisma = new PrismaClient()
  // Crear registros en BD:
  // const newLog = await prisma.logModel.create({
  //   data: {
  //     level: 'HIGH',
  //     message: 'test message',
  //     origin: 'app.ts'
  //   }
  // })

  // console.log(newLog);
  
  // Leer registros de BD:

  // const logs = await prisma.logModel.findMany({
  //   where:{
  //     level: 'MEDIUM'
  //   }
  // })

  //   //Una colección es como una tabla y un documento es como un registro
  //   //Crear una colección:
  //   const newLog = await LogModel.create({
  //     message :'test message',
  //     origin: 'app.ts',
  //     level: "low"
  //   })

  //   await newLog.save();
  //   console.log(newLog);

  //   //Leer una colección:
  //   const logs = await LogModel.find()
  //   console.log(logs);
    
  Server.start();
  // console.log(envs.PORT);
}