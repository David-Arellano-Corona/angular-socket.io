import { Component, OnInit } from '@angular/core';
import { faHandPointRight, faCommentAlt, faShare } from '@fortawesome/free-solid-svg-icons';
@Component({
  selector: 'app-feelings',
  templateUrl: './feelings.component.html',
  styleUrls: ['./feelings.component.css']
})
export class FeelingsComponent implements OnInit {

  faHandPointRight = faHandPointRight
  faCommentAlt = faCommentAlt
  faShare = faShare

  constructor() { }

  ngOnInit(): void {
  }

}
