import { Component, OnDestroy, OnInit } from '@angular/core';
import { productos } from './productos.mock';
import { Producto } from '../../models/producto.models';
import { Router } from '@angular/router';
import { ApiServiceService } from 'src/app/service/api-service.service';
import { IUsuario } from 'src/app/models/usuario.models';
import { ProductServiceService } from 'src/app/service/product-service.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit, OnDestroy {

  public productos?: Producto[]
  public usuarios: IUsuario[] = []
  public conditionExpression: string = 'CAMIONETA'

  constructor(
    private router: Router,
    // private _apiService: ApiServiceService
    private _productosService: ProductServiceService
  ) { }

  ngOnInit(): void {
    this._productosService.getProductos().subscribe((res: Producto[]) => {
      this.productos = res
      console.log(res)
    })
    this.productos = productos
  }
  ngOnDestroy(): void {
    console.log('Se destruyó el componente')
  }


  navegarADetalle(id: number) {
    this.router.navigate(['/products/', id])
  }



}
