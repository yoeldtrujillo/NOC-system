import { envs } from "./config/plugis/envs.plugins";
import { Server } from "./presentation/server";

(async () => {
  main();
})();

function main(){
  // Server.start();
  console.log(envs.PORT);
}