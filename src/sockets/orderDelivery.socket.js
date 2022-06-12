
export const socketOrderDelivery = (io) => {

    const nameSpaceOrders = io.of('/orders-delivery-socket');

    nameSpaceOrders.on('connection', socket => {
        
        console.log('USER CONNECTED');

        socket.on('position', (data) => {

            nameSpaceOrders.emit(`position/${data.idOrder}`, { latitude: data.latitude, longitude: data.longitude });
            
        });

        socket.on('disconnect', (data) => {
            console.log('USER DISCONNECT');
        });

    });

} 

