//https://stackoverflow.com/questions/47161589/how-to-use-socket-io-client-in-angular-4
import { Injectable, OnInit } from '@angular/core';
import { Socket, io } from 'socket.io-client'
import { Observable } from 'rxjs';
import { environment } from './environments.dev'

@Injectable({
  providedIn: 'root'
})
export class WebSocketService {

  private socket: Socket
  private id: string;
  constructor() {
    console.log('loading...')
    this.socket = io(environment.JWT_CONNECTION)
    this.id = this.socket.id
  }

  sendMessage(event: string, payload: any) {
    return new Observable(observer => {
      this.socket.emit(event, payload, (res: any) => { observer.next(res) })
    })
  }

  // HANDLER example
  onNewMessage() {
    return new Observable(observer => {
      this.socket.on('newMessage', msg => {
        observer.next(msg);
      });
    });
  }

}
