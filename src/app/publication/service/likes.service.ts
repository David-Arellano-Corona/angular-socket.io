import { Injectable } from '@angular/core';
import { LikeMutation } from '../gql/like.mutation';
import { LikesQuery } from '../gql/likes.query';
import { LikeDto, PublicationIdDto } from '../dto';

@Injectable()
export class LikesService{
    constructor(
        private likeMutation: LikeMutation,
        private likesQuery: LikesQuery
    ){}

    createLike(likeDto:LikeDto){
        return this.likeMutation.mutate(likeDto)
    }    

    getLikes(publicationId: PublicationIdDto){
        return this.likesQuery.watch({publicationId:publicationId.id})
        //return this.likesQuery.watch({publicationId:publicationId.id}).valueChanges;
    }
}