import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-terms-and-cond',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './terms-and-cond.component.html',
  styleUrl: './terms-and-cond.component.css'
})
export class TermsAndCondComponent {
  activeContent: string = 'terms';
  nombreOpcion : string = '';

  showContent(content: string) {
    this.activeContent = content;
  }

  caseContent(content: string){
    switch(content){
      case "terms":
        return "Terminos y Condiciones";
      case "products":
        return "Productos y Precios";
      case "delivery":
        return "Políticas de Entrega";
      default:
        return "";
    }
  }
}
