import { Injectable } from '@angular/core';
import { Mutation, gql } from 'apollo-angular';
import { Login } from '../../commons/schemas';

@Injectable()
export class LoginService extends Mutation<Login>{
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