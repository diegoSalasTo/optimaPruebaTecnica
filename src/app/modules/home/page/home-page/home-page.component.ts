import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.scss']
})
export class HomePageComponent {
  @Input() querySearch:string = "";

search(variable: string){
  this.querySearch=variable;
}
}
