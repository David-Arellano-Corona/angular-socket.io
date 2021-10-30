import { Injectable } from '@angular/core';
import { Mutation, gql } from 'apollo-angular';
import { CreateLikesDto } from '../dto';

@Injectable()
export class LikeMutation extends Mutation<CreateLikesDto> {
    document = gql`
    mutation createPublicationLike(
        $publicationId:String!, $userId:String!
    ){
        createPublicationLike(
          publicationLike:{
            publicationId:$publicationId,
            userId:$userId
          }
        ){
          id
          publication
          user{
            id
            firstname
            name
          }
        }
      }
    `
}