import { Component, OnInit } from '@angular/core';
import { productos } from './productos.mock';
import { Producto } from '../models/producto.models';
import { Router } from '@angular/router';
import { ServicioService } from '../servicio.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit{

  constructor(
    private router: Router,
    private _servicio: ServicioService
    ){}

  ngOnInit(): void {
    this._servicio.setColor('Purpura')
    this._servicio.setRodado('48')
    this._servicio.setFrenos(false)
  }

  public productos: Producto[] = productos
  public conditionExpression: string = 'CAMIONETA'

  navegarADetalle(id:number){
    this.router.navigate(['/products/', id])
  }



}
