import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SuggestionComponent } from './suggestion.component';
import { SuggestionRoutingModule } from './suggestion-routing.module';
import { UsersComponent } from './components/users/users.component';
import { SuggestionService } from './services/suggestion.service';
import { FriendshipService } from './services/friendship.service';
import { SuggestionQuery } from './gql/suggestion.query';
import { FriendshipMutation } from './gql/friendship.mutation';


@NgModule({
  declarations: [  
    SuggestionComponent, UsersComponent
  ],
  imports: [
    CommonModule,
    SuggestionRoutingModule
  ],
  providers:[
    SuggestionQuery,
    FriendshipMutation,
    SuggestionService,
    FriendshipService
  ]
})
export class SuggestionModule { }
