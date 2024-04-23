//Ejercicio usando FileSystem fs\\

const fs = require('fs');

const userName = 'Luis'
const userLast = 'Marmol'

const userData = 'Nombre: ' + userName + '\nApellido: ' + userLast; //Une nombre con apellid gracias a la concatenación c.2on '\n'




fs.writeFile('user-data.txt', userData, (err)=> {
    if(err){
        console.log(err);
        return;
    }
    console.log("File created");
});

//console.log(userName); 

//alert(userName); Esta función no funciona en el compilador.