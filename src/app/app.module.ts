import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HttpClientModule } from "@angular/common/http"
import { WelcomeComponent } from './home/welcome.component';
import { RouterModule, Routes } from '@angular/router';
import { ProductModule } from './products/product.module';
import { DashboardComponent } from './home/dashboard.component';
import { DashchartsComponent } from './charts/dashcharts/dashcharts.component';




const routes:Routes=[
  {path:'welcome',component:WelcomeComponent},
  {path:'dashboard',component:DashboardComponent},
  {path:'',redirectTo:'welcome',pathMatch:'full'},
  {path:'**',redirectTo:'welcome',pathMatch:'full'}
  // {path:'**',component:'pageNotFoundComponent'}
]

@NgModule({
  declarations: [
    AppComponent,
    WelcomeComponent,
    DashboardComponent,
    DashchartsComponent,

  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    RouterModule.forRoot(routes),
    ProductModule,

    
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
