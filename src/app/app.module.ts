import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { GraphQLModule } from './graphql.module';
import { HttpClientModule } from '@angular/common/http';
import { SocketIoModule } from 'ngx-socket-io';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { environment } from './environments.dev';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    GraphQLModule,
    HttpClientModule,
    SocketIoModule.forRoot(environment.SOCKET_CONFIG)
  ],
  providers: [
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
