import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { ClientPageComponent } from './client-page/client-page.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MainPageComponent } from './main-page/main-page.component';

import { MatIconModule } from '@angular/material/icon';

import { HttpClientModule } from '@angular/common/http';
import { ClientComponent } from './client/client.component';
import { DashboardComponent } from './dashboard/dashboard.component';

import { LayoutModule } from '@angular/cdk/layout';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatListModule } from '@angular/material/list';
import { MatDividerModule } from '@angular/material/divider';
import { MatCardModule } from '@angular/material/card';

import { MatSelectModule } from '@angular/material/select';
import { AddClientComponent } from './add-client/add-client.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    ClientPageComponent,
    MainPageComponent,
    ClientComponent,
    DashboardComponent,
    AddClientComponent,


  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule,
    MatIconModule,
    LayoutModule,
    MatToolbarModule,
    MatButtonModule,
    MatSidenavModule,
    MatListModule,
    MatCardModule,


    MatSelectModule,


    MatDividerModule,


    NgbModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
