const express = require('express');
const connectDB = require('./config/db');

const app = express();

app.get('/', (req, res) => res.json({ msg: 'hello brother' }));

connectDB();
//init Middleware
app.use(express.json({ extended: false }));
//define routes
app.use('/api/users', require('./routes/users'));
app.use('/api/auth', require('./routes/auth'));
app.use('/api/contact', require('./routes/contacts'));

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log(`Server started on port ${PORT}`));
