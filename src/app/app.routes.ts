import { Routes } from '@angular/router';
import { SuperherosListComponent } from './components/superheros-list/superheros-list.component';
import { HeroDisplayComponent } from './components/hero-display/hero-display.component';

export const routes: Routes = [
    { path: '', component: SuperherosListComponent },
    { path: 'heroes', component: SuperherosListComponent }, 
    { path: 'heroes/:id', component: HeroDisplayComponent },
    { path: '**', redirectTo: '/heroes' }

];
