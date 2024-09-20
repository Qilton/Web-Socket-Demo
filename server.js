const express=require('express')
const http=require('http')
const {Server}=require('socket.io')



const app=express()
const server=http.createServer(app)
const io=new Server(server)
app.use(express.static('public'))

app.get('/',(req,res)=>{
    res.sendFile(__dirname+'/public/index.html')
})

//Socket Io
io.on('connection',(socket)=>{
    socket.on('message',(msg)=>{
        console.log("New User Message:" ,msg)
        io.emit('message',msg)
    })
    console.log("User connected",socket.id)
})


server.listen(3000,()=>{
    console.log('Server is running on port 3000')
})