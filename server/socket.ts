


class Sockets{
    io: any;

    constructor(io:any) {
        this.io = io;
        this.socketEvents();
    }
    socketEvents() {
       this.io.on('connection',async(socket:any)=>{
           console.log("Cliente Conectado");
           socket.on('test-message',(data:any)=>{
            console.log(data);
           })

       });
    }


}


export default Sockets;