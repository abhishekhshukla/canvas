const express=require('express')
const app=express()
const http=require('http')
const socketio=require('socket.io')
const server=http.createServer(app)
const io=socketio(server)

const PORT=process.env.PORT || 4545
app.use('/',express.static(__dirname+'/public'))
io.on('connection',(socket)=>{
    
    console.log(socket.id)
    socket.on('Draw',(dr)=>{
        socket.broadcast.emit('draw',dr)
    })
})

server.listen(PORT,()=>{
    console.log(`Server is Running on http://localhost:${PORT}`)
})
