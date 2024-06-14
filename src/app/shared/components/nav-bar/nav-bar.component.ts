import { Component, EventEmitter, Output } from '@angular/core';
import { CookieService } from 'ngx-cookie-service';
import { SearchApi } from 'src/app/core/models/api';
import { CookieServiceO } from 'src/app/core/services/cookie.service';
import { ServiceService } from 'src/app/core/services/service.service';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.scss']
})
export class NavBarComponent {
  constructor(private cookie:CookieServiceO,private servicio:ServiceService , private cookies:CookieService){}

  @Output() searchEvent1 = new EventEmitter<string>();
  nameGif: string = '';

  get busquedas() {
    return this.cookie.busquedas;
  }
  obtenerNombre(nombre: string) {
    this.nameGif = nombre;
    this.searchEvent1.emit(this.nameGif);
  }
  search(): void {
  
  }



}
