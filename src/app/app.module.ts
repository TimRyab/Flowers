import { NgModule } from '@angular/core';
import { FormsModule } from "@angular/forms"
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router';
import {HttpClientModule} from '@angular/common/http'

import { AppComponent } from './app.component';
import { CardComponent } from "./components/Card/card.component";
import {InpComponent} from "./components/Word/word.component";
import {HomePage} from "./pages/Home/home.component";
import {HeaderComponent} from "./components/Header/header.component";
import {PlantPage} from "./pages/Plant/plant.component";
import {CategoriesPage} from "./pages/Categories/categories.component";
import {CategoryPage} from "./pages/Category/category.component";
import {AddPlant} from "./pages/AddPlant/addplant.component";


const routers: Routes = [
  {path: "", component: HomePage},
  {path: "category", component: CategoriesPage},
  {path: "category/:category", component: CategoryPage},
  {path: "category/:id", component: PlantPage},
  { path: "plant/:id", component: PlantPage },
  {path: "addplant", component: AddPlant},

]


@NgModule({
  declarations: [
    AppComponent,
    CardComponent,
    InpComponent,
    HomePage,
    HeaderComponent,
    PlantPage,
    AddPlant,
    CategoryPage,
    CategoriesPage

  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    RouterModule.forRoot(routers)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
