import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Suggestion } from '../../../commons/schemas';

@Component({
  selector: 'suggestion-user',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {
  @Input() suggestionsInput?: Suggestion;
  @Output() newFriendship = new EventEmitter();

  constructor(
  ) { }

  ngOnInit(): void {
    console.log(this.suggestionsInput)
  }

  get name() {
    return this.suggestionsInput?.name + " " + this.suggestionsInput?.firstname
  }

  get friendId() {
    return this.suggestionsInput?.id
  }

  createFriendship(friendId: string) {
    this.newFriendship.emit(friendId);

  }
}
