import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { WelcomeComponent } from './welcome/welcome.component';
import { RouteModule } from './route/route.module';
import { RouterModule } from '@angular/router';
import { ProductComponent } from './product/product.component';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import {
  MatMenuModule,
    MatIconModule,
    MatGridListModule,
    MatListModule,
    MatButtonModule
} from '@angular/material';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    WelcomeComponent,
    ProductComponent
  ],
  imports: [
    BrowserModule,
    RouteModule,
    RouterModule,
    MatMenuModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatIconModule,
    MatGridListModule,
    MatListModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
