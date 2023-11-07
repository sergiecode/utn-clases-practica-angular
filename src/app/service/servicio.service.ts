import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ServicioService {

  private rodado: string = '32'
  private color: string = 'Rojo'
  private frenos:boolean = true

  getRodado(){
    return this.rodado
  }
  setRodado(rodado:string){
    this.rodado = rodado
  }
  getColor(){
    return this.color
  }
  setColor(color:string){
    this.color = color
  }
  getFrenos(){
    return this.frenos
  }
  setFrenos(frenos:boolean){
    this.frenos = frenos
  }

}
