const express = require('express');
const app = express();
const PORT = 5001;

//sample data
const users = [

    
        {
            id: 1,
            name: 'Alice Johnson',
            email: 'alice@gmail.com',
            role: 'Admin'
        },
    
    
        {
            id: 2,
            name: 'Bob Smith',
            email: 'bob@gmail.com',
            role: 'User'
        }
];

//endpoint: GET /users
app.get('/users', (req, res) => {
    console.log
    console.log('User service: Returning', users.length, 'users');

    res.json({
        service: 'User Service',
        status: 'success',
        count: users.length,
        data: users,
        timestamp: new Date().toISOString()
    });
});

app.get('/ping', (req, res) => {
    res.json(
        {
            status: 'Online',
            service: 'User Service',
        });
});

app.listen(PORT, () => {
    console.log('=' .repeat(40));
    console.log('USER SERVICE STARTED');
    console.log('=' .repeat(40));
    console.log(`GET /users - returns ${users.length} users`);
    console.log(`GET /ping - Health Check`);
}); 