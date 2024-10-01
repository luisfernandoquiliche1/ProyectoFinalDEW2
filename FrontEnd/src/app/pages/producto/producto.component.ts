import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { ProductosService } from '../../services/productos.service';
import { ActivatedRoute, Params } from '@angular/router';
import { ImagenesService } from '../../services/imagenes.service';

@Component({
  selector: 'app-producto',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './producto.component.html',
  styleUrl: './producto.component.css'
})
export class ProductoComponent {
  constructor(
    private readonly ps: ProductosService,
    private readonly is: ImagenesService,
    private ar: ActivatedRoute
  ){}

  product : any = {};
  selectedImage: string = '';

  //Metodo que conusme el servicio y trae los datos del producto
  _GetProduct(id:any){
    this.ps.__GetProduct(id).subscribe((rpta : any)=>{

      if (rpta.success && rpta.data && rpta.data.length > 0) {
        this.product = rpta.data[0]; // Asigna el primer producto del array

        if (this.product.IDPRODUCTO) {
          this.__be_GetImages(this.product.IDPRODUCTO);
        } 
      } 
    });
  }

  __be_GetImages(productId: number){
    this.is.__GetImagesbyProduct(productId).subscribe((rpta:any)=>{
      console.log('Respuesta de __GetImagesbyProduct:', rpta); 
      if (rpta.data) {
        this.product.images = rpta.data; 
        console.log(this.product.images); 

        // Asignar primera imagen como imagen seleccionada
        if (this.product.images.length > 0) {
          this.selectedImage = this.product.images[0].RUTA;
        }
      }
    })
  }

  //Ejecutamos el metodo al cargar el componente
  ngOnInit():void{
    this.ar.params.subscribe((params: Params)=>{
      if(params["id"]){
        this._GetProduct(params["id"])
      }
    })
  }

  changeImage(image: string): void {
    this.selectedImage = image;
  }

  convertPriceDolar(value: number): number {    
    return value / 3.75;
  }

  formatPrice(price: number): string {
    return price.toLocaleString('es-PE', { minimumFractionDigits: 2, maximumFractionDigits: 2 });
  }

}
