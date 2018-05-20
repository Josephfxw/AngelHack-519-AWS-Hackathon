import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { DistanceComponent } from './distance/distance.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { LandingComponent } from './landing/landing.component';
import { MaterialModule } from './my-module/my-module.module';

import { AngularFireModule  } from 'angularfire2';
import { environment } from '../environments/environment';

import { AngularFirestoreModule } from 'angularfire2/firestore';
import { AboutComponent } from './about/about.component';

import {FormsModule} from '@angular/forms';



import {AngularFireDatabaseModule} from 'angularfire2/database';

const appRoutes: Routes = [

  { path: '', component: LandingComponent },
  { path: 'distance', component: DistanceComponent }

];

@NgModule({
  declarations: [
    AppComponent,
    DistanceComponent,
    LandingComponent,
    AboutComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MaterialModule,
    RouterModule.forRoot(appRoutes),

    AngularFireModule.initializeApp(environment.firebase),
    FormsModule,
    AngularFireDatabaseModule // for database
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
