//Importacion de librerias
const express = require('express');
const bodyParser = require('body-parser');
const multer  = require('multer');
const cors = require('cors');
//instanciar
//use para desabilitar cors
const app = express().use('*',cors());

//usar body-parser, midleware, todo lo que lleva app.use es midleware
app.use(bodyParser.json());

//cargar los archivos estaticos(CSS,HTML,JS) que están en el directorio público
// crear carpeta public(mkdir)
app.use(express.static('public'));

//Indica mi directorio, se guarda en uploads
const upload = multer({ 
	dest: __dirname + '/public/uploads/' 
});

//Acepta un unico archivo llamado video, se almacena req.file
const type = upload.single('video');

//Escuchar un puerto, a partir de 1000, clasico 8080 , puerto de la url: http://localhost:8080/
app.listen(8080, () => {
	console.log('estoy escuchando el puerto 8080')
})
//endpoint: /, request, response

app.post('/uploads', type, (req, res) => {
	/*
	res.json({
		status:"ok"
	});
	*/
	res.send('ok');
   console.log(req.body);
   console.log(req.file); // do stuff with file
});



