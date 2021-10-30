import { Component, OnInit } from '@angular/core';
import { SessionService } from './commons/session.services';
import { SocketIO } from './commons/socket-io.service';
import { EVENTS } from './commons/events';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'practica001';

  constructor(
    private sessionService:SessionService,
    private io: SocketIO
    
  ){
  }

  ngOnInit(){
    const hasSession = this.sessionService.getsession()
    if(hasSession){
      const userInfo = this.sessionService.getsessionInfo()
      
      this.io.sendMessage(EVENTS.REFRESHSOCKET,{
        userId: userInfo.id
      })
    }
    
  }
}
