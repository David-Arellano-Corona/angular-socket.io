export interface PublicationDto{
    id:string;
}

export type PublicationIdDto = Pick<PublicationDto,'id'>
