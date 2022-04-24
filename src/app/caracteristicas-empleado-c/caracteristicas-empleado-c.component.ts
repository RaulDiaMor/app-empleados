import { Component, OnInit} from '@angular/core';
import { Output, EventEmitter } from '@angular/core';
import { ServicioEmpleadosService } from '../servicio-empleados.service';


@Component({
  selector: 'app-caracteristicas-empleado-c',
  templateUrl: './caracteristicas-empleado-c.component.html',
  styleUrls: ['./caracteristicas-empleado-c.component.css']
})
export class CaracteristicasEmpleadoCComponent implements OnInit {

  constructor(private servicio: ServicioEmpleadosService) { }

  ngOnInit(): void {
  }

  @Output() newItemEvent = new EventEmitter<string>();

  addNewItem(value: string) {
    this.servicio.muestraMensaje("Caracteristica: "+value);
    this.newItemEvent.emit(value);
  }
}
