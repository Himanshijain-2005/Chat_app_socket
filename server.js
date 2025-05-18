const http = require('http')

const express = require('express')
const app = express()
const socketio = require('socket.io')

const server = http.createServer(app)
const io = socketio(server)
let users = {

}
let socketMap={}
io.on('connection', (socket) => {
    console.log('connected with socket id= ', socket.id)
    
    //login msg on server
    socket.on('login', (data) => {
        if (users[data.username]) {
            if (users[data.username] == data.password) {
                socket.join(data.username) // us socket ka room 
                socket.emit('logged_in')
                socketMap[socket.id]=data.username
            }
            else {
                socket.emit('login_failed')
            }
        }
        else {
            users[data.username] = data.password

            socket.join(data.username) // us socket ka room 
            socket.emit('logged_in')
            socketMap[socket.id]=data.username


        }
      console.log(socketMap)

    })
    //user has send data to be sent to someone else
    socket.on('msg_send', (data) => {
         data.from=socketMap[socket.id]
        if (data.to) {
            io.to(data.to).emit('msg_rcvd', data) //io.to(roomname) jo ki hmne uske name pe hi rkha
        }
        else {
            socket.broadcast.emit('msg_rcvd', data)
        }
    })

})
app.use('/', express.static(__dirname + '/public'))
server.listen(4444, () => {
    console.log("server started")
})