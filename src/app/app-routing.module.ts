import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FormpageComponent } from './pages/formpage/formpage.component';
import { HomepageComponent } from './pages/homepage/homepage.component';
import { ProductspageComponent } from './pages/productspage/productspage.component';

const routes: Routes = [

{path: '', component: HomepageComponent},
{path: 'products', component: ProductspageComponent},
{path: 'formulary', component: FormpageComponent},
{path: 'formulary/:id', component: FormpageComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
