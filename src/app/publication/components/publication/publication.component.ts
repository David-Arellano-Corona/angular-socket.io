import { Component, OnInit, Input } from '@angular/core';
import { faEllipsisH, faHeart, faHandPointRight } from '@fortawesome/free-solid-svg-icons';
import { Publication } from '../../../commons/schemas';

@Component({
  selector: 'publication-area',
  templateUrl: './publication.component.html',
  styleUrls: ['./publication.component.css']
})
export class PublicationAreaComponent implements OnInit {

  @Input() publication?:Publication;
  name="David"
  faEllipsisH = faEllipsisH
  faHeart = faHeart
  faHandPointRight = faHandPointRight

  constructor() { }

  ngOnInit(): void {
  }

  get owner(){
    return this.publication?.owner?.name +" "+this.publication?.owner.firstname;
  }
  get createdAt(){
    return this.publication?.createdAt;
  }
  get text(){
    return this.publication?.text;
  }

}
