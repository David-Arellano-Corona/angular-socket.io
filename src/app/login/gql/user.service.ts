import { Injectable } from '@angular/core';
import { Mutation, gql } from 'apollo-angular';

@Injectable()
export class UserService extends Mutation {

  document = gql`
  mutation createUser(
    $name:String!, $firstname:String!, $email:String!,
    $password:String!, $date_of_birth:DateTime!, $gender:String!
  ){
    createUser(
      userInput:{
        name:$name,
        firstname:$firstname,
        email:$email,
        password:$password,
        date_of_birth:$date_of_birth,
        gender:$gender
      }
    ){
      id
      name
      firstname
      email
      password
      date_of_birth
      gender
    }
  }  
  `

}
