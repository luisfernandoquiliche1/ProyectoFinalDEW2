import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { RouterLink, RouterOutlet } from '@angular/router';
import { CategoriasService } from './services/categorias.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, RouterLink, CommonModule],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'FrontEnd';
  categorias: any[] = [];

  constructor(
    private readonly cs: CategoriasService,
    private router: Router // Inyecta el Router
  ) {}

  __be_GetCategorias(): void {
    this.cs.__GetCategorias().subscribe((rpta: any) => {
      this.categorias = rpta.data;
    });
  }

  ngOnInit(): void {
    this.__be_GetCategorias();
  }

  irACategoria(categoria: any) {
    this.router.navigate([`categorias/${categoria.NOMBRE}`]); // Asegúrate de usar un identificador válido
  }


  dropdownText: string = 'TODO';
  updateDropdownText(value: string) {
    this.dropdownText = value;
  }
}
