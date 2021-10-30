import { Injectable } from '@angular/core';
import { JwtHelperService } from '@auth0/angular-jwt';

@Injectable({
    providedIn:'root'
})
export class SessionService{
    getsession(){
        return localStorage.getItem('session-001')
    }

    getsessionInfo(){
        const token = this.getsession() as string;
        const jwt = new JwtHelperService();
        const payload = jwt.decodeToken(token);
        return payload
    }

    setsession(token:string){
        localStorage.setItem('session-001', token)
    }
}