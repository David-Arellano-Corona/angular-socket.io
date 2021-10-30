import { Component, OnInit, OnDestroy } from '@angular/core';
import { HomeService } from './services/home.service';
import { SocketIO } from '../commons/socket-io.service';
import { EVENTS } from '../commons/events';
import { Subscriber, Subscription } from 'rxjs';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit, OnDestroy {
  publications: any[] = []
  getPublicationService?:Subscription;
  socketIsSubscriber?:Subscription;
  constructor(
    private homeService: HomeService,
    private socketIoService: SocketIO
  ) {
    console.log("Loading home...")
  }

  ngOnInit(): void {
    this.getPublicationService = this.homeService.getPublications().subscribe(data => {
      this.publications = data.data.publication;
      console.log(this.publications)
    })
    this.ioOnPublication()
  }

  private pushPublication(id: string) {
    let publications = Object.assign([], this.publications)
    publications.unshift({ id })
    this.publications = publications
  }

  ioOnPublication() {
    type message = { _id: string }
    const t = this.socketIoService.onEvent(EVENTS.NEW_PUBLICATION)
      .subscribe(payload => {
        const response = payload as message
        const id = response._id;
        this.pushPublication(id)
      })

  }

  createPublication2(publication: any) {
    
    const id = publication.data.createPublication.id;
    this.pushPublication(id)
  }

  ngOnDestroy(){
    this.getPublicationService?.unsubscribe()
    this.socketIsSubscriber?.unsubscribe()
  }
}
