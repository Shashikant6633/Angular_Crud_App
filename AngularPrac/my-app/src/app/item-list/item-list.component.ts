import { Component, Input, Output,EventEmitter } from '@angular/core';

 
@Component({
  selector: 'app-item-list',
  templateUrl: './item-list.component.html',
  styleUrls: ['./item-list.component.css']
})
export class ItemListComponent {
  title: string = 'List of Products';
  items: string[] = ['Bag', 'Books', 'Soap'];
  isDisabled: boolean = false;
  counter: number = 0;
  
 
  title1: string = "Counter Increment";
  incrementCounter() {
    this.counter++;
  }
 
 
  creationDate: Date = new Date();
  price: number = 20.99;


  num1!: number;
  num2!: number;
  num3!: number;
  largestNumber: number | null = null;

  // Logic for if-else condition......
  findLargest() {
    if (this.num1 !== undefined && this.num2 !== undefined && this.num3 !== undefined) {
      if (this.num1 >= this.num2 && this.num1 >= this.num3) {
        this.largestNumber = this.num1;
      } else if (this.num2 >= this.num1 && this.num2 >= this.num3) {
        this.largestNumber = this.num2;
      } else {
        this.largestNumber = this.num3;
      }
    }

  }

  @Input() message: string | undefined;

  @Output() customEvent = new EventEmitter<string>();

  emitEvent() {
    this.customEvent.emit('Data from child component');
  }
}