import express from 'express';
import path from 'path';
import { config } from 'dotenv';

import { createServer } from "http";
import Server from "socket.io";
import { socketOrderDelivery } from './Sockets/SocketOrderDelivery';

import routeAuth from './Router/Auth.routes';
import routerUser from './Router/User.routes';
import routerProduct from './Router/Product.routes';
import routerCategory from './Router/Category.routes';
import routerOrder from './Router/Order.routes';
import routerStore from './Router/Store.routes';
import routerVocher from './Router/Vocher.routes';


config();

const app = express();

// CONFIG SOCKET 
const httpServer = createServer(app);

const io = new Server(httpServer, {/* */});
socketOrderDelivery(io);


app.use( express.json() );
app.use( express.urlencoded({ extended: false }));

app.use('/api', routeAuth);
app.use('/api', routerUser);
app.use('/api', routerProduct);
app.use('/api', routerCategory);
app.use('/api', routerOrder);
app.use('/api', routerStore);
app.use('/api/vocher', routerVocher);


app.use( express.static( path.join( __dirname, 'Uploads/Profile' )));
app.use( express.static( path.join( __dirname, 'Uploads/Products' )));


export default httpServer;