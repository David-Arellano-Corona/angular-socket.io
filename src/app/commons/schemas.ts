interface Owner {
    email:string;
    firstname:string;
    name:string;
    id:string;
}
export interface Publication{
    createdAt:string;
    id:string;
    text:string;
    owner:Owner;
}

export interface PublicationDetail extends Publication {}

export interface PublicationResponse{
    publication:any[]
}

export interface Comment {
    comment:string;
    createdAt:string;
    id:string;
    owner:Owner
}
export interface publicationComment{
    publicationComment:Comment[]
}
export interface CommentCreate{
    comment:string;
    owner:string;
    publication:string;
}