const express = require('express');
const app = express();
const mysql = require('mysql');

const connection = mysql.createConnection({
    host     : 'localhost',
    user     : 'root',
    password : 'root',
    database : 'test'
  });
   
connection.connect(err => {
    if(err) {
        console.log(`Error al conectar a la base: ${err}`);
        return;
    }
    
    console.log('Base de datos ONLINE');
});

app.get('/usuarios', function (req, res) {
    connection.query('SELECT * FROM usuarios WHERE estado=1', (err,results,fields) => {
        if(err) throw err;
        return res.send({error:false,data:results, message: 'lista de usuarios'});
    });
})

app.get('/usuario/:id', function (req, res) {
    let user_id = req.params.id;
    if(!user_id) {
        return res.status(400).send({error: true, message: 'Por favor, provee un usuario'});
    }
    connection.query('SELECT * FROM usuarios WHERE id=? AND estado=1', user_id, (err,results,fields) => {
        if(err) throw err;
        return res.send({error:false,data:results[0], message: `Datos del usuario ${user_id}`});
    });
})
  
app.post('/usuario', function (req, res) {
    let body = req.body;
    if(body.nombre === undefined || body.correo === undefined || body.password === undefined) {
        return res.status(400).send({error:true, message:'Por favor, provee un usuario'});
    }
    let usuario = {
        nombre: body.nombre,
        correo: body.correo,
        password: body.password
    }
    connection.query('INSERT INTO usuarios SET ?', { nombre: usuario.nombre, email: usuario.correo, pass: usuario.password }, (err, results,fields) => {
        if(err) throw err;
        return res.send({error: false, data: results, message:'Nuevo usuario creado exitosamente'});
    });

})
  
app.delete('/usuario', function (req, res) {
    let id = req.body.id;
    if(!id) {
        return res.status(400).send({ error: true, message: 'Por favor, provee un id'});
    }
    connection.query('UPDATE usuarios SET estado=0  WHERE id = ? AND estado=1', [id], (err, results,fields) => {
        if(err) throw err;
        return res.send({error: false, data:results, message: 'Usuario borrado exitosamente'});
    })
})
  
app.put('/usuario', function (req, res) {
    let body = req.body;
    let id = body.id;
    let usuario = {
        nombre: body.nombre,
        correo: body.correo,
        password: body.password
    }
    if(!id || body.nombre === undefined || body.correo === undefined || body.password === undefined) {
        return res.status(400).send({error: true, message: 'Por favor, provee un usuario y su id'});
    }

    connection.query('UPDATE usuarios SET ? WHERE id = ? AND estado=1', [{nombre:usuario.nombre, email: usuario.correo, pass: usuario.password}, id], (err,results,fields) => {
        if(err) throw err;
        return res.send({error:false, data:results, message:'Usuario modificado exitosamente'});
    });
})

module.exports = app;