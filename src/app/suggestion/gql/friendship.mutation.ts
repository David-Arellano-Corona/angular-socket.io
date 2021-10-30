import { Injectable } from '@angular/core';
import { Mutation, gql } from 'apollo-angular';
import { CreateFriendship } from '../../commons/schemas';

@Injectable()
export class FriendshipMutation extends Mutation<CreateFriendship>{
    document = gql`
    mutation createFriendship(
        $userId:String!,
        $friendId:String!
    ){
        createFriendship(
            friendshipType:{
              user:$userId,
              friend:$friendId
            }
        ){
        user
        friend
        }
    }
    `
}