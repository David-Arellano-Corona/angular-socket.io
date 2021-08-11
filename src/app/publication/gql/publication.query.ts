import { Injectable } from '@angular/core';
import { gql, Query } from 'apollo-angular';

interface Response {
    publication:any[]
}

@Injectable()
export class PublicationQuery extends Query<Response>{
    document=gql`
    query publication {
        publication{
          id
          text
          createdAt
          owner{
            id
            name
            firstname
            email
            date_of_birth
          }
        }
    }       
    `
}