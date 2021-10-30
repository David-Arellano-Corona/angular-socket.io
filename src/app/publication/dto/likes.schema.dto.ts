interface UserDto{
    name:string;
    firstname:string;
    id:string;
}
export interface LikeDto{
    id:string;
    publication:string;
    user: UserDto
}
export interface LikesDto{
    getPublicationLike:LikeDto[]
}

export interface CreateLikesDto{
    createPublicationLike:LikeDto[]
}
