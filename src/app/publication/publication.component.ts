import { Component, OnInit, Input } from '@angular/core';
import { PublicationService } from './service/publication.service';
import { PublicationDetail, Comment } from '../commons/schemas';

@Component({
  selector: 'publication-content',
  templateUrl: './publication.component.html',
  styleUrls: ['./publication.component.css']
})
export class PublicationComponent implements OnInit {
  
  @Input() publicationId?:string;
  publicationDetail?:PublicationDetail;
  publicationComment?:Comment[];
  
  constructor(
    private publicationService: PublicationService
  ) { }

  ngOnInit(): void {

    if(this.publicationId){
       this.publicationService.getPublication(this.publicationId)
      .subscribe((e) => {
        this.publicationDetail = e.data.publicationDetail
      })
      this.publicationService.getComments(this.publicationId).subscribe(e=>{
        this.publicationComment = e.data.publicationComment;
      })
    }  
  }


}
