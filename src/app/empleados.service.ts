import { Injectable } from "@angular/core";
import { Empleado } from "./empleado.model";
import { ServicioEmpleadosService } from "./servicio-empleados.service";

@Injectable()

export class EmpleadosService{

  constructor(private servicioVentana: ServicioEmpleadosService){

  }
    
    empleados:Empleado[]=[
        new Empleado("Raul","Diaz","Presidente",7500),
        new Empleado("Susana","Arrabe","Vicepresidente",5500),
        new Empleado("Pedro","Diego","Currito",1500),
        new Empleado("Luis","Lopez","Currito",1500)
      ];

      agregarEmpleadoServicio(empleado:Empleado){

        this.servicioVentana.muestraMensaje("Nombre: "+empleado.nombre+"\n"+
        "Apellidos: "+empleado.apellidos+"\n"+
        "Cargo: "+empleado.cargo);
        this.empleados.push(empleado);
      }


}