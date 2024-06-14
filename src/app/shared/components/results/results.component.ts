import { Component, Input, OnChanges, SimpleChanges } from '@angular/core';
import { SearchApi } from 'src/app/core/models/api';
import { ServiceService } from 'src/app/core/services/service.service';

@Component({
  selector: 'app-results',
  templateUrl: './results.component.html',
  styleUrls: ['./results.component.scss']
})
export class ResultsComponent implements OnChanges {
  @Input() querySearch:string = "";
  constructor( private servicio:ServiceService) {}
  ngOnChanges(changes: SimpleChanges): void {
    if(changes["querySearch"] != undefined){
      this.getGif();
    }
  }
  ApiSearch:SearchApi[] = [];
  getGif(){
    this.servicio.buscarGif(this.querySearch).subscribe(gifEncontrado=>{
      console.log(gifEncontrado)
      this.ApiSearch = gifEncontrado.data.slice(0, 10);
      console.log(this.ApiSearch);
    })
  }

}
