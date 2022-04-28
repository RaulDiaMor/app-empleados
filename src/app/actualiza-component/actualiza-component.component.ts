import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Empleado } from '../empleado.model';
import { EmpleadosService } from '../empleados.service';
import { ServicioEmpleadosService } from '../servicio-empleados.service';

@Component({
  selector: 'app-actualiza-component',
  templateUrl: './actualiza-component.component.html',
  styleUrls: ['./actualiza-component.component.css']
})
export class ActualizaComponentComponent implements OnInit {

  constructor(private router:Router,
              private servicio:ServicioEmpleadosService,
              private empleadosService:EmpleadosService,
              private route:ActivatedRoute) { }

  ngOnInit(): void {
    this.indice=this.route.snapshot.params['id'];
    this.accion=parseInt(this.route.snapshot.queryParams['accion']);

    let empleado:Empleado=this.empleadosService.encontrarEmpleado(this.indice);
    this.cuadroNombre=empleado.nombre;
    this.cuadroApellido=empleado.apellidos;
    this.cuadroCargo=empleado.cargo;
    this.cuadroSalario=empleado.salario;
  }

  empleados:Empleado[]=[];

  cuadroNombre:string="";
  cuadroApellido:string="";
  cuadroCargo:string="";
  cuadroSalario:number=0;
  indice:number=0;

  accion:number;

  volverHome(){
    this.router.navigate([''])
  }

  /*actualizaEmpleado(){
    let miEmpleado= new Empleado(this.cuadroNombre,this.cuadroApellido,this.cuadroCargo,this.cuadroSalario);
    //this.servicio.muestraMensaje("Nombre: "+miEmpleado.nombre+" Apellido: "+miEmpleado.apellidos+" Cargo: "+miEmpleado.cargo);
    this.empleadosService.actualizarEmpleadoServicio(this.indice,miEmpleado);
    this.router.navigate([''])
  }

  eliminaEmpleado(){
 
    this.empleadosService.eliminarEmpleadoServicio(this.indice);
    this.router.navigate([''])
  }*/

  actualizaEmpleado(){
    if(this.accion==1){
      let miEmpleado= new Empleado(this.cuadroNombre,this.cuadroApellido,this.cuadroCargo,this.cuadroSalario);
      this.empleadosService.actualizarEmpleadoServicio(this.indice,miEmpleado);
      this.router.navigate(['']);
    }else{
      this.empleadosService.eliminarEmpleadoServicio(this.indice);
      this.router.navigate(['']);
    }
  }

}
