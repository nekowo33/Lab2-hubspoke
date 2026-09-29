const express = require('express');
const app = express();
const PORT = 5002;

//sample data
const products = [

    
        {
            id: 1,
            product: 'Lenovo LOQ',
            price: '60,000',
            category: 'Laptop',
            inStock: true
        },

        {
            id: 2,
            product: 'Samsung Galaxy S23',
            price: '89,999',
            category: 'Smartphone',
            inStock: true
        },

        {
            id: 3,
            product: 'Sony WH-1000XM4',
            price: '25,000',
            category: 'Headphones',
            inStock: true
        },

        {
            id: 4,
            product: 'Nintendo Switch 2',
            price: '78,000',
            category: 'Gaming Console',
            inStock: true
        }
];

//endpoint: GET /products
app.get('/products', (req, res) => {
    console.log('Product service: Returning', products.length, 'products');

    res.json({
        service: 'Product Service',
        status: 'success',
        count: products.length,
        data: products,
        timestamp: new Date().toISOString()
    });
});

app.get('/ping', (req, res) => {
    res.json(
        {
            status: 'Online',
            service: 'Product Service',
        });
});

app.listen(PORT, () => {
    console.log('=' .repeat(40));
    console.log('PRODUCT SERVICE STARTED');
    console.log('=' .repeat(40));
    console.log(`GET /products - returns ${products.length} products`);
    console.log(`GET /ping - Health Check`);
}); 