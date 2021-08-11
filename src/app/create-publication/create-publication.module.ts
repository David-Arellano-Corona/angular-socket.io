import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { CreatePublicationComponent } from './create-publication.component';
import { ModalComponent } from './components/modal/modal.component';
import { CreatePublication } from './gql/create-publication.service';


@NgModule({
  declarations: [
    CreatePublicationComponent,
    ModalComponent
  ],
  imports: [
    CommonModule, 
    FontAwesomeModule,
    FormsModule, 
    ReactiveFormsModule
  ],
  providers:[NgbActiveModal, CreatePublication],
  exports:[CreatePublicationComponent]
})
export class CreatePublicationModule { }
