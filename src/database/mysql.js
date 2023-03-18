import mysql from 'mysql';
import { promisify } from 'util';

const pool = mysql.createPool({
    connectionLimit : 10,
    host: '127.0.0.1',
    user: 'root',
    password: "Root#123",
    database: 'cena_foodie',
    debug    :  false
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