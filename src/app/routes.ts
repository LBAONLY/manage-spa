import { Routes } from '@angular/router';
import { BodyQueueComponent } from './body-queue/body-queue.component';
import { BodyQueueListComponent } from './body-queue-list/body-queue-list.component';
import { BnavHamberComponent } from './bnav-hamber/bnav-hamber.component';
import { BodyMemberComponent } from './body-member/body-member.component';
import { BodyQueueSteponeComponent  } from './body-queue-stepone/body-queue-stepone.component';
import { BodyQueueSteptwoComponent } from './body-queue-steptwo/body-queue-steptwo.component';

export const appRoutes: Routes = [
    { path: '', component: BodyQueueSteponeComponent },
    { path: 'queue', component: BodyQueueComponent },
    { path: 'register', component: BodyMemberComponent},
    { path: 'queue-list', component: BodyQueueListComponent },
    { path: 'newqueue', component: BodyQueueSteponeComponent },
    { path: 'newqueue/steptwo', component: BodyQueueSteptwoComponent },
    { path: 'getnumber', component: BnavHamberComponent },
    { path: '**', redirectTo: '', pathMatch: 'full'}
];
