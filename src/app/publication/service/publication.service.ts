import { Injectable } from '@angular/core';
import { PublicationQuery } from '../gql/publication.query';
import { PublicationDetail } from '../gql/publication-detail.query';
import { CommentQuery } from '../gql/comment.query';

@Injectable()
export class PublicationService{
    constructor(
        private publicationQuery: PublicationQuery,
        private publicationDetailQuery: PublicationDetail,
        private commentQuery: CommentQuery 
    ){}

    getPublications(){
        return this.publicationQuery.watch()
        .valueChanges
        //.subscribe( result => result)
    }

    getPublication(id:string){
        return this.publicationDetailQuery.watch({publicationId:id}).valueChanges;
    }

    getComments(publicationId:string){
        return this.commentQuery.watch({publicationId}).valueChanges;
    }

}