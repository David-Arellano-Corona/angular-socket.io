import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { PublicationComponent } from './publication.component';
import { FeelingsComponent } from './components/feelings/feelings.component';
import { CommentsComponent } from './components/comments/comments.component';
import { PublicationAreaComponent } from './components/publication/publication.component';
import { CommentBoxComponent } from './components/comment-box/comment-box.component';
import { PublicationService } from './service/publication.service';
import { CommentService } from './service/comment.service';
import { LikesService } from './service/likes.service';
import { PublicationQuery } from './gql/publication.query';
import { CommentQuery } from './gql/comment.query';
import { CommentMutation } from './gql/comment.mutation';
import { LikeMutation } from './gql/like.mutation';
import { PublicationDetail } from './gql/publication-detail.query';
import { LikesQuery } from './gql/likes.query';

@NgModule({
  declarations: [
    PublicationComponent,
    FeelingsComponent,
    CommentsComponent,
    PublicationAreaComponent,
    CommentBoxComponent
  ],
  imports: [
    CommonModule,FontAwesomeModule,
    FormsModule
  ],
  exports:[PublicationComponent],
  providers:[
    PublicationService,
    PublicationQuery,
    CommentQuery,
    LikesQuery,
    CommentMutation,
    LikeMutation,
    PublicationDetail,
    CommentService, 
    LikesService
  ]
})
export class PublicationModule { }
