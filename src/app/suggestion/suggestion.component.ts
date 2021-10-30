import { Component, OnInit } from '@angular/core';
import { SuggestionService } from './services/suggestion.service';
import { FriendshipService } from './services/friendship.service';
import { SessionService } from '../commons/session.services';
import { Suggestion } from '../commons/schemas';

@Component({
  selector: 'app-suggestion',
  templateUrl: './suggestion.component.html',
  styleUrls: ['./suggestion.component.css']
})
export class SuggestionComponent implements OnInit {

  suggestions?: Suggestion[]

  constructor(
    private suggestionService: SuggestionService,
    private friendshipService: FriendshipService, 
    private sessionService: SessionService
  ) { }

  ngOnInit(): void {
    this.getSuggestions()
  }

  getSuggestions() {
    const userInfo = this.sessionService.getsessionInfo();
    this.suggestionService.findSuggestions(userInfo.id).subscribe(res => {
      this.suggestions = res.data.suggestions;
    })
  }

  createFriednship(friendId: any) {
    const userInfo = this.sessionService.getsessionInfo()
    this.friendshipService.createFriendship(userInfo.id, friendId)
    .subscribe( res => {
      this.suggestions = this.suggestions?.filter( e => e.id != res.data?.createFriendship.friend )
    })
  }

}
