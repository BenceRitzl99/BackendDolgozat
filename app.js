const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const cors = require('cors');
const photoRouter = require('./routers/photos');

require('dotenv').config();

app.use(express.json());
app.use(cors());
app.use(bodyParser.json());
app.use('/photo', photoRouter);

app.get('/', (req, res) => {
    res.json({ message: 'API is working' });
});

app.use((err, req, res, next) => {
    res.status(500).json({ message: err.message });
    return
})

app.listen(3000, () => {
    console.log('Server is running on port 3000');
});

