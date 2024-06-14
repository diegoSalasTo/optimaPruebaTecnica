import { NgModule } from '@angular/core';
import { RouterModule,Routes } from '@angular/router';
import { HomePageComponent } from './page/home-page/home-page.component';

const routes: Routes = [
  {path: '', component: HomePageComponent},
  { path: '', redirectTo: '', pathMatch: 'full' },
  { path: '**', redirectTo: '' }
];
@NgModule({
  declarations: [],
  imports: [
    RouterModule.forChild(routes)
  ]
})
export class HomeRoutingModule { }
