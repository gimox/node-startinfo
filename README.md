nodejs startinfo for express
===================
[![Build Status](https://travis-ci.org/gimox/node-startinfo.svg?branch=master)](https://travis-ci.org/gimox/node-startinfo)
[![npm version](https://badge.fury.io/js/node-startinfo.svg)](https://badge.fury.io/js/node-startinfo)
[![Coverage Status](https://coveralls.io/repos/github/gimox/node-startinfo/badge.svg?branch=master)](https://coveralls.io/github/gimox/node-startinfo?branch=master)

- set server onListening and error events

- display app info

- add error on start server


breaking changes with version 1
-------------
NOTE: version 2 break with 1.x and 0.x, take a look at "Usage"



Usage
-------------
After configuring and starting server you can call this function:  

```js 
let info = new startInfo(server);
info.onError(); // manage start error
info.onListening(); // display server info
```


Full example using Express

```js
...
let express = require("express");
let http = require('http');
let StartInfo = require('node-startinfo');
...

let app = express();
let port = process.env.PORT || 3000;
app.set("port", port);
...

let server = http.createServer(app);
server.listen(port);

// this is the code!
let info = new StartInfo(server);
info.onError(); // manage start error
info.onListening(); // display info in console

````




```js

// TYPESCRIPT
import * as express from "express";
import * as http from "http";
import {StartInfo} from "node-startinfo";

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
```






Console Screenshot
-------------

      Application name : myapp
      Project version  : 0.0.1
      Server name      : vagrant-ubuntu-trusty-64
      Ip               : 10.0.2.15,192.168.0.3,192.168.1.99
      Port             : 8080
      NodeJs version   : v0.10.35
      ProcessID        : 9560
