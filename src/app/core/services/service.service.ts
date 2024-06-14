import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ServiceService  {
  url = environment.urlApi + 'gifs/search?api_key='+ environment.api_key;
  constructor(private httpClient:HttpClient ) { }

  buscarGif(query:string):Observable<any>{
    return this.httpClient.get(this.url +`&q=${query}`)
  }

 
}
