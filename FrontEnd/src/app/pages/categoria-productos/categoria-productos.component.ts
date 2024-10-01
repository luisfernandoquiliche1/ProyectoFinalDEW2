import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { BuscarcategoriaService } from '../../services/buscarcategoria.service';
import { CommonModule } from '@angular/common';
import { ProductosService } from '../../services/productos.service';
import { ImagenesService } from '../../services/imagenes.service';
import { CategoriasService } from '../../services/categorias.service';

@Component({
  selector: 'app-categoria-productos',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './categoria-productos.component.html',
  styleUrls: ['./categoria-productos.component.css']
})
export class CategoriaProductosComponent implements OnInit {
  productos: any[] = [];
  categoria: string = '';
  marcas: string[] = [];
  marcasCol1: string[] = [];
  marcasCol2: string[] = [];
  pageSize = 12; 
  currentPage = 1; 

  constructor(
    private route: ActivatedRoute,
    private buscarCategoriaService: BuscarcategoriaService,
    private readonly ps: ProductosService,
    private readonly is: ImagenesService,
    private readonly cs: CategoriasService
  ) {}

  obtenerProductos(): void {
    this.buscarCategoriaService.getProductosPorCategoria(this.categoria).subscribe((data: any) => {
      this.productos = data.data;

      // Cargar imágenes para cada producto
      this.productos.forEach((producto) => {
        this.is.__GetImagesbyProduct(producto.IDPRODUCTO).subscribe((rpta: any) => {
          producto.images = rpta.data;
        });
      });

      // Obtener marcas únicas
      this.obtenerMarcasUnicas();
    });
  }

  obtenerMarcasUnicas(): void {
    const marcasSet = new Set<string>();
    this.productos.forEach(producto => {
      if (producto.MARCA) {
        marcasSet.add(producto.MARCA);
      }
    });

    this.marcas = Array.from(marcasSet);
    const half = Math.ceil(this.marcas.length / 2);
    this.marcasCol1 = this.marcas.slice(0, half);
    this.marcasCol2 = this.marcas.slice(half);
  }

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      this.categoria = params['id']; // Obtener la categoría de los parámetros de la ruta
      this.obtenerProductos(); // Solo obtén los productos de la categoría
    });
  }

  formatPrice(price: number): string {
    return price.toLocaleString('es-PE', { minimumFractionDigits: 2, maximumFractionDigits: 2 });
  }

  calcularPrecioAntiguo(price: number): number {
    const additionalPercentage = 0.10;
    return price + (price * additionalPercentage);
  }

  get paginatedProducts() {
    const startIndex = (this.currentPage - 1) * this.pageSize;
    return this.productos.slice(startIndex, startIndex + this.pageSize);
  }

  nextPage() {
    if (this.currentPage * this.pageSize < this.productos.length) {
      this.currentPage++;
    }
  }

  previousPage() {
    if (this.currentPage > 1) {
      this.currentPage--;
    }
  }
}