import { NgModule }              from '@angular/core';
import { RouterModule, Routes }  from '@angular/router';

import { LandingComponent }      from './landing/landing.component';
import { EntryDetailsComponent } from './entry-details/entry-details.component';
import { SearchComponent }       from './search/search.component';


const routes: Routes = [
  { path: '', redirectTo: '/landing', pathMatch: 'full'},
  { path: 'details', redirectTo: '/landing', pathMatch: 'full'},
  { path: 'landing', component: LandingComponent },
  { path: 'search', component: SearchComponent },
  { path: 'details/:id', component: EntryDetailsComponent }
]

@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
