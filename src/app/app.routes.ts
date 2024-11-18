import { Routes } from '@angular/router';
import { ProductosComponent } from './paginas/productos/productos.component';
import { ContactoComponent } from './paginas/contacto/contacto.component';

export const routes: Routes = [
    {path: 'productos' , component: ProductosComponent},
    {path: 'contacto' , component: ContactoComponent}
];
