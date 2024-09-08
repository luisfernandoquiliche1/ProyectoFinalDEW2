import { Routes } from '@angular/router';
import { InicioComponent } from './pages/inicio/inicio.component';
import { PromocionesComponent } from './pages/promociones/promociones.component';
import { LoginComponent } from './pages/login/login.component';
import { ContactanosComponent } from './pages/contactanos/contactanos.component';
import { TermsAndCondComponent } from './pages/terms-and-cond/terms-and-cond.component';
import {AppComponent} from "./app.component";
import {loginGuard} from "./guards/login.guard";

export const routes: Routes = [
  {
    path: '',
    component: AppComponent,
    canActivate: [loginGuard],
    children: [
      {path: "inicio", component:InicioComponent},
      {path: "promociones", component: PromocionesComponent},
      {path: "contactanos", component: ContactanosComponent},
      {path: "t&c", component:TermsAndCondComponent}
    ]
  },
  {
    path: 'login',
    component: LoginComponent
  },
];
