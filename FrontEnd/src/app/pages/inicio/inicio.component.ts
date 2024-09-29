import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { ProductosService } from '../../services/productos.service';
import { ImagenesService } from '../../services/imagenes.service';

@Component({
  selector: 'app-inicio',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './inicio.component.html',
  styleUrl: './inicio.component.css'
})
export class InicioComponent {
  constructor(
    private readonly ps: ProductosService,
    private readonly is: ImagenesService
  ){}

    //variables con estructuras sin definir
    products: any[] = []
    images: any[] = []
    pageSize = 12; 
    currentPage = 1; 

  //metodo que usaremos para obtener productos
  //rpta:any es la variable donde almacenaremos la rpta en cualquier estrucutra
  __be_GetProducts(){
    this.ps.__GetProducts().subscribe((rpta: any) => {
      this.products = rpta.data;

      this.products.forEach((product:any) => {
        this.__be_GetImages(product.IDPRODUCTO);
      })
    })
    console.log(this.products)
  }

  __be_GetImages(productId: number){
    this.is.__GetImagesbyProduct(productId).subscribe((rpta:any)=>{
      // Asignar las imágenes al producto correspondiente
      const product = this.products.find((p:any)=>p.IDPRODUCTO === productId);
      if(product){
        product.images = rpta.data;
      }
    })
  }

  formatPrice(price: number): string {
    return price.toLocaleString('es-PE', { minimumFractionDigits: 2, maximumFractionDigits: 2 });
  }

  calcularPrecioAntiguo(price: number): number {
    const additionalPercentage = 0.10;
    return price + (price * additionalPercentage);
  }

  //paginado
  get paginatedProducts() {
    const startIndex = (this.currentPage - 1) * this.pageSize;
    return this.products.slice(startIndex, startIndex + this.pageSize);
  }

  nextPage() {
    if (this.currentPage * this.pageSize < this.products.length) {
      this.currentPage++;
    }
  }

  previousPage() {
    if (this.currentPage > 1) {
      this.currentPage--;
    }
  }

  //Llamamos al metodo cuando carga el componente
  ngOnInit(): void{
    this.__be_GetProducts()
  }
}
