import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { NgbModal, ModalDismissReasons, NgbAlert } from '@ng-bootstrap/ng-bootstrap';
import { Apollo, gql } from 'apollo-angular';
import { UserService } from './gql/user.service';
import { LoginService } from './gql/login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  loginForm = new FormGroup({
    email: new FormControl('', [Validators.required, Validators.email]),
    password: new FormControl('', [Validators.required]),
  });

  accountForm = new FormGroup({
    name: new FormControl('', [Validators.required]),
    firstname: new FormControl('', [Validators.required]),
    emailAccount: new FormControl('', [Validators.required, Validators.email]),
    passwordAccount: new FormControl('', [Validators.required]),
    date_of_birth: new FormControl('', [Validators.required]),
    gender: new FormControl('', [Validators.required]),
  });

  show = false;
  message_toast = "";

  closeModalMesage = '';

  constructor(
    private modalService: NgbModal,
    private apolloService: Apollo,
    private userService: UserService,
    private loginService: LoginService
  ) {}

  ngOnInit(): void {}

  get email() {
    return this.loginForm.get('email');
  }
  get password() {
    return this.loginForm.get('password');
  }

  get name(){
    return this.accountForm.get('name')
  }
  get firstname(){
    return this.accountForm.get('firstname')
  }
  get emailAccount(){
    return this.accountForm.get('emailAccount')
  }
  get passwordAccount(){
    return this.accountForm.get('passwordAccount')
  }
  get date_of_birth(){
    return this.accountForm.get('date_of_birth')
  }


  isValidForm(){
    let gender = this.accountForm.get('gender')?.valid
    let date_of_birth = this.accountForm.get('date_of_birth')?.valid
    let password = this.accountForm.get('passwordAccount')?.valid
    let email = this.accountForm.get('emailAccount')?.valid
    let firstname = this.accountForm.get('firstname')?.valid
    let name = this.accountForm.get('name')?.valid

    let isDisabled = !date_of_birth || !password || !email || !firstname || !name || !gender? true: false
    return isDisabled
  }

  handleForm(formName: string) {
    return this.accountForm.get(formName);
  }

  openModal(refModal: any) {
    this.accountForm.reset()
    this.modalService
      .open(refModal, { ariaLabelledBy: 'modal-basic-title' })
      .result.then(
        (res) => {
          this.closeModalMesage = res;
          console.log(res);
        },
        (reason) => {
          this.closeModalMesage = this.getDismissReason(reason);
          console.log({ reason });
          console.log(this.getDismissReason(reason));
        }
      );
  }

  private getDismissReason(reason: any): string {
    if (reason == ModalDismissReasons.ESC) {
      return 'pressing ESC';
    } else if (reason == ModalDismissReasons.BACKDROP_CLICK) {
      return 'backdrop';
    } else {
      return `${reason}`;
    }
  }

  onLogin() {
    const email = this.loginForm.get('email')?.value;
    const password = this.loginForm.get('password')?.value;
    this.loginService.mutate({
      email,
      password
    }).subscribe((result) => {
      console.log(result)
    },(error) => {
      console.log({
        message:error.message,
        graphQLErrors: error.graphQLErrors,
        networkError: error.networkError,
        extraInfo: error.extraInfo
      })
      this.message_toast = error.graphQLErrors[0]['message'];
      this.show = true;
    })
  }

  onCreate(){
    let gender = this.accountForm.get('gender')?.value
    let date_of_birth = this.accountForm.get('date_of_birth')?.value
    let password = this.accountForm.get('passwordAccount')?.value
    let email = this.accountForm.get('emailAccount')?.value
    let firstname = this.accountForm.get('firstname')?.value
    let name = this.accountForm.get('name')?.value
    this.userService.mutate( {
        name,
        firstname,
        email,
        password,
        date_of_birth,//:"1995-06-26",
        gender
      }
    )
    .subscribe((result) => {
      console.log(result)
      this.modalService.dismissAll('Success')
    },
    (error) => {
      console.log(Object.keys(error))
      //console.log(error.networkError.error.errors)
      console.log({
        message:error.message,
        graphQLErrors: error.graphQLErrors,
        networkError: error.networkError,
        extraInfo: error.extraInfo
      })
    })
  }

  onRegister() {}
}
