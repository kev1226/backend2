const express = require('express')
const axios = require('axios')
const app = express()
const port = 3002

app.get('/call', async (req, res) => {
    try {
        const response = await axios.get('http://backend1:3001/ping')
        res.send(`Respuesta de backen1: ${response.data}`)
    } catch (error) {
        res.status(500).send('Error de comunicacion con backend1')
    }
})

app.listen(port, () =>{
    console.log(`Backend2 escuchando en http://localhost:${port}`)
} )
