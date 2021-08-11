import { Component, OnInit, Input} from '@angular/core';
import { FormGroup } from '@angular/forms';
import { NgbActiveModal } from "@ng-bootstrap/ng-bootstrap";
import { faQuestion, faImages, faUser, faSmile, faMapMarkerAlt} from '@fortawesome/free-solid-svg-icons'

@Component({
  selector: 'publication-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.css']
})
export class ModalComponent implements OnInit {
  faQuestion = faQuestion
  faImages = faImages
  faUser = faUser
  faMarker = faMapMarkerAlt
  faSmile = faSmile

  

  
  @Input() publicationForm = new FormGroup({});

  constructor(
    public activeModal: NgbActiveModal
  ){ }

  ngOnInit(): void {
  }

  get text(){
    return this.publicationForm.get('text')
  }



  
}
