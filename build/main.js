"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const path = require("path");
const info = require("simple-node-info");
class StartInfo {
    constructor(server) {
        this.server = server;
    }
    getPkg() {
        let pkg = {};
        try {
            pkg = require(path.join(process.cwd(), "./package"));
        }
        catch (e) {
            console.log("Error requiring package.json file");
        }
        return pkg;
    }
    onListening() {
        let file = this.getPkg();
        const env = process.env.NODE_ENV || "dev (no environment set)";
        this.server.on("listening", () => {
            console.info(" ");
            console.info("\x1b[32m_______________________________________________________________\x1b[0m");
            console.info(" ");
            console.info("::  " + new Date());
            console.info(" ");
            console.info("      Application name : \x1b[36m" + file.name + "\x1b[0m");
            console.info("      Environment      : " + env);
            console.info("      Project version  : " + file.version);
            console.info("      Server name      : " + info.getHostname());
            console.info("      Ip               : " + info.getIp());
            console.info("      Port             : " + this.server.address().port);
            console.info("      NodeJs version   : " + info.getNodeVersion());
            console.info("      ProcessID        : " + info.getPid());
            console.info("\x1b[32m_______________________________________________________________\x1b[0m");
            console.info(" ");
        });
    }
    onError() {
        this.server.on("error", (error) => {
            if (error.syscall !== "listen") {
                throw error;
            }
            let port;
            try {
                port = this.server.address().port;
            }
            catch (e) {
                port = "port";
            }
            let bind = typeof port === "string"
                ? "Pipe " + port
                : "Port " + port;
            switch (error.code) {
                case "EACCES":
                    console.error(bind + " requires elevated privileges");
                    process.exit(1);
                    break;
                case "EADDRINUSE":
                    console.error(bind + " is already in use");
                    process.exit(1);
                    break;
                default:
                    throw error;
            }
        });
    }
}
exports.StartInfo = StartInfo;
//# sourceMappingURL=main.js.map