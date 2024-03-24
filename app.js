const express = require('express');
const cors = require('cors');
const path = require('path');
const router = require('./src/routes');

// Configuraciones iniciales
const { json, urlencoded } = express;
const app = express();
const port = process.env.PORT || 8181;

const corsOptions = {
    origin: '*',
    optionsSuccessStatus: 200,
};

app.use(cors(corsOptions));
app.use(json());
app.use(urlencoded({ extended: false }));

//Utilización de rutas
app.use(router);

// Uso HTML
app.use('/home', (req,res) => {
    res.sendFile(path.join(__dirname + '/src/views/index.html'));
})



app.get('/', (req, res) => {
    res.send('Este es el primer Microservicio');
});

app.listen(port, () => {
    console.log(`Server running on port ${port}`);
});