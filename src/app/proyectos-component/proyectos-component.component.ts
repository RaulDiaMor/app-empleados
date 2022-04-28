import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Empleado } from '../empleado.model';
import { EmpleadosService } from '../empleados.service';
import { ServicioEmpleadosService } from '../servicio-empleados.service';

@Component({
  selector: 'app-proyectos-component',
  templateUrl: './proyectos-component.component.html',
  styleUrls: ['./proyectos-component.component.css']
})
export class ProyectosComponentComponent implements OnInit {

  constructor(private router:Router,private servicio:ServicioEmpleadosService,private empleadosService:EmpleadosService) { }

  ngOnInit(): void {
  }

  empleados:Empleado[]=[];

  cuadroNombre:string="";
  cuadroApellido:string="";
  cuadroCargo:string="";
  cuadroSalario:number=0;

  volverHome(){
    this.router.navigate([''])
  }

  agregarEmpleado(){
    let miEmpleado= new Empleado(this.cuadroNombre,this.cuadroApellido,this.cuadroCargo,this.cuadroSalario);
    //this.servicio.muestraMensaje("Nombre: "+miEmpleado.nombre+" Apellido: "+miEmpleado.apellidos+" Cargo: "+miEmpleado.cargo);
    this.empleadosService.agregarEmpleadoServicio(miEmpleado);
    this.router.navigate([''])
  }



}
