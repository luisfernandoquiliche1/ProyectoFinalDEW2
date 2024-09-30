import { Component } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';
import { CategoriasService } from './services/categorias.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, RouterLink, CommonModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'FrontEnd';
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
