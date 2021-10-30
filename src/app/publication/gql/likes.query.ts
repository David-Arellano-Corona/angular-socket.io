import { Injectable } from '@angular/core';
import { Query, gql } from 'apollo-angular';
import { LikesDto } from '../dto/likes.schema.dto';

@Injectable()
export class LikesQuery extends Query<LikesDto> {
    document = gql`
    query getPublicationLike(
        $publicationId:String!
    ){
        getPublicationLike(
          publicationId:$publicationId
        ){
          id
          publication
          user{
            name
            firstname
            id
          }
        }
      }
    `
}