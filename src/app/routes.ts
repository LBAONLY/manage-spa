import { Routes } from '@angular/router';
import { BodyHomeComponent } from './body-home/body-home.component';
import { BodyQueueComponent } from './body-queue/body-queue.component';
import { BodyQueueListComponent } from './body-queue-list/body-queue-list.component';
import { BnavFourComponent } from './bnav-four/bnav-four.component';
import { BnavHamberComponent } from './bnav-hamber/bnav-hamber.component';

export const appRoutes: Routes = [
    { path: '', component: BodyHomeComponent },
    { path: 'queue', component: BodyQueueComponent },
    { path: 'register', component: BodyHomeComponent},
    { path: 'queue-list', component: BodyQueueListComponent },
    { path: 'newqueue',
      component: BnavFourComponent,
      // children: [
      //   { path: 'getnumber',
      //     component: BnavHamberComponent }
      // ]
    },
    { path: 'getnumber', component: BnavHamberComponent },
    { path: '**', redirectTo: '', pathMatch: 'full'}
];
