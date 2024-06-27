const cors = require('cors');
const express = require('express');
const mongoose = require('mongoose');

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());
app.use(cors());

mongoose.connect('mongodb://localhost:27017/user', {
    useNewUrlParser: true,
    useUnifiedTopology: true
}).then(() => console.log('MongoDB connected'))
  .catch(err => console.error(err));


const userSchema = new mongoose.Schema({
    Username: String,
    Password: String
});

const std = mongoose.model('login', userSchema);
app.post('/api/user', async (req, res) => {
    try {
        const { Username, Password } = req.body;
        console.log('Received user data:', { Username, Password }); 
        const order = new std({  Username, Password });
        await order.save();
        res.status(201).json(order); 
    } catch (err) {
        res.status(400).json({ message: err.message });
    }
});
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});


const orderSchema = new mongoose.Schema({
    itemName: String,
    quantity: Number,
    price: Number
});

const Order = mongoose.model('Order', orderSchema);

app.post('/api/order', async (req, res) => {
    try {
        const { itemName, price } = req.body;
        console.log('Received order data:', { itemName,price }); 
        const order = new Order({ itemName, price });
        await order.save();
        res.status(201).json(order); 
    } catch (err) {
        res.status(400).json({ message: err.message });
    }
});

app.get('/api/orderss', async (req, res) => {
    try {
        const { itemName, price } = req.body;
        console.log('Received order data:', { itemName,price }); 
        const order = new Order({ itemName, price });
        await order.save();
        res.status(201).json(order); 
    } catch (err) {
        res.status(400).json({ message: err.message });
    }
});
const orderedSchema = new mongoose.Schema({
    selected: String
    
});

const Ordered= mongoose.model('Ordered', orderedSchema);
app.post('/api/orders', async (req, res) => {
    try {
        const { selected } = req.body;
        console.log('Received new order data:', { selected }); 
        const order = new Ordered({ selected });
        await order.save();
        res.status(201).json(order); 
    } catch (err) {
        res.status(400).json({ message: err.message });
    }
});