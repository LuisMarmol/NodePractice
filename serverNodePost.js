//Práctica server usando POST

const servidor = require('http');

const server = servidor.createServer((req, res) => {
    
    console.log('Incoming Request');
    console.log(req.method, req.url);

    if (req.method === 'POST') {
        let body = '';

        req.on('data', (chunk) => {
            console.log(chunk);
            body += chunk;
        });

        req.on('end', () => {
            
            let userData = body.split('&');
            let userName = decodeURIComponent(userData[0].split('=')[1]); //El método decorURIComponent sirve para decodificar componentes de un Uniform Resource Identifier
            let password = decodeURIComponent(userData[1].split('=')[1]); //En este caso, el formulario está codificado en formato aplication/x-www-form-urlencode
            //Este formato es el más común cuando hablamos de enviar datos desde un formalario de tipo HTML hacia un servidor.

            res.setHeader('Content-Type', 'text/html'); //Establece el encabezado de nuestro servidor, y le estamos diciendo que estamos enviando contenido de texto de HTML.
            res.end(`<p>Username: ${userName}</p><p>Password: ${password}</p>`); //El ${userName} y ${password} son una interpolación de JavaScript.
            //Donde tanto ${userName} como ${password} serán reemplazados por los valores respectivos de userName y password.
            
            /*Código de la clase
            {Username=David}
            {Password=Contraseña}
            let userName = body.split
            ('=')[1];
            
            res.end(userName);
            */
        });
    }
    
    else {
        res.setHeader('Content-Type', 'text/html');
    
        res.end(`<form method="POST">
                    <label for="username">Username: </label>
                    <input type="text" name="username"></input>

                    <br>

                    <label for="password">Password: </label>
                    <input type="text" name="password"></input>

                    <br>

                    <button type="submit">Create User</button></form>`
                );    
    }
});

server.listen(5001);