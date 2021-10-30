import { Injectable } from '@angular/core';
import { Query, gql } from 'apollo-angular';
import { Suggestions } from '../../commons/schemas';

@Injectable()
export class SuggestionQuery extends Query<Suggestions> {
    document = gql`
    query suggestions($userId:String!){
      suggestions(userId:$userId){
        id
        name
        firstname
      }
    }
    `
}