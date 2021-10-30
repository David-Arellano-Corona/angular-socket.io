import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { faVideo, faImage, faSmile } from '@fortawesome/free-solid-svg-icons';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { ModalComponent } from './components/modal/modal.component';
import { CreatePublication } from './gql/create-publication.service';
import { SessionService } from '../commons/session.services';


@Component({
  selector: 'create-publication',
  templateUrl: './create-publication.component.html',
  styleUrls: ['./create-publication.component.css']
})
export class CreatePublicationComponent implements OnInit {

  @Output() createPublication = new EventEmitter();

  showModal = false;

  faVideo = faVideo
  faImage = faImage
  faSmile = faSmile

  userName!:string;
  

  publicationForm = new FormGroup({
    text: new FormControl("",[Validators.required])
  })

  constructor(
    private modalService:NgbModal,
    private createPubGql:CreatePublication,
    private sessionService:SessionService
  ){ }

  ngOnInit(): void {
    const sessionInfo = this.sessionService.getsessionInfo()
    this.userName = sessionInfo.name
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
    const session = this.sessionService.getsessionInfo()
    const owner = session.id
    const text = this.publicationForm.get('text')?.value;
    this.createPubGql.mutate({
      owner,
      text
    }).subscribe((result) => {
      console.log(result)
      this.createPublication.emit(result);
    },(error) => {
      console.log({
        message:error.message,
        graphQLErrors: error.graphQLErrors,
        networkError: error.networkError,
        extraInfo: error.extraInfo
      })
    })
  }

  pruebas(){
    console.log("Pruebas")
    
  }

  

}
