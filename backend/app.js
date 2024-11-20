const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const secretSantaRoutes = require('./routes/secretSantaRoutes');

require('dotenv').config();
const app = express();

console.log(process.env.MONGO_URI,'mongo URL')

mongoose.connect(process.env.MONGO_URI)
.then(()=> console.log('Connected to MongoDB'))
.catch(err => console.log('Error connecting to MongoDB:', err));

app.use(bodyParser.json());
app.use('/api', secretSantaRoutes);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Server running on PORT ${PORT}`))