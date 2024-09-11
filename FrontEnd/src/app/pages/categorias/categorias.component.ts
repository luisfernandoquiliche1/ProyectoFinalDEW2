import { Component } from '@angular/core';

interface Categoria {
  id: string;
  nombre: string;
  descripcion: string;
  imagen: string;
}

@Component({
  selector: 'app-categorias',
  standalone: true,
  imports: [],
  templateUrl: './categorias.component.html',
  styleUrl: './categorias.component.css'
})
export class CategoriasComponent {
  
  categorias: Categoria[] = [
    { id: '1', nombre: 'Celulares', descripcion: 'Últimos modelos de celulares.', imagen: 'celulares.jpg' },
    { id: '2', nombre: 'Proyectores', descripcion: 'Proyectores para presentaciones y entretenimiento.', imagen: 'proyectores.jpg' },
    { id: '3', nombre: 'Baterías', descripcion: 'Baterías para prolongar la vida de tus dispositivos.', imagen: 'baterias.jpg' },
    { id: '4', nombre: 'Accesorios', descripcion: 'Accesorios para dispositivos móviles.', imagen: 'public/accesorios.jpg' }
  ];
}