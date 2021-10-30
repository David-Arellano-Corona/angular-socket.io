import {NgModule} from '@angular/core';
import {APOLLO_OPTIONS} from 'apollo-angular';
import {ApolloClientOptions, InMemoryCache, ApolloLink} from '@apollo/client/core';
import { setContext } from '@apollo/client/link/context';
import {HttpLink} from 'apollo-angular/http';


const uri = 'http://localhost:3000/graphql'; // <-- add the URL of the GraphQL server here
export function createApollo(httpLink: HttpLink): ApolloClientOptions<any> {

  const auth = setContext((operation, context)=>{
    const token = localStorage.getItem('session-001');
    if(!token) return {}

    return {
      headers:{
        "Authorization":`Bearer ${token}`
      }
    }
  })

  return {
    link: ApolloLink.from([auth,httpLink.create({uri})]), 
    //httpLink.create({uri}),
    cache: new InMemoryCache(),
    
  };
}

@NgModule({
  providers: [
    {
      provide: APOLLO_OPTIONS,
      useFactory: createApollo,
      deps: [HttpLink],
    },
  ],
})
export class GraphQLModule {}
