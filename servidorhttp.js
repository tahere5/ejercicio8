var http = require('http');

// esta linea crea el servidor
var servidor = http.createServer(function(request, response) {
    // esta funcion maneja una peticion(request) y su respuesta(response)
    //tipo de respuesta: 200 (ok), text/plain (texto plano)
    response.writeHead(200, {'Content-Type': 'text/plain'}); 
    //contenido de la respuesta
    response.write("Nombre: Cerro Grande Morales Melvi Tahere\n");
    response.write("CI: 8334857");
    //fin de la respuesta
    response.end();
});
// inicia el servidor y escucha peticiones en el puerto 5000
servidor.listen(5000);