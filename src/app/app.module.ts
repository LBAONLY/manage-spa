
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AuthGuard } from './_auth-guard/auth.guard';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';
import { appRoutes } from './routes';
import { FormsModule } from '@angular/forms';
import { BsDropdownModule, CollapseModule } from 'ngx-bootstrap';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppComponent } from './app.component';
import { BottomNavComponent } from './bottom-nav/bottom-nav.component';
import { HeaderComponent } from './header/header.component';
import { BnavFourComponent } from './bnav-four/bnav-four.component';

import { AlertifyService } from './_services/alertify/alertify.service';
import { ErrorInterceptorProvide } from './_services/errorHandler/error.interceptor';
import { AuthService } from './_services/auth.service';
import { BodyHomeComponent } from './body-home/body-home.component';
import { BodyQueueComponent } from './body-queue/body-queue.component';
import { BodyQueueListComponent } from './body-queue-list/body-queue-list.component';
import { BnavHamberComponent } from './bnav-hamber/bnav-hamber.component';

@NgModule({
   declarations: [
      AppComponent,
      BottomNavComponent,
      HeaderComponent,
      BnavFourComponent,
      BodyHomeComponent,
      BodyQueueComponent,
      BodyQueueListComponent,
      BnavHamberComponent
   ],
   imports: [
      BrowserModule,
      HttpClientModule,
      FormsModule,
      BsDropdownModule.forRoot(),
      CollapseModule.forRoot(),
      RouterModule.forRoot(appRoutes),
      BrowserAnimationsModule
   ],
   providers: [
      AuthGuard,
      AuthService,
      ErrorInterceptorProvide,
      AlertifyService
   ],
   bootstrap: [
      AppComponent
   ]
})
export class AppModule { }
