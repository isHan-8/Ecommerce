const express = require('express');
const server = express();
const mongoose = require('mongoose');
const cors = require('cors');
const productsRouters = require('./routes/Products');
const categoriesRouter = require('./routes/Categories');
const brandsRouter = require('./routes/Brands');
const usersRouter = require('./routes/Users')
const authRouter = require('./routes/Auth')
server.use(cors({
    exposedHeaders:['X-Total-Count']
}));
server.use(express.json());
server.use(express.urlencoded({ extended: false }));

server.use('/products', productsRouters.router); // Corrected the route path
server.use('/categories', categoriesRouter.router); 
server.use('/brands', brandsRouter.router); 
server.use('/users', usersRouter.router); 
server.use('/auth', authRouter.router); 
main().catch(err => console.log(err));

async function main() {
    await mongoose.connect('mongodb://localhost:27017/ecommerce', {
        useNewUrlParser: true,
        useUnifiedTopology: true
    });
    console.log('database connected');
}

server.get('/', (req, res) => {
    res.json({ status: 'success' });
});

server.listen(8000, () => {
    console.log('server started');
});
