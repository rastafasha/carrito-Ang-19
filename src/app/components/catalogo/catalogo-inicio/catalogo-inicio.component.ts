import { Component, inject, OnInit } from '@angular/core';
import { ProductoService } from '../../../core/services/producto.service';
import { Producto } from '../../../core/models/producto';
import { error } from 'console';
import { CarritoService } from '../../../core/services/carrito.service';

@Component({
  selector: 'app-catalogo-inicio',
  imports: [],
  templateUrl: './catalogo-inicio.component.html',
  styleUrl: './catalogo-inicio.component.css'
})
export class CatalogoInicioComponent  implements OnInit {

  private productoService = inject(ProductoService);
  private carritoService = inject(CarritoService);
  productos: Producto[] = [];

  ngOnInit(): void {
    this.getProductos();
  }

  getProductos() {
    this.productoService.getProductos().subscribe(
      (productos) => {
        this.productos = productos;
        console.log(this.productos);
      },
      (error) => {
        console.error('Error al obtener los productos', error);
      }
    );
  }

  addProduct(item:Producto){
    this.carritoService.addCarrito(item);
  }


}
