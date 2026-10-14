const express = require('express');
const app = express();
const port = 3000;

app.get('/', (re1, res) => {
	res.send("Hello World");
});

app.listen(port, () => {
	console.log('Hola Mundo corriendo en puerto ${port}')
});

//Comentario de Prueba
