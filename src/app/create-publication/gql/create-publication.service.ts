import { Injectable } from '@angular/core';
import { Mutation, gql } from 'apollo-angular';

@Injectable()
export class CreatePublication extends Mutation {
    document = gql`
    mutation publication(
        $owner:String!, $text:String!       
    ){
        createPublication(
          publication:{
            owner:$owner,
            text:$text
          }
        ){
          owner
          text
        }
      }
      
    `
}