const express = require('express');
const app = express();
const PORT = 5003;

//sample data
const orders = [

    
        {
            id: 1,
            userId: 1,
            productId: 2,
            quantity: 1,
            totalPrice: '89,999',
            status: 'Processing'
        },

        {
            id: 2,
            userId: 2,
            productId: 1,
            quantity: 2,
            totalPrice: '120,000',
            status: 'Shipped'
        }
];

//endpoint: GET /orders
app.get('/orders', (req, res) => {
    console.log('Order service: Returning', orders.length, 'orders');

    res.json({
        service: 'Order Service',
        status: 'success',
        count: orders.length,
        data: orders,
        timestamp: new Date().toISOString()
    });
});

app.get('/ping', (req, res) => {
    res.json(
        {
            status: 'Online',
            service: 'Order Service',
        });
});

app.listen(PORT, () => {
    console.log('=' .repeat(40));
    console.log('ORDER SERVICE STARTED');
    console.log('=' .repeat(40));
    console.log(`GET /orders - returns ${orders.length} orders`);
    console.log(`GET /ping - Health Check`);
}); 