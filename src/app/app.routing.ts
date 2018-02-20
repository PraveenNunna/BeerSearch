import { Routes, RouterModule } from '@angular/router';

import { DashboardComponent } from './Views/dashboard/dashboard.component';
import { RandombeersComponent } from './Views/randombeers/randombeers.component';
import { BreweryComponent } from './Views/brewery/brewery.component';
import { AboutbeerComponent } from './Views/aboutbeer/aboutbeer.component';

const appRoutes: Routes = [
  { path: '', component: DashboardComponent },
  { path: 'dashboard', component: DashboardComponent },
  { path: 'randombeers', component: RandombeersComponent },
  { path: 'brewery', component: BreweryComponent },
  { path: 'aboutbeer', component: AboutbeerComponent },
   // otherwise redirect to home
  { path: '**', redirectTo: '' }
];

export const routing = RouterModule.forRoot(appRoutes);
