const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const cors = require('cors');
const photoRouter = require('./services/photos');

require('dotenv').config();

app.use(express.json());
app.use(cors({origin: 'http://localhost:3000'}));
app.use(bodyParser.json());
app.use('/api/photo', photoRouter);

apiResolver.get('/', (req, res) => {
    res.json({ message: 'API is working' });
});

app.use((err, req, res, next) => {
    res.status(500).send({ error: err.message });
    return
})

app.listen(3000, () => {
    console.log('Server is running on port 3000');
});

// app.use(bodyParser.json());

// let photo = [
//     { id: 8394, title: "A New Dawn", artist: "Unknown", year: 1908, type: "Type1", image_url: "https://picsum.photos/seed/7431/150" }
// ];

// app.post('/api/photo', (req, res) => {
//     const newPhoto = req.body;
//     photo.push(newPhoto);
//     res.status(201).send(newPhoto);
// });


// app.get('/api/photo', (req, res) => {
//     res.send(photo);
// });

// app.get('/api/photo/:id', (req, res) => {
//     const id = parseInt(req.params.id);
//     const index = photo.find(a => a.id === id);
//     if (photo) {
//         res.send(photo);
//     } else {
//         res.status(404).send({ error: 'Photo not found' });
//     }
// });

// app.put('/api/photo/:id', (req, res) => {
//     const id = parseInt(req.params.id);
//     const photo = photos.findIndex(a => a.id === id);
//     if (index !== -1) {
//         photo[index] = req.body;
//         res.send(photo[index]);
//     } else {
//         res.status(404).send({ error: 'Photo not found' });
//     }
// });

// app.patch ('/api/photo/:id', (req, res) => {
//     const id = parseInt(req.params.id);
//     const photo = photos.findIndex(a => a.id === id);
//     if (photo) {
//         Object.assign(photo, req.body);
//         res.send(photo);
//     } else {
//         res.status(404).send({ error: 'Photo not found' });
//     }
// });

// app.delete('/api/photo/:id', (req, res) => {
//     const id = parseInt(req.params.id);
//     const index = photos.findIndex(a => a.id === id);
//     if (index !== -1) {
//         photos.splice(index, 1);
//         res.status(204).send();
//     } else {
//         res.status(404).send({ error: 'Photo not found' });
//     }
// });

// app.listen(3000, () => {
//     console.log('Server is running on port 3000');
// });