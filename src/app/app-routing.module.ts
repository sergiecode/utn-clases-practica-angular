import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home-component/home-component.component';
import { ContactComponent } from './contact-component/contact-component.component';
import { AboutUsComponent } from './about-us/about-us.component';
import { ProductsComponent } from './products/products.component';
import { DetalleProductoComponent } from './detalle-producto/detalle-producto.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'about', component: AboutUsComponent},
  { path: 'products', component: ProductsComponent},
  { path: 'products/:id', component: DetalleProductoComponent},
  { path: 'contact', component: ContactComponent },
  { path: '**', redirectTo: ''}
];
// 
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
