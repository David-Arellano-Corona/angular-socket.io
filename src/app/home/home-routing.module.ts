import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home.component';
import { SessionGuard } from '../commons/session.guard';

const router:Routes = [
  { path:'', component:HomeComponent, canActivate:[SessionGuard] }
]

@NgModule({
  imports:[
    RouterModule.forChild(router)
  ],
  exports:[RouterModule]  
})
export class HomeRoutingModule { }
