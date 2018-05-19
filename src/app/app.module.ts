import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { DistanceComponent } from './distance/distance.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { LandingComponent } from './landing/landing.component';
import { MaterialModule } from './my-module/my-module.module';


const appRoutes: Routes = [

  { path: '', component: LandingComponent },
  { path: 'distance', component: DistanceComponent }

];

@NgModule({
  declarations: [
    AppComponent,
    DistanceComponent,
    LandingComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MaterialModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
