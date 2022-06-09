import express from 'express';
import path from 'path';
import { config } from 'dotenv';
import { createServer } from "http";
import Server from "socket.io";

import { fileURLToPath } from 'url';
import { dirname } from 'path';

import { socketOrderDelivery } from './sockets/orderDelivery.socket.js';
import routeAuth from './router/v1/auth.routes.js';
import routerUser from './router/v1/user.routes.js';
import routerProduct from './router/v1/product.routes.js';
import routerCategory from './router/v1/category.routes.js';
import routerOrder from './router/v1/order.routes.js';
import routerStore from './router/v1/store.routes.js';
import routerVoucher from './router/v1/voucher.routes.js';
import routerDashboard from './router/v1/dashboard.routes.js';
import setupSwagger from './swagger-setup.js';

config();
const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);
const app = express();

// CONFIG SOCKET 
const httpServer = createServer(app);

const io = new Server(httpServer, {/* */ });
socketOrderDelivery(io);


app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// setupSwagger(app);



app.use('/api/v1/auth', routeAuth);
app.use('/api/v1/users', routerUser);
app.use('/api/v1', routerProduct);
app.use('/api/v1', routerCategory);
app.use('/api/v1', routerOrder);
app.use('/api/v1', routerStore);
app.use('/api/v1/voucher', routerVoucher);
app.use('/api/v1/dashboard', routerDashboard);


app.use(express.static(path.join(__dirname, 'uploads/profile')));
app.use(express.static(path.join(__dirname, 'uploads/products')));


export default httpServer;