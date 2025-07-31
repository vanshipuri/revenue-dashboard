require('dotenv').config();
const express = require('express');
const cors = require('cors'); 
const connectDB = require('./config/db');
const dataRoutes = require('./routes/dataRoutes');

const app = express();
app.use(cors({
  origin: 'http://localhost:3000' 
})); 
app.use(express.json());


app.use('/api/data', dataRoutes);


connectDB().then(() => {
  app.listen(5000, () => {
    console.log('🚀 Server running on http://localhost:5000');
  });
}).catch((err) => {
  console.error('❌ DB connection error:', err);
});
