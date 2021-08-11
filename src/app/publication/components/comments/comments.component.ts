import { Component, OnInit, Input } from '@angular/core';
import { Comment } from '../../../commons/schemas';

@Component({
  selector: 'app-comments',
  templateUrl: './comments.component.html',
  styleUrls: ['./comments.component.css']
})
export class CommentsComponent implements OnInit {

  @Input() comment?:Comment;

  constructor() { }

  ngOnInit(): void {
  }

  get owner(){
    return this.comment?.owner.name+" "+this.comment?.owner.firstname;
  }

  get text(){
    return this.comment?.comment;
  }

}
