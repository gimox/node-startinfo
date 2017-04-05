import * as path from "path";
import * as info from "simple-node-info";

export class startInfo {
    server: any;

    constructor(server: any) {
        this.server = server;
    }

    getPkg() {
        let pkg: any = {};

        try {
            pkg = require(path.join(process.cwd(), "./package"));
        } catch (e) {
            console.log("Error requiring package.json file");
        }

        return pkg;
    }

    onListening() {
        let file = this.getPkg();

        this.server.on('listening', () => {

            console.info(' ');
            console.info('\x1b[32m_______________________________________________________________\x1b[0m');
            console.info(' ');
            console.info('::  ' + new Date());
            console.info(' ');
            console.info('      Application name : \x1b[36m' + file.name + '\x1b[0m');
            console.info('      Project version  : ' + file.version);
            console.info('      Server name      : ' + info.getHostname());
            console.info('      Ip               : ' + info.getIp());
            console.info('      Port             : ' + this.server.address().port);
            console.info('      NodeJs version   : ' + info.getNodeVersion());
            console.info('      ProcessID        : ' + info.getPid());
            console.info('\x1b[32m_______________________________________________________________\x1b[0m');
            console.info(' ');
        })
    }

    onError() {
        this.server.on('error', (error) => {

            if (error.syscall !== 'listen') {
                throw error;
            }

            let port = this.server.address().port;

            let bind = typeof port === 'string'
                ? 'Pipe ' + port
                : 'Port ' + port;

            switch (error.code) {
                case 'EACCES':
                    console.error(bind + ' requires elevated privileges');
                    process.exit(1);
                    break;
                case 'EADDRINUSE':
                    console.error(bind + ' is already in use');
                    process.exit(1);
                    break;
                default:
                    throw error;
            }

        });
    }

}