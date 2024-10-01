import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { CategoriasService } from '../../services/categorias.service';

interface Categoria {
  id: string;
  nombre: string;
  descripcion: string;
  imagen: string;
}

@Component({
  selector: 'app-categorias',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './categorias.component.html',
  styleUrl: './categorias.component.css'
})
export class CategoriasComponent {
  constructor(
    private readonly cs: CategoriasService,
  ){}

  categorias: any[] = []

  __be_GetCategorias(){
    this.cs.__GetCategorias().subscribe((rpta: any) => {
      this.categorias = rpta.data;
    })
    console.log(this.categorias)
  }

  ngOnInit(): void{
    this.__be_GetCategorias()
  }
}
