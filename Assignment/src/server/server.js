const PORT = 8888
const PORT0 = 3000

const express = require('express');
const app = express();

//const httpsServer = http.createServer(sslOptions, app);
//const httpServer = http.Server(app);

/*const io = require('socket.io')(http,{
    cors: {
    origin: "*",
    methods: ["GET", "POST"],
    }
});

io.on('connection', (socket) => {
    console.log("User connection on" + PORT0 + ':' + socket.id);
    io.emit('userid', socket.id);
    io.to(socket.id).emit('ownid', socket.id);
    socket.on('message', (message) => {
        io.emit("message", message);
    });

    socket.on("P")
})
*/
const sockets = require('./socket.js')

const cors = require('cors');
const socket = require('./socket.js');

app.use(cors());

const http = require('http').Server(app);

app.use(express.urlencoded({
    extended: true
}));
app.use(express.json());

app.post('/login', require('./router/postLogin'));
app.post('/loginafter', require('./router/postLoginAfter'));
app.post('/groups'), require('./router/postGroups');


//sockets.connect(io,PORT);


http.listen(PORT,
    () => {
        console.log('Server listening on:' + PORT);
    }
)