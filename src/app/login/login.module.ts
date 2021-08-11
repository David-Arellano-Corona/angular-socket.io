import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgbToastModule } from '@ng-bootstrap/ng-bootstrap';
import { LoginComponent } from './login.component';
import { RoutingLoginModule } from './routing-login.module';
import { UserService } from './gql/user.service';
import { LoginService } from './gql/login.service';



@NgModule({
  declarations: [
    LoginComponent
  ],
  imports: [
    CommonModule,
    RoutingLoginModule,
    FormsModule,
    ReactiveFormsModule,
    NgbToastModule
  ],
  exports:[LoginComponent],
  providers:[UserService, LoginService]
})
export class LoginModule { 
  constructor(){
    console.log("module")
  }
}
