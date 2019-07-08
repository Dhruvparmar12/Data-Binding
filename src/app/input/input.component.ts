import { Component, OnInit,EventEmitter, Output } from '@angular/core';


@Component({
  selector: 'app-input',
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.css']
})
export class InputComponent implements OnInit {
  
  @Output() additem= new EventEmitter<{addName:string,addPrice:string}>();

  itemName='';
  itemPrice=''; 
                
  constructor() { }

  ngOnInit() {
  }

  addData(item_Name : HTMLInputElement)
  {
    this.additem.emit({

      addName:item_Name.value,
      addPrice:this.itemPrice

    })
  }
}
