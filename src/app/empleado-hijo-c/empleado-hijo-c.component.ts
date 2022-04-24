import { Component, Input, OnInit } from '@angular/core';
import { Empleado } from '../empleado.model';

@Component({
  selector: 'app-empleado-hijo-c',
  templateUrl: './empleado-hijo-c.component.html',
  styleUrls: ['./empleado-hijo-c.component.css']
})
export class EmpleadoHijoCComponent implements OnInit {

  @Input() iHijo: Empleado;
  @Input() xHijo: number;
  
  constructor() { }

  ngOnInit(): void {
  }

  items = [''];

  addItem(newItem: string) {
    this.items.push(newItem);
  }

}
