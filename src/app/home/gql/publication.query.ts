import { Injectable } from '@angular/core';
import { Query, gql } from 'apollo-angular';
import { PublicationResponse } from '../../commons/schemas'

@Injectable()
export class PublicationQuery extends Query<PublicationResponse>{
    document= gql`
        query publication($userId:String!){
            publication(userId:$userId){
                id
            }
        }
    `
}