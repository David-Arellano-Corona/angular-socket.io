import { Injectable } from '@angular/core';
import { gql, Query } from 'apollo-angular';
import { publicationComment } from '../../commons/schemas';

@Injectable()
export class CommentQuery extends Query<publicationComment>{
    document = gql`
    query publicationComment(
      $publicationId:String!
    ){
        publicationComment(
          publicationId:$publicationId
        ){
          id
          createdAt
          comment
          owner{
            name
            firstname
            id
          }
        }
    }
    `
}