import { Injectable } from '@angular/core';
import { gql, Query } from 'apollo-angular';
import { PublicationDetail as Schema } from '../../commons/schemas';

interface Schema2 {
    publicationDetail:Schema;
}

@Injectable()
export class PublicationDetail extends Query<Schema2>{
    document=gql`
    query publicationDetail(
        $publicationId:String!
    ){
        publicationDetail(
            publicationId:$publicationId
        ){
            id
            text
            createdAt
            owner{
                id
                name
                firstname
            }
        }
    }
    `
}
