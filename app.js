// config

require('dotenv').config()
require('./configs/db.config');

// pacotes

const express = require('express');
const cors = require('cors');

const app = express();


// middlewares gerais

app.use(express.json());
app.use(cors());

app.listen(process.env.PORT, () => {
    console.log('server running on port:', process.env.PORT)
});

