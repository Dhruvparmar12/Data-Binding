import { Component, OnInit, Input , } from '@angular/core';


@Component({
  selector: 'app-output',
  templateUrl: './output.component.html',
  styleUrls: ['./output.component.css']
})
export class OutputComponent implements OnInit {

    @Input('outElement') elements: {
      
      item_name:string,
      item_price:string
    
    };
    

  constructor() { }

  ngOnInit() {
  }

}
