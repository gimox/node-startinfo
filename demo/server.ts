import * as express from "express";
import {startInfo} from "../src/main";

let debug = require("debug")("startinfo:server");
let http = require("http");

let app = express();
let port: number = process.env.PORT || 3000;
app.set("port", port);

export let server = http.createServer(app);
server.listen(port);

let info = new startInfo(server);
info.onError();
info.onListening();

app.get("/", function (req, res) {
    res.send("Hello World!");
});





