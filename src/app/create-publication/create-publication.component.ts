import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { faVideo, faImage, faSmile } from '@fortawesome/free-solid-svg-icons';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { Apollo } from 'apollo-angular';
import { ModalComponent } from './components/modal/modal.component';
import { CreatePublication } from './gql/create-publication.service';

@Component({
  selector: 'create-publication',
  templateUrl: './create-publication.component.html',
  styleUrls: ['./create-publication.component.css']
})
export class CreatePublicationComponent implements OnInit {

  showModal = false;

  faVideo = faVideo
  faImage = faImage
  faSmile = faSmile

  publicationForm = new FormGroup({
    text: new FormControl("",[Validators.required])
  })

  constructor(
    private modalService:NgbModal,
    private createPubGql:CreatePublication
  ){ }

  ngOnInit(): void {
  }

  onPublication(){
    this.showModal = true;
    const modalRef = this.modalService.open(ModalComponent)
    modalRef.componentInstance.publicationForm = this.publicationForm
    modalRef.result.then(
      (result) => {
        console.log(result)
        const isPublication = result == "publication"
        if(isPublication){
          this.makePublication()
        }
      },
      (reason) => {
        console.log(reason)
      }
    )
    
  }

  onCloseModal(content:any){
    this.showModal = false;
  }

  async makePublication(){
    const owner = "60c968cbff988b462c682e25"
    const text = this.publicationForm.get('text')?.value;
    this.createPubGql.mutate({
      owner,
      text
    }).subscribe((result) => {
      console.log(result)
    },(error) => {
      console.log({
        message:error.message,
        graphQLErrors: error.graphQLErrors,
        networkError: error.networkError,
        extraInfo: error.extraInfo
      })
    })
  }

}
