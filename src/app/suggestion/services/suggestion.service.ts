import { Injectable } from '@angular/core';
import { SuggestionQuery } from '../gql/suggestion.query';

@Injectable()
export class SuggestionService{
    constructor(
        private suggestionQuery:SuggestionQuery
    ){}

    findSuggestions(userId:string){
        return this.suggestionQuery.watch({ userId }).valueChanges
    }
}