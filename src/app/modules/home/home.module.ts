import { HomeRoutingModule } from './home-routing.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomePageComponent } from './page/home-page/home-page.component';
import { NavBarComponent } from 'src/app/shared/components/nav-bar/nav-bar.component';
import { BuscadorComponent } from 'src/app/shared/components/buscador/buscador.component';
import { ResultsComponent } from 'src/app/shared/components/results/results.component';
import { FormsModule } from '@angular/forms';




@NgModule({
  declarations: [
    HomePageComponent,
    NavBarComponent,
    BuscadorComponent,
    ResultsComponent,
    

  ],
  imports: [
    CommonModule,
    HomeRoutingModule,
    FormsModule,
  ]
})
export class HomeModule { }
