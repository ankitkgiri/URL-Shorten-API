const express = require('express')
const app = express();

const connectDB = require('./config/db');
// connect to DB 
connectDB();

app.use(express.json());

// Defining Routes

app.use('/', require('./routes/index'));
app.use('/api/url/', require('./routes/url'));

const PORT = 5000;

app.listen(PORT, ()=>{console.log(`Server Running of PORT: ${PORT}`)});

