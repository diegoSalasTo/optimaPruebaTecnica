import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CookieServiceO {
  busquedas: string[] = [];

  constructor() {
    const busquedasStr = localStorage.getItem('busquedas');
    if (busquedasStr) {
      this.busquedas = JSON.parse(busquedasStr);
    }
  }
  gif: string[] = [];
}
