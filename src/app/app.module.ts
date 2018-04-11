import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule} from '@angular/platform-browser/animations';


import { AppComponent } from './app.component';
import { SearchComponent } from './search/search.component';
import { LandingComponent } from './landing/landing.component';
import { EntryDetailsComponent } from './entry-details/entry-details.component';
import { AppRoutingModule } from './/app-routing.module';
import { MenuBarComponent } from './menu-bar/menu-bar.component';

import { SidebarModule }    from 'primeng/sidebar';
import { InputTextModule }  from 'primeng/inputtext';
import { ButtonModule }     from 'primeng/button';
import { DropdownModule }   from 'primeng/dropdown';
import { SearchBarComponent } from './search-bar/search-bar.component';

@NgModule({
  declarations: [
    AppComponent,
    SearchComponent,
    LandingComponent,
    EntryDetailsComponent,
    MenuBarComponent,
    SearchBarComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule ,
    SidebarModule,
    InputTextModule,
    ButtonModule,
    DropdownModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
