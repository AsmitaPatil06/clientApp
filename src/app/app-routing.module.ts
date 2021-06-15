import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AddClientComponent } from './add-client/add-client.component';
import { ClientPageComponent } from './client-page/client-page.component';
import { ClientComponent } from './client/client.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { LoginComponent } from './login/login.component';
import { MainPageComponent } from './main-page/main-page.component';


const routes: Routes = [


  {
    path: 'client-page', component: ClientPageComponent, children: [
      {
        path: 'client', component: ClientComponent
      },


      { path: 'dashboard', component: DashboardComponent },

      { path: 'add', component: AddClientComponent }



    ]
  },
  // { path: 'client-page/client', component: ClientComponent },




  { path: '**', component: MainPageComponent },
  { path: 'login', component: LoginComponent },
  // { path: '', redirectTo: '/MainPageComponent', pathMatch: 'full' },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
