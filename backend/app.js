const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cors = require('cors');
const secretSantaRoutes = require('./routes/secretSantaRoutes');

require('dotenv').config();
const app = express();

mongoose.connect(process.env.MONGO_URI)
.then(()=> console.log('Connected to MongoDB'))
.catch(err => console.log('Error connecting to MongoDB:', err));

app.use(cors());

app.use(bodyParser.json());
app.use('/api', secretSantaRoutes);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Server running on PORT ${PORT}`))