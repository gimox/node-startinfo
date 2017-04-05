import {server} from "./demo/server";
import * as info from "simple-node-info";

import  * as chai from "chai";

const chaiHttp = require("chai-http");
const should = chai.should();
const expect = chai.expect;
const URL = "http://localhost:3000";

chai.use(chaiHttp);

console.log(server.address().port);

describe('Server is Up: ', () => {
    it('/GET return 200', (done) => {
        chai.request(URL)
            .get('/')
            .end((err, res) => {
                expect(err).to.be.null;
                expect(res).to.have.status(200);
                done();
            });
    });

    it('Server port exist', (done) => {
        expect(server.address().port).to.not.null;
        done();
    });
});


describe('Has info: ', () => {
    it('Host name', (done) => {
        expect(info.getHostname()).to.not.null;
        done();
    });

    it('IP address', (done) => {
        expect(info.getIp()).to.not.null;
        done();
    });

    it('Port', (done) => {
        expect(server.address().port).to.not.null;
        done();
    });

    it('Node version', (done) => {
        expect(info.getNodeVersion()).to.not.null;
        done();
    });

    it('Pid', (done) => {
        expect(info.getPid()).to.not.null;
        done();
    });
});
