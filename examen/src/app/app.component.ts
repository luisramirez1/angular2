import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  styleUrls: ['./app.component.css'],
  template: `
  
  <section id="section1">
  <article id="art1" class="col-md-6">

    <div class="jumbotron">
     <form>
        <div class="form-group">
          <label for="nombre">Nombre</label>
          <input type="text" class="form-control" placeholder="Nombre" #nombre required
          (keyup.enter)="addPersona(nombre.value, apellido.value, edad.value)">
        </div>
        <div class="form-group">
          <label for="apellido">Apellido</label>
          <input type="text" class="form-control" placeholder="Apellido" required #apellido
          (keyup.enter)="addPersona(nombre.value, apellido.value, edad.value)">
        </div>
        <div class="form-group">
          <label for="edad">Edad</label>
          <input type="number" class="form-control" placeholder="Edad" min="0" max="120" required #edad
          (keyup.enter)="addPersona(nombre.value, apellido.value, edad.value)">
        </div>
        <button type="reset" (click)="addPersona(nombre.value, apellido.value, edad.value)" class="btn btn-info">Agregar</button>
      </form>
    </div>
  </article>
  
  <article id="art2" class="col-md-6">
    <article id="boton">
      <button (click)="ocultar(oculto)" class="btn btn-success">Mostrar / Ocultar Tabla</button>
    </article>

    <table class="table table-bordered" [hidden]="oculto">
      <tr>
        <th class="info">Nombre</th>
        <th class="info">Apellido</th>
        <th class="info">Edad</th>
        <th class="info">Boton</th>
      </tr>
      <tr *ngFor="let persona of personas; let index=index">
        <td [ngClass]="{odd: index %2 !=0}">{{persona.nombre}}</td>
        <td [ngClass]="{odd: index %2 !=0}">{{persona.apellido}}</td>
        <td [ngClass]="{odd: index %2 !=0}">{{persona.edad}}</td>
        <td [ngClass]="{odd: index %2 !=0}"><button (click)="eliminar(persona)" class="btn btn-danger btn-xs glyphicon glyphicon-trash"></button></td>
      </tr>
    </table>
  </article>
</section>

`
})

export class AppComponent {
  oculto = false;
  personas = [];
  addPersona(nombre: string, apellido:string, edad:number) {
    if(nombre && apellido && edad) {
      this.personas.push({nombre: nombre, apellido: apellido, edad: edad});
      this.oculto = false;
    }else{

    }
  }

  eliminar(personas) {
    this.personas.splice(this.personas.indexOf(personas), 1);
  }

  ocultar(){
    let oc = this.oculto;
    oc = !oc;
    if (oc) {
      this.oculto = true;
    } else {
      this.oculto = false;
    }
  }
}


