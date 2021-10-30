import { Component, OnInit, Input } from '@angular/core';
import { CommentService } from '../../service/comment.service';
import { SessionService } from '../../../commons/session.services';
import { CommentCreate } from '../../../commons/schemas';

@Component({
  selector: 'app-comment-box',
  templateUrl: './comment-box.component.html',
  styleUrls: ['./comment-box.component.css']
})
export class CommentBoxComponent implements OnInit {

  @Input() publicationId?:string;
  comment:string=""
  constructor(
    private commentService:CommentService,
    private sessionService:SessionService
  ) { }

  ngOnInit(): void {
  }

  createComment(event:any){
    
    if(event.key == "Enter"){
      let commentCreate:CommentCreate = {
        comment:this.comment,
        publication:this.publicationId || '',
        owner:this.sessionService.getsessionInfo().id
      }
      this.commentService.createComment(commentCreate)
      .subscribe(e => {
        console.log(e)
        this.comment = ""
      })
    }
  }

}
