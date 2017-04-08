import * as express from "express";
import * as http from "http";
import {StartInfo} from "../src/main";

let debug = require("debug")("startinfo:server");

let app: express.Express = express();
let port: number = process.env.PORT || 3000;
app.set("port", port);

export let server: http.Server = http.createServer(app);
server.listen(port);


let info: StartInfo = new StartInfo(server);
info.onError();
info.onListening();


app.get("/", (req: express.Request, res: express.Response) => {
    res.send("Hello World!");
});





