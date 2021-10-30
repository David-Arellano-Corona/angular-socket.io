import { Injectable } from '@angular/core';
import { map } from 'rxjs/operators';
import { Socket } from 'ngx-socket-io';

@Injectable({
    providedIn:'root'
})
export class SocketIO{
    constructor(
        private socketClient:Socket
    ){
        console.log("loading io...")
    }

    sendMessage(event:string, payload:any){
        //this.socketClient = new Socket({url:"http://localhost:3333", options:{ query:{ testing:"Es un papucho" } }})
        
        this.socketClient.emit(event, payload);
    }

    onEvent(event:string){
        return this.socketClient.fromEvent(event).pipe(map(e => e))
    }
}