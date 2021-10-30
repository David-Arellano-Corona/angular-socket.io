import { Injectable } from '@angular/core';
import { FriendshipMutation } from '../gql/friendship.mutation';

@Injectable()
export class FriendshipService {
    constructor(
        private friendshipMutation: FriendshipMutation
    ){}

    createFriendship(userId:string, friendId:string){
        return this.friendshipMutation.mutate({
            userId,
            friendId
        })
    }
}