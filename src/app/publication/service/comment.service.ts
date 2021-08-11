import { Injectable } from '@angular/core';
import { CommentMutation } from '../gql/comment.mutation';
import { CommentCreate } from '../../commons/schemas';

@Injectable()
export class CommentService {
    constructor(
        private commentMutation:CommentMutation
    ){}

    createComment(comment:CommentCreate){
        return this.commentMutation.mutate(comment);
    }
}