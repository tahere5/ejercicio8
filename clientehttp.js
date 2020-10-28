var http = require('http');
var opciones = {
    hostname: 'localhost',
    port: 80,
    path: '/',
    method: 'GET'
  };
  var solicitud = http.request(opciones, function(response) {
    console.log('codigo de estado: ' + response.statusCode);
    var contenido = '';
  response.on('data', function(parte) {
    contenido += parte;
  });
  response.on('end', function () {
    console.log('contenido: ' + contenido);
  });
  });
  solicitud.on('error', function(error) {
    console.log('Error en solicitud: ' + error);
  });
  solicitud.end();