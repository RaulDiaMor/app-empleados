import { Component, OnInit } from '@angular/core';
import { Empleado } from './empleado.model';
import { EmpleadosService } from './empleados.service';
import { ServicioEmpleadosService } from './servicio-empleados.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  titulo = 'Listado De Empleados';
  

  constructor(private servicio:ServicioEmpleadosService,private empleadosService:EmpleadosService){
    //this.empleados=this.empleadosService.empleados;

  }
  ngOnInit(): void {
    this.empleados=this.empleadosService.empleados;
  }

  empleados:Empleado[]=[];

  cuadroNombre:string="";
  cuadroApellido:string="";
  cuadroCargo:string="";
  cuadroSalario:number=0;

  agregarEmpleado(){
    let miEmpleado= new Empleado(this.cuadroNombre,this.cuadroApellido,this.cuadroCargo,this.cuadroSalario);
    //this.servicio.muestraMensaje("Nombre: "+miEmpleado.nombre+" Apellido: "+miEmpleado.apellidos+" Cargo: "+miEmpleado.cargo);
    this.empleadosService.agregarEmpleadoServicio(miEmpleado);
  }
}
