import { Injectable } from '@angular/core';
import { gql, Mutation } from 'apollo-angular';

@Injectable()
export class CommentMutation extends Mutation {
    document = gql`
    mutation createComment(
        $owner:String!, $comment:String!, $publication:String!
    ){
        createComment(
            comment:{
                comment:$comment,
                owner:$owner,
                publication:$publication
            }
        ){
            owner
            createdAt
            comment
        }
    }
    `
}