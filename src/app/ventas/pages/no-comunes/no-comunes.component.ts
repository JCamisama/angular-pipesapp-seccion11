import { Component,  } from '@angular/core';
import { interval } from 'rxjs';



@Component({
  selector: 'app-no-comunes',
  templateUrl: './no-comunes.component.html',
  styles: [
  ]
})
export class NoComunesComponent   {

  // i18nSelect
  public nombre: string = 'Fernando';
  public genero: string = 'masculino';

  public invitacionMapa = {
    'masculino': 'invitarlo',
    'femenino' : 'invitarla'
  }

  // i18nPlural
  public clientes: string[] =['Maria', 'Pedro', 'Juan', 'Eduardo'];
  public clientesMapa = {
    '=0': 'no tenemos ningún cliente esperando.',
    '=1': 'tenemos un cliente esperando.',
    'other': 'tenemos # clientes esperando.'
  }

  public cambiarCliente(): void{

    this.genero == 'masculino' ? this.genero = 'femenino':
                                 this.genero = 'masculino';
  }

  public borrarCliente(): void{
    if( this.clientes.length > 0){
      this.clientes.pop();
    }
  }

  // KeyValue Pipe
  persona = {
    nombre: 'Fernando',
    edad:   35,
    direccion: 'Ottawa, Canadá'
  }


  // Json Pipe
  heroes = [
    {
      nombre: 'Superman',
      vuela: true
    },
    {
      nombre: 'Robin',
      vuela: false
    },
    {
      nombre: 'Aquaman',
      vuela: false
    }
  ]


  // Async Pipe
  public miObservable = interval(3000); //0, 1 ,2, 3, ...

  public valorPromesa = new Promise( (resolve, reject) => {

    setTimeout(() => {
      resolve( 'Tenemos data de promesa' );
    }, 3500);
  })
}
