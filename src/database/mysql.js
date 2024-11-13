import mysql from 'mysql2';
import { promisify } from 'util';
import { config } from 'dotenv';

config();
const pool = mysql.createPool({
    
    // connectionLimit : 10,
    host: process.env.DB_HOSTNAME,
    user: process.env.DB_USERNAME,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_DATABASE,
    port: process.env.DB_PORT,
    debug    :  false,
    connectTimeout: 10000
});

pool.getConnection((err, connection) => {

    if( err ){
        if( err.code === 'PROTOCOL_CONNECTION_LOST' ) console.log('DATABASE CONNECTION WAS CLOSED');
        if( err.code === 'ER_CON_COUNT_ERROR' ) console.log('DATABASE HAS TO MANY CONNECTIONS');
        if( err.code === 'ECONNREFUSED' ) console.log('DATABASE CONNECTION WAS REFUSED');
    }

    if( connection ) connection.release();

    console.log('DataBase is connected to '+ process.env.DB_DATABASE);
    return;
});

pool.query = promisify( pool.query );


export default pool;