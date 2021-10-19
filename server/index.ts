import express from 'express'
import http from 'http';
import {Server} from 'socket.io';
import path from 'path';
import cors from 'cors';

import apiRoutes from '../routes/api'
import Sockets from './socket'

class CustomServer{
    app: any;
    port: any;
    server:http.Server;
    io: any;

    constructor() {
        this.app = express();
        this.port = process.env.PORT;
        this.server = http.createServer(this.app);
        this.io = new Server(this.server,{});
    }

    middlewares(){
        this.app.use(express.static(path.resolve(__dirname,'../public')));
        this.app.use(cors());
        this.app.use(express.json());
        this.app.use('/api',apiRoutes)
    }

    configSockets(){
        new Sockets(this.io);
    }

    start(){
        this.middlewares();
        this.configSockets();
        this.server.listen(this.port,()=>{console.log(`server runing in Port ${this.port}`)});
    }


}


// module.exports = Server

export default CustomServer;