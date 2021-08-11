import { Injectable } from '@angular/core';
import { Mutation, gql } from 'apollo-angular';

@Injectable()
export class LoginService extends Mutation{
    document = gql`
    mutation login(
        $email:String!, $password:String!
    ){
        login(loginInput:{
            email:$email,
            password:$password           
        }){
            token
        }
    }
    `
}