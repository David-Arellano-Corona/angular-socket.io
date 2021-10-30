import { Component, OnInit, OnChanges, Input } from '@angular/core';
import { faEllipsisH, faHeart, faHandPointRight } from '@fortawesome/free-solid-svg-icons';
import { Publication } from '../../../commons/schemas';
import { LikeSchemaDto } from '../../dto';

@Component({
  selector: 'publication-area',
  templateUrl: './publication.component.html',
  styleUrls: ['./publication.component.css']
})
export class PublicationAreaComponent implements OnInit, OnChanges {

 
  @Input() publication?:Publication;
  @Input() i_likes:LikeSchemaDto[] = [];

  name="David"
  faEllipsisH = faEllipsisH
  faHeart = faHeart
  faHandPointRight = faHandPointRight

  constructor() { }

  ngOnInit(): void {
    
  }

  ngOnChanges(){}


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
