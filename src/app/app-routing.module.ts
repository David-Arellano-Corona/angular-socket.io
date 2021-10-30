import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  
  { 
    path:'home', 
    loadChildren: () => import('./home/home.module').then( e => e.HomeModule ),
  },
  { 
    path:'suggestions', 
    loadChildren: () => import('./suggestion/suggestion.module').then( e => e.SuggestionModule ) 
  },
  { 
    path:'', 
    loadChildren: () => import('./login/login.module').then(e => e.LoginModule)  
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { 
}
