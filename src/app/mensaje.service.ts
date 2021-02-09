/*Servicio encargado de interactucar con las operaciones de los mensajes */
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MensajeService {
  mensajes:string[]=[];
  add(mensaje:string){
    this.mensajes.push(mensaje);
  }
  clear(){
    this.mensajes=[]
  }
  constructor() { }


}
