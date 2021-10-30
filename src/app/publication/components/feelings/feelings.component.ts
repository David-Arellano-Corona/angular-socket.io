import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';
import { faHandPointRight, faCommentAlt, faShare } from '@fortawesome/free-solid-svg-icons';
@Component({
  selector: 'app-feelings',
  templateUrl: './feelings.component.html',
  styleUrls: ['./feelings.component.css']
})
export class FeelingsComponent implements OnInit {

  @Output() o_incrementLike = new EventEmitter()

  @Input() publicationId?:string;

  faHandPointRight = faHandPointRight
  faCommentAlt = faCommentAlt
  faShare = faShare

  constructor() { }

  ngOnInit(): void {
  }

  incrementLike(){
    this.o_incrementLike.emit();
  }
}
