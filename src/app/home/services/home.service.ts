import { Injectable } from '@angular/core';
import { PublicationQuery } from '../gql/publication.query';
import { SessionService } from '../../commons/session.services';

@Injectable()
export class HomeService{
    constructor(
        private publicationQuery: PublicationQuery,
        private sessionService:SessionService
    ){}
    getPublications(){
        const session = this.sessionService.getsessionInfo();
        const id = session.id;
        return this.publicationQuery.watch({userId:id}).valueChanges
    }
}