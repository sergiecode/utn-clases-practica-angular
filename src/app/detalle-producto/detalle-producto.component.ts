import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Producto } from '../models/producto.models';
import { productos } from '../products/productos.mock';
import { ServicioService } from '../servicio.service';

@Component({
  selector: 'app-detalle-producto',
  templateUrl: './detalle-producto.component.html',
  styleUrls: ['./detalle-producto.component.css']
})
export class DetalleProductoComponent implements OnInit {

  public id?: number
  public producto?: Producto
  public loading: boolean = true
  
  public rodado?: string;
  public color?: string;
  public frenos?:boolean;

  constructor(
    private route: ActivatedRoute,
    private _servicio: ServicioService
    ) { }

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      setTimeout(() => {
        this.id = Number(params['id']) // este es el id que capture de la URL
        this.producto = productos.find(x => x.id == this.id) // extraigo el objeto que coincida con el id de la URL
        this.loading = false
      }, 1000);
    }
    )

    this.rodado = this._servicio.getRodado()
    this.color = this._servicio.getColor()
    this.frenos = this._servicio.getFrenos()
  }

}
