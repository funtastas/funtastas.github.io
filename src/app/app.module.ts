import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';


import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { AppRoutingModule } from './app-routing.module';
import {XComponent} from './view-encaptulation/x.component';
import {YComponent} from './view-encaptulation/y.component';

@NgModule({
  imports:      [ BrowserModule, BrowserAnimationsModule, FormsModule ],
  declarations: [ AppComponent, HeaderComponent, XComponent, YComponent ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
