let socket=io()
$('#loginbox').show()
$('#chatbox').hide()

$('#btnstart').click(()=>{
    socket.emit('login',{
        username:$('#inputusername').val(),
        password:$('#inppass').val()
    })
})
socket.on('logged_in',()=>{
$('#loginbox').hide()
$('#chatbox').show()
    $('#ulmsgs').append($('<h1>').text($('#inputusername').val()))


})

$('#btnsendmsg').click(()=>{
    socket.emit('msg_send',{
        to:$('#inptouser').val(),
        msg:$('#inpnewmsg').val()
    })
})

socket.on('msg_rcvd',(data)=>{

    $('#ulmsgs').append($('<li>').text(
        `[${data.from}]: ${data.msg}`
    ))
})
socket.on('login_failed',()=>{
    window.alert('password wrong')
})