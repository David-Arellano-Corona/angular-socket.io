import { Injectable } from '@angular/core';
import { PublicationQuery } from '../gql/publication.query';

@Injectable()
export class HomeService{
    constructor(
        private publicationQuery: PublicationQuery
    ){}
    getPublications(){
        return this.publicationQuery.watch().valueChanges
    }
}