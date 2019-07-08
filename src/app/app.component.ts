import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  details = [];

  addDetails(details:{addName:string,addPrice:string})
  {
    this.details.push({
      item_name:details.addName,
      item_price:details.addPrice
    });
  }

}
