import express from 'express'
import {port} from "/db.js"
import {port} from "/config.js"

//Esto es la creación de la apliación 
const app = express() 

//Escucha el puerto
app.listen (3000)
console.log('Servidor en el puerto 3000')

app.get ('/', (req,res) => {
    res.send ('Implementación Aplicaciones Web')
})

app.get ('/ping', (req,res) => {
    const request = ping.query ('Hola')
})

