import { Component, EventEmitter, Output } from '@angular/core';
import { Router } from '@angular/router';
import { CookieService } from 'ngx-cookie-service';

import { CookieServiceO } from 'src/app/core/services/cookie.service';
import { ServiceService } from 'src/app/core/services/service.service';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.scss']
})
export class NavBarComponent {
  constructor(private cookie:CookieServiceO,private servicio:ServiceService , private cookies:CookieService,private router: Router){}

  @Output() searchEvent1 = new EventEmitter<string>();
  nameGif: string = '';

  get busquedas() {
    return this.cookie.busquedas;
  }
  obtenerNombre(nombre: string) {
    this.nameGif = nombre;
    this.searchEvent1.emit(this.nameGif);
  }
  clearLocalStorage(){
    if (window.confirm('¿Desea eliminar el historial de búsqueda?')) {
      if (this.cookie.busquedas.length === 0) {
        alert('No hay historial');
      } else {
        alert('Has aceptado , se eliminará el historial');
        localStorage.clear();
        location.reload();
      }
   
    } else {
      alert('Se mantiene el historial');
      // Aquí puedes realizar la acción que deseas cuando el usuario cancela
    }
  }
}
