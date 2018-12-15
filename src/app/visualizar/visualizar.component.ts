import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-visualizar',
  templateUrl: './visualizar.component.html',
  styleUrls: ['./visualizar.component.css']
})
export class VisualizarComponent implements OnInit {

  curso: string = "FullStack"
  activo: boolean = true
  activo2: boolean = false
  cursos: Array<String> = []
  nombreIngresado:string

  //cursos: string[]
  //cursos: any[]
  //cursos: Array<any>


  constructor() { }
//Un!1214$
  ngOnInit() {
    //var self = this
    /*
    setInterval(()=>{
      this.activo=!this.activo
    },1000)*/

  }

  eliminar(indiceElemento){
    if(confirm("esta seguro de eliminar?")){
      this.cursos.splice(indiceElemento,1)
    }
  }

  registrar(){
    console.log("curso registrado")
    if(this.nombreIngresado){
      //his.cursos.push(this.nombreIngresado)
      this.cursos.unshift(this.nombreIngresado)
    }
    console.log(this.cursos)


    for (let curso in this.cursos){
      console.log("Curso ingresado",curso)

    }

    /*
    for (let curso of this.cursos){
      console.log("Curso ingresado",curso)
    }
    */
    /*for(var i=0; i<this.cursos.length; i++){
      console.log("Curso Ingresado:",this.cursos[i])
    }

    this.cursos.forEach(function(el){
       console.log("curso ingresado:",this.cursos[i])
    }*/

  }

  nombreCurso(nombre){

    this.nombreIngresado=nombre//evento.target.value
    this.activo = this.nombreIngresado?false:true
    if(this.nombreIngresado) {
      this.activo=false
    }else{
      this.activo=true
    }
    //console.log(evento.target.value)
    //console.log(this.nombreIngresado)
  }
}
