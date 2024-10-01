import { Routes } from '@angular/router';
import { InicioComponent } from './pages/inicio/inicio.component';
import { PromocionesComponent } from './pages/promociones/promociones.component';
import { LoginComponent } from './pages/login/login.component';
import { ContactanosComponent } from './pages/contactanos/contactanos.component';
import { TermsAndCondComponent } from './pages/terms-and-cond/terms-and-cond.component';
import { CategoriasComponent } from './pages/categorias/categorias.component';
import { ProductoComponent } from './pages/producto/producto.component';
import { CategoriaProductosComponent } from './pages/categoria-productos/categoria-productos.component';

export const routes: Routes = [
    {path: "", redirectTo: 'inicio', pathMatch:'full'},
    {path: "inicio", component:InicioComponent},
    {path: "promociones", component: PromocionesComponent},
    {path: "login", component: LoginComponent},
    {path: "contactanos", component: ContactanosComponent},
    {path: "categorias", component: CategoriasComponent},
    {path: "product/:id", component:ProductoComponent},
    {path: "t&c", component:TermsAndCondComponent},
    {path: 'categorias/:id', component: CategoriaProductosComponent}
];
