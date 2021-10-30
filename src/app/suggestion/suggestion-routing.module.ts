import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router'
import { SuggestionComponent } from './suggestion.component';

const router:Routes = [
  { path:'', component:SuggestionComponent }
]

@NgModule({
  declarations: [],
  imports: [
    RouterModule.forChild(router)
  ]
})
export class SuggestionRoutingModule { }
