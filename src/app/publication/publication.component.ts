import { Component, OnInit, Input, OnDestroy } from '@angular/core';
import { PublicationService } from './service/publication.service';
import { LikesService } from './service/likes.service';
import { SessionService } from '../commons/session.services';
import { SocketIO } from '../commons/socket-io.service';
import { PublicationDetail, Comment, publicationComment } from '../commons/schemas';
import { LikesDto, LikeSchemaDto, LikeDto } from './dto';
import { QueryRef } from 'apollo-angular';
import { EVENTS } from '../commons/events';
import { Subscription } from 'rxjs';

@Component({
  selector: 'publication-content',
  templateUrl: './publication.component.html',
  styleUrls: ['./publication.component.css']
})
export class PublicationComponent implements OnInit, OnDestroy {

  NEW_LIKE!:Subscription;
  DELETE_LIKE!:Subscription;
  NEW_COMMENT!:Subscription;

  getLikesSubscriber!:QueryRef<LikesDto>;
  getCommentsSubscriber!:QueryRef<publicationComment>;

  @Input() publicationId?: string;

  publicationDetail?: PublicationDetail;
  publicationComment?: Comment[];
  likes: LikeSchemaDto[] = [];

  constructor(
    private publicationService: PublicationService,
    private likeService: LikesService, 
    private sessionService: SessionService,
    private socketIoService: SocketIO
  ) { }

  ngOnInit(): void {
    if (this.publicationId) {
      this.getPublication();
      this.getComments();
      this.getLikes();
      this.ioOnEvents()
    }
  }

  ngOnDestroy(){
    this.NEW_LIKE.unsubscribe();
    this.DELETE_LIKE.unsubscribe();
  }

  private ioOnEvents(){
    this.NEW_LIKE = this.socketIoService.onEvent(EVENTS.NEW_LIKE)
      .subscribe( payload =>{
        this.getLikesSubscriber.refetch()
      })

      this.DELETE_LIKE = this.socketIoService.onEvent(EVENTS.DELETE_LIKE)
      .subscribe(payload => {
        this.getLikesSubscriber.refetch();
      })

      this.NEW_COMMENT = this.socketIoService.onEvent(EVENTS.NEW_COMMENT)
      .subscribe(payload =>{
        this.getCommentsSubscriber.refetch();
      })
  }

  private getPublication() {
    this.publicationService.getPublication(this.publicationId!)
      .subscribe((e) => {
        this.publicationDetail = e.data.publicationDetail
      })
  }

  private getComments() {
    this.getCommentsSubscriber = this.publicationService.getComments(this.publicationId!)
    this.getCommentsSubscriber.valueChanges.subscribe(e => {
      this.publicationComment = e.data.publicationComment;
    })
  }

  private getLikes(){
    this.getLikesSubscriber = this.likeService.getLikes({id:this.publicationId!})
    this.getLikesSubscriber.valueChanges.subscribe(e => {
      this.likes = e.data.getPublicationLike;
    })
  }


  createLike(){
    const likeDto:LikeDto = {
      userId:this.sessionService.getsessionInfo().id,
      publicationId:this.publicationId!
    }
    this.likeService.createLike(likeDto).subscribe(e =>{
      this.getLikesSubscriber.refetch()
    })
  }



}
