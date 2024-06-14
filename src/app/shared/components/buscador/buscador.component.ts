
import { Component, EventEmitter, Output } from '@angular/core';
import { CookieService } from 'ngx-cookie-service';
import { CookieServiceO } from 'src/app/core/services/cookie.service';

@Component({
  selector: 'app-buscador',
  templateUrl: './buscador.component.html',
  styleUrls: ['./buscador.component.scss']
})
export class BuscadorComponent  {

  constructor(private cookie:CookieService,private cookies: CookieServiceO){}

  
  
  @Output() searchEvent = new EventEmitter<string>();
  searchQuery: string = '';
  busquedas: string[] = [];

  search(): void {
    this.searchEvent.emit(this.searchQuery); 
  }

  onKeyDown(event: KeyboardEvent): void {
    if (event.key === 'Enter') {
      this.search();
      this.cookie.set("USERID",this.searchQuery)
      const userID = this.cookie.get("USERID");
      this.cookies.busquedas.push(userID); 
      localStorage.setItem('busquedas', JSON.stringify(this.cookies.busquedas));

      console.log(this.cookies.busquedas);
      
      this.searchQuery = '';
    }
 
  }
 
}
