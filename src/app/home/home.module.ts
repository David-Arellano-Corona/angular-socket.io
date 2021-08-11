import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeRoutingModule } from './home-routing.module';
import { PublicationModule } from '../publication/publication.module';
import { CreatePublicationModule } from '../create-publication/create-publication.module';
import { HomeComponent } from './home.component';
import { PublicationQuery } from './gql/publication.query';
import { HomeService } from './services/home.service';


@NgModule({
  declarations: [
    HomeComponent,
  ],
  imports: [
    CommonModule,
    HomeRoutingModule,
    CreatePublicationModule,
    PublicationModule
  ],
  providers:[
    PublicationQuery,
    HomeService
  ]
})
export class HomeModule { }
