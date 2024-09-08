import {Component, inject} from '@angular/core';
import {Router, RouterLink, RouterOutlet} from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, RouterLink],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'FrontEnd';
  #router = inject(Router);

  cerrarSesion() {
    document.cookie = 'isLogin=';
    this.#router.navigate(['/login']);
  }
}
